import React from 'react';
import { StyleWrapperEdit, StyleWrapperView } from '../StyleWrapper';
import { Portal } from 'react-portal';
import themeSVG from '@plone/volto/icons/theme.svg';
import { Icon } from '@plone/volto/components';
import config from '@plone/volto/registry';

// For blocks, store the style data in data.styles, then
// adapt the data.styles.[align,size,...] info to default data.align, data.size, etc.

const BlockStyleWrapperEdit = (props) => {
  const { selected, block, data = {}, onChangeBlock, manage } = props;
  const [isVisible, setIsVisible] = React.useState(false);
  const visible =
    selected && (config.settings.layoutOnlyBlockStyles ? manage : true);

  const tabsNode =
    __CLIENT__ &&
    document.querySelector(
      '#sidebar > .sidebar-container > .tabs-wrapper > .formtabs'
    );

  const triggerButton = (
    <Portal node={tabsNode}>
      <div className="open-styles-button">
        <button
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            setIsVisible(true);
          }}
          title={`${
            props.type ? 'Style palette for ' + props.type : 'Style pallete'
          }`}
        >
          <Icon name={themeSVG} size="18px" />
        </button>
      </div>
    </Portal>
  );

  return (
    <>
      {visible ? triggerButton : ''}
      <StyleWrapperEdit
        {...props}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        data={{
          ...data?.styles,
          ...(data.align ? { align: data.align } : {}),
          ...(data.size ? { size: data.size } : {}),
        }}
        blockData={data}
        choices={[]}
        onChangeValue={(id, value) =>
          onChangeBlock(block, {
            ...data,
            ...(id === 'align' ? { align: value } : {}),
            ...(id === 'size' ? { size: value } : {}),
            ...(id === 'customId' ? { id: value } : {}),
            styles: {
              ...data?.styles,
              [id]: value,
            },
          })
        }
      ></StyleWrapperEdit>
      <StyleWrapperView mode="edit" {...props} styleData={data.styles || {}} />
    </>
  );
};

export default BlockStyleWrapperEdit;

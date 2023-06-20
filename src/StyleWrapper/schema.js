import config from '@plone/volto/registry';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Styles: {
    id: 'Styles',
    defaultMessage: 'Styles',
  },
  Default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  PresetStyles: {
    id: 'Preset styles',
    defaultMessage: 'Preset styles',
  },
  Standard: {
    id: 'Standard',
    defaultMessage: 'Standard',
  },
  Decorations: {
    id: 'Decorations',
    defaultMessage: 'Decorations',
  },
  Layout: {
    id: 'Layout',
    defaultMessage: 'Layout',
  },
  Advanced: {
    id: 'Advanced',
    defaultMessage: 'Advanced',
  },
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  APredefinedThemeApplicableJustToThisBlock: {
    id: 'A predefined theme, applicable just to this block',
    defaultMessage: 'A predefined theme, applicable just to this block',
  },
  Style: {
    id: 'Style',
    defaultMessage: 'Style',
  },
  TextAlign: {
    id: 'Text align',
    defaultMessage: 'Text align',
  },
  Align: {
    id: 'Align',
    defaultMessage: 'Align',
  },
  Stretch: {
    id: 'Stretch',
    defaultMessage: 'Stretch',
  },
  FontSize: {
    id: 'Font size',
    defaultMessage: 'Font size',
  },
  RelativeToNormalSizeOfTextInTheBlock: {
    id: 'Relative to normal size of text in the block',
    defaultMessage: 'Relative to normal size of text in the block',
  },
  FontWeight: {
    id: 'Font weight',
    defaultMessage: 'Font weight',
  },
  WeightOfFont: {
    id: 'The weight (or boldness) of the font',
    defaultMessage: 'The weight (or boldness) of the font',
  },
  Light: {
    id: 'Light',
    defaultMessage: 'Light',
  },
  Regular: {
    id: 'Regular',
    defaultMessage: 'Regular',
  },
  Medium: {
    id: 'Medium',
    defaultMessage: 'Medium',
  },
  SemiBold: {
    id: 'SemiBold',
    defaultMessage: 'SemiBold',
  },
  Bold: {
    id: 'Bold',
    defaultMessage: 'Bold',
  },
  Margin: {
    id: 'Margin',
    defaultMessage: 'Margin',
  },
  Padding: {
    id: 'Padding',
    defaultMessage: 'Padding',
  },
  BoxSize: {
    id: 'Box size',
    defaultMessage: 'Box size',
  },
  ElementHeight: {
    id: 'Element height',
    defaultMessage: 'Element height',
  },
  ElementHeightExpressedAsCSSDimension: {
    id: 'Element height, expressed as CSS dimension',
    defaultMessage: 'Element height, expressed as CSS dimension',
  },
  ScreenHeight: {
    id: 'Screen height',
    defaultMessage: 'Screen height',
  },
  MaximizeBlockToViewportHeight: {
    id: 'Maximize block to viewport height',
    defaultMessage: 'Maximize block to viewport height',
  },
  BackgroundImage: {
    id: 'Background image',
    defaultMessage: 'Background image',
  },
  BackgroundColor: {
    id: 'Background color',
    defaultMessage: 'Background color',
  },
  TextColor: {
    id: 'Text color',
    defaultMessage: 'Text color',
  },
  CustomCSSClass: {
    id: 'Custom CSS Class',
    defaultMessage: 'Custom CSS Class',
  },
  ACustomCSSclassApplicableJustToThisBlock: {
    id: 'A custom CSS class, applicable just to this block',
    defaultMessage: 'A custom CSS class, applicable just to this block',
  },
  CustomId: {
    id: 'Custom Id',
    defaultMessage: 'Custom Id',
  },
  ACustomIdApplicableJustToThisBlock: {
    id: 'A custom id, applicable just to this block',
    defaultMessage: 'A custom id, applicable just to this block',
  },
  DropCap: {
    id: 'Drop cap',
    defaultMessage: 'Drop cap',
  },
  FirstLetterIsStyledAsADropCop: {
    id: 'First letter is styled as a drop cap',
    defaultMessage: 'First letter is styled as a drop cap',
  },
  Hidden: {
    id: 'Hidden',
    defaultMessage: 'Hidden',
  },
  HideThisBlock: {
    id: 'Hide this block',
    defaultMessage: 'Hide this block',
  },
  ShadowDepth: {
    id: 'Shadow depth',
    defaultMessage: 'Shadow depth',
  },
  ShadowColor: {
    id: 'Shadow color',
    defaultMessage: 'Shadow color',
  },
  RoundedCorner: {
    id: 'Rounded Corner',
    defaultMessage: 'Rounded Corner',
  },
  ClearFloats: {
    id: 'Clear floats',
    defaultMessage: 'Clear floats',
  },
  PushesSelectedBlockUnderFloatedContent: {
    id: 'Pushes selected block under floated content',
    defaultMessage: 'Pushes selected block under floated content',
  },
  None: {
    id: 'None',
    defaultMessage: 'None',
  },
  Left: {
    id: 'Left',
    defaultMessage: 'Left',
  },
  Right: {
    id: 'Right',
    defaultMessage: 'Right',
  },
  Both: {
    id: 'Both',
    defaultMessage: 'Both',
  },
});

export const StyleSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.Styles),
    fieldsets: [
      {
        id: 'default',
        title: props.intl.formatMessage(messages.Default),
        fields: [],
      },
      {
        id: 'presets',
        title: props.intl.formatMessage(messages.PresetStyles),
        fields: ['style_name'],
      },
      {
        id: 'standard',
        title: props.intl.formatMessage(messages.Standard),
        fields: [
          'textAlign',
          'fontSize',
          'fontWeight',
          'align',
          'stretch',
          'size',
          'isDropCap',
        ],
      },
      {
        id: 'decorations',
        title: props.intl.formatMessage(messages.Decorations),
        fields: [
          'backgroundImage',
          'backgroundColor',
          'textColor',
          'borderRadius',
          'shadowDepth',
          'shadowColor',
        ],
      },
      {
        id: 'layout',
        title: props.intl.formatMessage(messages.Layout),
        fields: ['margin', 'padding', 'size', 'align', 'stretch'], // todo: width, conflicts with size
      },
      {
        id: 'advanced',
        title: props.intl.formatMessage(messages.Advanced),
        fields: [
          'theme',
          'hidden',
          'height',
          'isScreenHeight',
          'customClass',
          'customId',
          'clear',
        ],
      },
    ],
    properties: {
      theme: {
        title: props.intl.formatMessage(messages.Theme),
        description: props.intl.formatMessage(
          messages.APredefinedThemeApplicableJustToThisBlock
        ),
        widget: 'theme_picker',
        colors: [
          ...(config.settings && config.settings.themeColors
            ? config.settings.themeColors.map(({ value, title }) => ({
                name: value,
                label: title,
              }))
            : []),
        ],
      },
      style_name: {
        title: props.intl.formatMessage(messages.Style),
        widget: 'style_select',
      },
      textAlign: {
        title: props.intl.formatMessage(messages.TextAlign),
        widget: 'style_text_align',
      },
      align: {
        title: props.intl.formatMessage(messages.Align),
        widget: 'style_align',
      },
      stretch: {
        title: props.intl.formatMessage(messages.Stretch),
        widget: 'style_stretch',
      },
      fontSize: {
        title: props.intl.formatMessage(messages.FontSize),
        description: props.intl.formatMessage(
          messages.RelativeToNormalSizeOfTextInTheBlock
        ),
        choices: [
          ['xx-small', 'xx-small'],
          ['x-small', 'x-small'],
          ['small', 'small'],
          ['medium', 'medium'],
          ['large', 'large'],
          ['x-large', 'x-large'],
          ['xx-large', 'xx-large'],
          ['xxx-large', 'xxx-large'],
        ],
      },
      fontWeight: {
        title: props.intl.formatMessage(messages.FontWeight),
        description: props.intl.formatMessage(messages.WeightOfFont),
        choices: [
          ['300', props.intl.formatMessage(messages.Light)],
          ['400', props.intl.formatMessage(messages.Regular)],
          ['500', props.intl.formatMessage(messages.Medium)],
          ['600', props.intl.formatMessage(messages.SemiBold)],
          ['700', props.intl.formatMessage(messages.Bold)],
        ],
      },
      margin: {
        title: props.intl.formatMessage(messages.Margin),
        widget: 'quad_size',
      },
      padding: {
        title: props.intl.formatMessage(messages.Padding),
        widget: 'quad_size',
      },
      size: {
        title: props.intl.formatMessage(messages.BoxSize),
        widget: 'style_size',
      },
      height: {
        title: props.intl.formatMessage(messages.ElementHeight),
        widget: 'text',
        description: props.intl.formatMessage(
          messages.ElementHeightExpressedAsCSSDimension
        ),
      },
      isScreenHeight: {
        title: props.intl.formatMessage(messages.ScreenHeight),
        description: props.intl.formatMessage(
          messages.MaximizeBlockToViewportHeight
        ),
        type: 'boolean',
      },
      backgroundImage: {
        title: props.intl.formatMessage(messages.BackgroundImage),
        widget: 'url',
      },
      backgroundColor: {
        title: props.intl.formatMessage(messages.BackgroundColor),
        type: 'color',
        widget: 'style_simple_color',
        available_colors: config.settings.available_colors,
      },
      textColor: {
        title: props.intl.formatMessage(messages.TextColor),
        type: 'color',
        widget: 'style_simple_color',
        available_colors: config.settings.available_colors,
      },
      customClass: {
        title: props.intl.formatMessage(messages.CustomCSSClass),
        description: props.intl.formatMessage(
          messages.ACustomCSSclassApplicableJustToThisBlock
        ),
      },
      customId: {
        title: props.intl.formatMessage(messages.CustomId),
        description: props.intl.formatMessage(
          messages.ACustomIdApplicableJustToThisBlock
        ),
      },
      isDropCap: {
        title: props.intl.formatMessage(messages.DropCap),
        description: props.intl.formatMessage(
          messages.FirstLetterIsStyledAsADropCop
        ),
        type: 'boolean',
      },
      hidden: {
        title: props.intl.formatMessage(messages.Hidden),
        description: props.intl.formatMessage(messages.HideThisBlock),
        type: 'boolean',
      },
      shadowDepth: {
        widget: 'slider',
        title: props.intl.formatMessage(messages.ShadowDepth),
        settings: {
          min: 0,
          max: 24,
          step: 1,
          start: 0,
        },
      },
      shadowColor: {
        title: props.intl.formatMessage(messages.ShadowColor),
        type: 'color',
        widget: 'style_simple_color',
        available_colors: config.settings.available_colors,
      },
      borderRadius: {
        widget: 'slider',
        title: props.intl.formatMessage(messages.RoundedCorner),
        settings: {
          min: 0,
          max: 24,
          step: 1,
          start: 0,
        },
      },
      clear: {
        title: props.intl.formatMessage(messages.ClearFloats),
        description: props.intl.formatMessage(
          messages.PushesSelectedBlockUnderFloatedContent
        ),
        choices: [
          [null, props.intl.formatMessage(messages.None)],
          ['left', props.intl.formatMessage(messages.Left)],
          ['right', props.intl.formatMessage(messages.Right)],
          ['both', props.intl.formatMessage(messages.Both)],
        ],
      },
    },
    required: [],
  };
};

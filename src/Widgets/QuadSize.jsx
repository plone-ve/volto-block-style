import React from 'react';
import { Field, FormFieldWrapper } from '@plone/volto/components';
import ErrorBoundary from '../ErrorBoundary';
import { Grid } from 'semantic-ui-react';
import { Slider } from './Slider';

const fields = {
  unitField: {
    title: 'Unit',
    columns: 2,
    placeholder: 'Unit',
    defaultValue: 'px',
    choices: [
      ['px', 'px'],
      ['%', 'percentage'],
      ['em', 'em'],
      ['rem', 'rem'],
    ],
  },
};

const getMax = (unit) => {
  switch (unit) {
    case '%':
      return 100;
    case 'px':
      return 100;
    case 'em':
      return 24;
    case 'rem':
      return 24;
    default:
      return 10;
  }
};

const QuadSizeWidget = (props) => {
  const {
    value = {},
    id,
    onChange,
    sliderSettings = {
      max: 12,
      min: 0,
      step: 1,
      start: 0,
    },
  } = props;
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    unit = 'px',
    unlock = false,
  } = value;
  const settings = {
    ...sliderSettings,
    max: getMax(unit),
  };

  return (
    <ErrorBoundary>
      <FormFieldWrapper {...props}>
        <Field
          columns={2}
          id={`${id}-unit`}
          {...fields.unitField}
          onChange={(fid, val) => onChange(id, { ...value, unit: val })}
          value={value.unit || 'px'}
        />

        {unlock ? (
          <Grid columns={2}>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={6}>
              <Slider
                settings={{
                  onChange: (val) => onChange(id, { ...value, top: val }),
                  ...settings,
                }}
                value={top}
                extra={<strong>{top}</strong>}
              />
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column>
              <Slider
                settings={{
                  onChange: (val) => onChange(id, { ...value, left: val }),
                  ...settings,
                }}
                value={left}
                extra={<strong>{left}</strong>}
              />
            </Grid.Column>
            <Grid.Column>
              <Slider
                settings={{
                  onChange: (val) => onChange(id, { ...value, right: val }),
                  ...settings,
                }}
                value={right}
                extra={<strong>{right}</strong>}
              />
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={6}>
              <Slider
                settings={{
                  onChange: (val) => onChange(id, { ...value, bottom: val }),
                  ...settings,
                }}
                extra={<strong>{bottom}</strong>}
                value={bottom}
              />
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </Grid>
        ) : (
          <Field
            id={`${id}-slider`}
            settings={settings}
            onChange={(fid, val) => {
              onChange(id, {
                ...value,
                top: val,
                left: val,
                bottom: val,
                right: val,
              });
            }}
            value={top}
            title="Size"
            widget="slider"
            columns={2}
          />
        )}

        <Field
          id={`${id}-lockSize`}
          onChange={(fid, val) => onChange(id, { ...value, unlock: val })}
          value={unlock}
          title="Customize"
          type="boolean"
          columns={1}
        />
      </FormFieldWrapper>
    </ErrorBoundary>
  );
};

export default QuadSizeWidget;

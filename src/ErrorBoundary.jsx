import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <strong>
          <FormattedMessage
            id="Error in component"
            defaultMessage="Error in component"
          />
        </strong>
      );
    }

    return this.props.children;
  }
}

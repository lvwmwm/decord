// Module ID: 18879
// Function ID: 18880
// Name: entry_data/ErrorBoundary
// Dependencies: [19, 2]

// Module 18879 (entry_data/ErrorBoundary)
import reactAll from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PureComponent = reactAll.PureComponent;
class ErrorBoundary extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { error: null };
    return applyArgumentsResult;
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch() {

  }
  render() {
    let children;
    const self = this;
    if (null != this.state.error) {
      children = self.props.fallback;
    } else {
      children = self.props.children;
    }
    return children;
  }
}
const prototype = ErrorBoundary.prototype;
const result = size.fileFinishedImporting("modules/content_inventory/entry_data/ErrorBoundary.tsx");

export { ErrorBoundary };

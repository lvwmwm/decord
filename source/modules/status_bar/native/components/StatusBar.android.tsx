// Module ID: 6676
// Function ID: 6677
// Name: componentDidMount
// Dependencies: [17, 6677, 2]

// Module 6676 (componentDidMount)
import { StatusBar } from "get ActivityIndicator";

class StatusBarAndroid extends StatusBar {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
}
const prototype = StatusBarAndroid.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._stackEntry = importDefault(6677).pushStackEntry(this.props);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  this._stackEntry = importDefault(6677).replaceStackEntry(this._stackEntry, this.props);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  importDefault(6677).popStackEntry(this._stackEntry);
  this._stackEntry = null;
};
prototype["render"] = function render() {
  return null;
};
const result = require("set").fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default StatusBarAndroid;

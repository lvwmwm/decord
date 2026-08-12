// Module ID: 7789
// Function ID: 7790
// Name: componentDidMount
// Dependencies: [17, 7790, 2]

// Module 7789 (componentDidMount)
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
  this._stackEntry = importDefault(7790).pushStackEntry(this.props);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  this._stackEntry = importDefault(7790).replaceStackEntry(this._stackEntry, this.props);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  importDefault(7790).popStackEntry(this._stackEntry);
  this._stackEntry = null;
};
prototype["render"] = function render() {
  return null;
};
const result = require("set").fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default StatusBarAndroid;

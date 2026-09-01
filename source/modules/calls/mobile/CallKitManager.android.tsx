// Module ID: 14096
// Function ID: 14097
// Name: _initialize
// Dependencies: [4662, 2]

// Module 14096 (_initialize)
import initializeDefault from "initialize" /* 4662 */;

initializeDefault;
class CallKitLifecycleManager extends tmp2 {
}
const prototype = CallKitLifecycleManager.prototype;
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {

};
const callKitLifecycleManager = new CallKitLifecycleManager();
const result = require("set").fileFinishedImporting("modules/calls/mobile/CallKitManager.android.tsx");

export default callKitLifecycleManager;

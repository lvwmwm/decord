// Module ID: 13983
// Function ID: 13984
// Name: _initialize
// Dependencies: [4626, 2]

// Module 13983 (_initialize)
import initializeDefault from "initialize" /* 4626 */;

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

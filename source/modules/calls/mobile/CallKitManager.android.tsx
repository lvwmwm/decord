// Module ID: 14367
// Function ID: 14368
// Name: _initialize
// Dependencies: [4669, 2]

// Module 14367 (_initialize)
import initializeDefault from "initialize" /* 4669 */;

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

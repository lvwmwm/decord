// Module ID: 13910
// Function ID: 13911
// Name: _initialize
// Dependencies: [4562, 2]

// Module 13910 (_initialize)
import initializeDefault from "initialize" /* 4562 */;

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

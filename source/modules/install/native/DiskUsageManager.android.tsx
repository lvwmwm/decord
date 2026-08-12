// Module ID: 16553
// Function ID: 16554
// Name: _initialize
// Dependencies: [5300, 2]

// Module 16553 (_initialize)
import "initialize";

class DiskUsageManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = {
      APP_STATE_UPDATE() {

          }
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = DiskUsageManager.prototype;
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {

};
const diskUsageManager = new DiskUsageManager();
const result = require("set").fileFinishedImporting("modules/install/native/DiskUsageManager.android.tsx");

export default diskUsageManager;

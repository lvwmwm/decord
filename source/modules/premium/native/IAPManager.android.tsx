// Module ID: 16965
// Function ID: 16966
// Name: prototype
// Dependencies: [5486, 2]

// Module 16965 (prototype)
import initializeDefault from "initialize" /* 5486 */;

initializeDefault;
let prototype = function IAPManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {

    },
    APP_STATE_UPDATE() {

    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default prototype;

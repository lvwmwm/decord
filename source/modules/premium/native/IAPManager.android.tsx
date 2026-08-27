// Module ID: 16878
// Function ID: 16879
// Name: prototype
// Dependencies: [5438, 2]

// Module 16878 (prototype)
import initializeDefault from "initialize" /* 5438 */;

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

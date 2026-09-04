// Module ID: 17307
// Function ID: 17308
// Name: prototype
// Dependencies: [7058, 2]

// Module 17307 (prototype)
import initializeDefault from "initialize" /* 7058 */;

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

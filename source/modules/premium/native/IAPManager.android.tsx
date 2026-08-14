// Module ID: 16549
// Function ID: 16550
// Name: prototype
// Dependencies: [5322, 2]

// Module 16549 (prototype)
import "initialize";

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

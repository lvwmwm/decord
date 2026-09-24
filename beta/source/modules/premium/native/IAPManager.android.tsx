// Module ID: 17807
// Function ID: 17808
// Name: IAPManager
// Dependencies: [7397, 2]

// Module 17807 (IAPManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

const prototype = function IAPManager() {
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
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default prototype1;

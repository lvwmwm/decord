// Module ID: 18460
// Function ID: 18461
// Name: IAPManager
// Dependencies: [7032, 2]

// Module 18460 (IAPManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7032 */;
import size from "module_2" /* 2 */;

class IAPManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      POST_CONNECTION_OPEN() {

      },
      APP_STATE_UPDATE() {

      }
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const iAPManager = new IAPManager();
const result = size.fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default iAPManager;

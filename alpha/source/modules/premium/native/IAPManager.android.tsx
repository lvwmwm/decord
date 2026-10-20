// Module ID: 18583
// Function ID: 18584
// Name: IAPManager
// Dependencies: [7165, 2]

// Module 18583 (IAPManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7165 */;
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

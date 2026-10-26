// Module ID: 18830
// Function ID: 18831
// Name: IAPManager
// Dependencies: [7214, 2]

// Module 18830 (IAPManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
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

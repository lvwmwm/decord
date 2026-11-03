// Module ID: 19737
// Function ID: 19738
// Name: ParentalConsentManager
// Dependencies: [1072, 7407, 8279, 2]

// Module 19737 (ParentalConsentManager)
import Constants from "Constants" /* 1072 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8279 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
class ParentalConsentManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
        const obj = AppStoreAgeSignalReport;
        return obj.beginAppStoreAgeSignalReport();
      },
      APP_STATE_UPDATE(arg0) {
        return require.handleAppStateUpdate(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleAppStateUpdate(state) {
    if (state.state === AppStates.ACTIVE) {
      const obj = AppStoreAgeSignalReport;
      const result = obj.resumeAppStoreAgeSignalReport();
    }
  }
}
const prototype = ParentalConsentManager.prototype;
const parentalConsentManager = new ParentalConsentManager();
let result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default parentalConsentManager;

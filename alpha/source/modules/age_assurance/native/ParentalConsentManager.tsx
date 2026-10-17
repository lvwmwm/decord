// Module ID: 18608
// Function ID: 18609
// Name: ParentalConsentManager
// Dependencies: [1087, 7085, 18609, 2]

// Module 18608 (ParentalConsentManager)
import Constants from "Constants" /* 1087 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 18609 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
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

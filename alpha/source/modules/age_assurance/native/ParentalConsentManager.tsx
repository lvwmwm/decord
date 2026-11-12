// Module ID: 20207
// Function ID: 20208
// Name: ParentalConsentManager
// Dependencies: [1072, 7816, 20208, 8321, 2]

// Module 20207 (ParentalConsentManager)
import Constants from "Constants" /* 1072 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8321 */;
import AppStoreConsentReinstatement from "AppStoreConsentReinstatement" /* 20208 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
class ParentalConsentManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
        const obj = AppStoreConsentReinstatement;
        const result = obj.isAppStoreConsentReinstatementEnabledForSession();
        const obj2 = AppStoreAgeSignalReport;
        const result1 = obj2.beginAppStoreAgeSignalReport(result);
        const obj3 = AppStoreConsentReinstatement;
        const result2 = obj3.beginAppStoreConsentReinstatement();
      },
      POST_CONNECTION_OPEN() {
        const obj = AppStoreAgeSignalReport;
        return obj.startPendingAppStoreAgeSignalReport();
      },
      APP_STATE_UPDATE(arg0) {
        return require.handleAppStateUpdate(arg0);
      },
      LOGOUT() {
        const obj = AppStoreConsentReinstatement;
        return obj.cancelAppStoreConsentReinstatement();
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

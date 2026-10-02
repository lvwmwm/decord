// Module ID: 17230
// Function ID: 17231
// Name: ParentalConsentManager
// Dependencies: [6540, 17231, 2]

// Module 17230 (ParentalConsentManager)
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 17231 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

class ParentalConsentManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
        const obj = AppStoreAgeSignalReport;
        return obj.beginAppStoreAgeSignalReport();
      }
    };
    return applyArgumentsResult;
  }
}
const parentalConsentManager = new ParentalConsentManager();
const result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default parentalConsentManager;

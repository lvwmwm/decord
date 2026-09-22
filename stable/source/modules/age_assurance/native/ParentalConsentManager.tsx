// Module ID: 17574
// Function ID: 17575
// Name: ParentalConsentManager
// Dependencies: [7221, 17575, 2]

// Module 17574 (ParentalConsentManager)
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 17575 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
const prototype = function ParentalConsentManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    CONNECTION_OPEN_SUPPLEMENTAL() {
      return AppStoreAgeSignalReport.beginAppStoreAgeSignalReport();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default prototype1;

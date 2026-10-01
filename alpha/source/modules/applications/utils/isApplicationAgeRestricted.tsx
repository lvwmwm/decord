// Module ID: 8901
// Function ID: 8902
// Name: isApplicationAgeRestricted
// Dependencies: [5072, 8902, 5609, 2]
// Exports: default

// Module 8901 (isApplicationAgeRestricted)
import utils from "utils" /* 5609 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 8902 */;
import ApplicationStore from "ApplicationStore" /* 5072 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    const application = ApplicationStore.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return utils.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = AgeRestrictedApplicationCommandsExperimentDefault;
};

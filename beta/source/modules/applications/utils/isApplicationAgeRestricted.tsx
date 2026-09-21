// Module ID: 9516
// Function ID: 9517
// Name: isApplicationAgeRestricted
// Dependencies: [4985, 9517, 5330, 2]
// Exports: default

// Module 9516 (isApplicationAgeRestricted)
import utils from "utils" /* 5330 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9517 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;

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

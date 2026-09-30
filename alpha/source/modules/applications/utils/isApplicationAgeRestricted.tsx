// Module ID: 8908
// Function ID: 8909
// Name: isApplicationAgeRestricted
// Dependencies: [5093, 8909, 5621, 2]
// Exports: default

// Module 8908 (isApplicationAgeRestricted)
import utils from "utils" /* 5621 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 8909 */;
import ApplicationStore from "ApplicationStore" /* 5093 */;

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

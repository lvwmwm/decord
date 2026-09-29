// Module ID: 9552
// Function ID: 9553
// Name: isApplicationAgeRestricted
// Dependencies: [5015, 9553, 5360, 2]
// Exports: default

// Module 9552 (isApplicationAgeRestricted)
import utils from "utils" /* 5360 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9553 */;
import ApplicationStore from "ApplicationStore" /* 5015 */;

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

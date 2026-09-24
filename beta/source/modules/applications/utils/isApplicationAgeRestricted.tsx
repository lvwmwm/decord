// Module ID: 9548
// Function ID: 9549
// Name: isApplicationAgeRestricted
// Dependencies: [5017, 9549, 5362, 2]
// Exports: default

// Module 9548 (isApplicationAgeRestricted)
import utils from "utils" /* 5362 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9549 */;
import ApplicationStore from "ApplicationStore" /* 5017 */;

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

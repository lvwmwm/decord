// Module ID: 8874
// Function ID: 8875
// Name: isApplicationAgeRestricted
// Dependencies: [5063, 8875, 5591, 2]
// Exports: default

// Module 8874 (isApplicationAgeRestricted)
import utils from "utils" /* 5591 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 8875 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;

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

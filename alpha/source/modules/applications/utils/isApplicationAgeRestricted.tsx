// Module ID: 8709
// Function ID: 8710
// Name: isApplicationAgeRestricted
// Dependencies: [5063, 8710, 5424, 2]
// Exports: default

// Module 8709 (isApplicationAgeRestricted)
import utils from "utils" /* 5424 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 8710 */;
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

// Module ID: 9761
// Function ID: 9762
// Name: isApplicationAgeRestricted
// Dependencies: [5436, 9762, 6047, 2]
// Exports: default

// Module 9761 (isApplicationAgeRestricted)
import utils from "utils" /* 6047 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9762 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  const obj = AgeRestrictedApplicationCommandsExperimentDefault;
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    const application = ApplicationStore.getApplication(arg0);
    let prop;
    const isAgeRestrictedContentClassification = utils.isAgeRestrictedContentClassification;
    utils;
    if (application != null) {
      prop = application.contentClassification;
    }
    return isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
};

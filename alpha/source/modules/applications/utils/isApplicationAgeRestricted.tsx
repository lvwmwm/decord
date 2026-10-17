// Module ID: 10109
// Function ID: 10110
// Name: isApplicationAgeRestricted
// Dependencies: [5540, 10110, 6319, 2]
// Exports: default

// Module 10109 (isApplicationAgeRestricted)
import utils from "utils" /* 6319 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 10110 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
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

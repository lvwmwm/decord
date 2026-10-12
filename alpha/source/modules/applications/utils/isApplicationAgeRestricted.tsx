// Module ID: 9810
// Function ID: 9811
// Name: isApplicationAgeRestricted
// Dependencies: [5440, 9811, 6042, 2]
// Exports: default

// Module 9810 (isApplicationAgeRestricted)
import utils from "utils" /* 6042 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9811 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
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

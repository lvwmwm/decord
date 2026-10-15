// Module ID: 10028
// Function ID: 10029
// Name: isApplicationAgeRestricted
// Dependencies: [5500, 10029, 6258, 2]
// Exports: default

// Module 10028 (isApplicationAgeRestricted)
import utils from "utils" /* 6258 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 10029 */;
import ApplicationStore from "ApplicationStore" /* 5500 */;
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

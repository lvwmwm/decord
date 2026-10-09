// Module ID: 9780
// Function ID: 9781
// Name: isApplicationAgeRestricted
// Dependencies: [5437, 9781, 6049, 2]
// Exports: default

// Module 9780 (isApplicationAgeRestricted)
import utils from "utils" /* 6049 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9781 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
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

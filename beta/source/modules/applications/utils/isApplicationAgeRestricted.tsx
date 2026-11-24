// Module ID: 10518
// Function ID: 10519
// Name: isApplicationAgeRestricted
// Dependencies: [2164, 5542, 2]
// Exports: default

// Module 10518 (isApplicationAgeRestricted)
import utils from "utils" /* 5542 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  const application = ApplicationStore.getApplication(arg0);
  let prop;
  const isAgeRestrictedContentClassification = utils.isAgeRestrictedContentClassification;
  utils;
  if (application != null) {
    prop = application.contentClassification;
  }
  return isAgeRestrictedContentClassification(prop);
};

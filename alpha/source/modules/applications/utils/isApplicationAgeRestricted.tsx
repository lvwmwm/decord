// Module ID: 10456
// Function ID: 10457
// Name: isApplicationAgeRestricted
// Dependencies: [2165, 5421, 2]
// Exports: default

// Module 10456 (isApplicationAgeRestricted)
import utils from "utils" /* 5421 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
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

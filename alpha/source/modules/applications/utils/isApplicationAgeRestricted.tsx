// Module ID: 11421
// Function ID: 11422
// Name: isApplicationAgeRestricted
// Dependencies: [2165, 5962, 2]
// Exports: default

// Module 11421 (isApplicationAgeRestricted)
import utils from "utils" /* 5962 */;
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

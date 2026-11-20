// Module ID: 10398
// Function ID: 10399
// Name: isApplicationAgeRestricted
// Dependencies: [2163, 5423, 2]
// Exports: default

// Module 10398 (isApplicationAgeRestricted)
import utils from "utils" /* 5423 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
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

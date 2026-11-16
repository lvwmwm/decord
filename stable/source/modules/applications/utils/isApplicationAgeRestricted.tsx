// Module ID: 10469
// Function ID: 10470
// Name: isApplicationAgeRestricted
// Dependencies: [2162, 5816, 2]
// Exports: default

// Module 10469 (isApplicationAgeRestricted)
import utils from "utils" /* 5816 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
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

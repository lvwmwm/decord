// Module ID: 10454
// Function ID: 10455
// Name: isApplicationAgeRestricted
// Dependencies: [2162, 5814, 2]
// Exports: default

// Module 10454 (isApplicationAgeRestricted)
import utils from "utils" /* 5814 */;
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

// Module ID: 10176
// Function ID: 10177
// Name: isApplicationAgeRestricted
// Dependencies: [2045, 5598, 2]
// Exports: default

// Module 10176 (isApplicationAgeRestricted)
import utils from "utils" /* 5598 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
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

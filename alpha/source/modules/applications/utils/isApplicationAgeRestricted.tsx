// Module ID: 10240
// Function ID: 10241
// Name: isApplicationAgeRestricted
// Dependencies: [2042, 5648, 2]
// Exports: default

// Module 10240 (isApplicationAgeRestricted)
import utils from "utils" /* 5648 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
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

// Module ID: 10502
// Function ID: 10503
// Name: isApplicationAgeRestricted
// Dependencies: [2167, 5796, 2]
// Exports: default

// Module 10502 (isApplicationAgeRestricted)
import utils from "utils" /* 5796 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;
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

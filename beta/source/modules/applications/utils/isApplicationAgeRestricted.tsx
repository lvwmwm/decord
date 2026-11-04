// Module ID: 10318
// Function ID: 10319
// Name: isApplicationAgeRestricted
// Dependencies: [2038, 5660, 2]
// Exports: default

// Module 10318 (isApplicationAgeRestricted)
import utils from "utils" /* 5660 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
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

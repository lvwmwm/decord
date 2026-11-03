// Module ID: 10448
// Function ID: 10449
// Name: isApplicationAgeRestricted
// Dependencies: [2167, 5780, 2]
// Exports: default

// Module 10448 (isApplicationAgeRestricted)
import utils from "utils" /* 5780 */;
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

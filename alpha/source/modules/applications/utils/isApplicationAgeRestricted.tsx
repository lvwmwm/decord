// Module ID: 10085
// Function ID: 10086
// Name: isApplicationAgeRestricted
// Dependencies: [2165, 5672, 2]
// Exports: default

// Module 10085 (isApplicationAgeRestricted)
import utils from "utils" /* 5672 */;
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

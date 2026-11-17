// Module ID: 11196
// Function ID: 11197
// Name: isApplicationAgeRestricted
// Dependencies: [2165, 5956, 2]
// Exports: default

// Module 11196 (isApplicationAgeRestricted)
import utils from "utils" /* 5956 */;
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

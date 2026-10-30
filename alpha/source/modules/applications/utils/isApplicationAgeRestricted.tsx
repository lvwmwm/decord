// Module ID: 10298
// Function ID: 10299
// Name: isApplicationAgeRestricted
// Dependencies: [2040, 5655, 2]
// Exports: default

// Module 10298 (isApplicationAgeRestricted)
import utils from "utils" /* 5655 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
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

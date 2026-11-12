// Module ID: 11354
// Function ID: 11355
// Name: isApplicationAgeRestricted
// Dependencies: [2162, 5899, 2]
// Exports: default

// Module 11354 (isApplicationAgeRestricted)
import utils from "utils" /* 5899 */;
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

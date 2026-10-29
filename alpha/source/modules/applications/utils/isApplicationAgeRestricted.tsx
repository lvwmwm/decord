// Module ID: 10273
// Function ID: 10274
// Name: isApplicationAgeRestricted
// Dependencies: [2043, 5649, 2]
// Exports: default

// Module 10273 (isApplicationAgeRestricted)
import utils from "utils" /* 5649 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
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

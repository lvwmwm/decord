// Module ID: 9943
// Function ID: 9944
// Name: isApplicationAgeRestricted
// Dependencies: [2164, 5546, 2]
// Exports: default

// Module 9943 (isApplicationAgeRestricted)
import utils from "utils" /* 5546 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
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

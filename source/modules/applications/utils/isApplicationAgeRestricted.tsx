// Module ID: 8431
// Function ID: 8432
// Name: isApplicationAgeRestricted
// Dependencies: [4519, 8432, 5057, 2]
// Exports: default

// Module 8431 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5057 */;
import getUnitIdDefault from "getUnitId" /* 8432 */;
import closure_3 from "addApplication" /* 4519 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    application = application.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = getUnitIdDefault;
};

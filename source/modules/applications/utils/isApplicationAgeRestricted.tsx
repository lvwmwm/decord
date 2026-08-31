// Module ID: 8399
// Function ID: 8400
// Name: isApplicationAgeRestricted
// Dependencies: [4489, 8400, 5026, 2]
// Exports: default

// Module 8399 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5026 */;
import getUnitIdDefault from "getUnitId" /* 8400 */;
import closure_3 from "addApplication" /* 4489 */;

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

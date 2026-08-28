// Module ID: 8377
// Function ID: 8378
// Name: isApplicationAgeRestricted
// Dependencies: [4487, 8378, 5023, 2]
// Exports: default

// Module 8377 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5023 */;
import getUnitIdDefault from "getUnitId" /* 8378 */;
import closure_3 from "addApplication" /* 4487 */;

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

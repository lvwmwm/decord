// Module ID: 9335
// Function ID: 9336
// Name: isApplicationAgeRestricted
// Dependencies: [4522, 9336, 5073, 2]
// Exports: default

// Module 9335 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5073 */;
import getUnitIdDefault from "getUnitId" /* 9336 */;
import closure_3 from "addApplication" /* 4522 */;

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

// Module ID: 9585
// Function ID: 9586
// Name: isApplicationAgeRestricted
// Dependencies: [4382, 9586, 4876, 2]
// Exports: default

// Module 9585 (isApplicationAgeRestricted)
import addApplication from "addApplication";

const require = arg1;
const result = require("isAgeRestrictedContentClassification").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    application = application.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return require(4876) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(9586);
};

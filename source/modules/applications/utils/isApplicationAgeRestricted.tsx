// Module ID: 9602
// Function ID: 9603
// Name: isApplicationAgeRestricted
// Dependencies: [4383, 9603, 4899, 2]
// Exports: default

// Module 9602 (isApplicationAgeRestricted)
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
    return require(4899) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(9603);
};

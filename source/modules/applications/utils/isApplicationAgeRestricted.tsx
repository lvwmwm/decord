// Module ID: 8023
// Function ID: 8024
// Name: isApplicationAgeRestricted
// Dependencies: [4226, 8024, 5906, 2]
// Exports: default

// Module 8023 (isApplicationAgeRestricted)
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
    return require(5906) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(8024);
};

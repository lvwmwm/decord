// Module ID: 9474
// Function ID: 9475
// Name: isApplicationAgeRestricted
// Dependencies: [4339, 9475, 4834, 2]
// Exports: default

// Module 9474 (isApplicationAgeRestricted)
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
    return require(4834) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(9475);
};

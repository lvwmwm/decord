// Module ID: 9457
// Function ID: 9458
// Name: isApplicationAgeRestricted
// Dependencies: [4322, 9458, 7004, 2]
// Exports: default

// Module 9457 (isApplicationAgeRestricted)
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
    return require(7004) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(9458);
};

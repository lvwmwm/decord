// Module ID: 7964
// Function ID: 63433
// Name: isApplicationAgeRestricted
// Dependencies: [4168, 7965, 7966, 2]
// Exports: default

// Module 7964 (isApplicationAgeRestricted)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("isAgeRestrictedContentClassification").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(applicationId) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    application = application.getApplication(applicationId);
    let prop;
    if (null != application) {
      prop = application.contentClassification;
    }
    return require(7966) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(7965);
};

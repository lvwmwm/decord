// Module ID: 8001
// Function ID: 63543
// Name: isApplicationAgeRestricted
// Dependencies: [4202, 8002, 8003, 2]
// Exports: default

// Module 8001 (isApplicationAgeRestricted)
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
    return require(8003) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(8002);
};

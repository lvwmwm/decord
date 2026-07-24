// Module ID: 8221
// Function ID: 64788
// Name: isApplicationAgeRestricted
// Dependencies: [4167, 8222, 8223, 2]
// Exports: default

// Module 8221 (isApplicationAgeRestricted)
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
    return require(8223) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = importDefault(8222);
};

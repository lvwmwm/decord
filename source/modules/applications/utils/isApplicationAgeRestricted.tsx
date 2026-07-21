// Module ID: 8170
// Function ID: 64511
// Name: isApplicationAgeRestricted
// Dependencies: []
// Exports: default

// Module 8170 (isApplicationAgeRestricted)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(applicationId) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    const application = application.getApplication(applicationId);
    let prop;
    if (null != application) {
      prop = application.contentClassification;
    }
    return arg1(dependencyMap[2]).isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  const obj = importDefault(dependencyMap[1]);
};

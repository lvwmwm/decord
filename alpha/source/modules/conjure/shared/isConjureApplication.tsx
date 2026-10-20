// Module ID: 6731
// Function ID: 6732
// Name: isConjureApplication
// Dependencies: [2046, 6721, 2]
// Exports: default

// Module 6731 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2046 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6721 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/shared/isConjureApplication.tsx");

export default function isConjureApplication(applicationId) {
  const application = ApplicationStore.getApplication(applicationId);
  let conjureProjectId;
  if (application != null) {
    conjureProjectId = application.conjureProjectId;
  }
  const result = null != conjureProjectId || ConjureProjectStore.isConjureProjectApplication(applicationId);
  return result;
};

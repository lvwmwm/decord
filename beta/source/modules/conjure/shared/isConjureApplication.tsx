// Module ID: 6942
// Function ID: 6943
// Name: isConjureApplication
// Dependencies: [2162, 6932, 2]
// Exports: default

// Module 6942 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
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

// Module ID: 6511
// Function ID: 6512
// Name: isConjureApplication
// Dependencies: [2165, 6500, 2]
// Exports: default

// Module 6511 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
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

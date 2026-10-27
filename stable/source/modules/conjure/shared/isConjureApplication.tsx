// Module ID: 6331
// Function ID: 6332
// Name: isConjureApplication
// Dependencies: [5540, 6293, 2]
// Exports: default

// Module 6331 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 5540 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
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

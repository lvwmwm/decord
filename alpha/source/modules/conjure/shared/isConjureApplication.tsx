// Module ID: 6854
// Function ID: 6855
// Name: isConjureApplication
// Dependencies: [2038, 6844, 2]
// Exports: default

// Module 6854 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2038 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
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

// Module ID: 6992
// Function ID: 6993
// Name: isConjureApplication
// Dependencies: [2167, 6982, 2]
// Exports: default

// Module 6992 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2167 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
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

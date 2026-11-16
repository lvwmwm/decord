// Module ID: 7028
// Function ID: 7029
// Name: isConjureApplication
// Dependencies: [2165, 7017, 2]
// Exports: default

// Module 7028 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
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

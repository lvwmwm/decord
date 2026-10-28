// Module ID: 6818
// Function ID: 6819
// Name: isConjureApplication
// Dependencies: [2042, 6808, 2]
// Exports: default

// Module 6818 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2042 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
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

// Module ID: 6989
// Function ID: 6990
// Name: isConjureApplication
// Dependencies: [2167, 6979, 2]
// Exports: default

// Module 6989 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2167 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
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

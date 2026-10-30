// Module ID: 6848
// Function ID: 6849
// Name: isConjureApplication
// Dependencies: [2040, 6838, 2]
// Exports: default

// Module 6848 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2040 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
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

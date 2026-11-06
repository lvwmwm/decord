// Module ID: 6934
// Function ID: 6935
// Name: isConjureApplication
// Dependencies: [2162, 6924, 2]
// Exports: default

// Module 6934 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
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

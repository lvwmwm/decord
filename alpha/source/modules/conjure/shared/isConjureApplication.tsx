// Module ID: 6632
// Function ID: 6633
// Name: isConjureApplication
// Dependencies: [2164, 6621, 2]
// Exports: default

// Module 6632 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2164 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
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

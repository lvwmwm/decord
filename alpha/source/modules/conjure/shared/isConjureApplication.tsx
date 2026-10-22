// Module ID: 6768
// Function ID: 6769
// Name: isConjureApplication
// Dependencies: [2045, 6758, 2]
// Exports: default

// Module 6768 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;
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

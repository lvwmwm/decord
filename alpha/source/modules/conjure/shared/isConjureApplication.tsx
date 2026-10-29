// Module ID: 6841
// Function ID: 6842
// Name: isConjureApplication
// Dependencies: [2043, 6831, 2]
// Exports: default

// Module 6841 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2043 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
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

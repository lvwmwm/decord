// Module ID: 6762
// Function ID: 6763
// Name: isConjureApplication
// Dependencies: [2045, 6752, 2]
// Exports: default

// Module 6762 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;
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

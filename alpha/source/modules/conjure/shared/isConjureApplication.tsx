// Module ID: 6513
// Function ID: 6514
// Name: isConjureApplication
// Dependencies: [2163, 6502, 2]
// Exports: default

// Module 6513 (isConjureApplication)
import ApplicationStore from "ApplicationStore" /* 2163 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
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

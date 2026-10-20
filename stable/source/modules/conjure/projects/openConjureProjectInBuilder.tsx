// Module ID: 12346
// Function ID: 12347
// Name: openConjureProjectInBuilder
// Dependencies: [12347, 6946, 12348, 2]
// Exports: default

// Module 12346 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6946 */;
import ConjureActivity from "ConjureActivity" /* 12347 */;
import openConjureProject from "openConjureProject" /* 12348 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.tsx");

export default function openConjureProjectInBuilder(id) {
  const obj = ConjureActivity;
  let result = obj.conjureProjectGuildId(id);
  if (result == null) {
    const tmpResult = ConjureUtils;
    result = tmpResult.resolveConjureWorkspaceGuildId("openVibegrationsProjectInBuilder");
  }
  let flag = null != result;
  if (flag) {
    const tmpResult2 = openConjureProject;
    tmpResult2.openConjureProject(result, id.id);
    flag = true;
  }
  return flag;
};

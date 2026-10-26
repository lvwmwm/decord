// Module ID: 13525
// Function ID: 13526
// Name: openConjureProjectInBuilder
// Dependencies: [11747, 7345, 13526, 2]
// Exports: default

// Module 13525 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7345 */;
import ConjureActivity from "ConjureActivity" /* 11747 */;
import openConjureProject from "openConjureProject" /* 13526 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.tsx");

export default function openConjureProjectInBuilder(id) {
  const obj = ConjureActivity;
  let result = obj.conjureProjectGuildId(id);
  if (result == null) {
    const tmpResult = ConjureUtils;
    result = tmpResult.resolveConjureWorkspaceGuildId("openConjureProjectInBuilder");
  }
  let flag = null != result;
  if (flag) {
    const tmpResult2 = openConjureProject;
    tmpResult2.openConjureProject(result, id.id);
    flag = true;
  }
  return flag;
};

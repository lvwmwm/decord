// Module ID: 13447
// Function ID: 13448
// Name: openConjureProjectInBuilder
// Dependencies: [11693, 7329, 13448, 2]
// Exports: default

// Module 13447 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7329 */;
import ConjureActivity from "ConjureActivity" /* 11693 */;
import openConjureProject from "openConjureProject" /* 13448 */;
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

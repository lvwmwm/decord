// Module ID: 13521
// Function ID: 13522
// Name: openConjureProjectInBuilder
// Dependencies: [11744, 7345, 13522, 2]
// Exports: default

// Module 13521 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7345 */;
import ConjureActivity from "ConjureActivity" /* 11744 */;
import openConjureProject from "openConjureProject" /* 13522 */;
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

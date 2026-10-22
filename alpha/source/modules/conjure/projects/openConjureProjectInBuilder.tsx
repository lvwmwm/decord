// Module ID: 13461
// Function ID: 13462
// Name: openConjureProjectInBuilder
// Dependencies: [11704, 7330, 13462, 2]
// Exports: default

// Module 13461 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7330 */;
import ConjureActivity from "ConjureActivity" /* 11704 */;
import openConjureProject from "openConjureProject" /* 13462 */;
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

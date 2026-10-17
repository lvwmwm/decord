// Module ID: 13286
// Function ID: 13287
// Name: openConjureProjectInBuilder
// Dependencies: [11578, 7222, 13287, 2]
// Exports: default

// Module 13286 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7222 */;
import ConjureActivity from "ConjureActivity" /* 11578 */;
import openConjureProject from "openConjureProject" /* 13287 */;
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

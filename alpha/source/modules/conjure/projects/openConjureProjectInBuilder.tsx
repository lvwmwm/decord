// Module ID: 13326
// Function ID: 13327
// Name: openConjureProjectInBuilder
// Dependencies: [11615, 7291, 13327, 2]
// Exports: default

// Module 13326 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7291 */;
import ConjureActivity from "ConjureActivity" /* 11615 */;
import openConjureProject from "openConjureProject" /* 13327 */;
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

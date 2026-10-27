// Module ID: 13289
// Function ID: 13290
// Name: openConjureProjectInBuilder
// Dependencies: [11594, 7222, 13290, 2]
// Exports: default

// Module 13289 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7222 */;
import ConjureActivity from "ConjureActivity" /* 11594 */;
import openConjureProject from "openConjureProject" /* 13290 */;
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

// Module ID: 13220
// Function ID: 13221
// Name: openConjureProjectInBuilder
// Dependencies: [11519, 7169, 13221, 2]
// Exports: default

// Module 13220 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7169 */;
import ConjureActivity from "ConjureActivity" /* 11519 */;
import openConjureProject from "openConjureProject" /* 13221 */;
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

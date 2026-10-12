// Module ID: 12341
// Function ID: 12342
// Name: openConjureProjectInBuilder
// Dependencies: [12342, 6946, 12343, 2]
// Exports: default

// Module 12341 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6946 */;
import ConjureActivity from "ConjureActivity" /* 12342 */;
import openConjureProject from "openConjureProject" /* 12343 */;
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

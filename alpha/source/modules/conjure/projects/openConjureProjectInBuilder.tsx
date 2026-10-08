// Module ID: 12358
// Function ID: 12359
// Name: openConjureProjectInBuilder
// Dependencies: [12359, 6932, 12360, 2]
// Exports: default

// Module 12358 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6932 */;
import ConjureActivity from "ConjureActivity" /* 12359 */;
import openConjureProject from "openConjureProject" /* 12360 */;
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

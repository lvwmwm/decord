// Module ID: 12339
// Function ID: 12340
// Name: openConjureProjectInBuilder
// Dependencies: [12340, 6945, 12341, 2]
// Exports: default

// Module 12339 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6945 */;
import ConjureActivity from "ConjureActivity" /* 12340 */;
import openConjureProject from "openConjureProject" /* 12341 */;
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

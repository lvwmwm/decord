// Module ID: 12295
// Function ID: 12296
// Name: openConjureProjectInBuilder
// Dependencies: [12296, 6939, 12297, 2]
// Exports: default

// Module 12295 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6939 */;
import ConjureActivity from "ConjureActivity" /* 12296 */;
import openConjureProject from "openConjureProject" /* 12297 */;
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

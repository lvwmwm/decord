// Module ID: 12853
// Function ID: 12854
// Name: openConjureProjectInBuilder
// Dependencies: [12854, 6946, 12855, 2]
// Exports: default

// Module 12853 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 6946 */;
import ConjureActivity from "ConjureActivity" /* 12854 */;
import openConjureProject from "openConjureProject" /* 12855 */;
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

// Module ID: 13212
// Function ID: 13213
// Name: openConjureProjectInBuilder
// Dependencies: [11522, 7167, 13213, 2]
// Exports: default

// Module 13212 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7167 */;
import ConjureActivity from "ConjureActivity" /* 11522 */;
import openConjureProject from "openConjureProject" /* 13213 */;
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

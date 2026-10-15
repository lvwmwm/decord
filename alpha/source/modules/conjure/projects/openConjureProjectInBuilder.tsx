// Module ID: 13186
// Function ID: 13187
// Name: openConjureProjectInBuilder
// Dependencies: [12189, 7165, 13187, 2]
// Exports: default

// Module 13186 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7165 */;
import ConjureActivity from "ConjureActivity" /* 12189 */;
import openConjureProject from "openConjureProject" /* 13187 */;
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

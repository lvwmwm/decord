// Module ID: 13344
// Function ID: 13345
// Name: openConjureProjectInBuilder
// Dependencies: [11626, 7294, 13345, 2]
// Exports: default

// Module 13344 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7294 */;
import ConjureActivity from "ConjureActivity" /* 11626 */;
import openConjureProject from "openConjureProject" /* 13345 */;
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

// Module ID: 13558
// Function ID: 13559
// Name: openConjureProjectInBuilder
// Dependencies: [11780, 7377, 13559, 2]
// Exports: default

// Module 13558 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7377 */;
import ConjureActivity from "ConjureActivity" /* 11780 */;
import openConjureProject from "openConjureProject" /* 13559 */;
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

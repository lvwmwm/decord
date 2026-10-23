// Module ID: 13484
// Function ID: 13485
// Name: openConjureProjectInBuilder
// Dependencies: [11724, 7343, 13485, 2]
// Exports: default

// Module 13484 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7343 */;
import ConjureActivity from "ConjureActivity" /* 11724 */;
import openConjureProject from "openConjureProject" /* 13485 */;
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

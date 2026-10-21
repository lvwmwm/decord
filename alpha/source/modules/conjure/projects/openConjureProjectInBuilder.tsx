// Module ID: 13411
// Function ID: 13412
// Name: openConjureProjectInBuilder
// Dependencies: [11676, 7322, 13412, 2]
// Exports: default

// Module 13411 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7322 */;
import ConjureActivity from "ConjureActivity" /* 11676 */;
import openConjureProject from "openConjureProject" /* 13412 */;
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

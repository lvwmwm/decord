// Module ID: 13294
// Function ID: 13295
// Name: openConjureProjectInBuilder
// Dependencies: [11594, 7222, 13295, 2]
// Exports: default

// Module 13294 (openConjureProjectInBuilder)
import ConjureUtils from "ConjureUtils" /* 7222 */;
import ConjureActivity from "ConjureActivity" /* 11594 */;
import openConjureProject from "openConjureProject" /* 13295 */;
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

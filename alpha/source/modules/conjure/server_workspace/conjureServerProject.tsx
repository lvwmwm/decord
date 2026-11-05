// Module ID: 7534
// Function ID: 7535
// Name: conjureServerProject
// Dependencies: [6982, 7535, 7536, 2]
// Exports: conjureProjectRoute, conjureServerProjectGuildId, getConjureServerProjects

// Module 7534 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 7535 */;
import conjurePageRoutes from "conjurePageRoutes" /* 7536 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  let result = null;
  if (null != project) {
    result = null;
    if ("guild" === project.install_scope) {
      result = null;
      if (null == project.install_scope_setup) {
        const obj = ConjureActivity;
        result = obj.conjureProjectGuildId(project);
      }
    }
  }
  return result;
}
export function getConjureServerProjects(id) {
  let closure_0 = id;
  const items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    let result = null;
    if (null != install_scope) {
      result = null;
      if ("guild" === install_scope.install_scope) {
        result = null;
        if (null == install_scope.install_scope_setup) {
          const obj = ConjureActivity;
          result = obj.conjureProjectGuildId(install_scope);
        }
      }
    }
    return result === id;
  });
}
export function conjureProjectRoute(arg0) {
  let result1;
  const project = ConjureProjectStore.getProject(arg0);
  let result = null;
  if (null != project) {
    result = null;
    if ("guild" === project.install_scope) {
      result = null;
      if (null == project.install_scope_setup) {
        const obj = ConjureActivity;
        result = obj.conjureProjectGuildId(project);
      }
    }
  }
  if (null != result) {
    const obj3 = conjurePageRoutes;
    result1 = obj3.conjureServerProjectRoute(result, arg0);
  } else {
    const obj2 = conjurePageRoutes;
    result1 = obj2.conjurePageRoute(arg0);
  }
  return result1;
}

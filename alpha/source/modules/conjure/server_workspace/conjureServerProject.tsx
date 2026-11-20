// Module ID: 6719
// Function ID: 6720
// Name: conjureServerProject
// Dependencies: [6502, 6720, 6721, 2]
// Exports: conjureProjectRoute, conjureServerProjectGuildId, getConjureServerProjects

// Module 6719 (conjureServerProject)
import ConjureActivity from "ConjureActivity" /* 6720 */;
import conjurePageRoutes from "conjurePageRoutes" /* 6721 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/server_workspace/conjureServerProject.tsx");

export function conjureServerProjectGuildId(project) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let result = null;
  if ("guild" === install_scope) {
    const obj = ConjureActivity;
    result = obj.conjureProjectGuildId(project);
  }
  return result;
}
export function getConjureServerProjects(id) {
  let closure_0 = id;
  const items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedProjects(id)];
  return items.filter((install_scope) => {
    install_scope = undefined;
    if (install_scope != null) {
      install_scope = install_scope.install_scope;
    }
    let result = null;
    if ("guild" === install_scope) {
      const obj = ConjureActivity;
      result = obj.conjureProjectGuildId(install_scope);
    }
    return result === id;
  });
}
export function conjureProjectRoute(arg0) {
  let result1;
  const project = ConjureProjectStore.getProject(arg0);
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let result = null;
  if ("guild" === install_scope) {
    const obj = ConjureActivity;
    result = obj.conjureProjectGuildId(project);
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

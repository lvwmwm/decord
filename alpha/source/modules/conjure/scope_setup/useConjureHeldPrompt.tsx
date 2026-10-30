// Module ID: 12544
// Function ID: 12545
// Name: useConjureHeldPrompt
// Dependencies: [32, 19, 10831, 10830, 6838, 504, 12545, 2]
// Exports: useConjureHeldPrompt, useConjureScopeSetupPending

// Module 12544 (useConjureHeldPrompt)
import conjureScopeSetup from "conjureScopeSetup" /* 12545 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, project;

const f102269 = () => {
  project = project.getProject(closure_0);
  let install_scope_setup;
  if (project != null) {
    install_scope_setup = project.install_scope_setup;
  }
  return null != install_scope_setup;
};
let result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureHeldPrompt.tsx");

export function useConjureScopeSetupPending(projectId) {
  _require = projectId;
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f102269, items1);
}
export function useConjureHeldPrompt(projectId) {
  let closure_1;
  let first;
  _require = projectId;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, f102269, items1);
  const items2 = [ConjureProjectStore];
  const items3 = [projectId];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => null != ConjureProjectStore.getProject(projectId), items3);
  const items4 = [ConjureChatStore];
  const items5 = [projectId];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => ConjureChatStore.hasLoadedHistory(projectId), items5);
  const items6 = [ConjureChatStore];
  const items7 = [projectId];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items6, () => ConjureChatStore.getMessages(projectId), items7);
  const items8 = [ConjureConnectionStore];
  const items9 = [projectId];
  const obj5 = require("get initialized");
  const stateFromStores4 = obj5.useStateFromStores(items8, () => ConjureConnectionStore.getConnState(projectId), items9);
  [first, dependencyMap] = react.useState(0);
  const items10 = [projectId, stateFromStores1, stateFromStores2, stateFromStores3, stateFromStores, stateFromStores4];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = conjureScopeSetup;
    const result = obj.reconcileHeldConjurePrompt(projectId, () => closure_1_1((arg0) => arg0 + 1));
  }, items10);
  return first;
}

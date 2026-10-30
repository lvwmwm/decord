// Module ID: 12984
// Function ID: 12985
// Name: useConjureDebugAgentState
// Dependencies: [19, 10831, 10837, 504, 10868, 2]
// Exports: default

// Module 12984 (useConjureDebugAgentState)
import conjureDebugConnection from "conjureDebugConnection" /* 10868 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAgentState.tsx");

export default function useConjureDebugAgentState(arg0, agent) {
  let closure_0;
  let lifetime;
  let promptCeiling;
  let session;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureDebugStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureDebugStore.getLastTurnUsage(closure_0), items1);
  const items2 = [ConjureDebugStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ConjureDebugStore.getLastCompaction(closure_0), items3);
  const items4 = [ConjureDebugStore];
  const items5 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => ConjureDebugStore.getLastCompactionDecline(closure_0), items5);
  const items6 = [ConjureDebugStore];
  const items7 = [arg0];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items6, () => ConjureDebugStore.getForceCompactionState(closure_0), items7);
  const items8 = [ConjureDebugStore];
  const items9 = [arg0];
  const obj5 = require("get initialized");
  const stateFromStores4 = obj5.useStateFromStores(items8, () => ConjureDebugStore.getSandboxRestartState(closure_0), items9);
  const items10 = [ConjureChatStore];
  const items11 = [arg0];
  const items12 = [arg0];
  const obj6 = require("get initialized");
  const stateFromStores5 = obj6.useStateFromStores(items10, () => ConjureChatStore.isThinking(closure_0), items11);
  const items13 = [arg0];
  const callback = react.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.forceCompaction(closure_0);
  }, items12);
  const items14 = [arg0];
  const callback1 = react.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.forceCompaction(closure_0, true);
  }, items13);
  let limits;
  const callback2 = react.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.restartConjureSandbox(closure_0);
  }, items14);
  if (agent != null) {
    agent = agent.agent;
    if (agent != null) {
      limits = agent.limits;
    }
  }
  if (limits == null) {
    limits = null;
  }
  const obj7 = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: callback, handleForceCompactionOverride: callback1, handleRestartWorkspace: callback2, lifetime, limits, session, contextCeiling: promptCeiling };
  lifetime = undefined;
  if (agent != null) {
    const agent2 = agent.agent;
    if (agent2 != null) {
      lifetime = agent2.lifetime;
    }
  }
  if (lifetime == null) {
    lifetime = null;
  }
  session = undefined;
  if (agent != null) {
    const agent3 = agent.agent;
    if (agent3 != null) {
      session = agent3.session;
    }
  }
  if (session == null) {
    session = null;
  }
  promptCeiling = undefined;
  if (stateFromStores1 != null) {
    promptCeiling = stateFromStores1.promptCeiling;
  }
  if (promptCeiling == null) {
    let prop;
    if (limits != null) {
      prop = limits.context_window_tokens;
    }
    promptCeiling = prop;
  }
  if (promptCeiling == null) {
    promptCeiling = null;
  }
  return obj7;
};

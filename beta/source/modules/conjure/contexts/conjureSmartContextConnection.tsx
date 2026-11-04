// Module ID: 10966
// Function ID: 10967
// Name: conjureSmartContextConnection
// Dependencies: [572, 10941, 10874, 2]
// Exports: sendSmartContext, undoContextSwitch

// Module 10966 (conjureSmartContextConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10874 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 10941 */;
import size from "module_2" /* 2 */;

let obj = {
  context_switch(contextSwitch, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId, contextSwitch };
    obj.dispatch(obj2);
    if ("reverted" === contextSwitch.status) {
      const obj3 = ConjurePublishActionCreators;
      const result = obj3.refreshPublishedProject(projectId, { isPreview: true });
      result.catch(() => {

      });
    }
  },
  smart_context(enabled, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_SMART_CONTEXT_SET", projectId, enabled: enabled.enabled };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("modules/conjure/contexts/conjureSmartContextConnection.tsx");

export const smartContextFrameHandlers = obj;
export function undoContextSwitch(projectId, id) {
  let closure_0 = id;
  const obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "undo context switch", (sendUndoContextSwitch) => sendUndoContextSwitch.sendUndoContextSwitch(closure_0));
}
export function sendSmartContext(projectId, arg1) {
  let closure_0 = arg1;
  const obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "smart context", (sendSmartContext) => sendSmartContext.sendSmartContext(closure_0));
}

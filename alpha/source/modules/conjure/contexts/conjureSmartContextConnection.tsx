// Module ID: 11051
// Function ID: 11052
// Name: conjureSmartContextConnection
// Dependencies: [584, 11036, 10982, 2]
// Exports: sendSmartContext, undoContextSwitch

// Module 11051 (conjureSmartContextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10982 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 11036 */;
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
export const undoContextSwitch = function undoContextSwitch(arg0, id) {
  let closure_0 = id;
  const obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(arg0, "undo context switch", (sendUndoContextSwitch) => sendUndoContextSwitch.sendUndoContextSwitch(closure_0));
};
export const sendSmartContext = function sendSmartContext(arg0, arg1) {
  let closure_0 = arg1;
  const obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(arg0, "smart context", (sendSmartContext) => sendSmartContext.sendSmartContext(closure_0));
};

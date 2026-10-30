// Module ID: 10867
// Function ID: 10868
// Name: conjureBrowserSessionsConnection
// Dependencies: [572, 10854, 2]
// Exports: refreshBrowserSessions

// Module 10867 (conjureBrowserSessionsConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10854 */;
import size from "module_2" /* 2 */;

let obj = {
  browser_sessions(sessions, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_BROWSER_SESSIONS_SET", projectId, sessions: sessions.sessions };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("modules/conjure/browser_streams/conjureBrowserSessionsConnection.tsx");

export const browserSessionsFrameHandlers = obj;
export function refreshBrowserSessions(projectId) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  if (conjureSocket != null) {
    const result = conjureSocket.sendRefreshBrowserSessions();
  }
}

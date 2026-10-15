// Module ID: 10912
// Function ID: 10913
// Name: conjureBrowserSessionsConnection
// Dependencies: [584, 10906, 2]
// Exports: refreshBrowserSessions

// Module 10912 (conjureBrowserSessionsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10906 */;
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
export const refreshBrowserSessions = function refreshBrowserSessions(projectId) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  if (conjureSocket != null) {
    const result = conjureSocket.sendRefreshBrowserSessions();
  }
};

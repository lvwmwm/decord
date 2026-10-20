// Module ID: 12514
// Function ID: 12515
// Dependencies: [12433, 12454, 12479]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12514
import _mod12433 from "module_12433" /* 12433 */;
import _mod12454 from "module_12454" /* 12454 */;
import _mod12479 from "module_12479" /* 12479 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12433;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12433.withScope,
    getClient() {
      const obj = _mod12433;
      return obj.getClient();
    },
    getScope: _mod12433.getCurrentScope,
    getIsolationScope: _mod12433.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12433;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12433;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12454.captureEvent,
    addBreadcrumb: _mod12479.addBreadcrumb,
    setUser: _mod12454.setUser,
    setTags: _mod12454.setTags,
    setTag: _mod12454.setTag,
    setExtra: _mod12454.setExtra,
    setExtras: _mod12454.setExtras,
    setContext: _mod12454.setContext,
    getIntegration(id) {
      const obj = _mod12433;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12454.startSession,
    endSession: _mod12454.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12454;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12433;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12433;
        const client = tmpResult4.getClient();
        const session = currentScope.getSession();
        const tmp5 = client && session;
        if (tmp5) {
          client.captureSession(session);
        }
      }
    }
  };
  return obj;
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };

// Module ID: 12587
// Function ID: 12588
// Dependencies: [12506, 12527, 12552]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12587
import _mod12506 from "module_12506" /* 12506 */;
import _mod12527 from "module_12527" /* 12527 */;
import _mod12552 from "module_12552" /* 12552 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12506;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12506.withScope,
    getClient() {
      const obj = _mod12506;
      return obj.getClient();
    },
    getScope: _mod12506.getCurrentScope,
    getIsolationScope: _mod12506.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12506;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12506;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12527.captureEvent,
    addBreadcrumb: _mod12552.addBreadcrumb,
    setUser: _mod12527.setUser,
    setTags: _mod12527.setTags,
    setTag: _mod12527.setTag,
    setExtra: _mod12527.setExtra,
    setExtras: _mod12527.setExtras,
    setContext: _mod12527.setContext,
    getIntegration(id) {
      const obj = _mod12506;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12527.startSession,
    endSession: _mod12527.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12527;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12506;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12506;
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

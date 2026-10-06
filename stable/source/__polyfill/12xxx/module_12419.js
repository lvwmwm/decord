// Module ID: 12419
// Function ID: 12420
// Dependencies: [12338, 12359, 12384]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12419
import _mod12338 from "module_12338" /* 12338 */;
import _mod12359 from "module_12359" /* 12359 */;
import _mod12384 from "module_12384" /* 12384 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12338;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12338.withScope,
    getClient() {
      const obj = _mod12338;
      return obj.getClient();
    },
    getScope: _mod12338.getCurrentScope,
    getIsolationScope: _mod12338.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12338;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12338;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12359.captureEvent,
    addBreadcrumb: _mod12384.addBreadcrumb,
    setUser: _mod12359.setUser,
    setTags: _mod12359.setTags,
    setTag: _mod12359.setTag,
    setExtra: _mod12359.setExtra,
    setExtras: _mod12359.setExtras,
    setContext: _mod12359.setContext,
    getIntegration(id) {
      const obj = _mod12338;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12359.startSession,
    endSession: _mod12359.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12359;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12338;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12338;
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

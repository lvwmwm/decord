// Module ID: 12697
// Function ID: 12698
// Dependencies: [12616, 12637, 12662]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12697
import _mod12616 from "module_12616" /* 12616 */;
import _mod12637 from "module_12637" /* 12637 */;
import _mod12662 from "module_12662" /* 12662 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12616;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12616.withScope,
    getClient() {
      const obj = _mod12616;
      return obj.getClient();
    },
    getScope: _mod12616.getCurrentScope,
    getIsolationScope: _mod12616.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12616;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12616;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12637.captureEvent,
    addBreadcrumb: _mod12662.addBreadcrumb,
    setUser: _mod12637.setUser,
    setTags: _mod12637.setTags,
    setTag: _mod12637.setTag,
    setExtra: _mod12637.setExtra,
    setExtras: _mod12637.setExtras,
    setContext: _mod12637.setContext,
    getIntegration(id) {
      const obj = _mod12616;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12637.startSession,
    endSession: _mod12637.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12637;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12616;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12616;
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

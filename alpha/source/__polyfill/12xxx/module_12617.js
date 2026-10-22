// Module ID: 12617
// Function ID: 12618
// Dependencies: [12536, 12557, 12582]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12617
import _mod12536 from "module_12536" /* 12536 */;
import _mod12557 from "module_12557" /* 12557 */;
import _mod12582 from "module_12582" /* 12582 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12536;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12536.withScope,
    getClient() {
      const obj = _mod12536;
      return obj.getClient();
    },
    getScope: _mod12536.getCurrentScope,
    getIsolationScope: _mod12536.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12536;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12536;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12557.captureEvent,
    addBreadcrumb: _mod12582.addBreadcrumb,
    setUser: _mod12557.setUser,
    setTags: _mod12557.setTags,
    setTag: _mod12557.setTag,
    setExtra: _mod12557.setExtra,
    setExtras: _mod12557.setExtras,
    setContext: _mod12557.setContext,
    getIntegration(id) {
      const obj = _mod12536;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12557.startSession,
    endSession: _mod12557.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12557;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12536;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12536;
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

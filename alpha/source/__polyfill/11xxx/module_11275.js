// Module ID: 11275
// Function ID: 11276
// Dependencies: [11194, 11215, 11240]
// Exports: getCurrentHub, getCurrentHubShim

// Module 11275
import _mod11194 from "module_11194" /* 11194 */;
import _mod11215 from "module_11215" /* 11215 */;
import _mod11240 from "module_11240" /* 11240 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod11194;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod11194.withScope,
    getClient() {
      const obj = _mod11194;
      return obj.getClient();
    },
    getScope: _mod11194.getCurrentScope,
    getIsolationScope: _mod11194.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod11194;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod11194;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod11215.captureEvent,
    addBreadcrumb: _mod11240.addBreadcrumb,
    setUser: _mod11215.setUser,
    setTags: _mod11215.setTags,
    setTag: _mod11215.setTag,
    setExtra: _mod11215.setExtra,
    setExtras: _mod11215.setExtras,
    setContext: _mod11215.setContext,
    getIntegration(id) {
      const obj = _mod11194;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod11215.startSession,
    endSession: _mod11215.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod11215;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod11194;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod11194;
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

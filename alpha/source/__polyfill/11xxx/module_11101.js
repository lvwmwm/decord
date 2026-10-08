// Module ID: 11101
// Function ID: 11102
// Dependencies: [11020, 11041, 11066]
// Exports: getCurrentHub, getCurrentHubShim

// Module 11101
import _mod11020 from "module_11020" /* 11020 */;
import _mod11041 from "module_11041" /* 11041 */;
import _mod11066 from "module_11066" /* 11066 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod11020;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod11020.withScope,
    getClient() {
      const obj = _mod11020;
      return obj.getClient();
    },
    getScope: _mod11020.getCurrentScope,
    getIsolationScope: _mod11020.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod11020;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod11020;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod11041.captureEvent,
    addBreadcrumb: _mod11066.addBreadcrumb,
    setUser: _mod11041.setUser,
    setTags: _mod11041.setTags,
    setTag: _mod11041.setTag,
    setExtra: _mod11041.setExtra,
    setExtras: _mod11041.setExtras,
    setContext: _mod11041.setContext,
    getIntegration(id) {
      const obj = _mod11020;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod11041.startSession,
    endSession: _mod11041.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod11041;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod11020;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod11020;
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

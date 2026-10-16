// Module ID: 12406
// Function ID: 12407
// Dependencies: [12325, 12346, 12371]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12406
import _mod12325 from "module_12325" /* 12325 */;
import _mod12346 from "module_12346" /* 12346 */;
import _mod12371 from "module_12371" /* 12371 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12325;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12325.withScope,
    getClient() {
      const obj = _mod12325;
      return obj.getClient();
    },
    getScope: _mod12325.getCurrentScope,
    getIsolationScope: _mod12325.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12325;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12325;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12346.captureEvent,
    addBreadcrumb: _mod12371.addBreadcrumb,
    setUser: _mod12346.setUser,
    setTags: _mod12346.setTags,
    setTag: _mod12346.setTag,
    setExtra: _mod12346.setExtra,
    setExtras: _mod12346.setExtras,
    setContext: _mod12346.setContext,
    getIntegration(id) {
      const obj = _mod12325;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12346.startSession,
    endSession: _mod12346.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12346;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12325;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12325;
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

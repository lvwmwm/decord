// Module ID: 12647
// Function ID: 12648
// Dependencies: [12566, 12587, 12612]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12647
import _mod12566 from "module_12566" /* 12566 */;
import _mod12587 from "module_12587" /* 12587 */;
import _mod12612 from "module_12612" /* 12612 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12566;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12566.withScope,
    getClient() {
      const obj = _mod12566;
      return obj.getClient();
    },
    getScope: _mod12566.getCurrentScope,
    getIsolationScope: _mod12566.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12566;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12566;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12587.captureEvent,
    addBreadcrumb: _mod12612.addBreadcrumb,
    setUser: _mod12587.setUser,
    setTags: _mod12587.setTags,
    setTag: _mod12587.setTag,
    setExtra: _mod12587.setExtra,
    setExtras: _mod12587.setExtras,
    setContext: _mod12587.setContext,
    getIntegration(id) {
      const obj = _mod12566;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12587.startSession,
    endSession: _mod12587.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12587;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12566;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12566;
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

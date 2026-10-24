// Module ID: 12681
// Function ID: 12682
// Dependencies: [12600, 12621, 12646]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12681
import _mod12600 from "module_12600" /* 12600 */;
import _mod12621 from "module_12621" /* 12621 */;
import _mod12646 from "module_12646" /* 12646 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12600;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12600.withScope,
    getClient() {
      const obj = _mod12600;
      return obj.getClient();
    },
    getScope: _mod12600.getCurrentScope,
    getIsolationScope: _mod12600.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12600;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12600;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12621.captureEvent,
    addBreadcrumb: _mod12646.addBreadcrumb,
    setUser: _mod12621.setUser,
    setTags: _mod12621.setTags,
    setTag: _mod12621.setTag,
    setExtra: _mod12621.setExtra,
    setExtras: _mod12621.setExtras,
    setContext: _mod12621.setContext,
    getIntegration(id) {
      const obj = _mod12600;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12621.startSession,
    endSession: _mod12621.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12621;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12600;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12600;
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

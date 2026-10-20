// Module ID: 12531
// Function ID: 12532
// Dependencies: [12450, 12471, 12496]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12531
import _mod12450 from "module_12450" /* 12450 */;
import _mod12471 from "module_12471" /* 12471 */;
import _mod12496 from "module_12496" /* 12496 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12450;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12450.withScope,
    getClient() {
      const obj = _mod12450;
      return obj.getClient();
    },
    getScope: _mod12450.getCurrentScope,
    getIsolationScope: _mod12450.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12450;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12450;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12471.captureEvent,
    addBreadcrumb: _mod12496.addBreadcrumb,
    setUser: _mod12471.setUser,
    setTags: _mod12471.setTags,
    setTag: _mod12471.setTag,
    setExtra: _mod12471.setExtra,
    setExtras: _mod12471.setExtras,
    setContext: _mod12471.setContext,
    getIntegration(id) {
      const obj = _mod12450;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12471.startSession,
    endSession: _mod12471.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12471;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12450;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12450;
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

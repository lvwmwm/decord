// Module ID: 12686
// Function ID: 12687
// Dependencies: [12605, 12626, 12651]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12686
import _mod12605 from "module_12605" /* 12605 */;
import _mod12626 from "module_12626" /* 12626 */;
import _mod12651 from "module_12651" /* 12651 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12605;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12605.withScope,
    getClient() {
      const obj = _mod12605;
      return obj.getClient();
    },
    getScope: _mod12605.getCurrentScope,
    getIsolationScope: _mod12605.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12605;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12605;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12626.captureEvent,
    addBreadcrumb: _mod12651.addBreadcrumb,
    setUser: _mod12626.setUser,
    setTags: _mod12626.setTags,
    setTag: _mod12626.setTag,
    setExtra: _mod12626.setExtra,
    setExtras: _mod12626.setExtras,
    setContext: _mod12626.setContext,
    getIntegration(id) {
      const obj = _mod12605;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12626.startSession,
    endSession: _mod12626.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12626;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12605;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12605;
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

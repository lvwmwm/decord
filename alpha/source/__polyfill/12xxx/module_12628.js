// Module ID: 12628
// Function ID: 12629
// Dependencies: [12547, 12568, 12593]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12628
import _mod12547 from "module_12547" /* 12547 */;
import _mod12568 from "module_12568" /* 12568 */;
import _mod12593 from "module_12593" /* 12593 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12547;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12547.withScope,
    getClient() {
      const obj = _mod12547;
      return obj.getClient();
    },
    getScope: _mod12547.getCurrentScope,
    getIsolationScope: _mod12547.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12547;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12547;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12568.captureEvent,
    addBreadcrumb: _mod12593.addBreadcrumb,
    setUser: _mod12568.setUser,
    setTags: _mod12568.setTags,
    setTag: _mod12568.setTag,
    setExtra: _mod12568.setExtra,
    setExtras: _mod12568.setExtras,
    setContext: _mod12568.setContext,
    getIntegration(id) {
      const obj = _mod12547;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12568.startSession,
    endSession: _mod12568.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12568;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12547;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12547;
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

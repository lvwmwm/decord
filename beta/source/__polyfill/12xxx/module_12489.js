// Module ID: 12489
// Function ID: 12490
// Dependencies: [12408, 12429, 12454]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12489
import _mod12408 from "module_12408" /* 12408 */;
import _mod12429 from "module_12429" /* 12429 */;
import _mod12454 from "module_12454" /* 12454 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12408;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12408.withScope,
    getClient() {
      const obj = _mod12408;
      return obj.getClient();
    },
    getScope: _mod12408.getCurrentScope,
    getIsolationScope: _mod12408.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12408;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12408;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12429.captureEvent,
    addBreadcrumb: _mod12454.addBreadcrumb,
    setUser: _mod12429.setUser,
    setTags: _mod12429.setTags,
    setTag: _mod12429.setTag,
    setExtra: _mod12429.setExtra,
    setExtras: _mod12429.setExtras,
    setContext: _mod12429.setContext,
    getIntegration(id) {
      const obj = _mod12408;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12429.startSession,
    endSession: _mod12429.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12429;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12408;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12408;
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

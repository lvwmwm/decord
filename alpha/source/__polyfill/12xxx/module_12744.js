// Module ID: 12744
// Function ID: 12745
// Dependencies: [12663, 12684, 12709]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12744
import _mod12663 from "module_12663" /* 12663 */;
import _mod12684 from "module_12684" /* 12684 */;
import _mod12709 from "module_12709" /* 12709 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12663;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12663.withScope,
    getClient() {
      const obj = _mod12663;
      return obj.getClient();
    },
    getScope: _mod12663.getCurrentScope,
    getIsolationScope: _mod12663.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12663;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12663;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12684.captureEvent,
    addBreadcrumb: _mod12709.addBreadcrumb,
    setUser: _mod12684.setUser,
    setTags: _mod12684.setTags,
    setTag: _mod12684.setTag,
    setExtra: _mod12684.setExtra,
    setExtras: _mod12684.setExtras,
    setContext: _mod12684.setContext,
    getIntegration(id) {
      const obj = _mod12663;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12684.startSession,
    endSession: _mod12684.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12684;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12663;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12663;
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

// Module ID: 9905
// Function ID: 9906
// Dependencies: [9824, 9845, 9870]
// Exports: getCurrentHub, getCurrentHubShim

// Module 9905
import _mod9824 from "module_9824" /* 9824 */;
import _mod9845 from "module_9845" /* 9845 */;
import _mod9870 from "module_9870" /* 9870 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod9824;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod9824.withScope,
    getClient() {
      const obj = _mod9824;
      return obj.getClient();
    },
    getScope: _mod9824.getCurrentScope,
    getIsolationScope: _mod9824.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod9824;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod9824;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod9845.captureEvent,
    addBreadcrumb: _mod9870.addBreadcrumb,
    setUser: _mod9845.setUser,
    setTags: _mod9845.setTags,
    setTag: _mod9845.setTag,
    setExtra: _mod9845.setExtra,
    setExtras: _mod9845.setExtras,
    setContext: _mod9845.setContext,
    getIntegration(id) {
      const obj = _mod9824;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod9845.startSession,
    endSession: _mod9845.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod9845;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod9824;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod9824;
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

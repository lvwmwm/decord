// Module ID: 9838
// Function ID: 9839
// Dependencies: [9757, 9778, 9803]
// Exports: getCurrentHub, getCurrentHubShim

// Module 9838
import _mod9757 from "module_9757" /* 9757 */;
import _mod9778 from "module_9778" /* 9778 */;
import _mod9803 from "module_9803" /* 9803 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod9757;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod9757.withScope,
    getClient() {
      const obj = _mod9757;
      return obj.getClient();
    },
    getScope: _mod9757.getCurrentScope,
    getIsolationScope: _mod9757.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod9757;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod9757;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod9778.captureEvent,
    addBreadcrumb: _mod9803.addBreadcrumb,
    setUser: _mod9778.setUser,
    setTags: _mod9778.setTags,
    setTag: _mod9778.setTag,
    setExtra: _mod9778.setExtra,
    setExtras: _mod9778.setExtras,
    setContext: _mod9778.setContext,
    getIntegration(id) {
      const obj = _mod9757;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod9778.startSession,
    endSession: _mod9778.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod9778;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod9757;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod9757;
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

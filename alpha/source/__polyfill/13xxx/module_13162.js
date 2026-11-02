// Module ID: 13162
// Function ID: 13163
// Dependencies: [13081, 13102, 13127]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13162
import _mod13081 from "module_13081" /* 13081 */;
import _mod13102 from "module_13102" /* 13102 */;
import _mod13127 from "module_13127" /* 13127 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13081;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13081.withScope,
    getClient() {
      const obj = _mod13081;
      return obj.getClient();
    },
    getScope: _mod13081.getCurrentScope,
    getIsolationScope: _mod13081.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13081;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13081;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13102.captureEvent,
    addBreadcrumb: _mod13127.addBreadcrumb,
    setUser: _mod13102.setUser,
    setTags: _mod13102.setTags,
    setTag: _mod13102.setTag,
    setExtra: _mod13102.setExtra,
    setExtras: _mod13102.setExtras,
    setContext: _mod13102.setContext,
    getIntegration(id) {
      const obj = _mod13081;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13102.startSession,
    endSession: _mod13102.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13102;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13081;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13081;
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

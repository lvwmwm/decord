// Module ID: 13417
// Function ID: 13418
// Dependencies: [13336, 13357, 13382]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13417
import _mod13336 from "module_13336" /* 13336 */;
import _mod13357 from "module_13357" /* 13357 */;
import _mod13382 from "module_13382" /* 13382 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13336;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13336.withScope,
    getClient() {
      const obj = _mod13336;
      return obj.getClient();
    },
    getScope: _mod13336.getCurrentScope,
    getIsolationScope: _mod13336.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13336;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13336;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13357.captureEvent,
    addBreadcrumb: _mod13382.addBreadcrumb,
    setUser: _mod13357.setUser,
    setTags: _mod13357.setTags,
    setTag: _mod13357.setTag,
    setExtra: _mod13357.setExtra,
    setExtras: _mod13357.setExtras,
    setContext: _mod13357.setContext,
    getIntegration(id) {
      const obj = _mod13336;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13357.startSession,
    endSession: _mod13357.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13357;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13336;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13336;
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

// Module ID: 13298
// Function ID: 13299
// Dependencies: [13217, 13238, 13263]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13298
import _mod13217 from "module_13217" /* 13217 */;
import _mod13238 from "module_13238" /* 13238 */;
import _mod13263 from "module_13263" /* 13263 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13217;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13217.withScope,
    getClient() {
      const obj = _mod13217;
      return obj.getClient();
    },
    getScope: _mod13217.getCurrentScope,
    getIsolationScope: _mod13217.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13217;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13217;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13238.captureEvent,
    addBreadcrumb: _mod13263.addBreadcrumb,
    setUser: _mod13238.setUser,
    setTags: _mod13238.setTags,
    setTag: _mod13238.setTag,
    setExtra: _mod13238.setExtra,
    setExtras: _mod13238.setExtras,
    setContext: _mod13238.setContext,
    getIntegration(id) {
      const obj = _mod13217;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13238.startSession,
    endSession: _mod13238.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13238;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13217;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13217;
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

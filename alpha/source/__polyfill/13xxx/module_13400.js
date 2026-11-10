// Module ID: 13400
// Function ID: 13401
// Dependencies: [13319, 13340, 13365]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13400
import _mod13319 from "module_13319" /* 13319 */;
import _mod13340 from "module_13340" /* 13340 */;
import _mod13365 from "module_13365" /* 13365 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13319;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13319.withScope,
    getClient() {
      const obj = _mod13319;
      return obj.getClient();
    },
    getScope: _mod13319.getCurrentScope,
    getIsolationScope: _mod13319.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13319;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13319;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13340.captureEvent,
    addBreadcrumb: _mod13365.addBreadcrumb,
    setUser: _mod13340.setUser,
    setTags: _mod13340.setTags,
    setTag: _mod13340.setTag,
    setExtra: _mod13340.setExtra,
    setExtras: _mod13340.setExtras,
    setContext: _mod13340.setContext,
    getIntegration(id) {
      const obj = _mod13319;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13340.startSession,
    endSession: _mod13340.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13340;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13319;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13319;
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

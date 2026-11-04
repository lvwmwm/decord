// Module ID: 13382
// Function ID: 13383
// Dependencies: [13301, 13322, 13347]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13382
import _mod13301 from "module_13301" /* 13301 */;
import _mod13322 from "module_13322" /* 13322 */;
import _mod13347 from "module_13347" /* 13347 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13301;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13301.withScope,
    getClient() {
      const obj = _mod13301;
      return obj.getClient();
    },
    getScope: _mod13301.getCurrentScope,
    getIsolationScope: _mod13301.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13301;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13301;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13322.captureEvent,
    addBreadcrumb: _mod13347.addBreadcrumb,
    setUser: _mod13322.setUser,
    setTags: _mod13322.setTags,
    setTag: _mod13322.setTag,
    setExtra: _mod13322.setExtra,
    setExtras: _mod13322.setExtras,
    setContext: _mod13322.setContext,
    getIntegration(id) {
      const obj = _mod13301;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13322.startSession,
    endSession: _mod13322.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13322;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13301;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13301;
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

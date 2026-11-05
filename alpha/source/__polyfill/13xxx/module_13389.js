// Module ID: 13389
// Function ID: 13390
// Dependencies: [13308, 13329, 13354]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13389
import _mod13308 from "module_13308" /* 13308 */;
import _mod13329 from "module_13329" /* 13329 */;
import _mod13354 from "module_13354" /* 13354 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13308;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13308.withScope,
    getClient() {
      const obj = _mod13308;
      return obj.getClient();
    },
    getScope: _mod13308.getCurrentScope,
    getIsolationScope: _mod13308.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13308;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13308;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13329.captureEvent,
    addBreadcrumb: _mod13354.addBreadcrumb,
    setUser: _mod13329.setUser,
    setTags: _mod13329.setTags,
    setTag: _mod13329.setTag,
    setExtra: _mod13329.setExtra,
    setExtras: _mod13329.setExtras,
    setContext: _mod13329.setContext,
    getIntegration(id) {
      const obj = _mod13308;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13329.startSession,
    endSession: _mod13329.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13329;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13308;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13308;
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

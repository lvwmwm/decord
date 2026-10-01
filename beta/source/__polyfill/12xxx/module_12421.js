// Module ID: 12421
// Function ID: 12422
// Dependencies: [12340, 12361, 12386]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12421
import _mod12340 from "module_12340" /* 12340 */;
import _mod12361 from "module_12361" /* 12361 */;
import _mod12386 from "module_12386" /* 12386 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12340;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12340.withScope,
    getClient() {
      const obj = _mod12340;
      return obj.getClient();
    },
    getScope: _mod12340.getCurrentScope,
    getIsolationScope: _mod12340.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12340;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12340;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12361.captureEvent,
    addBreadcrumb: _mod12386.addBreadcrumb,
    setUser: _mod12361.setUser,
    setTags: _mod12361.setTags,
    setTag: _mod12361.setTag,
    setExtra: _mod12361.setExtra,
    setExtras: _mod12361.setExtras,
    setContext: _mod12361.setContext,
    getIntegration(id) {
      const obj = _mod12340;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12361.startSession,
    endSession: _mod12361.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12361;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12340;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12340;
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

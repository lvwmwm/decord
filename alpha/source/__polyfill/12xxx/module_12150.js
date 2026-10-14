// Module ID: 12150
// Function ID: 12151
// Dependencies: [12069, 12090, 12115]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12150
import _mod12069 from "module_12069" /* 12069 */;
import _mod12090 from "module_12090" /* 12090 */;
import _mod12115 from "module_12115" /* 12115 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12069;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12069.withScope,
    getClient() {
      const obj = _mod12069;
      return obj.getClient();
    },
    getScope: _mod12069.getCurrentScope,
    getIsolationScope: _mod12069.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12069;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12069;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12090.captureEvent,
    addBreadcrumb: _mod12115.addBreadcrumb,
    setUser: _mod12090.setUser,
    setTags: _mod12090.setTags,
    setTag: _mod12090.setTag,
    setExtra: _mod12090.setExtra,
    setExtras: _mod12090.setExtras,
    setContext: _mod12090.setContext,
    getIntegration(id) {
      const obj = _mod12069;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12090.startSession,
    endSession: _mod12090.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12090;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12069;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12069;
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

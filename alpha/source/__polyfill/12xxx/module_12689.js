// Module ID: 12689
// Function ID: 12690
// Dependencies: [12608, 12629, 12654]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12689
import _mod12608 from "module_12608" /* 12608 */;
import _mod12629 from "module_12629" /* 12629 */;
import _mod12654 from "module_12654" /* 12654 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12608;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12608.withScope,
    getClient() {
      const obj = _mod12608;
      return obj.getClient();
    },
    getScope: _mod12608.getCurrentScope,
    getIsolationScope: _mod12608.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12608;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12608;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12629.captureEvent,
    addBreadcrumb: _mod12654.addBreadcrumb,
    setUser: _mod12629.setUser,
    setTags: _mod12629.setTags,
    setTag: _mod12629.setTag,
    setExtra: _mod12629.setExtra,
    setExtras: _mod12629.setExtras,
    setContext: _mod12629.setContext,
    getIntegration(id) {
      const obj = _mod12608;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12629.startSession,
    endSession: _mod12629.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12629;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12608;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12608;
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

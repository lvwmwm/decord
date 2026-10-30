// Module ID: 13112
// Function ID: 13113
// Dependencies: [13031, 13052, 13077]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13112
import _mod13031 from "module_13031" /* 13031 */;
import _mod13052 from "module_13052" /* 13052 */;
import _mod13077 from "module_13077" /* 13077 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod13031;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13031.withScope,
    getClient() {
      const obj = _mod13031;
      return obj.getClient();
    },
    getScope: _mod13031.getCurrentScope,
    getIsolationScope: _mod13031.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod13031;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod13031;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod13052.captureEvent,
    addBreadcrumb: _mod13077.addBreadcrumb,
    setUser: _mod13052.setUser,
    setTags: _mod13052.setTags,
    setTag: _mod13052.setTag,
    setExtra: _mod13052.setExtra,
    setExtras: _mod13052.setExtras,
    setContext: _mod13052.setContext,
    getIntegration(id) {
      const obj = _mod13031;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod13052.startSession,
    endSession: _mod13052.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod13052;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod13031;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod13031;
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

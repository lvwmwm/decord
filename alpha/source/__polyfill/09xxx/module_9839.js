// Module ID: 9839
// Function ID: 9840
// Dependencies: [9758, 9779, 9804]
// Exports: getCurrentHub, getCurrentHubShim

// Module 9839
import _mod9758 from "module_9758" /* 9758 */;
import _mod9779 from "module_9779" /* 9779 */;
import _mod9804 from "module_9804" /* 9804 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod9758;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod9758.withScope,
    getClient() {
      const obj = _mod9758;
      return obj.getClient();
    },
    getScope: _mod9758.getCurrentScope,
    getIsolationScope: _mod9758.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod9758;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod9758;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod9779.captureEvent,
    addBreadcrumb: _mod9804.addBreadcrumb,
    setUser: _mod9779.setUser,
    setTags: _mod9779.setTags,
    setTag: _mod9779.setTag,
    setExtra: _mod9779.setExtra,
    setExtras: _mod9779.setExtras,
    setContext: _mod9779.setContext,
    getIntegration(id) {
      const obj = _mod9758;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod9779.startSession,
    endSession: _mod9779.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod9779;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod9758;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod9758;
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

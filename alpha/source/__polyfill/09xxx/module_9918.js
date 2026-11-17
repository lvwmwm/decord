// Module ID: 9918
// Function ID: 9919
// Dependencies: [9837, 9858, 9883]
// Exports: getCurrentHub, getCurrentHubShim

// Module 9918
import _mod9837 from "module_9837" /* 9837 */;
import _mod9858 from "module_9858" /* 9858 */;
import _mod9883 from "module_9883" /* 9883 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod9837;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod9837.withScope,
    getClient() {
      const obj = _mod9837;
      return obj.getClient();
    },
    getScope: _mod9837.getCurrentScope,
    getIsolationScope: _mod9837.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod9837;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod9837;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod9858.captureEvent,
    addBreadcrumb: _mod9883.addBreadcrumb,
    setUser: _mod9858.setUser,
    setTags: _mod9858.setTags,
    setTag: _mod9858.setTag,
    setExtra: _mod9858.setExtra,
    setExtras: _mod9858.setExtras,
    setContext: _mod9858.setContext,
    getIntegration(id) {
      const obj = _mod9837;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod9858.startSession,
    endSession: _mod9858.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod9858;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod9837;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod9837;
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

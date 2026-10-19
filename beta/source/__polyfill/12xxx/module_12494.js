// Module ID: 12494
// Function ID: 12495
// Dependencies: [12413, 12434, 12459]
// Exports: getCurrentHub, getCurrentHubShim

// Module 12494
import _mod12413 from "module_12413" /* 12413 */;
import _mod12434 from "module_12434" /* 12434 */;
import _mod12459 from "module_12459" /* 12459 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12413;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12413.withScope,
    getClient() {
      const obj = _mod12413;
      return obj.getClient();
    },
    getScope: _mod12413.getCurrentScope,
    getIsolationScope: _mod12413.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12413;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12413;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12434.captureEvent,
    addBreadcrumb: _mod12459.addBreadcrumb,
    setUser: _mod12434.setUser,
    setTags: _mod12434.setTags,
    setTag: _mod12434.setTag,
    setExtra: _mod12434.setExtra,
    setExtras: _mod12434.setExtras,
    setContext: _mod12434.setContext,
    getIntegration(id) {
      const obj = _mod12413;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12434.startSession,
    endSession: _mod12434.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12434;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12413;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12413;
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

// Module ID: 13038
// Function ID: 13039
// Dependencies: [12957, 12978, 13003]
// Exports: getCurrentHub, getCurrentHubShim

// Module 13038
import _mod12957 from "module_12957" /* 12957 */;
import _flush from "_flush" /* 12978 */;
import _mod13003 from "module_13003" /* 13003 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12957.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12957.withScope,
    getClient() {
      return _mod12957.getClient();
    },
    getScope: _mod12957.getCurrentScope,
    getIsolationScope: _mod12957.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12957.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12957.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13003.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12957.getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: _flush.startSession,
    endSession: _flush.endSession,
    captureSession(arg0) {
      if (arg0) {
        return tmp(tmp2[1]).endSession();
      } else {
        const currentScope = tmp(tmp2[0]).getCurrentScope();
        const tmpResult3 = tmp(tmp2[0]);
        const client = tmp(tmp2[0]).getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };

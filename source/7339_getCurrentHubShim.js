// Module ID: 7339
// Function ID: 59193
// Name: getCurrentHubShim
// Dependencies: []

// Module 7339 (getCurrentHubShim)
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(closure_1[0]).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: arg1(arg6[0]).withScope,
    getClient() {
      return callback(closure_1[0]).getClient();
    },
    getScope: arg1(arg6[0]).getCurrentScope,
    getIsolationScope: arg1(arg6[0]).getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(closure_1[0]).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(closure_1[0]).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: arg1(arg6[1]).captureEvent,
    addBreadcrumb: arg1(arg6[2]).addBreadcrumb,
    setUser: arg1(arg6[1]).setUser,
    setTags: arg1(arg6[1]).setTags,
    setTag: arg1(arg6[1]).setTag,
    setExtra: arg1(arg6[1]).setExtra,
    setExtras: arg1(arg6[1]).setExtras,
    setContext: arg1(arg6[1]).setContext,
    getIntegration(id) {
      const client = callback(closure_1[0]).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: arg1(arg6[1]).startSession,
    endSession: arg1(arg6[1]).endSession,
    captureSession(arg0) {
      if (arg0) {
        let tmpResult = tmp(tmp2[1]);
        return tmpResult.endSession();
      } else {
        tmpResult = tmp(tmp2[0]);
        const currentScope = tmpResult.getCurrentScope();
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
arg5.getCurrentHub = getCurrentHubShim;
arg5.getCurrentHubShim = getCurrentHubShim;

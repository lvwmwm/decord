// Module ID: 6455
// Function ID: 57798
// Name: getCurrentHubShim
// Dependencies: [6374, 6395, 6420]

// Module 6455 (getCurrentHubShim)
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = outer1_0(outer1_1[0]).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require(6374) /* getCurrentScope */.withScope,
    getClient() {
      return outer1_0(outer1_1[0]).getClient();
    },
    getScope: require(6374) /* getCurrentScope */.getCurrentScope,
    getIsolationScope: require(6374) /* getCurrentScope */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = outer1_0(outer1_1[0]).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = outer1_0(outer1_1[0]).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require(6395) /* captureCheckIn */.captureEvent,
    addBreadcrumb: require(6420) /* addBreadcrumb */.addBreadcrumb,
    setUser: require(6395) /* captureCheckIn */.setUser,
    setTags: require(6395) /* captureCheckIn */.setTags,
    setTag: require(6395) /* captureCheckIn */.setTag,
    setExtra: require(6395) /* captureCheckIn */.setExtra,
    setExtras: require(6395) /* captureCheckIn */.setExtras,
    setContext: require(6395) /* captureCheckIn */.setContext,
    getIntegration(id) {
      const client = outer1_0(outer1_1[0]).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: require(6395) /* captureCheckIn */.startSession,
    endSession: require(6395) /* captureCheckIn */.endSession,
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

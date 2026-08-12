// Module ID: 7603
// Function ID: 7604
// Name: getCurrentHubShim
// Dependencies: [7522, 7543, 7568]

// Module 7603 (getCurrentHubShim)
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(7522).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require(7522) /* getClient */.withScope,
    getClient() {
      return callback(7522).getClient();
    },
    getScope: require(7522) /* getClient */.getCurrentScope,
    getIsolationScope: require(7522) /* getClient */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(7522).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(7522).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require(7543) /* _flush */.captureEvent,
    addBreadcrumb: require(7568) /* addBreadcrumb */.addBreadcrumb,
    setUser: require(7543) /* _flush */.setUser,
    setTags: require(7543) /* _flush */.setTags,
    setTag: require(7543) /* _flush */.setTag,
    setExtra: require(7543) /* _flush */.setExtra,
    setExtras: require(7543) /* _flush */.setExtras,
    setContext: require(7543) /* _flush */.setContext,
    getIntegration(id) {
      const client = callback(7522).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: require(7543) /* _flush */.startSession,
    endSession: require(7543) /* _flush */.endSession,
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

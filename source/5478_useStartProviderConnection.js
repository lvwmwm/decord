// Module ID: 5478
// Function ID: 46714
// Name: useStartProviderConnection
// Dependencies: []
// Exports: useStartProviderConnection

// Module 5478 (useStartProviderConnection)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = function useStartProviderConnection(provider_id) {
  let account;
  let canConnect;
  let hasConnection;
  let loading;
  let obj = arg1(dependencyMap[2]);
  const providerConnection = obj.useProviderConnection(provider_id);
  const startConnection = providerConnection.startConnection;
  const arg1 = startConnection;
  ({ loading, hasConnection, canConnect, account } = providerConnection);
  const items = [startConnection];
  obj = {
    loading,
    hasConnection,
    canConnect,
    startConnection: React.useCallback(() => {
      let closure_0 = callback(async (arg0) => {
        const tmp = yield closure_0(arg0);
        if (tmp.success) {
          if (null != tmp2.url) {
            let obj = callback(closure_2[3]);
            yield obj.openURL(tmp.url);
            obj = { success: true };
            return obj;
          }
        }
        return { success: false };
      });
      return function() {
        return callback(...arguments);
      };
    }(), items),
    account
  };
  return obj;
};

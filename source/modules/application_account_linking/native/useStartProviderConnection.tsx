// Module ID: 5480
// Function ID: 46792
// Name: useStartProviderConnection
// Dependencies: [5, 31, 5481, 3827, 2]
// Exports: useStartProviderConnection

// Module 5480 (useStartProviderConnection)
import asyncGeneratorStep from "asyncGeneratorStep";
import result from "result";

const require = arg1;
const result = require("useProviderConnection").fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = function useStartProviderConnection(provider_id) {
  let account;
  let canConnect;
  let hasConnection;
  let loading;
  let obj = startConnection(5481);
  const providerConnection = obj.useProviderConnection(provider_id);
  startConnection = providerConnection.startConnection;
  ({ loading, hasConnection, canConnect, account } = providerConnection);
  const items = [startConnection];
  obj = {
    loading,
    hasConnection,
    canConnect,
    startConnection: React.useCallback((() => {
      let closure_0 = outer1_3(async (arg0) => {
        const tmp = yield closure_0(arg0);
        if (tmp.success) {
          if (null != tmp2.url) {
            let obj = outer3_1(outer3_2[3]);
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
    })(), items),
    account
  };
  return obj;
};

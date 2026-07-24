// Module ID: 5481
// Function ID: 46798
// Name: useProviderConnection
// Dependencies: [5, 31, 4812, 566, 4938, 2]
// Exports: useProviderConnection

// Module 5481 (useProviderConnection)
import set from "set";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_account_linking/hooks/useProviderConnection.tsx");

export const useProviderConnection = function useProviderConnection(provider_id) {
  const _require = provider_id;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let account = null;
    if (null != closure_0) {
      account = outer1_5.getAccount(null, closure_0);
    }
    return account;
  });
  const items1 = [_isNativeReflectConstruct];
  let tmp3 = null != stateFromStores;
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_5.isFetching());
  if (tmp3) {
    tmp3 = !stateFromStores.revoked;
  }
  const items2 = [provider_id];
  obj = {
    loading: stateFromStores1,
    hasConnection: tmp3,
    canConnect: null != provider_id,
    startConnection: React.useCallback((() => {
      let closure_0 = outer1_3(async (arg0) => {
        if (null == closure_0) {
          let obj = { success: false };
          return obj;
        } else {
          obj = {};
          let str = "Account Linking";
          if (null != arg0) {
            str = arg0;
          }
          obj.location = str;
          const tmp = yield outer3_1(outer3_2[4]).authorize(closure_0, obj);
          if (tmp.ok) {
            const body = tmp2.body;
            let url;
            if (null != body) {
              url = body.url;
            }
            if (null != url) {
              const obj1 = { success: true, url: tmp.body.url };
              obj = obj1;
            }
            return obj;
          }
          obj = { success: false };
          const obj4 = outer3_1(outer3_2[4]);
          const tmp8 = closure_0;
        }
      });
      return function() {
        return callback(...arguments);
      };
    })(), items2),
    account: stateFromStores
  };
  return obj;
};

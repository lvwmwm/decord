// Module ID: 5479
// Function ID: 46720
// Name: useProviderConnection
// Dependencies: []
// Exports: useProviderConnection

// Module 5479 (useProviderConnection)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/application_account_linking/hooks/useProviderConnection.tsx");

export const useProviderConnection = function useProviderConnection(provider_id) {
  const arg1 = provider_id;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let account = null;
    if (null != arg0) {
      account = closure_5.getAccount(null, arg0);
    }
    return account;
  });
  const items1 = [closure_5];
  let tmp3 = null != stateFromStores;
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => closure_5.isFetching());
  if (tmp3) {
    tmp3 = !stateFromStores.revoked;
  }
  const items2 = [provider_id];
  obj = {
    loading: stateFromStores1,
    hasConnection: tmp3,
    canConnect: null != provider_id,
    startConnection: React.useCallback(() => {
      let closure_0 = callback(async (arg0) => {
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
          const tmp = yield callback(closure_2[4]).authorize(closure_0, obj);
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
          const obj4 = callback(closure_2[4]);
          const tmp8 = closure_0;
        }
      });
      return function() {
        return callback(...arguments);
      };
    }(), items2),
    account: stateFromStores
  };
  return obj;
};

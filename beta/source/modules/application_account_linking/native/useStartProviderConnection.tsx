// Module ID: 6601
// Function ID: 6602
// Name: useStartProviderConnection
// Dependencies: [5, 19, 6602, 4525, 2]
// Exports: useStartProviderConnection

// Module 6601 (useStartProviderConnection)
import LinkingDefault from "Linking" /* 4525 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6;

const result = size.fileFinishedImporting("modules/application_account_linking/native/useStartProviderConnection.tsx");

export const useStartProviderConnection = function useStartProviderConnection(provider_id) {
  let account;
  let canConnect;
  let hasConnection;
  let loading;
  let startConnection;
  let obj = startConnection(6602);
  const providerConnection = obj.useProviderConnection(provider_id);
  startConnection = providerConnection.startConnection;
  ({ loading, hasConnection, canConnect, account } = providerConnection);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            c5 = 1;
            c6 = 1;
            const obj4 = { value: closure_0(closure_0), done: false };
            return obj4;
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            if (closure_0.success) {
              if (null != closure_0.url) {
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj7 = { value: obj5.openURL(closure_0.url), done: false };
                obj5 = LinkingDefault;
                return obj7;
              }
            }
            c6 = 3;
            const obj8 = { value: { success: false }, done: true };
            return obj8;
          }
        } else if (2 === c5) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value: { success: false }, done: true };
          return obj9;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value: { success: true }, done: true };
          return obj;
        }
      } catch (tmp15) {
        let closure_3 = tmp15;
        if (0 === c4) {
          c6 = 3;
          throw tmp15;
        } else {
          c5 = 2;
        }
      }
    }
  });
  const items = [startConnection];
  let obj2 = {
    loading,
    hasConnection,
    canConnect,
    startConnection: useCallback(function() {
      return closure_0(...arguments);
    }, items),
    account
  };
  return obj2;
};

// Module ID: 14783
// Function ID: 112732
// Name: useMultiAccountUsers
// Dependencies: [31, 1849, 11482, 566, 686, 11486, 2]
// Exports: useMultiAccountUsers

// Module 14783 (useMultiAccountUsers)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { MultiAccountTokenStatus } from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  let items = [closure_6, _isNativeReflectConstruct];
  const stateFromStoresObject = require(566) /* initialize */.useStateFromStoresObject(items, () => {
    const users = outer1_6.getUsers();
    const currentUser = outer1_5.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((id) => id.id === currentUser.id)) {
        let obj = { isLoading: outer1_6.getIsValidatingUsers() };
        obj = {};
        ({ id: obj3.id, avatar: obj3.avatar, username: obj3.username, discriminator: obj3.discriminator } = currentUser);
        obj.tokenStatus = outer1_7.VALID;
        obj.pushSyncToken = null;
        const items = [obj];
        HermesBuiltin.arraySpread(users, 1);
        obj.multiAccountUsers = items;
      }
      return obj;
    }
    obj = { isLoading: outer1_6.getIsValidatingUsers(), multiAccountUsers: users };
  });
  const effect = React.useEffect(() => {
    outer1_1(outer1_3[4]).wait(() => {
      const result = outer2_2(outer2_3[5]).validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
};

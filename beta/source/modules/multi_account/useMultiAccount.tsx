// Module ID: 15575
// Function ID: 15576
// Name: useMultiAccount
// Dependencies: [19, 1372, 11906, 504, 573, 11910, 2]
// Exports: useMultiAccountUsers

// Module 15575 (useMultiAccount)
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import MultiAccountStore2 from "MultiAccountStore" /* 11906 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const MultiAccountStore = MultiAccountStore2;
let currentUser, users;

const MultiAccountTokenStatus = MultiAccountStore2.MultiAccountTokenStatus;
let result = size.fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  let obj = get_initialized;
  let items = [MultiAccountStore, UserStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let items;
    users = users.getUsers();
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      let obj2;
      if (!users.some((id) => id.id === currentUser.id)) {
        obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: items };
        const obj3 = { id: null, avatar: null, username: null, discriminator: null, tokenStatus: constants.VALID, pushSyncToken: null };
        ({ id: obj4.id, avatar: obj4.avatar, username: obj4.username, discriminator: obj4.discriminator } = currentUser);
        items = [obj3];
        HermesBuiltin.arraySpread(items, users, 1);
      }
      return obj2;
    }
    obj2 = { isLoading: users.getIsValidatingUsers(), multiAccountUsers: users };
    ({ isLoading: users.getIsValidatingUsers(), multiAccountUsers: users });
  });
  const effect = react.useEffect(() => {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = closure_1_2(closure_1_3[5]);
      const result = obj.validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
};

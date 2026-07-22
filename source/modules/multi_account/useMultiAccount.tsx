// Module ID: 14621
// Function ID: 110247
// Name: useMultiAccountUsers
// Dependencies: []
// Exports: useMultiAccountUsers

// Module 14621 (useMultiAccountUsers)
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const MultiAccountTokenStatus = arg1(dependencyMap[2]).MultiAccountTokenStatus;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/multi_account/useMultiAccount.tsx");

export const useMultiAccountUsers = function useMultiAccountUsers() {
  const items = [closure_6, closure_5];
  const stateFromStoresObject = arg1(dependencyMap[3]).useStateFromStoresObject(items, () => {
    const users = authStore.getUsers();
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (!users.some((id) => id.id === currentUser.id)) {
        let obj = { isLoading: authStore.getIsValidatingUsers() };
        obj = {};
        ({ id: obj3.id, avatar: obj3.avatar, username: obj3.username, discriminator: obj3.discriminator } = currentUser);
        obj.tokenStatus = constants.VALID;
        obj.pushSyncToken = null;
        const items = [obj];
        HermesBuiltin.arraySpread(users, 1);
        obj.multiAccountUsers = items;
      }
      return obj;
    }
    obj = { isLoading: authStore.getIsValidatingUsers(), multiAccountUsers: users };
  });
  const effect = React.useEffect(() => {
    callback(closure_3[4]).wait(() => {
      const result = callback(closure_3[5]).validateMultiAccountTokens();
    });
  }, []);
  return stateFromStoresObject;
};

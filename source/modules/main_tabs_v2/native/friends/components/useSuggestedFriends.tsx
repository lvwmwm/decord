// Module ID: 14798
// Function ID: 111513
// Name: useSuggestedFriends
// Dependencies: []
// Exports: default

// Module 14798 (useSuggestedFriends)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const SuggestedFriendSource = arg1(dependencyMap[3]).SuggestedFriendSource;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  const isConnected = obj.isConnected;
  const items = [closure_5];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  const arg1 = stateFromStoresArray;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  const importDefault = first;
  let tmp3 = null == isConnected;
  if (!tmp3) {
    tmp3 = isConnected;
  }
  const dependencyMap = tmp3;
  const items1 = [first, stateFromStoresArray, tmp3];
  const memo = React.useMemo(() => {
    if (tmp3) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = { user: user.user };
        const name = user.name;
        let tmp;
        if (null != name) {
          tmp = name;
        }
        obj.friendSuggestionName = tmp;
        obj.source = constants.USER_SUGGESTIONS;
        obj.contactNames = user.contactNames;
        return obj;
      });
      const obj = first(stateFromStoresArray[5]);
      return first(stateFromStoresArray[5]).unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = callback(closure_2[6]).getName(user.user);
        const obj = callback(closure_2[6]);
        return name.localeCompare(callback(closure_2[6]).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  obj = { added: first, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: tmp3 ? memo.length : stateFromStoresArray.length };
  return obj;
};

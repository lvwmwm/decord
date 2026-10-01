// Module ID: 15679
// Function ID: 15680
// Name: useSuggestedFriends
// Dependencies: [32, 19, 7075, 12196, 563, 12, 4678, 2]
// Exports: default

// Module 15679 (useSuggestedFriends)
import _modDef12 from "module_12" /* 12 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12196 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7075 */;
import size from "module_2" /* 2 */;

const SuggestedFriendSource = FriendsScreenConstants.SuggestedFriendSource;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let added;
  let stateFromStoresArray;
  let suggestions;
  let tmp3;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  let obj2 = stateFromStoresArray(flag[4]);
  const items = [FriendSuggestionStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  [added, tmp3] = react.useState([]);
  const obj3 = react;
  if (flag == null) {
    flag = true;
  }
  const items1 = [added, stateFromStoresArray, flag];
  const memo = obj3.useMemo(() => {
    const tmp = flag;
    if (tmp) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        let name;
        const obj = { user: user.user, friendSuggestionName: name, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
        name = user.name;
        return obj;
      });
      let obj = _modDef12;
      const unionByResult = obj.unionBy(found, mapped, (user) => user.user.id);
      return unionByResult.sort((user, user2) => {
        const obj = added(flag[6]);
        const name = obj.getName(user.user);
        const localeCompare = name.localeCompare;
        const obj2 = added(flag[6]);
        return localeCompare(obj2.getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  return { added, setAdded: tmp3, friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
};

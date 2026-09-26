// Module ID: 16388
// Function ID: 16389
// Name: useSuggestedFriends
// Dependencies: [32, 19, 7930, 12981, 563, 12, 4632, 2]
// Exports: default

// Module 16388 (useSuggestedFriends)
import _modDef12 from "module_12" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7930 */;

const require = fn;
const SuggestedFriendSource = fn(12981).SuggestedFriendSource;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  const items = [FriendSuggestionStore];
  stateFromStoresArray = stateFromStoresArray(flag[4]).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  const tmp = _slicedToArray(noop.useState([]), 2);
  const added = tmp[0];
  if (flag == null) {
    flag = true;
  }
  const items1 = [added, stateFromStoresArray, flag];
  const memo = noop.useMemo(() => {
    if (flag) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = { user: user.user, friendSuggestionName: null, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
        const name = user.name;
        obj.friendSuggestionName = name;
        return obj;
      });
      return _modDef12.unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = added(4632).getName(user.user);
        const obj = added(4632);
        return name.localeCompare(added(4632).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  return { added, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
};

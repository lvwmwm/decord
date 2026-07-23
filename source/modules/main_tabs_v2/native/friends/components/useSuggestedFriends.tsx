// Module ID: 14914
// Function ID: 113681
// Name: useSuggestedFriends
// Dependencies: [57, 31, 6905, 11728, 624, 22, 3969, 2]
// Exports: default

// Module 14914 (useSuggestedFriends)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SuggestedFriendSource } from "SuggestedFriendSource";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default function useSuggestedFriends(arg0) {
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  const isConnected = obj.isConnected;
  const items = [_isNativeReflectConstruct];
  stateFromStoresArray = stateFromStoresArray(624).useStateFromStoresArray(items, () => outer1_5.getSuggestions());
  let tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  let tmp3 = null == isConnected;
  if (!tmp3) {
    tmp3 = isConnected;
  }
  const dependencyMap = tmp3;
  const items1 = [first, stateFromStoresArray, tmp3];
  const memo = React.useMemo(() => {
    if (tmp3) {
      const found = first.filter((source) => source.source === outer2_6.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        const obj = { user: user.user };
        const name = user.name;
        let tmp;
        if (null != name) {
          tmp = name;
        }
        obj.friendSuggestionName = tmp;
        obj.source = outer2_6.USER_SUGGESTIONS;
        obj.contactNames = user.contactNames;
        return obj;
      });
      let obj = first(stateFromStoresArray[5]);
      return first(stateFromStoresArray[5]).unionBy(found, mapped, (user) => user.user.id).sort((user, user2) => {
        const name = first(3969).getName(user.user);
        const obj = first(3969);
        return name.localeCompare(first(3969).getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  obj = { added: first, setAdded: tmp[1], friendSuggestions: memo, numFriendSuggestions: tmp3 ? memo.length : stateFromStoresArray.length };
  return obj;
};

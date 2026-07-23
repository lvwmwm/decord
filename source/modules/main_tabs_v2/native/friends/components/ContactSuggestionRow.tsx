// Module ID: 15459
// Function ID: 118989
// Name: ContactSuggestionRow
// Dependencies: [31, 4122, 653, 33, 3969, 3991, 1212, 624, 14912, 14911, 8834, 15169, 15170, 675, 2]
// Exports: ContactSuggestionRow

// Module 15459 (ContactSuggestionRow)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ AnalyticEvents: closure_5, InstantInviteSources: closure_6, RelationshipTypes: closure_7 } = ME);
let closure_9 = { ADD: "add" };
let result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = function ContactSuggestionRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  const added = suggestedFriend.added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  let obj = { suggestedFriend: 0, added: 0, onAddSuggestion: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(suggestedFriend, obj);
  let sharedValue;
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    let obj2 = suggestedFriend(onAddSuggestion[5]);
    sharedValue = obj2.useSharedValue(false);
    let items = [added, sharedValue];
    const effect = merged.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = merged.useMemo(() => {
      if (added) {
        let items = [];
      } else {
        const obj = { name: outer1_9.ADD };
        const intl = suggestedFriend(onAddSuggestion[6]).intl;
        obj.label = intl.string(suggestedFriend(onAddSuggestion[6]).t["ed99+i"]);
        items = [obj];
      }
      return items;
    }, items1);
    const items2 = [sharedValue];
    const stateFromStores = suggestedFriend(onAddSuggestion[7]).useStateFromStores(items2, () => sharedValue.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = merged.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.actionName === outer1_9.ADD) {
        const result = sharedValue.set(true);
        onAddSuggestion(suggestedFriend.user);
        return suggestedFriend(onAddSuggestion[8]).addContactSuggestion(suggestedFriend.user);
      }
    }, items3);
    if (null != suggestedFriend) {
      mutualFriendsCount = suggestedFriend.mutualFriendsCount;
    }
    let tmp13 = null != mutualFriendsCount;
    if (tmp13) {
      let mutualFriendsCount1;
      if (null != suggestedFriend) {
        mutualFriendsCount1 = suggestedFriend.mutualFriendsCount;
      }
      tmp13 = mutualFriendsCount1 > 0;
    }
    const obj4 = suggestedFriend(onAddSuggestion[7]);
    const suggestedContactNameForSuggestion = suggestedFriend(onAddSuggestion[9]).getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      let combined = "" + added(onAddSuggestion[4]).getUserTag(suggestedFriend.user) + " \u00B7 " + suggestedContactNameForSuggestion;
      const obj7 = added(onAddSuggestion[4]);
    } else {
      combined = added(onAddSuggestion[4]).getUserTag(suggestedFriend.user);
      const obj6 = added(onAddSuggestion[4]);
    }
    obj = {};
    const obj5 = suggestedFriend(onAddSuggestion[9]);
    const merged1 = Object.assign(merged);
    obj["user"] = suggestedFriend.user;
    obj["type"] = constants.SUGGESTION;
    obj["accessibilityActions"] = memo;
    obj["onAccessibilityAction"] = callback;
    obj["labelLineClamp"] = 1;
    obj["subLabelLineClamp"] = 1;
    obj["label"] = friendSuggestionName;
    obj = { actioned: sharedValue, label: combined };
    let formatToPlainStringResult;
    if (tmp13) {
      let intl = suggestedFriend(onAddSuggestion[6]).intl;
      let obj1 = {};
      let mutualFriendsCount2;
      if (null != suggestedFriend) {
        mutualFriendsCount2 = suggestedFriend.mutualFriendsCount;
      }
      let str10 = "";
      if (null != mutualFriendsCount2) {
        str10 = mutualFriendsCount2;
      }
      obj1.count = str10;
      formatToPlainStringResult = intl.formatToPlainString(suggestedFriend(onAddSuggestion[6]).t.z7y34b, obj1);
    }
    obj.secondaryLabel = formatToPlainStringResult;
    const intl2 = suggestedFriend(onAddSuggestion[6]).intl;
    obj.actionStatus = intl2.string(suggestedFriend(onAddSuggestion[6]).t.Kzyxm9);
    obj.animate = !stateFromStores;
    obj["subLabel"] = jsx(suggestedFriend(onAddSuggestion[11]).ActionStatusSubLabel, { actioned: sharedValue, label: combined });
    obj2 = {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          let obj = added(onAddSuggestion[13]);
          obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source };
          let ADD_FRIENDS_MODAL = merged.location;
          if (null == ADD_FRIENDS_MODAL) {
            ADD_FRIENDS_MODAL = outer1_6.ADD_FRIENDS_MODAL;
          }
          obj.location = ADD_FRIENDS_MODAL;
          obj.track(outer1_5.FRIEND_SUGGESTION_ADDED, obj);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    };
    obj["trailing"] = jsx(suggestedFriend(onAddSuggestion[12]).ContactSuggestionActions, {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          let obj = added(onAddSuggestion[13]);
          obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source };
          let ADD_FRIENDS_MODAL = merged.location;
          if (null == ADD_FRIENDS_MODAL) {
            ADD_FRIENDS_MODAL = outer1_6.ADD_FRIENDS_MODAL;
          }
          obj.location = ADD_FRIENDS_MODAL;
          obj.track(outer1_5.FRIEND_SUGGESTION_ADDED, obj);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    });
    return jsx(added(onAddSuggestion[10]), { actioned: sharedValue, label: combined });
  }
  obj1 = added(onAddSuggestion[4]);
  friendSuggestionName = obj1.getName(suggestedFriend.user);
};

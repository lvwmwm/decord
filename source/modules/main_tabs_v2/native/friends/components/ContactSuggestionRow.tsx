// Module ID: 15331
// Function ID: 116733
// Name: ContactSuggestionRow
// Dependencies: []
// Exports: ContactSuggestionRow

// Module 15331 (ContactSuggestionRow)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, InstantInviteSources: closure_6, RelationshipTypes: closure_7 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let closure_9 = { ADD: "add" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = function ContactSuggestionRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  const arg1 = suggestedFriend;
  const added = suggestedFriend.added;
  const importDefault = added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  const dependencyMap = onAddSuggestion;
  let obj = { dipslay: "spring", flexDirection: "linear", justifyContent: "easeInEaseOut" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(suggestedFriend, obj);
  const React = merged;
  let closure_4;
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    let obj2 = arg1(dependencyMap[5]);
    const sharedValue = obj2.useSharedValue(false);
    closure_4 = sharedValue;
    const items = [added, sharedValue];
    const effect = React.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = React.useMemo(() => {
      if (added) {
        let items = [];
      } else {
        const obj = { name: constants3.ADD };
        const intl = suggestedFriend(onAddSuggestion[6]).intl;
        obj.label = intl.string(suggestedFriend(onAddSuggestion[6]).t.ed99+i);
        items = [obj];
      }
      return items;
    }, items1);
    const items2 = [closure_4];
    const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items2, () => sharedValue.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = React.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.actionName === constants3.ADD) {
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
    const obj4 = arg1(dependencyMap[7]);
    const suggestedContactNameForSuggestion = arg1(dependencyMap[9]).getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      let combined = "" + importDefault(dependencyMap[4]).getUserTag(suggestedFriend.user) + " \u00B7 " + suggestedContactNameForSuggestion;
      const obj7 = importDefault(dependencyMap[4]);
    } else {
      combined = importDefault(dependencyMap[4]).getUserTag(suggestedFriend.user);
      const obj6 = importDefault(dependencyMap[4]);
    }
    obj = {};
    const obj5 = arg1(dependencyMap[9]);
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
      const intl = arg1(dependencyMap[6]).intl;
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
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[6]).t.z7y34b, obj1);
    }
    obj.secondaryLabel = formatToPlainStringResult;
    const intl2 = arg1(dependencyMap[6]).intl;
    obj.actionStatus = intl2.string(arg1(dependencyMap[6]).t.Kzyxm9);
    obj.animate = !stateFromStores;
    obj["subLabel"] = jsx(arg1(dependencyMap[11]).ActionStatusSubLabel, obj);
    obj2 = {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          let obj = added(onAddSuggestion[13]);
          obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source };
          let ADD_FRIENDS_MODAL = merged.location;
          if (null == ADD_FRIENDS_MODAL) {
            ADD_FRIENDS_MODAL = constants2.ADD_FRIENDS_MODAL;
          }
          obj.location = ADD_FRIENDS_MODAL;
          obj.track(constants.FRIEND_SUGGESTION_ADDED, obj);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    };
    obj["trailing"] = jsx(arg1(dependencyMap[12]).ContactSuggestionActions, obj2);
    return jsx(importDefault(dependencyMap[10]), obj);
  }
  obj1 = importDefault(dependencyMap[4]);
  friendSuggestionName = obj1.getName(suggestedFriend.user);
};

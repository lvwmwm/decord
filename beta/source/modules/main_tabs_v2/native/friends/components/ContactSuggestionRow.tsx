// Module ID: 16590
// Function ID: 16591
// Name: ContactSuggestionRow
// Dependencies: [19, 4825, 1074, 21, 4678, 4566, 1115, 563, 15677, 15676, 10328, 16079, 16080, 1241, 2]
// Exports: ContactSuggestionRow

// Module 16590 (ContactSuggestionRow)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15677 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, InstantInviteSources: metroRequire, RelationshipTypes: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let closure_9 = { ADD: "add" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx");

export const ContactSuggestionRow = function ContactSuggestionRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  const added = suggestedFriend.added;
  const onAddSuggestion = suggestedFriend.onAddSuggestion;
  const merged = Object.assign(suggestedFriend, Object.assign({ suggestedFriend: 0, added: 0, onAddSuggestion: 0 }));
  let sharedValue;
  if (null != suggestedFriend.friendSuggestionName) {
    let friendSuggestionName;
    let combined;
    let tmp15;
    if (suggestedFriend.friendSuggestionName.length > 0) {
      friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    const obj2 = suggestedFriend(onAddSuggestion[5]);
    sharedValue = obj2.useSharedValue(false);
    let items = [added, sharedValue];
    const effect = merged.useEffect(() => {
      const result = sharedValue.set(added);
    }, items);
    const items1 = [added];
    const memo = merged.useMemo(() => {
      let intl;
      let items;
      const tmp = added;
      if (tmp) {
        items = [];
      } else {
        const obj = { name: constants.ADD, label: intl.string(intl3.t["ed99+i"]) };
        intl = intl3.intl;
        items = [obj];
      }
      return items;
    }, items1);
    const items2 = [sharedValue];
    const obj3 = suggestedFriend(onAddSuggestion[7]);
    const stateFromStores = obj3.useStateFromStores(items2, () => sharedValue.useReducedMotion);
    const items3 = [sharedValue, onAddSuggestion, suggestedFriend.user];
    let mutualFriendsCount;
    const callback = merged.useCallback((nativeEvent) => {
      if (nativeEvent.nativeEvent.actionName === constants.ADD) {
        const result = sharedValue.set(true);
        onAddSuggestion(suggestedFriend.user);
        const obj = AddFriendsScreenUtils;
        return obj.addContactSuggestion(suggestedFriend.user);
      }
    }, items3);
    if (suggestedFriend != null) {
      mutualFriendsCount = suggestedFriend.mutualFriendsCount;
    }
    let tmp12 = null != mutualFriendsCount;
    if (tmp12) {
      let mutualFriendsCount1;
      if (suggestedFriend != null) {
        mutualFriendsCount1 = suggestedFriend.mutualFriendsCount;
      }
      tmp12 = mutualFriendsCount1 > 0;
    }
    const tmp2Result = suggestedFriend(onAddSuggestion[9]);
    const suggestedContactNameForSuggestion = tmp2Result.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      const obj6 = added(onAddSuggestion[4]);
      combined = "" + obj6.getUserTag(suggestedFriend.user) + " \u00B7 " + suggestedContactNameForSuggestion;
      tmp15 = added;
    } else {
      tmp15 = added;
      const obj5 = added(onAddSuggestion[4]);
      combined = obj5.getUserTag(suggestedFriend.user);
    }
    tmp15(onAddSuggestion[10]);
    const merged1 = Object.assign(merged);
    let formatToPlainStringResult;
    const ActionStatusSubLabel = tmp2(tmp3[11]).ActionStatusSubLabel;
    if (tmp12) {
      let intl = tmp2(tmp3[6]).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str3;
      const z7y34b = tmp2(tmp3[6]).t.z7y34b;
      if (suggestedFriend != null) {
        str3 = suggestedFriend.mutualFriendsCount;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj8 = { count: str3 };
      formatToPlainStringResult = formatToPlainString(z7y34b, obj8);
    }
    const intl2 = tmp2(tmp3[6]).intl;
    return <tmp15Result user={suggestedFriend.user} type={constants3.SUGGESTION} accessibilityActions={memo} onAccessibilityAction={callback} labelLineClamp={1} subLabelLineClamp={1} label={friendSuggestionName} subLabel={<ActionStatusSubLabel actioned={sharedValue} label={combined} secondaryLabel={formatToPlainStringResult} actionStatus={intl2.string(suggestedFriend(onAddSuggestion[6]).t.Kzyxm9)} animate={!stateFromStores} />} trailing={jsx(suggestedFriend(onAddSuggestion[12]).ContactSuggestionActions, {
      user: suggestedFriend.user,
      added: sharedValue,
      onAddSuggestion(id) {
          let ADD_FRIENDS_MODAL;
          const obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: ADD_FRIENDS_MODAL };
          ADD_FRIENDS_MODAL = merged.location;
          const track = AnalyticsUtilsDefault.track;
          const FRIEND_SUGGESTION_ADDED = hasOwnProperty.FRIEND_SUGGESTION_ADDED;
          AnalyticsUtilsDefault;
          if (ADD_FRIENDS_MODAL == null) {
            ADD_FRIENDS_MODAL = metroRequire.ADD_FRIENDS_MODAL;
          }
          track(FRIEND_SUGGESTION_ADDED, obj);
          onAddSuggestion(id);
        },
      animate: !stateFromStores
    })} />;
  }
  let obj = added(onAddSuggestion[4]);
  friendSuggestionName = obj.getName(suggestedFriend.user);
};

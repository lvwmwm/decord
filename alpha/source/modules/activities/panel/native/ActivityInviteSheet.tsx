// Module ID: 19086
// Function ID: 19087
// Name: ActivityInviteSheet
// Dependencies: [32, 19, 17, 9180, 9114, 1072, 7872, 1083, 21, 5009, 575, 9109, 7320, 7345, 5253, 8742, 9101, 11509, 504, 9131, 7873, 5267, 7315, 1114, 1188, 9134, 7212, 19087, 2]
// Exports: default

// Module 19086 (ActivityInviteSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Constants3 from "Constants" /* 7872 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7873 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9109 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9131 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9180 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9114 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
function Loading() {
  let items1;
  let tmp2;
  const tmp = closure_15();
  const items = [];
  let num = 0;
  do {
    tmp2 = authStore2;
    let obj = { row: num };
    let arr = items.push(authStore2(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.placeholderHeader };
  items1[0] = tmp2(View, obj3);
  const obj4 = { style: tmp.placeholderLabel };
  items1[1] = tmp2(View, obj4);
  items1[2] = items;
  return authStore3(map1, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ setSendState: metroRequire, useInstantInviteSendStates: metroImportDefault } = InstantInviteSendStateStore);
const ActivityActionTypes = Constants.ActivityActionTypes;
const InviteSendStates = Constants3.InviteSendStates;
const NOOP_NULL = Constants2.NOOP_NULL;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderHeader: size, placeholderLabel: size1, emptyState: { backgroundColor: "transparent" }, searchAndShareContainer: obj2 };
size = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: "40%", margin: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  let BottomSheetTitleHeader;
  let SearchBar;
  let _undefined;
  let _undefined2;
  let c2;
  let c4;
  let closure_3;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let inviteSuggestionRows;
  let obj3;
  let obj4;
  let obj7;
  let obj8;
  let tmp13;
  let tmp19Result;
  let tmp6;
  activity = activity.activity;
  let analyticsLocations;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = closure_15();
  let tmp3 = dependencyMap;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(7320);
  analyticsLocations = tmp4(analyticsLocations(7345).ACTIVITY_INVITE_SHEET).analyticsLocations;
  let tmp5 = _slicedToArray(react.useState(null), 2);
  [tmp6, c2] = tmp5;
  const tmp7 = closure_7((arg0) => arg0);
  _slicedToArray = tmp7;
  const items = [activity, tmp7];
  const items1 = [analyticsLocations];
  const callback = react.useCallback((arg0) => {
    const party = activity.party;
    let id;
    if (party != null) {
      id = party.id;
    }
    let tmp3 = null;
    if (null != id) {
      let tmp6;
      if (closure_3[id] != null) {
        tmp6 = tmp5[tmp2];
      }
      tmp3 = tmp6;
    }
    return tmp3;
  }, items);
  const items2 = [activity];
  const callback1 = react.useCallback((userId) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { userId, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj2);
  }, items1);
  const callback2 = react.useCallback((item) => {
    const tmp = item;
    if (null != item) {
      const party = tmp.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      if (null != id) {
        function markInviteSent() {
          if (null != id) {
            metroRequire(tmp, item.item.id, InviteSendStates.SENT);
          }
        }
        closure_1_6(id, item.item.id, constants2.SENDING);
        if (item.type === activity(c2[16]).RowTypes.CHANNEL) {
          try {
            const obj2 = { channelId: tmp12, type: constants.JOIN, activity: tmp, location: analyticsLocations(c2[13]).ACTIVITY_INVITE_SHEET };
            const sendActivityInvite = analyticsLocations(c2[17]).sendActivityInvite;
            analyticsLocations(c2[17]);
            const sendActivityInviteResult = sendActivityInvite(obj2);
            const nextPromise = sendActivityInviteResult.then(markInviteSent);
            nextPromise.catch((error) => {
              _undefined(String(error));
            });
          } catch (tmp17) {
            const _String2 = String;
            c2(String(tmp17));
          }
        } else if (item.type === activity(c2[16]).RowTypes.DM) {
          try {
            const tmp5 = analyticsLocations(tmp25[17]);
            const sendActivityInviteUser = tmp5.sendActivityInviteUser;
            const obj = { userId: tmp3, type: constants.JOIN, activity: tmp, location: analyticsLocations(c2[13]).ACTIVITY_INVITE_SHEET };
            const result = sendActivityInviteUser(obj);
            const nextPromise1 = result.then(markInviteSent);
            nextPromise1.catch((error) => _undefined(String(error)));
          } catch (tmp8) {
            const _String = String;
            c2(String(tmp8));
          }
        }
      }
    }
  }, items2);
  let obj = activity(504);
  const items3 = [InviteSuggestionsStore];
  const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  const tmp12 = _slicedToArray(react.useState(false), 2);
  [tmp13, c4] = tmp12;
  const effect = react.useEffect(() => {
    _undefined2(true);
    const obj = { omitUserIds: new Set(), inviteTargetType: InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION };
    const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
    InviteSuggestionsActionCreators;
    new Set();
    const inviteSuggestions = loadInviteSuggestions(obj);
    const catchPromise = inviteSuggestions.catch(NOOP_NULL);
    catchPromise.finally(() => {
      _undefined2(false);
    });
  }, []);
  const tmp17 = closure_12;
  let obj2 = { value: analyticsLocations, children: tmp17(BottomSheet, obj3) };
  const AnalyticsLocationProvider = tmp11(7320).AnalyticsLocationProvider;
  let tmp18 = null != tmp6;
  BottomSheet = tmp11(5267).BottomSheet;
  if (!tmp18) {
    tmp18 = !tmp15;
  }
  if (!tmp18) {
    tmp18 = !tmp16;
  }
  obj3 = { showGradient: tmp18, scrollable: true, startExpanded: true, header: tmp17(BottomSheetTitleHeader, obj4), children: tmp19Result };
  obj4 = { title: intl.string(activity(1114).t["OzOM/q"]) };
  BottomSheetTitleHeader = tmp11(7315).BottomSheetTitleHeader;
  intl = tmp11(1114).intl;
  if (null != tmp6) {
    const obj5 = { style: tmp.emptyState, Illustration: activity(9134).AppCrash, title: tmp6 };
    const EmptyState2 = tmp11(1188).EmptyState;
    tmp19Result = tmp17(EmptyState2, obj5);
  } else if (0 === stateFromStores.length && tmp13) {
    tmp19Result = tmp17(Loading, {});
  } else {
    let tmp17Result2;
    const obj6 = { children: tmp17(View, obj7) };
    obj7 = { style: tmp.searchAndShareContainer, children: tmp17(SearchBar, obj8) };
    obj8 = { size: "md", round: true, onChange: activity(9131).searchInviteSuggestions, placeholder: intl2.string(activity(1114).t.iI1gMg) };
    SearchBar = tmp11(7212).SearchBar;
    intl2 = tmp11(1114).intl;
    const items4 = [tmp17(View, obj6), ];
    const tmp19 = closure_14;
    const tmp20 = closure_13;
    if (0 === stateFromStores.length && !tmp13) {
      const obj9 = { style: tmp.emptyState, title: intl3.string(activity(1114).t.ojoWgX) };
      const EmptyState = tmp11(1188).EmptyState;
      intl3 = tmp11(1114).intl;
      tmp17Result2 = tmp17(EmptyState, obj9);
    } else {
      const obj10 = { data: stateFromStores, error: tmp6, getSendState: callback, onInviteSent: callback2, onPressAvatar: callback1 };
      tmp17Result2 = tmp17(tmp2(19087), obj10);
    }
    const obj11 = { children: items4 };
    items4[1] = tmp17Result2;
    tmp19Result = tmp19(tmp20, obj11);
  }
  return tmp17(AnalyticsLocationProvider, obj2);
};

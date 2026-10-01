// Module ID: 16851
// Function ID: 16852
// Name: ActivityInviteSheet
// Dependencies: [32, 19, 17, 9349, 9288, 1074, 7155, 1085, 21, 4836, 576, 9284, 6583, 6603, 4800, 7624, 9277, 11010, 504, 9302, 6571, 6570, 1115, 1177, 9304, 6471, 16852, 2]
// Exports: default

// Module 16851 (ActivityInviteSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1074 */;
import Constants3 from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9284 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9302 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9349 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9288 */;
import Constants from "Constants" /* 7155 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let closure_14;
let closure_15;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let unpackModuleId;
function Loading() {
  let items1;
  let tmp2;
  const tmp = closure_16();
  const items = [];
  let num = 0;
  do {
    tmp2 = map1;
    let obj = { row: num };
    let arr = items.push(map1(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.placeholderHeader };
  items1[0] = tmp2(View, obj3);
  const obj4 = { style: tmp.placeholderLabel };
  items1[1] = tmp2(View, obj4);
  items1[2] = items;
  return closure_15(authStore2, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ setSendState: metroRequire, useInstantInviteSendStates: metroImportDefault } = InstantInviteSendStateStore);
const ActivityActionTypes = Constants2.ActivityActionTypes;
({ InviteSendStates: c10, InviteTargetTypes: unpackModuleId } = Constants);
const NOOP_NULL = Constants3.NOOP_NULL;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderHeader: size, placeholderLabel: size1, emptyState: { backgroundColor: "transparent" }, searchAndShareContainer: obj2 };
size = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: "40%", margin: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  let BottomSheetTitleHeader;
  let SearchField;
  let _undefined;
  let _undefined2;
  let c2;
  let c4;
  let closure_3;
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
  let tmp = closure_16();
  let tmp3 = dependencyMap;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(6583);
  analyticsLocations = tmp4(analyticsLocations(6603).ACTIVITY_INVITE_SHEET).analyticsLocations;
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
            metroRequire(tmp, item.item.id, constants.SENT);
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
    const obj = { omitUserIds: new Set(), inviteTargetType: unpackModuleId.EMBEDDED_APPLICATION };
    const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
    InviteSuggestionsActionCreators;
    new Set();
    const inviteSuggestions = loadInviteSuggestions(obj);
    const catchPromise = inviteSuggestions.catch(NOOP_NULL);
    catchPromise.finally(() => {
      _undefined2(false);
    });
  }, []);
  const tmp17 = closure_13;
  let obj2 = { value: analyticsLocations, children: tmp17(BottomSheet, obj3) };
  const AnalyticsLocationProvider = tmp11(6583).AnalyticsLocationProvider;
  let tmp18 = null != tmp6;
  BottomSheet = tmp11(6571).BottomSheet;
  if (!tmp18) {
    tmp18 = !tmp15;
  }
  if (!tmp18) {
    tmp18 = !tmp16;
  }
  obj3 = { showGradient: tmp18, scrollable: true, startExpanded: true, header: tmp17(BottomSheetTitleHeader, obj4), children: tmp19Result };
  obj4 = { title: intl.string(activity(1115).t["OzOM/q"]) };
  BottomSheetTitleHeader = tmp11(6570).BottomSheetTitleHeader;
  intl = tmp11(1115).intl;
  if (null != tmp6) {
    const obj5 = { style: tmp.emptyState, Illustration: activity(9304).AppCrash, title: tmp6 };
    const EmptyState2 = tmp11(1177).EmptyState;
    tmp19Result = tmp17(EmptyState2, obj5);
  } else if (0 === stateFromStores.length && tmp13) {
    tmp19Result = tmp17(Loading, {});
  } else {
    let tmp17Result2;
    const obj6 = { children: tmp17(View, obj7) };
    obj7 = { style: tmp.searchAndShareContainer, children: tmp17(SearchField, obj8) };
    obj8 = { size: "md", round: true, onChange: activity(9302).searchInviteSuggestions, placeholder: intl2.string(activity(1115).t.iI1gMg) };
    SearchField = tmp11(6471).SearchField;
    intl2 = tmp11(1115).intl;
    const items4 = [tmp17(View, obj6), ];
    const tmp19 = closure_15;
    const tmp20 = closure_14;
    if (0 === stateFromStores.length && !tmp13) {
      const obj9 = { style: tmp.emptyState, title: intl3.string(activity(1115).t.ojoWgX) };
      const EmptyState = tmp11(1177).EmptyState;
      intl3 = tmp11(1115).intl;
      tmp17Result2 = tmp17(EmptyState, obj9);
    } else {
      const obj10 = { data: stateFromStores, error: tmp6, getSendState: callback, onInviteSent: callback2, onPressAvatar: callback1 };
      tmp17Result2 = tmp17(tmp2(16852), obj10);
    }
    const obj11 = { children: items4 };
    items4[1] = tmp17Result2;
    tmp19Result = tmp19(tmp20, obj11);
  }
  return tmp17(AnalyticsLocationProvider, obj2);
};

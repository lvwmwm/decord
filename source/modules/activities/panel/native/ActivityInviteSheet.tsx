// Module ID: 15756
// Function ID: 121460
// Name: Loading
// Dependencies: [57, 31, 27, 11770, 10097, 653, 6978, 482, 33, 4130, 689, 8536, 5462, 5482, 4098, 8537, 8528, 10484, 566, 10096, 5187, 5186, 1212, 1273, 12186, 5772, 15757, 2]
// Exports: default

// Module 15756 (Loading)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "set";
import setSendState from "setSendState";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActivityActionTypes } from "ME";
import InviteSendStates from "InviteSendStates";
import { NOOP_NULL } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_6;
let closure_7;
const require = arg1;
function Loading() {
  const tmp = _createForOfIteratorHelperLoose();
  const items = [];
  let num = 0;
  do {
    let tmp2 = callback3;
    let tmp3 = importDefault;
    let tmp4 = dependencyMap;
    let obj = { row: num };
    let arr = items.push(callback3(importDefault(8536), obj, num));
    num = num + 1;
  } while (num < 10);
  obj = {};
  obj = { style: tmp.placeholderHeader };
  const items1 = [callback3(View, obj), callback3(View, { style: tmp.placeholderLabel }), items];
  obj.children = items1;
  return callback4(closure_14, obj);
}
({ setSendState: closure_6, useInstantInviteSendStates: closure_7 } = setSendState);
({ InviteSendStates: closure_10, InviteTargetTypes: closure_11 } = InviteSendStates);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.placeholderHeader = _createForOfIteratorHelperLoose;
let obj1 = { height: 16, width: "40%", margin: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.placeholderLabel = obj1;
_createForOfIteratorHelperLoose.emptyState = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.searchAndShareContainer = { borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  let result;
  let tmp10;
  activity = activity.activity;
  const tmp = _createForOfIteratorHelperLoose();
  analyticsLocations = analyticsLocations(5462)(analyticsLocations(5482).ACTIVITY_INVITE_SHEET).analyticsLocations;
  let tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = callback2((arg0) => arg0);
  callback = tmp5;
  const items = [activity, tmp5];
  const items1 = [analyticsLocations];
  callback = React.useCallback((arg0) => {
    const party = activity.party;
    let id;
    if (null != party) {
      id = party.id;
    }
    let tmp3 = null;
    if (null != id) {
      let tmp6;
      if (null != tmp5[id]) {
        tmp6 = tmp5[tmp2];
      }
      tmp3 = tmp6;
    }
    return tmp3;
  }, items);
  const items2 = [activity];
  const callback1 = React.useCallback((userId) => {
    let obj = analyticsLocations(4098);
    obj.hideActionSheet();
    obj = { userId, sourceAnalyticsLocations: analyticsLocations };
    analyticsLocations(8537)(obj);
  }, items1);
  callback2 = React.useCallback((item) => {
    const activity = item;
    function markInviteSent() {
      if (null != id) {
        outer2_6(id, item.item.id, outer2_10.SENT);
      }
    }
    if (null != activity) {
      const party = activity.party;
      let id;
      if (null != party) {
        id = party.id;
      }
      if (null != id) {
        outer1_6(id, tmp.item.id, outer1_10.SENDING);
        if (tmp.type === activity(8528).RowTypes.CHANNEL) {
          let obj = { channelId: item.item.id, type: outer1_9.JOIN, activity, location: analyticsLocations(5482).ACTIVITY_INVITE_SHEET };
          const obj3 = analyticsLocations(10484);
          const sendActivityInviteResult = analyticsLocations(10484).sendActivityInvite(obj);
          analyticsLocations(10484).sendActivityInvite(obj).then(markInviteSent).catch((arg0) => {
            outer1_2(String(arg0));
          });
          const nextPromise = analyticsLocations(10484).sendActivityInvite(obj).then(markInviteSent);
        } else if (tmp.type === activity(8528).RowTypes.DM) {
          obj = analyticsLocations(10484);
          obj = { userId: tmp.item.id, type: outer1_9.JOIN, activity, location: analyticsLocations(5482).ACTIVITY_INVITE_SHEET };
          const result = obj.sendActivityInviteUser(obj);
          result.then(markInviteSent).catch((arg0) => outer1_2(String(arg0)));
          const nextPromise1 = result.then(markInviteSent);
        }
      }
    }
  }, items2);
  let obj = activity(566);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items3, () => outer1_8.getInviteSuggestionRows());
  const tmp2 = analyticsLocations(5462);
  [tmp10, result] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    callback(true);
    let obj = activity(10096);
    obj = { omitUserIds: new Set(), inviteTargetType: outer1_11.EMBEDDED_APPLICATION };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set();
    inviteSuggestions.catch(outer1_12).finally(() => {
      outer1_4(false);
    });
  }, []);
  obj = { value: analyticsLocations };
  obj = { showGradient: null, scrollable: true, startExpanded: true };
  let tmp16 = null != first;
  if (!tmp16) {
    tmp16 = !tmp12;
  }
  if (!tmp16) {
    tmp16 = !tmp13;
  }
  obj.showGradient = tmp16;
  const obj1 = {};
  const intl = activity(1212).intl;
  obj1.title = intl.string(activity(1212).t["OzOM/q"]);
  obj.header = callback3(activity(5186).BottomSheetTitleHeader, obj1);
  if (null != first) {
    const obj2 = { style: tmp.emptyState, Illustration: activity(12186).AppCrash, title: first };
    let tmp17Result = callback3(activity(1273).EmptyState, obj2);
  } else if (tmp12) {
    tmp17Result = callback3(Loading, {});
  } else {
    let obj3 = {};
    const obj4 = {};
    const obj5 = { style: tmp.searchAndShareContainer };
    const obj6 = { size: "md", isRound: true, onChange: activity(10096).searchInviteSuggestions };
    const intl2 = activity(1212).intl;
    obj6.placeholder = intl2.string(activity(1212).t.iI1gMg);
    obj5.children = callback3(activity(5772).SearchField, obj6);
    obj4.children = callback3(View, obj5);
    const items4 = [callback3(View, obj4), ];
    if (tmp13) {
      const obj7 = { style: tmp.emptyState };
      const intl3 = activity(1212).intl;
      obj7.title = intl3.string(activity(1212).t.ojoWgX);
      let tmp24Result = tmp24(activity(1273).EmptyState, obj7);
    } else {
      const obj8 = { data: stateFromStores, error: first, getSendState: callback, onInviteSent: callback2, onPressAvatar: callback1 };
      tmp24Result = tmp24(analyticsLocations(15757), obj8);
    }
    items4[1] = tmp24Result;
    obj3.children = items4;
    tmp17Result = closure_15(closure_14, obj3);
    const tmp17 = closure_15;
    const tmp18 = closure_14;
  }
  obj.children = tmp17Result;
  obj.children = callback3(activity(5187).BottomSheet, obj);
  return callback3(activity(5462).AnalyticsLocationProvider, obj);
};

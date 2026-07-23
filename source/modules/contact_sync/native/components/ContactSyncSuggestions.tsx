// Module ID: 11727
// Function ID: 91031
// Name: SuggestedFriendsSectionHeader
// Dependencies: [57, 31, 27, 653, 11728, 33, 4130, 689, 5084, 4549, 4126, 3969, 1392, 9094, 1273, 1212, 3834, 3974, 21, 7495, 7879, 4554, 668, 4543, 675, 2]
// Exports: default

// Module 11727 (SuggestedFriendsSectionHeader)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { SuggestedFriendSource } from "SuggestedFriendSource";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function SuggestedFriendsSectionHeader(label) {
  obj = { style: _createForOfIteratorHelperLoose().sectionHeader, children: callback(require(4126) /* Text */.Text, obj) };
  obj = { color: "text-muted", variant: "text-sm/semibold", children: label.label };
  return callback(View, obj);
}
function SuggestionRow(suggestion) {
  let end;
  let selected;
  let start;
  suggestion = suggestion.suggestion;
  const onSelect = suggestion.onSelect;
  const first = suggestion.reasons[0];
  let name;
  ({ start, end, selected } = suggestion);
  if (null != first) {
    name = first.name;
  }
  let obj = suggestion(3969);
  const userTag = obj.getUserTag(suggestion.suggested_user);
  let tmp4 = userTag;
  if (null != name) {
    tmp4 = userTag;
    if ("" !== name) {
      tmp4 = name;
    }
  }
  let obj1 = onSelect(1392);
  const userAvatarSource = obj1.getUserAvatarSource(suggestion.suggested_user);
  obj = { start, end };
  obj = { source: userAvatarSource, size: suggestion(1273).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = callback(suggestion(1273).Avatar, obj);
  obj.checked = selected;
  obj.label = tmp4;
  obj1 = {};
  const obj2 = { variant: "text-xs/medium", color: "text-muted", children: userTag };
  const items = [callback(suggestion(4126).Text, obj2), ];
  let tmp9 = null != suggestion.mutual_friends_count;
  if (tmp9) {
    const obj3 = { variant: "text-xs/medium", color: "text-muted" };
    const intl = suggestion(1212).intl;
    const obj4 = { count: suggestion.mutual_friends_count };
    obj3.children = intl.format(suggestion(1212).t.z7y34b, obj4);
    tmp9 = callback(suggestion(4126).Text, obj3);
  }
  items[1] = tmp9;
  obj1.children = items;
  obj.subLabel = closure_10(closure_9, obj1);
  obj.onPress = function onPress() {
    return onSelect(suggestion.suggested_user.id);
  };
  return callback(suggestion(9094).TableCheckboxRow, obj);
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32, justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.title = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { lineHeight: 18, textAlign: "center" };
let obj1 = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.list = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.divider = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.linearGradient = { position: "absolute", width: "100%", bottom: 0, minHeight: 136 };
let obj4 = { position: "absolute", width: "100%", bottom: 0, padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.redesignButton = obj4;
let obj5 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.sectionHeader = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default function ContactSyncSuggestions(friendSuggestions) {
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const reduced = friendSuggestions.reduce((arg0, suggested_user) => {
    arg0[suggested_user.suggested_user.id] = true;
    return arg0;
  }, {});
  let obj = friendSuggestions(3834);
  const token = obj.useToken(onSubmit(689).colors.BACKGROUND_BASE_LOW);
  let obj1 = friendSuggestions(3974);
  let items = [obj1.hexOpacityToRgba(token, 0), ];
  let obj2 = friendSuggestions(3974);
  items[1] = obj2.hexOpacityToRgba(token, 100);
  const tmp4 = first(React.useState(reduced), 2);
  first = tmp4[0];
  React = tmp4[1];
  let obj3 = friendSuggestions(4549);
  const fontScale = obj3.useFontScale();
  const sum = onSubmit(689).space.PX_16 + onSubmit(689).space.PX_32 + 40;
  let items1 = [first];
  const sum1 = sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
  const callback = React.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    React(obj);
  }, items1);
  let obj4 = onSubmit(21);
  let keys = obj4.keys(first);
  let items2 = [friendSuggestions, first];
  const items3 = [friendSuggestions.length, , , , , ];
  ({ divider: arr5[1], header: arr5[2], subtitle: arr5[3], title: arr5[4] } = tmp);
  items3[5] = callback;
  const memo = React.useMemo(() => {
    const items = [];
    items.push({ type: "header" });
    const item = items.forEach((friendSuggestion) => {
      items.push({ type: "suggestedFriend", props: { friendSuggestion, selected: outer1_3[friendSuggestion.suggested_user.id] } });
    });
    return items;
  }, items2);
  obj = { style: items4 };
  items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  const callback1 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    if ("header" === item.type) {
      let obj = {};
      obj = { style: tmp.header };
      const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
      const intl = friendSuggestions(tmp[15]).intl;
      obj1.children = intl.string(friendSuggestions(tmp[15]).t["7Fjv54"]);
      const items = [outer1_8(friendSuggestions(tmp[10]).Text, obj1), ];
      const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default" };
      const intl2 = friendSuggestions(tmp[15]).intl;
      obj2.children = intl2.string(friendSuggestions(tmp[15]).t.ait1x0);
      items[1] = outer1_8(friendSuggestions(tmp[10]).Text, obj2);
      obj.children = items;
      const items1 = [outer1_10(callback, obj), ];
      const obj3 = {};
      const intl3 = friendSuggestions(tmp[15]).intl;
      obj3.label = intl3.string(friendSuggestions(tmp[15]).t["1uAmCw"]);
      items1[1] = outer1_8(outer1_12, obj3);
      obj.children = items1;
      return outer1_10(outer1_9, obj);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const obj4 = {};
      const obj5 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect: callback };
      const items2 = [outer1_8(outer1_13, obj5), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        obj = { iconPush: true, style: outer1_8.divider };
        tmp5 = outer1_8(friendSuggestions(tmp[19]).FormDivider, obj);
      }
      items2[1] = tmp5;
      obj4.children = items2;
      return outer1_10(React.Fragment, obj4, friendSuggestion.suggested_user.id);
    }
  }, items3);
  obj = {};
  obj1 = { paddingHorizontal: onSubmit(689).space.PX_16, paddingBottom: sum1 };
  obj.contentContainerStyle = obj1;
  obj.data = memo;
  obj.renderItem = callback1;
  const items5 = [callback(friendSuggestions(7879).FlashList, obj), , ];
  obj2 = { style: tmp.linearGradient };
  const someResult = keys.some((arg0) => first[arg0]);
  obj2.start = friendSuggestions(668).VerticalGradient.START;
  obj2.end = friendSuggestions(668).VerticalGradient.END;
  obj2.pointerEvents = "none";
  obj2.colors = items;
  items5[1] = callback(onSubmit(4554), obj2);
  obj3 = { style: tmp.redesignButton };
  obj4 = { variant: "primary", size: "lg" };
  let intl = friendSuggestions(1212).intl;
  obj4.text = intl.string(friendSuggestions(1212).t["J5/69j"]);
  obj4.onPress = function onPress() {
    const keys = onSubmit(tmp[18]).keys(first);
    const found = keys.filter((arg0) => outer1_3[arg0]);
    let obj = onSubmit(tmp[18]);
    const item = found.forEach((suggested_user_id) => {
      let obj = onSubmit(table[24]);
      obj = { suggested_user_id, suggestion_source: outer2_7.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
      obj.track(outer2_6.FRIEND_SUGGESTION_ADDED, obj);
    });
  };
  obj4.disabled = !someResult;
  obj3.children = callback(friendSuggestions(4543).Button, obj4);
  items5[2] = callback(callback, obj3);
  obj.children = items5;
  return callback2(callback, obj);
};

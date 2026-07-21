// Module ID: 11716
// Function ID: 90969
// Name: SuggestedFriendsSectionHeader
// Dependencies: []
// Exports: default

// Module 11716 (SuggestedFriendsSectionHeader)
function SuggestedFriendsSectionHeader(label) {
  let obj = { style: callback4().sectionHeader, children: callback2(arg1(dependencyMap[10]).Text, obj) };
  obj = { "Null": 1514275327, "Null": -436207206, children: label.label };
  return callback2(View, obj);
}
function SuggestionRow(suggestion) {
  let end;
  let selected;
  let start;
  suggestion = suggestion.suggestion;
  const arg1 = suggestion;
  const importDefault = suggestion.onSelect;
  const first = suggestion.reasons[0];
  let name;
  ({ start, end, selected } = suggestion);
  if (null != first) {
    name = first.name;
  }
  let obj = arg1(dependencyMap[11]);
  const userTag = obj.getUserTag(suggestion.suggested_user);
  let tmp4 = userTag;
  if (null != name) {
    tmp4 = userTag;
    if ("" !== name) {
      tmp4 = name;
    }
  }
  let obj1 = importDefault(dependencyMap[12]);
  const userAvatarSource = obj1.getUserAvatarSource(suggestion.suggested_user);
  obj = { start, end };
  obj = { source: userAvatarSource, size: arg1(dependencyMap[14]).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = callback2(arg1(dependencyMap[14]).Avatar, obj);
  obj.checked = selected;
  obj.label = tmp4;
  obj1 = {};
  const obj2 = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44", children: userTag };
  const items = [callback2(arg1(dependencyMap[10]).Text, obj2), ];
  let tmp9 = null != suggestion.mutual_friends_count;
  if (tmp9) {
    const obj3 = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44" };
    const intl = arg1(dependencyMap[15]).intl;
    const obj4 = { count: suggestion.mutual_friends_count };
    obj3.children = intl.format(arg1(dependencyMap[15]).t.z7y34b, obj4);
    tmp9 = callback2(arg1(dependencyMap[10]).Text, obj3);
  }
  items[1] = tmp9;
  obj1.children = items;
  obj.subLabel = closure_10(closure_9, obj1);
  obj.onPress = function onPress() {
    return onSelect(suggestion.suggested_user.id);
  };
  return callback2(arg1(dependencyMap[13]).TableCheckboxRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const SuggestedFriendSource = arg1(dependencyMap[4]).SuggestedFriendSource;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32, justifyContent: "center" };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.header = { alignItems: "center", paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj.title = { "Null": null, "Null": null };
obj.subtitle = { "Bool(false)": "errExpectingATEXT", "Bool(false)": "j" };
const obj1 = { alignItems: "center", paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj.list = { flex: 1, marginTop: importDefault(dependencyMap[7]).space.PX_12 };
const obj2 = { flex: 1, marginTop: importDefault(dependencyMap[7]).space.PX_12 };
obj.divider = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.linearGradient = { "Bool(true)": null, "Bool(true)": 10, "Bool(true)": null, "Bool(true)": 0.2 };
const obj4 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, padding: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_32 };
obj.redesignButton = obj4;
const obj5 = { "Bool(false)": -1661796349, "Bool(false)": -1371340797, "Bool(false)": -1275067531, "Bool(false)": -1258290315, marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj.sectionHeader = obj5;
let closure_11 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default function ContactSyncSuggestions(friendSuggestions) {
  friendSuggestions = friendSuggestions.friendSuggestions;
  const arg1 = friendSuggestions;
  const importDefault = friendSuggestions.onSubmit;
  const tmp = callback4();
  const dependencyMap = tmp;
  const reduced = friendSuggestions.reduce((arg0, suggested_user) => {
    arg0[suggested_user.suggested_user.id] = true;
    return arg0;
  }, {});
  let obj = arg1(dependencyMap[16]);
  const token = obj.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW);
  let obj1 = arg1(dependencyMap[17]);
  const items = [obj1.hexOpacityToRgba(token, 0), ];
  let obj2 = arg1(dependencyMap[17]);
  items[1] = obj2.hexOpacityToRgba(token, 100);
  const tmp4 = callback(React.useState(reduced), 2);
  const first = tmp4[0];
  let callback = first;
  const React = tmp4[1];
  let obj3 = arg1(dependencyMap[9]);
  const fontScale = obj3.useFontScale();
  const sum = importDefault(dependencyMap[7]).space.PX_16 + importDefault(dependencyMap[7]).space.PX_32 + 40;
  const items1 = [first];
  const sum1 = sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
  callback = React.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    React(obj);
  }, items1);
  const View = callback;
  let obj4 = importDefault(dependencyMap[18]);
  const keys = obj4.keys(first);
  const items2 = [friendSuggestions, first];
  const items3 = [friendSuggestions.length, , , , , ];
  ({ divider: arr5[1], header: arr5[2], subtitle: arr5[3], title: arr5[4] } = tmp);
  items3[5] = callback;
  const memo = React.useMemo(() => {
    const items = [];
    const friendSuggestions = items;
    items.push({ type: "header" });
    const item = friendSuggestions.forEach((friendSuggestion) => {
      items.push({ type: "suggestedFriend", props: { friendSuggestion, selected: closure_3[friendSuggestion.suggested_user.id] } });
    });
    return items;
  }, items2);
  obj = { style: items4 };
  const items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  const callback1 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    if ("header" === item.type) {
      let obj = {};
      obj = { style: tmp.header };
      const obj1 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
      const intl = friendSuggestions(tmp[15]).intl;
      obj1.children = intl.string(friendSuggestions(tmp[15]).t.7Fjv54);
      const items = [callback(friendSuggestions(tmp[10]).Text, obj1), ];
      const obj2 = { style: tmp.subtitle };
      const intl2 = friendSuggestions(tmp[15]).intl;
      obj2.children = intl2.string(friendSuggestions(tmp[15]).t.ait1x0);
      items[1] = callback(friendSuggestions(tmp[10]).Text, obj2);
      obj.children = items;
      const items1 = [callback2(callback, obj), ];
      const obj3 = {};
      const intl3 = friendSuggestions(tmp[15]).intl;
      obj3.label = intl3.string(friendSuggestions(tmp[15]).t.1uAmCw);
      items1[1] = callback(closure_12, obj3);
      obj.children = items1;
      return callback2(closure_9, obj);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const obj4 = {};
      const obj5 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect: callback };
      const items2 = [callback(closure_13, obj5), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        obj = { iconPush: true, style: callback.divider };
        tmp5 = callback(friendSuggestions(tmp[19]).FormDivider, obj);
      }
      items2[1] = tmp5;
      obj4.children = items2;
      return callback2(React.Fragment, obj4, friendSuggestion.suggested_user.id);
    }
  }, items3);
  obj = {};
  obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: sum1 };
  obj.contentContainerStyle = obj1;
  obj.data = memo;
  obj.renderItem = callback1;
  const items5 = [callback2(arg1(dependencyMap[20]).FlashList, obj), , ];
  obj2 = { style: tmp.linearGradient };
  const someResult = keys.some((arg0) => first[arg0]);
  obj2.start = arg1(dependencyMap[22]).VerticalGradient.START;
  obj2.end = arg1(dependencyMap[22]).VerticalGradient.END;
  obj2.pointerEvents = "none";
  obj2.colors = items;
  items5[1] = callback2(importDefault(dependencyMap[21]), obj2);
  obj3 = { style: tmp.redesignButton };
  obj4 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
  const intl = arg1(dependencyMap[15]).intl;
  obj4.text = intl.string(arg1(dependencyMap[15]).t.J5/69j);
  obj4.onPress = function onPress() {
    const keys = onSubmit(tmp[18]).keys(first);
    const found = keys.filter((arg0) => closure_3[arg0]);
    const obj = onSubmit(tmp[18]);
    const item = found.forEach((suggested_user_id) => {
      let obj = callback(closure_2[24]);
      obj = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
      obj.track(constants.FRIEND_SUGGESTION_ADDED, obj);
    });
  };
  obj4.disabled = !someResult;
  obj3.children = callback2(arg1(dependencyMap[23]).Button, obj4);
  items5[2] = callback2(View, obj3);
  obj.children = items5;
  return callback3(View, obj);
};

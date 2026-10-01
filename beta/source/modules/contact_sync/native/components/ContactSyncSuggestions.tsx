// Module ID: 12195
// Function ID: 12196
// Name: ContactSyncSuggestions
// Dependencies: [32, 19, 17, 1074, 12196, 21, 4836, 576, 5994, 5288, 4832, 4678, 1397, 5916, 1177, 1115, 4531, 4683, 11, 8053, 8179, 5293, 1094, 5281, 1241, 2]
// Exports: default

// Module 12195 (ContactSyncSuggestions)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserUtils from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import Form from "Form" /* 8053 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12196 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function SuggestedFriendsSectionHeader(label) {
  label = label.label;
  const obj = { style: closure_11().sectionHeader, children: metroImportAll(Text_Text.Text, { color: "text-muted", variant: "text-sm/semibold", children: label }) };
  return metroImportAll(View, obj);
}
function SuggestionRow(suggestion) {
  let Avatar;
  let end;
  let intl;
  let items;
  let obj4;
  let obj6;
  let selected;
  let start;
  let tmp10;
  let tmp9;
  suggestion = suggestion.suggestion;
  const onSelect = suggestion.onSelect;
  const first = suggestion.reasons[0];
  let name;
  ({ start, end, selected } = suggestion);
  if (first != null) {
    name = first.name;
  }
  const obj = UserUtils;
  const userTag = obj.getUserTag(suggestion.suggested_user);
  let tmp6 = userTag;
  if (null != name) {
    tmp6 = userTag;
    if ("" !== name) {
      tmp6 = name;
    }
  }
  const obj2 = AvatarUtilsDefault;
  const userAvatarSource = obj2.getUserAvatarSource(suggestion.suggested_user);
  const obj3 = {
    start,
    end,
    icon: metroImportAll(Avatar, obj4),
    checked: selected,
    label: tmp6,
    subLabel: tmp9(tmp10, { children: items }),
    onPress() {
      return onSelect(suggestion.suggested_user.id);
    }
  };
  const TableCheckboxRow = tmp3(5916).TableCheckboxRow;
  obj4 = { source: userAvatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = tmp3(1177).Avatar;
  items = [metroImportAll(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: userTag }), ];
  let tmp8Result = null != suggestion.mutual_friends_count;
  tmp10 = React4;
  tmp9 = authStore;
  if (tmp8Result) {
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(intl4.t.z7y34b, obj6) };
    const Text = tmp3(4832).Text;
    intl = tmp3(1115).intl;
    obj6 = { count: suggestion.mutual_friends_count };
    tmp8Result = tmp8(Text, obj5);
  }
  items[1] = tmp8Result;
  return metroImportAll(TableCheckboxRow, obj3);
}
let react = react_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const SuggestedFriendSource = FriendsScreenConstants.SuggestedFriendSource;
let Fragment = Fragment_mod;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, list: obj4, divider: obj5, linearGradient: { position: "absolute", width: "100%", bottom: 0, minHeight: 136 }, redesignButton: obj6, sectionHeader: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj4 = { flex: 1, marginTop: nativeDefault.space.PX_12 };
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj6 = { position: "absolute", width: "100%", bottom: 0, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj7 = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default function ContactSyncSuggestions(friendSuggestions) {
  let Button;
  let closure_2;
  let closure_4;
  let intl;
  let items4;
  let items5;
  let obj11;
  let obj8;
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  let first;
  react = undefined;
  const tmp = closure_11();
  dependencyMap = tmp;
  const reduced = friendSuggestions.reduce((acc, suggested_user) => {
    acc[suggested_user.suggested_user.id] = true;
    return acc;
  }, {});
  let obj = friendSuggestions(4531);
  const token = obj.useToken(onSubmit(576).colors.BACKGROUND_BASE_LOW);
  let obj2 = friendSuggestions(4683);
  let items = [obj2.hexOpacityToRgba(token, 0), ];
  let obj3 = friendSuggestions(4683);
  items[1] = obj3.hexOpacityToRgba(token, 100);
  const tmp4 = first(react.useState(reduced), 2);
  first = tmp4[0];
  react = tmp4[1];
  let obj4 = friendSuggestions(5288);
  const fontScale = obj4.useFontScale();
  const sum = onSubmit(576).space.PX_16 + onSubmit(576).space.PX_32 + 40;
  let items1 = [first];
  const sum1 = sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
  const onSelect = react.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    closure_4(obj);
  }, items1);
  let obj5 = onSubmit(11);
  let keys = obj5.keys(first);
  let items2 = [friendSuggestions, first];
  const items3 = [friendSuggestions.length, , , , , ];
  ({ divider: arr5[1], header: arr5[2], subtitle: arr5[3], title: arr5[4] } = tmp);
  items3[5] = onSelect;
  const someResult = keys.some((item) => first[item]);
  const memo = react.useMemo(() => {
    const items = [];
    items.push({ type: "header" });
    const item = items.forEach((friendSuggestion) => {
      let obj;
      const element = { type: "suggestedFriend", props: obj };
      obj = { friendSuggestion, selected: first[friendSuggestion.suggested_user.id] };
      items.push(element);
    });
    return items;
  }, items2);
  let obj6 = { style: items4, children: items5 };
  items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  const callback1 = react.useCallback((arg0) => {
    let index;
    let intl;
    let intl2;
    let intl3;
    let item;
    let items;
    let items1;
    ({ item, index } = arg0);
    if ("header" === item.type) {
      const obj2 = { children: items1 };
      const obj3 = { style: closure_2.header, children: items };
      const obj4 = { style: closure_2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["7Fjv54"]) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items = [metroImportAll(Text, obj4), ];
      const obj5 = { style: closure_2.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.ait1x0) };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items[1] = metroImportAll(Text2, obj5);
      items1 = [authStore(View, obj3), ];
      const obj6 = { label: intl3.string(intl4.t["1uAmCw"]) };
      intl3 = intl4.intl;
      items1[1] = metroImportAll(SuggestedFriendsSectionHeader, obj6);
      return authStore(React4, obj2);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const id = friendSuggestion.suggested_user.id;
      const Fragment = react.Fragment;
      const obj7 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect };
      const items2 = [metroImportAll(SuggestionRow, obj7), ];
      let tmp5 = null;
      const tmp31 = authStore;
      if (index < friendSuggestions.length) {
        const obj = { iconPush: true, style: closure_2.divider };
        tmp5 = metroImportAll(Form.FormDivider, obj);
      }
      const obj8 = { children: items2 };
      items2[1] = tmp5;
      return tmp31(Fragment, obj8, id);
    }
  }, items3);
  let obj7 = { contentContainerStyle: obj8, data: memo, renderItem: callback1 };
  obj8 = { paddingHorizontal: onSubmit(576).space.PX_16, paddingBottom: sum1 };
  const FlashList = friendSuggestions(8179).FlashList;
  items5 = [closure_8(FlashList, obj7), , ];
  const obj9 = { style: tmp.linearGradient, start: friendSuggestions(1094).VerticalGradient.START, end: friendSuggestions(1094).VerticalGradient.END, pointerEvents: "none", colors: items };
  const tmp13 = onSubmit(5293);
  items5[1] = closure_8(tmp13, obj9);
  const obj10 = { style: tmp.redesignButton, children: closure_8(Button, obj11) };
  obj11 = {
    variant: "primary",
    size: "lg",
    text: intl.string(friendSuggestions(1115).t["J5/69j"]),
    onPress() {
      let constants2;
      let obj = SnowflakeUtilsDefault;
      const keys = obj.keys(first);
      const found = keys.filter((item) => first[item]);
      onSubmit(found);
      const item = found.forEach((suggested_user_id) => {
        const obj = onSubmit(closure_1_2[24]);
        const obj2 = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
        obj.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
      });
    },
    disabled: !someResult
  };
  Button = friendSuggestions(5281).Button;
  intl = friendSuggestions(1115).intl;
  items5[2] = closure_8(onSelect, obj10);
  return closure_10(onSelect, obj6);
};

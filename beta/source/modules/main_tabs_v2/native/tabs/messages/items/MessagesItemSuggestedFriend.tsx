// Module ID: 15675
// Function ID: 15676
// Name: MessagesItemSuggestedFriend
// Dependencies: [32, 19, 17, 4479, 1074, 21, 4836, 576, 9578, 7624, 1981, 563, 1115, 4678, 15676, 15677, 1241, 5435, 1177, 4832, 5281, 4777, 8179, 15674, 2]
// Exports: getMessagesItemSuggestedFriendHeight

// Module 15675 (MessagesItemSuggestedFriend)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8179 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import LegendList from "LegendList" /* 15674 */;
import FriendSuggestionUtils from "FriendSuggestionUtils" /* 15676 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15677 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, pressable: obj3, textContainer: obj4, avatar: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.md, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj4 = { marginRight: nativeDefault.space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
obj5 = { marginRight: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let closure_12 = react.memo(function MessagesItemSuggestedFriendView(height) {
  let addedPressed;
  let closure_4;
  let intl2;
  let items5;
  let items6;
  let setAddedPressed;
  let tmp9Result;
  height = height.height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  ({ addedPressed, setAddedPressed } = height);
  const tmp = closure_11();
  react = tmp;
  let obj = react;
  let items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = react.useMemo(() => {
    const items = [, , ];
    ({ container: arr[0], pressable: arr[1] } = closure_4);
    const obj = { height };
    items[2] = obj;
    return items;
  }, items);
  const callback = react.useCallback(() => {
    const promise = asyncRequire(7624, dependencyMap.paths);
    promise.then((result) => {
      const obj = { userId: suggestedFriend.user.id, localUser: suggestedFriend.user, location: "Messages Tab User Profile" };
      return result.default(obj);
    });
  }, items1);
  let obj2 = height(suggestedFriend[11]);
  const items2 = [RelationshipStore];
  if (!addedPressed) {
    addedPressed = obj2.useStateFromStores(items2, () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === metroImportAll.PENDING_OUTGOING);
  }
  const items3 = [suggestedFriend];
  const memo1 = obj.useMemo(() => {
    if (null != suggestedFriend.mutualFriendsCount) {
      let formatToPlainStringResult;
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = intl3.intl;
        const obj2 = { count: suggestedFriend.mutualFriendsCount };
        formatToPlainStringResult = intl.formatToPlainString(intl3.t.z7y34b, obj2);
      }
      if (null != suggestedFriend.friendSuggestionName) {
        let friendSuggestionName;
        if (suggestedFriend.friendSuggestionName.length > 0) {
          friendSuggestionName = tmp.friendSuggestionName;
        }
        const obj4 = FriendSuggestionUtils;
        const suggestedContactNameForSuggestion = obj4.getSuggestedContactNameForSuggestion(friendSuggestionName, tmp);
        let str2 = "";
        if (null != suggestedContactNameForSuggestion) {
          const _HermesInternal = HermesInternal;
          str2 = " \u00B7 " + suggestedContactNameForSuggestion;
        }
        const _HermesInternal2 = HermesInternal;
        const obj5 = { userStatusLabel: "" + formatToPlainStringResult + str2, suggestionName: friendSuggestionName };
        return obj5;
      }
      const obj3 = UserUtilsDefault;
      friendSuggestionName = obj3.getName(tmp.user);
    }
    const obj = UserUtilsDefault;
    formatToPlainStringResult = obj.getName(tmp.user);
  }, items3);
  let userStatusLabel = memo1.userStatusLabel;
  const items4 = [suggestedFriend, onAddFriendSuggestions, setAddedPressed];
  const suggestionName = memo1.suggestionName;
  const callback1 = obj.useCallback(() => {
    const user = suggestedFriend.user;
    const obj = AddFriendsScreenUtils;
    obj.addContactSuggestion(user);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" };
    obj2.track(metroImportDefault.FRIEND_SUGGESTION_ADDED, obj3);
    onAddFriendSuggestions((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(items, arg0, 0)] = suggestedFriend;
      return items;
    });
    onAddFriendSuggestions((arr) => {
      let user;
      return arr.filter((user) => user.user.id !== user.user.id);
    });
    setAddedPressed(true);
  }, items4);
  let obj3 = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false, children: items5 };
  const PressableHighlight = tmp4(tmp5[17]).PressableHighlight;
  let obj4 = { style: tmp.avatar, user: suggestedFriend.user, guildId: "Array", size: tmp4(tmp5[18]).AvatarSizes.REFRESH_MEDIUM_32 };
  const Avatar = tmp4(tmp5[18]).Avatar;
  items5 = [closure_9(Avatar, obj4), , ];
  let obj5 = { style: tmp.textContainer, children: items6 };
  items6 = [closure_9(tmp4(tmp5[19]).Text, { lineClamp: 1, variant: "redesign/channel-title/semibold", maxFontSizeMultiplier: 2, color: "text-default", children: suggestionName }), ];
  const Text = tmp4(tmp5[19]).Text;
  const tmp10 = View;
  if (addedPressed) {
    let intl = tmp4(tmp5[12]).intl;
    userStatusLabel = intl.string(tmp4(tmp5[12]).t.Kzyxm9);
  }
  items6[1] = closure_9(Text, { variant: "text-xs/medium", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: userStatusLabel });
  items5[1] = closure_10(tmp10, obj5);
  if (addedPressed) {
    const obj6 = { style: { marginHorizontal: 8 } };
    tmp9Result = tmp9(tmp4(tmp5[21]).SendMessageIcon, obj6);
  } else {
    const obj7 = { variant: "secondary", size: "sm", text: intl2.string(height(suggestedFriend[12]).t.OYkgVk), onPress: callback1 };
    const Button = tmp4(tmp5[20]).Button;
    intl2 = tmp4(tmp5[12]).intl;
    tmp9Result = tmp9(Button, obj7);
  }
  items5[2] = tmp9Result;
  return closure_10(PressableHighlight, obj3);
});
const memoResult = react.memo((arg0) => {
  let tmp2;
  let tmp3;
  const obj = { addedPressed: tmp2, setAddedPressed: tmp3 };
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const merged = Object.assign(arg0);
  return React4(closure_12, obj);
});
const memoResult1 = react.memo((suggestedFriend) => {
  let tmp2;
  let tmp3;
  const items = [suggestedFriend.suggestedFriend.user.id];
  const obj = defaultMVCPConfig;
  const obj2 = { addedPressed: tmp2, setAddedPressed: tmp3 };
  [tmp2, tmp3] = obj.useRecyclingState(false, items);
  _slicedToArray(obj.useRecyclingState(false, items), 2);
  const merged = Object.assign(suggestedFriend);
  return React4(closure_12, obj2);
});
const memoResult2 = react.memo((arg0) => {
  let tmp2;
  let tmp3;
  const obj = LegendList;
  const obj2 = { addedPressed: tmp2, setAddedPressed: tmp3 };
  [tmp2, tmp3] = obj.useRecyclingState(false);
  _slicedToArray(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  return React4(closure_12, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx");

export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const obj2 = useScaledTextLineHeight;
  const sum = scaleTextLineHeightResult + obj2.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + nativeDefault.space.PX_16;
};
export const MessagesItemSuggestedFriendFast = memoResult;
export const MessagesItemSuggestedFriendFlash = memoResult1;
export const MessagesItemSuggestedFriendLegend = memoResult2;

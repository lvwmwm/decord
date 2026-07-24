// Module ID: 14957
// Function ID: 113974
// Name: getMessagesItemSuggestedFriendHeight
// Dependencies: [57, 31, 27, 3767, 653, 33, 4130, 689, 9921, 8537, 1934, 624, 1212, 3969, 14958, 14959, 675, 4660, 1273, 4126, 4543, 4076, 2]
// Exports: getMessagesItemSuggestedFriendHeight

// Module 14957 (getMessagesItemSuggestedFriendHeight)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.container = obj;
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.pressable = _createForOfIteratorHelperLoose;
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "column", alignSelf: "center", overflow: "hidden", flexGrow: 1, flexShrink: 1 };
obj.textContainer = obj2;
obj.avatar = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo(function MessagesItemSuggestedFriend(height) {
  height = height.height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  const tmp = callback3();
  let callback = tmp;
  let items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = importAllResult.useMemo(() => {
    const items = [, , ];
    ({ container: arr[0], pressable: arr[1] } = _slicedToArray);
    items[2] = { height };
    return items;
  }, items);
  callback = importAllResult.useCallback(() => {
    height(suggestedFriend[10])(suggestedFriend[9], suggestedFriend.paths).then((arg0) => arg0.default({ userId: outer1_2.user.id, localUser: outer1_2.user, location: "Messages Tab User Profile" }));
  }, items1);
  const tmp4 = callback(importAllResult.useState(false), 2);
  let first = tmp4[0];
  let obj = height(suggestedFriend[11]);
  const items2 = [_isNativeReflectConstruct];
  if (!first) {
    first = obj.useStateFromStores(items2, () => outer1_6.getRelationshipType(suggestedFriend.user.id) === outer1_8.PENDING_OUTGOING);
  }
  const items3 = [suggestedFriend];
  const memo1 = importAllResult.useMemo(() => {
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = height(suggestedFriend[12]).intl;
        let obj = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(height(suggestedFriend[12]).t.z7y34b, obj);
      }
      if (null != suggestedFriend.friendSuggestionName) {
        if (suggestedFriend.friendSuggestionName.length > 0) {
          let friendSuggestionName = suggestedFriend.friendSuggestionName;
        }
        const suggestedContactNameForSuggestion = height(suggestedFriend[14]).getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
        obj = {};
        let str2 = "";
        if (null != suggestedContactNameForSuggestion) {
          const _HermesInternal = HermesInternal;
          str2 = " \u00B7 " + suggestedContactNameForSuggestion;
        }
        const _HermesInternal2 = HermesInternal;
        obj.userStatusLabel = "" + formatToPlainStringResult + str2;
        obj.suggestionName = friendSuggestionName;
        return obj;
      }
      friendSuggestionName = onAddFriendSuggestions(suggestedFriend[13]).getName(suggestedFriend.user);
      const obj3 = onAddFriendSuggestions(suggestedFriend[13]);
    }
    obj = onAddFriendSuggestions(suggestedFriend[13]);
    formatToPlainStringResult = obj.getName(suggestedFriend.user);
  }, items3);
  let userStatusLabel = memo1.userStatusLabel;
  const items4 = [suggestedFriend, onAddFriendSuggestions];
  const callback1 = importAllResult.useCallback(() => {
    const user = suggestedFriend.user;
    let obj = height(suggestedFriend[15]);
    obj.addContactSuggestion(user);
    obj = { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" };
    onAddFriendSuggestions(suggestedFriend[16]).track(outer1_7.FRIEND_SUGGESTION_ADDED, obj);
    onAddFriendSuggestions((arg0) => {
      const items = [...arg0, outer1_2];
      return items;
    });
    onAddFriendSuggestions((arr) => arr.filter((user) => user.user.id !== outer2_2.user.id));
    callback(true);
  }, items4);
  obj = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false };
  obj = { style: tmp.avatar, user: suggestedFriend.user, guildId: undefined, size: height(suggestedFriend[18]).AvatarSizes.REFRESH_MEDIUM_32 };
  const items5 = [callback2(height(suggestedFriend[18]).Avatar, obj), , ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { lineClamp: 1, variant: "redesign/channel-title/semibold", maxFontSizeMultiplier: 2, color: "text-default", children: memo1.suggestionName };
  const items6 = [callback2(height(suggestedFriend[19]).Text, obj2), ];
  let obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2 };
  if (first) {
    let intl = height(suggestedFriend[12]).intl;
    userStatusLabel = intl.string(height(suggestedFriend[12]).t.Kzyxm9);
  }
  obj3.children = userStatusLabel;
  items6[1] = callback2(height(suggestedFriend[19]).Text, obj3);
  obj1.children = items6;
  items5[1] = closure_10(View, obj1);
  if (first) {
    const obj4 = {};
    const obj5 = { marginHorizontal: 8 };
    obj4.style = obj5;
    let tmp13Result = tmp13(tmp14(tmp15[21]).SendMessageIcon, obj4);
  } else {
    const obj6 = { variant: "secondary", size: "sm" };
    const intl2 = tmp14(tmp15[12]).intl;
    obj6.text = intl2.string(tmp14(tmp15[12]).t.OYkgVk);
    obj6.onPress = callback1;
    tmp13Result = tmp13(tmp14(tmp15[20]).Button, obj6);
  }
  items5[2] = tmp13Result;
  obj.children = items5;
  return closure_10(height(suggestedFriend[17]).PressableHighlight, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx");

export default memoResult;
export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const obj = require(9921) /* scaleLineHeight */;
  const scaleTextLineHeightResult = require(9921) /* scaleLineHeight */.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const sum = scaleTextLineHeightResult + require(9921) /* scaleLineHeight */.scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + importDefault(689).space.PX_16;
};

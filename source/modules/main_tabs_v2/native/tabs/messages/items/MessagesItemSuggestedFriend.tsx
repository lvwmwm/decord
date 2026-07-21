// Module ID: 14786
// Function ID: 111442
// Name: getMessagesItemSuggestedFriendHeight
// Dependencies: []
// Exports: getMessagesItemSuggestedFriendHeight

// Module 14786 (getMessagesItemSuggestedFriendHeight)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.md, padding: importDefault(dependencyMap[7]).space.PX_8 };
obj.pressable = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.textContainer = { marginRight: importDefault(dependencyMap[7]).space.PX_8 };
const obj2 = { marginRight: importDefault(dependencyMap[7]).space.PX_8 };
obj.avatar = { marginRight: importDefault(dependencyMap[7]).space.PX_8 };
let closure_11 = obj1.createStyles(obj);
const obj3 = { marginRight: importDefault(dependencyMap[7]).space.PX_8 };
const memoResult = importAllResult.memo(function MessagesItemSuggestedFriend(height) {
  height = height.height;
  const arg1 = height;
  const onAddFriendSuggestions = height.onAddFriendSuggestions;
  const importDefault = onAddFriendSuggestions;
  const suggestedFriend = height.suggestedFriend;
  const dependencyMap = suggestedFriend;
  const tmp = callback3();
  let callback = tmp;
  const items = [tmp, height];
  const items1 = [suggestedFriend];
  const memo = React.useMemo(() => {
    const items = [, , ];
    ({ container: arr[0], pressable: arr[1] } = tmp);
    items[2] = { height };
    return items;
  }, items);
  callback = React.useCallback(() => {
    height(suggestedFriend[10])(suggestedFriend[9], suggestedFriend.paths).then((arg0) => arg0.default({ userId: closure_2.user.id, localUser: closure_2.user, location: "Messages Tab User Profile" }));
  }, items1);
  const tmp4 = callback(React.useState(false), 2);
  let first = tmp4[0];
  const React = tmp4[1];
  let obj = arg1(dependencyMap[11]);
  const items2 = [closure_6];
  if (!first) {
    first = obj.useStateFromStores(items2, () => relationshipType.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING);
  }
  const items3 = [suggestedFriend];
  const memo1 = React.useMemo(() => {
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
  const callback1 = React.useCallback(() => {
    const user = suggestedFriend.user;
    let obj = height(suggestedFriend[15]);
    obj.addContactSuggestion(user);
    obj = { suggested_user_id: user.id, suggestion_source: suggestedFriend.source, location: "Messages Tab" };
    onAddFriendSuggestions(suggestedFriend[16]).track(constants.FRIEND_SUGGESTION_ADDED, obj);
    onAddFriendSuggestions((arg0) => {
      const items = [...arg0, closure_2];
      return items;
    });
    onAddFriendSuggestions((arr) => arr.filter((user) => user.user.id !== user.user.id));
    callback(true);
  }, items4);
  obj = { accessibilityRole: "button", style: memo, onPress: callback, collapsable: false };
  obj = { style: tmp.avatar, user: suggestedFriend.user, guildId: undefined, size: arg1(dependencyMap[18]).AvatarSizes.REFRESH_MEDIUM_32 };
  const items5 = [callback2(arg1(dependencyMap[18]).Avatar, obj), , ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { y: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002004548661020507, isArray: 4224255044333687000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, _oneway: 7981012062864596000000000000000000000000000000000000000000000000000, applicationId: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009918777548243116, children: memo1.suggestionName };
  const items6 = [callback2(arg1(dependencyMap[19]).Text, obj2), ];
  const obj3 = { text: false, selectionStart: false, selectionEnd: false, canMentionEveryone: false };
  if (first) {
    const intl = arg1(dependencyMap[12]).intl;
    userStatusLabel = intl.string(arg1(dependencyMap[12]).t.Kzyxm9);
  }
  obj3.children = userStatusLabel;
  items6[1] = callback2(arg1(dependencyMap[19]).Text, obj3);
  obj1.children = items6;
  items5[1] = closure_10(View, obj1);
  if (first) {
    const obj4 = {};
    const obj5 = { marginHorizontal: 8 };
    obj4.style = obj5;
    let tmp13Result = tmp13(tmp14(tmp15[21]).SendMessageIcon, obj4);
  } else {
    const obj6 = { "Bool(true)": null, "Bool(true)": null };
    const intl2 = tmp14(tmp15[12]).intl;
    obj6.text = intl2.string(tmp14(tmp15[12]).t.OYkgVk);
    obj6.onPress = callback1;
    tmp13Result = tmp13(tmp14(tmp15[20]).Button, obj6);
  }
  items5[2] = tmp13Result;
  obj.children = items5;
  return closure_10(arg1(dependencyMap[17]).PressableHighlight, obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriend.tsx");

export default memoResult;
export const getMessagesItemSuggestedFriendHeight = function getMessagesItemSuggestedFriendHeight(fontScale) {
  const obj = arg1(dependencyMap[8]);
  const scaleTextLineHeightResult = arg1(dependencyMap[8]).scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const sum = scaleTextLineHeightResult + arg1(dependencyMap[8]).scaleTextLineHeight("text-xs/medium", fontScale);
  return sum + importDefault(dependencyMap[7]).space.PX_16;
};

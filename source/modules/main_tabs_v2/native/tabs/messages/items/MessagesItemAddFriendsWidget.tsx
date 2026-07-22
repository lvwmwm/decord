// Module ID: 14844
// Function ID: 111838
// Name: getFriendInviteCode
// Dependencies: []

// Module 14844 (getFriendInviteCode)
function getFriendInviteCode() {
  return _getFriendInviteCode(...arguments);
}
function _getFriendInviteCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getFriendInviteCode = obj;
  return obj(...arguments);
}
function handleShare() {
  return _handleShare(...arguments);
}
function _handleShare() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleShare = obj;
  return obj(...arguments);
}
function handleLink() {
  return _handleLink(...arguments);
}
function _handleLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleLink = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const InstantInviteSources = arg1(dependencyMap[3]).InstantInviteSources;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const sum = arg1(dependencyMap[5]).ICON_ACTION_BUTTON_SIZE + importDefault(dependencyMap[6]).space.PX_16;
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { 9223372036854775807: "100%", 9223372036854775807: "100%", 9223372036854775807: null, display: "row", alignItems: 4, height: sum, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj.container = obj;
obj1 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", borderRadius: importDefault(dependencyMap[6]).radii.md, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8, paddingVertical: importDefault(dependencyMap[6]).space.PX_12 };
obj.title = obj1;
const tmp2 = arg1(dependencyMap[4]);
obj.actions = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj.actionIcon = { marginEnd: 0, marginStart: importDefault(dependencyMap[6]).space.PX_8 };
let closure_9 = obj1.createStyles(obj);
const obj3 = { marginEnd: 0, marginStart: importDefault(dependencyMap[6]).space.PX_8 };
const memoResult = importAllResult.memo(function MessagesItemAddFriendsWidget() {
  const tmp = callback4();
  let obj = { style: tmp.container, collapsable: false };
  const callback = importAllResult.useCallback(() => {
    let obj = callback(closure_2[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = null == rootNavigationRef;
    let obj2 = rootNavigationRef;
    if (!tmp2) {
      const current = rootNavigationRef.current;
      tmp2 = null == current;
      obj2 = current;
    }
    if (!tmp2) {
      obj = { screen: "add-friends", params: { height: "messagePreviewString", flexDirection: "DATA_USED_FOR_RECOMMENDED" } };
      obj2.navigate("friends", obj);
    }
  }, []);
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.afcl67);
  obj.accessibilityRole = "button";
  obj.onPress = callback;
  obj.style = tmp.title;
  obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj.children = intl2.string(arg1(dependencyMap[10]).t.afcl67);
  obj.children = callback2(arg1(dependencyMap[15]).Text, obj);
  const items = [callback2(arg1(dependencyMap[14]).PressableHighlight, obj), ];
  const obj1 = { style: tmp.actions };
  const obj2 = { style: tmp.actionIcon, variant: "filled", source: importDefault(dependencyMap[16]), onPress: handleShare };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj2.accessibilityLabel = intl3.string(arg1(dependencyMap[10]).t.Ej3B3Y);
  const items1 = [callback2(importDefault(dependencyMap[5]), obj2), ];
  const obj3 = { style: tmp.actionIcon, variant: "filled" };
  const tmp3 = importDefault(dependencyMap[5]);
  obj3.source = importDefault(dependencyMap[17]);
  obj3.onPress = handleLink;
  const intl4 = arg1(dependencyMap[10]).intl;
  obj3.accessibilityLabel = intl4.string(arg1(dependencyMap[10]).t.WqhZss);
  items1[1] = callback2(importDefault(dependencyMap[5]), obj3);
  obj1.children = items1;
  items[1] = callback3(View, obj1);
  obj.children = items;
  return callback3(View, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx");

export default memoResult;
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;

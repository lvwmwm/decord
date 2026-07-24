// Module ID: 15007
// Function ID: 114327
// Name: getFriendInviteCode
// Dependencies: [5, 31, 27, 653, 33, 10132, 689, 4130, 7540, 3830, 1212, 8526, 7000, 3982, 4660, 4126, 12913, 15008, 2]

// Module 15007 (getFriendInviteCode)
import ButtonBadge from "ButtonBadge";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { InstantInviteSources } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function getFriendInviteCode() {
  return _getFriendInviteCode(...arguments);
}
function _getFriendInviteCode() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleShare() {
  return _handleShare(...arguments);
}
function _handleShare() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleLink() {
  return _handleLink(...arguments);
}
function _handleLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = require("ButtonBadge").ICON_ACTION_BUTTON_SIZE + require("_createForOfIteratorHelperLoose").space.PX_16;
let obj = {};
obj = { height: sum, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
obj.container = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.title = _createForOfIteratorHelperLoose;
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
obj.actions = obj2;
obj.actionIcon = { marginEnd: 0, marginStart: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { marginEnd: 0, marginStart: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo(function MessagesItemAddFriendsWidget() {
  const tmp = callback4();
  let obj = { style: tmp.container, collapsable: false };
  const callback = importAllResult.useCallback(() => {
    let obj = outer1_0(outer1_2[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = null == rootNavigationRef;
    let obj2 = rootNavigationRef;
    if (!tmp2) {
      const current = rootNavigationRef.current;
      tmp2 = null == current;
      obj2 = current;
    }
    if (!tmp2) {
      obj = { screen: "add-friends", params: { sourcePage: "Add Friends Widget", presentation: "card" } };
      obj2.navigate("friends", obj);
    }
  }, []);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.afcl67);
  obj.accessibilityRole = "button";
  obj.onPress = callback;
  obj.style = tmp.title;
  obj = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2 };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.afcl67);
  obj.children = callback2(require(4126) /* Text */.Text, obj);
  const items = [callback2(require(4660) /* PressableBase */.PressableHighlight, obj), ];
  const obj1 = { style: tmp.actions };
  let obj2 = { style: tmp.actionIcon, variant: "filled", source: importDefault(12913), onPress: handleShare };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.Ej3B3Y);
  const items1 = [callback2(importDefault(10132), obj2), ];
  const obj3 = { style: tmp.actionIcon, variant: "filled" };
  const tmp3 = importDefault(10132);
  obj3.source = importDefault(15008);
  obj3.onPress = handleLink;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.accessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.WqhZss);
  items1[1] = callback2(importDefault(10132), obj3);
  obj1.children = items1;
  items[1] = callback3(View, obj1);
  obj.children = items;
  return callback3(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx");

export default memoResult;
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;

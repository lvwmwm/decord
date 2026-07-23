// Module ID: 15116
// Function ID: 115139
// Name: Username
// Dependencies: [31, 27, 4810, 33, 4130, 689, 8513, 8525, 566, 8239, 9067, 9087, 4126, 3969, 2]

// Module 15116 (Username)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
const require = arg1;
function Username(arg0) {
  let userId;
  let username;
  ({ userId, username } = arg0);
  let obj = {};
  const items = [callback3().usernameRow];
  obj.style = items;
  obj = { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75 };
  const items1 = [{ flexShrink: 1 }];
  obj.style = items1;
  const items2 = [callback(importDefault(8513), obj), callback(require(8525) /* ChevronSmallDownIcon */.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" })];
  obj.children = items2;
  return callback2(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 } };
obj = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.statusRow = obj;
obj.statusEmoji = { width: 16, height: 16 };
obj.usernameRow = { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 };
obj.statusText = { flexShrink: 1 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function YouName(arg0) {
  let userId;
  let username;
  ({ userId, username } = arg0);
  const tmp = callback3();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getStatus());
  let obj1 = require(8239) /* _activityFromSetting */;
  const customStatusActivity = obj1.useCustomStatusActivity();
  let obj2 = require(9067) /* useGameMentionsAsPlainText */;
  let state;
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  obj = { style: tmp.userText };
  const items1 = [callback(Username, { username, userId }), ];
  obj = { style: tmp.statusRow };
  let emoji;
  if (null != customStatusActivity) {
    emoji = customStatusActivity.emoji;
  }
  let tmp11 = null;
  if (null != emoji) {
    obj1 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
    tmp11 = callback(importDefault(9087), obj1);
  }
  const items2 = [tmp11, ];
  obj2 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText };
  if (null == gameMentionsAsPlainText) {
    gameMentionsAsPlainText = require(3969) /* conceal */.humanizeStatus(stateFromStores);
    const obj8 = require(3969) /* conceal */;
  }
  obj2.children = gameMentionsAsPlainText;
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  items1[1] = closure_6(View, obj);
  obj.children = items1;
  return closure_6(View, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;

// Module ID: 12979
// Function ID: 100477
// Dependencies: [31, 27, 33, 4130, 689, 1557, 7186, 5187, 5189, 477, 12974, 12980, 12917, 12981, 12984, 5446, 2]

// Module 12979
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.actions = { paddingHorizontal: 16, gap: 24 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function GuildActionSheet(arg0) {
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback3();
  let obj = require(7186) /* useBottomSheetRef */;
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded };
  obj = { scrollsToTop: false, style: tmp.container };
  const obj1 = {};
  let num = 0;
  if (obj5.isAndroid()) {
    num = 16;
  }
  obj1.paddingBottom = importDefault(1557)().bottom + num;
  obj.contentContainerStyle = obj1;
  const items = [callback(importDefault(12974), { guild }), callback(importDefault(12980), { guild }), , ];
  const obj2 = { style: tmp.actions };
  const items1 = [callback(require(12917) /* HideMutedChannelsOption */.GuildUnreadAction, { guild }), callback(importDefault(12981), { guild }), callback(require(12917) /* HideMutedChannelsOption */.GuildActionSheetPrimaryActions, { guild }), callback(require(12917) /* HideMutedChannelsOption */.GuildActionSheetSecondaryActions, { guild }), callback(require(12917) /* HideMutedChannelsOption */.GuildDeveloperOptionAction, { guild }), callback(importDefault(12984), { guildId: guild.id })];
  obj2.children = items1;
  items[2] = callback2(View, obj2);
  items[3] = callback(require(5446) /* ActionSheetHeaderBar */.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj.children = items;
  obj.children = callback2(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;

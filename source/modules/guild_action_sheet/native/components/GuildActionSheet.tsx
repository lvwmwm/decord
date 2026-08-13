// Module ID: 13388
// Function ID: 13389
// Dependencies: [19, 17, 21, 4342, 712, 1628, 7449, 5437, 5439, 500, 13383, 13389, 13326, 13390, 13393, 5752, 2]

// Module 13388
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, actions: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
obj[1] = { paddingHorizontal: 16, gap: 24 };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function GuildActionSheet(arg0) {
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = callback();
  let obj = require(7449) /* useBottomSheetRef */;
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj[2] = { paddingBottom: importDefault(1628)().bottom + num };
  const items = [closure_4(importDefault(13383), { guild }), closure_4(importDefault(13389), { guild }), , ];
  const obj1 = { style: tmp.actions, children: null };
  const items1 = [closure_4(require(13326) /* HideMutedChannelsOption */.GuildUnreadAction, { guild }), closure_4(importDefault(13390), { guild }), closure_4(require(13326) /* HideMutedChannelsOption */.GuildActionSheetPrimaryActions, { guild }), closure_4(require(13326) /* HideMutedChannelsOption */.GuildActionSheetSecondaryActions, { guild }), closure_4(require(13326) /* HideMutedChannelsOption */.GuildDeveloperOptionAction, { guild }), closure_4(importDefault(13393), { guildId: guild.id })];
  obj1[1] = items1;
  items[2] = closure_5(View, obj1);
  items[3] = closure_4(require(5752) /* ActionSheetHeaderBar */.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj[3] = items;
  obj[5] = closure_5(require(5439) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return closure_4(require(5437) /* Background */.BottomSheet, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;

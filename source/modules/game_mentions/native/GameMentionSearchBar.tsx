// Module ID: 11474
// Function ID: 89267
// Dependencies: [31, 27, 33, 4130, 689, 11462, 8979, 4126, 1212, 7636, 2]

// Module 11474
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.container = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_HEADER_PADDING_VERTICAL };
obj.headerRow = _createForOfIteratorHelperLoose;
obj.icon = { marginRight: 12 };
obj.description = { paddingHorizontal: 16, paddingBottom: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
let obj2 = { paddingHorizontal: 16, paddingBottom: require("useGameMentionSearchBarHeight").GAME_MENTION_SEARCH_BAR_DESCRIPTION_PADDING_BOTTOM };
obj.divider = { marginLeft: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { marginLeft: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COMMAND_BAR_DIVIDER };
const memoResult = importAllResult.memo(function GameMentionSearchBar() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { accessible: true, accessibilityRole: "header" };
  obj = { style: tmp.headerRow };
  const items = [callback(require(8979) /* GameControllerIcon */.GameControllerIcon, { size: "sm", style: tmp.icon }), ];
  const obj2 = { variant: require(11462) /* useGameMentionSearchBarHeight */.GAME_MENTION_SEARCH_BAR_TITLE_VARIANT, color: "mobile-text-heading-primary", children: "@game" };
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { style: tmp.description, variant: require(11462) /* useGameMentionSearchBarHeight */.GAME_MENTION_SEARCH_BAR_DESCRIPTION_VARIANT, color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t["1kR88y"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items1;
  const items2 = [callback2(View, obj), callback(require(7636) /* Form */.FormDivider, { style: tmp.divider })];
  obj.children = items2;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/game_mentions/native/GameMentionSearchBar.tsx");

export default memoResult;

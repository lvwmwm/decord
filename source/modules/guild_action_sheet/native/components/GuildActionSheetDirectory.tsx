// Module ID: 13025
// Function ID: 100741
// Name: GuildActionSheetDirectory
// Dependencies: [31, 27, 33, 4130, 689, 1557, 5187, 5189, 13026, 12969, 2]
// Exports: default

// Module 13025 (GuildActionSheetDirectory)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.actions = { paddingHorizontal: 16, gap: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default function GuildActionSheetDirectory(arg0) {
  let expanded;
  let guild;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { scrollable: true, startExpanded: expanded };
  obj = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: importDefault(1557)().bottom } };
  const items = [callback(importDefault(13026), { guild }), ];
  obj = { style: tmp.actions };
  const items1 = [callback(require(12969) /* HideMutedChannelsOption */.GuildActionSheetDirectoryActions, { guild }), callback(require(12969) /* HideMutedChannelsOption */.GuildDeveloperOptionAction, { guild })];
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  obj.children = callback2(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};

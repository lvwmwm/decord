// Module ID: 15901
// Function ID: 122611
// Dependencies: [31, 33, 4165, 5221, 5223, 5155, 15902, 2]

// Module 15901
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { gap: 24 } });
const memoResult = require("result").memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true };
  obj = {};
  obj = { bottom: true, style: callback().wrapper, children: jsx(importDefault(15902), { guildId, channelId }) };
  obj.children = jsx(require(5155) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15902), { guildId, channelId }) });
  obj.children = jsx(require(5223) /* BottomSheetModal */.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15902), { guildId, channelId }) });
  return jsx(require(5221) /* Background */.BottomSheet, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15902), { guildId, channelId }) });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

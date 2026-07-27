// Module ID: 15862
// Function ID: 122455
// Dependencies: [31, 33, 4131, 5187, 5189, 5121, 15863, 2]

// Module 15862
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
  obj = { bottom: true, style: callback().wrapper, children: jsx(importDefault(15863), { guildId, channelId }) };
  obj.children = jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15863), { guildId, channelId }) });
  obj.children = jsx(require(5189) /* BottomSheetModal */.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15863), { guildId, channelId }) });
  return jsx(require(5187) /* Background */.BottomSheet, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15863), { guildId, channelId }) });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

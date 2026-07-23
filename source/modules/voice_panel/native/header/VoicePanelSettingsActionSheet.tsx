// Module ID: 15792
// Function ID: 121917
// Dependencies: [31, 33, 4130, 5187, 5189, 5121, 15793, 2]

// Module 15792
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
  obj = { bottom: true, style: callback().wrapper, children: jsx(importDefault(15793), { guildId, channelId }) };
  obj.children = jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15793), { guildId, channelId }) });
  obj.children = jsx(require(5189) /* BottomSheetModal */.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15793), { guildId, channelId }) });
  return jsx(require(5187) /* Background */.BottomSheet, { bottom: true, style: callback().wrapper, children: jsx(importDefault(15793), { guildId, channelId }) });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

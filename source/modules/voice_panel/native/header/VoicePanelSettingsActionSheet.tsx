// Module ID: 16075
// Function ID: 16076
// Dependencies: [19, 21, 4285, 5377, 5379, 5311, 16076, 2]

// Module 16075
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ wrapper: { gap: 24 } });
const memoResult = require("noop").memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true, children: null };
  obj = { children: null };
  obj = { bottom: true, style: callback().wrapper, children: null };
  obj[2] = jsx(importDefault(16076), { guildId, channelId });
  obj[0] = jsx(require(5311) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: null });
  obj[2] = jsx(require(5379) /* BottomSheetModal */.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: null });
  return jsx(require(5377) /* Background */.BottomSheet, { bottom: true, style: callback().wrapper, children: null });
});
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

// Module ID: 16655
// Function ID: 16656
// Dependencies: [19, 21, 4448, 5590, 5592, 5521, 16656, 2]

// Module 16655
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5521 */;
import Background from "Background" /* 5590 */;
import BottomSheetModal from "BottomSheetModal" /* 5592 */;
import VoicePanelSettingsOverviewHeaderDefault from "VoicePanelSettingsOverviewHeader" /* 16656 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = createCacheKey.createStyles({ wrapper: { gap: 24 } });
const memoResult = importAllResult.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true, children: null };
  obj = { children: null };
  obj = { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) };
  obj[0] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
  obj[2] = jsx(BottomSheetModal.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
  return jsx(Background.BottomSheet, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

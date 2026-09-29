// Module ID: 17579
// Function ID: 17580
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 4788, 7427, 6901, 7400, 17580, 2]

// Module 17579 (VoicePanelSettingsActionSheet)
import BottomSheetModal from "BottomSheetModal" /* 6901 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7400 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7427 */;
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview" /* 17580 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default noop.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  const obj = { startExpanded: true, scrollable: true, children: null };
  const obj2 = { children: null };
  const tmp = closure_4();
  obj2.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { children: null });
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, scrollable: true, children: null });
});

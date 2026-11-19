// Module ID: 18046
// Function ID: 18047
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 4792, 5020, 5024, 6898, 18047, 2]

// Module 18046 (VoicePanelSettingsActionSheet)
import Fragment from "Fragment" /* 21 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5020 */;
import BottomSheetModal from "BottomSheetModal" /* 5024 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6898 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const memoResult = react.memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  const tmp = closure_4();
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  return <BottomSheet startExpanded scrollable>{null}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

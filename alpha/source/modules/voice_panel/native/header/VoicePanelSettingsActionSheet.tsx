// Module ID: 18152
// Function ID: 18153
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 5012, 5240, 5244, 7449, 18153, 2]

// Module 18152 (VoicePanelSettingsActionSheet)
import Fragment from "Fragment" /* 21 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5240 */;
import BottomSheetModal from "BottomSheetModal" /* 5244 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7449 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
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

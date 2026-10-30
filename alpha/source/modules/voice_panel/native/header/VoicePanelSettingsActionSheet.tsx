// Module ID: 19165
// Function ID: 19166
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 5009, 5267, 5270, 7286, 19166, 2]

// Module 19165 (VoicePanelSettingsActionSheet)
import Fragment from "Fragment" /* 21 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import BottomSheetModal from "BottomSheetModal" /* 5270 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const memoResult = react.memo(function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  const tmp = closure_4();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  return <BottomSheet startExpanded scrollable>{null}</BottomSheet>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

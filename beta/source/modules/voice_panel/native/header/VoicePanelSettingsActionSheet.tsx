// Module ID: 16935
// Function ID: 16936
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 4836, 6571, 6045, 6544, 16936, 2]

// Module 16935 (VoicePanelSettingsActionSheet)
import Fragment from "Fragment" /* 21 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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

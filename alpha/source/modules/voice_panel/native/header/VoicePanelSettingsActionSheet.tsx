// Module ID: 18497
// Function ID: 18498
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 4969, 558, 576, 18498, 5263, 5267, 7219, 2]

// Module 18497 (VoicePanelSettingsActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5263 */;
import BottomSheetModal from "BottomSheetModal" /* 5267 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7219 */;
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview" /* 18498 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  const obj = react2;
  const cResult = obj.c(6);
  ({ guildId, channelId } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === channelId) {
    let tmp5;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.wrapper) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    BottomSheet = tmp(5263).BottomSheet;
    const BottomSheetScrollView = tmp(5267).BottomSheetScrollView;
    const tmp9 = <BottomSheet startExpanded scrollable>{null}</BottomSheet>;
    cResult[3] = tmp4.wrapper;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId });
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function VoicePanelSettingsActionSheet(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  const tmp = closure_4();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  return <BottomSheet startExpanded scrollable>{null}</BottomSheet>;
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;

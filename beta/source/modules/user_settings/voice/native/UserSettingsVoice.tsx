// Module ID: 9434
// Function ID: 9435
// Name: UserSettingsVoice
// Dependencies: [19, 17, 9435, 9436, 21, 4836, 5999, 9437, 9438, 5279, 9439, 9441, 4832, 1115, 9445, 9446, 9448, 9456, 6544, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 9434 (UserSettingsVoice)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1115 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 9435 */;
import UserSettingsVoiceConstants from "UserSettingsVoiceConstants" /* 9436 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9437 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9438 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 9439 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 9445 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9446 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 9448 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 9456 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const isMobileOverlaySupported = MobileVoiceOverlayStore.isMobileOverlaySupported;
const guideURL = UserSettingsVoiceConstants.USER_SETTINGS_VOICE_GUILD_URL;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  let Stack;
  let intl;
  let intl2;
  let obj4;
  let obj6;
  let tmp7;
  const tmp = closure_8();
  const obj = MobileAudioOutputExperimentDefault;
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const obj2 = { style: tmp.container, children: tmp7(Stack, obj6) };
  const tmp4 = useIsVideoBackgroundSupportedDefault();
  Stack = Stack_Stack.Stack;
  const items = [metroRequire(UserSettingsVoiceInputOptionsDefault, {}), , , , , , , ];
  const tmp6 = View;
  tmp7 = metroImportDefault;
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp5(tmp2(9441), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: intl.format(intl3.t["V+B3FH"], obj4) };
  const Text = tmp8(4832).Text;
  intl = tmp8(1115).intl;
  obj4 = { guideURL };
  items[2] = metroRequire(Text, obj3);
  items[3] = metroRequire(UserSettingsSoundboardVolumeDefault, {});
  items[4] = isMobileOverlaySupported() && metroRequire(UserSettingsVoiceOverlayDefault, {});
  isMobileOverlaySupported() && metroRequire(UserSettingsVoiceOverlayDefault, {});
  items[5] = metroRequire(UserSettingsVoiceProcessingDefault, {});
  let tmp5Result = tmp4;
  if (tmp5Result) {
    const obj5 = { title: intl2.string(intl3.t.lZTUPs) };
    const tmp2Result = VideoBackgroundOptionsRadioGroupDefault;
    intl2 = tmp8(1115).intl;
    tmp5Result = tmp5(tmp2Result, obj5);
  }
  obj6 = { spacing: 24, children: items };
  items[6] = tmp5Result;
  items[7] = metroRequire(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  return metroRequire(tmp6, obj2);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const obj = {};
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const merged = Object.assign(arg0);
  return metroRequire(TableRowGroup, obj);
};

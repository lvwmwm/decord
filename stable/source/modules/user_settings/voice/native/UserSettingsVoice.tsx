// Module ID: 12138
// Function ID: 12139
// Name: UserSettingsVoice
// Dependencies: [19, 17, 12139, 12140, 21, 5170, 7159, 12141, 12142, 6191, 12144, 12146, 5783, 1113, 12150, 12151, 12153, 12161, 7388, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 12138 (UserSettingsVoice)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import Stack_Stack from "Stack/Stack" /* 6191 */;
import TableRowGroup2 from "TableRowGroup" /* 7159 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7388 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 12139 */;
import UserSettingsVoiceConstants from "UserSettingsVoiceConstants" /* 12140 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12141 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 12142 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 12144 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 12150 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 12151 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 12153 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 12161 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
  const tmp4 = useIsVideoBackgroundEnabledDefault("UserSettingsVoice");
  Stack = Stack_Stack.Stack;
  const items = [metroRequire(UserSettingsVoiceInputOptionsDefault, {}), , , , , , , ];
  const tmp6 = View;
  tmp7 = metroImportDefault;
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp5(tmp2(12146), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "body-sm/medium", children: intl.format(intl3.t["V+B3FH"], obj4) };
  const Text = tmp8(5783).Text;
  intl = tmp8(1113).intl;
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
    intl2 = tmp8(1113).intl;
    tmp5Result = tmp5(tmp2Result, obj5);
  }
  obj6 = { spacing: 24, children: items };
  items[6] = tmp5Result;
  items[7] = metroRequire(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  return metroRequire(tmp6, obj2);
};
export function UserSettingsTableRowGroup(arg0) {
  const obj = {};
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const merged = Object.assign(arg0);
  return metroRequire(TableRowGroup, obj);
}

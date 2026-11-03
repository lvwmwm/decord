// Module ID: 12077
// Function ID: 12078
// Name: UserSettingsVoice
// Dependencies: [19, 17, 12078, 12079, 21, 5141, 7186, 12080, 12081, 6147, 12083, 12085, 5747, 1113, 12089, 12090, 12092, 12100, 7412, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 12077 (UserSettingsVoice)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import Stack_Stack from "Stack/Stack" /* 6147 */;
import TableRowGroup2 from "TableRowGroup" /* 7186 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7412 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 12078 */;
import UserSettingsVoiceConstants from "UserSettingsVoiceConstants" /* 12079 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12080 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 12081 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 12083 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 12089 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 12090 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 12092 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 12100 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
    nonContextualStreamOutputPresent = tmp5(tmp2(12085), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: intl.format(intl3.t["V+B3FH"], obj4) };
  const Text = tmp8(5747).Text;
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

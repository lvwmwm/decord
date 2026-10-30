// Module ID: 11901
// Function ID: 11902
// Name: UserSettingsVoice
// Dependencies: [19, 17, 11902, 11903, 21, 5009, 7054, 11904, 11905, 6022, 11907, 11909, 5619, 1114, 11913, 11914, 11916, 11924, 7286, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 11901 (UserSettingsVoice)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1114 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 11902 */;
import UserSettingsVoiceConstants from "UserSettingsVoiceConstants" /* 11903 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 11904 */;
import useIsVideoBackgroundEnabledDefault from "useIsVideoBackgroundEnabled" /* 11905 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 11907 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 11913 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 11914 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 11916 */;
import VideoBackgroundOptionsRadioGroupDefault from "VideoBackgroundOptionsRadioGroup" /* 11924 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
    nonContextualStreamOutputPresent = tmp5(tmp2(11909), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: intl.format(intl3.t["V+B3FH"], obj4) };
  const Text = tmp8(5619).Text;
  intl = tmp8(1114).intl;
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
    intl2 = tmp8(1114).intl;
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

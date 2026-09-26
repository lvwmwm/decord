// Module ID: 9434
// Function ID: 9435
// Name: UserSettingsVoice
// Dependencies: [19, 17, 9435, 9436, 21, 4836, 5999, 9437, 9438, 5279, 9439, 9441, 4832, 1115, 9445, 9446, 9448, 9456, 6544, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 9434 (UserSettingsVoice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9437 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9438 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 9439 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 9445 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9446 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 9448 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(9435).isMobileOverlaySupported;
const guideURL = fn(9436).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const tmp4 = useIsVideoBackgroundSupportedDefault();
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp5(tmp2(9441), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp8(1115).intl;
  obj3.children = intl.format(util.t["V+B3FH"], { guideURL });
  items[2] = timestampProducer(Text_Text.Text, obj3);
  items[3] = timestampProducer(UserSettingsSoundboardVolumeDefault, {});
  const obj4 = { guideURL };
  const tmp6 = View;
  const tmp7 = React5;
  items[4] = isMobileOverlaySupported() && timestampProducer(UserSettingsVoiceOverlayDefault, {});
  items[5] = timestampProducer(UserSettingsVoiceProcessingDefault, {});
  let tmp5Result = tmp4;
  if (tmp4) {
    const obj5 = { title: null };
    const intl2 = tmp8(1115).intl;
    obj5.title = intl2.string(tmp8(1115).t.lZTUPs);
    tmp5Result = tmp5(tmp2(9456), obj5);
    const tmp2Result = tmp2(9456);
  }
  const obj6 = { spacing: 24, children: null };
  items[6] = tmp5Result;
  items[7] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  obj6.children = items;
  obj2.children = tmp7(Stack_Stack.Stack, obj6);
  return timestampProducer(tmp6, obj2);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
};

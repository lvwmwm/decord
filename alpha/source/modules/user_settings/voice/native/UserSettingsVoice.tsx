// Module ID: 9629
// Function ID: 9630
// Name: UserSettingsVoice
// Dependencies: [19, 17, 9630, 9631, 21, 4845, 6185, 9632, 9633, 5463, 9634, 9636, 4841, 1115, 9640, 9641, 9643, 9651, 6730, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 9629 (UserSettingsVoice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4841 */;
import Stack_Stack from "Stack/Stack" /* 5463 */;
import TableRowGroup from "TableRowGroup" /* 6185 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6730 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9632 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9633 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 9634 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 9640 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9641 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 9643 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(9630).isMobileOverlaySupported;
const guideURL = fn(9631).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4845);
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
    nonContextualStreamOutputPresent = tmp5(tmp2(9636), {});
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
    tmp5Result = tmp5(tmp2(9651), obj5);
    const tmp2Result = tmp2(9651);
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

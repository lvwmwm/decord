// Module ID: 9601
// Function ID: 9602
// Name: UserSettingsVoice
// Dependencies: [19, 17, 9602, 9603, 21, 4836, 6165, 9604, 9605, 5445, 9606, 9608, 4832, 1115, 9612, 9613, 9615, 9623, 6710, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 9601 (UserSettingsVoice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5445 */;
import TableRowGroup from "TableRowGroup" /* 6165 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6710 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9604 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9605 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 9606 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 9612 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9613 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 9615 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(9602).isMobileOverlaySupported;
const guideURL = fn(9603).USER_SETTINGS_VOICE_GUILD_URL;
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
    nonContextualStreamOutputPresent = tmp5(tmp2(9608), {});
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
    tmp5Result = tmp5(tmp2(9623), obj5);
    const tmp2Result = tmp2(9623);
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

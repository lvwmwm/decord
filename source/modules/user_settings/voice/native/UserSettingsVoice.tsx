// Module ID: 9908
// Function ID: 9909
// Name: UserSettingsVoice
// Dependencies: [19, 17, 9909, 9910, 21, 4481, 5642, 9911, 4934, 9912, 9914, 4477, 1233, 9918, 9919, 9921, 7063, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 9908 (UserSettingsVoice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4477 */;
import Stack from "Stack" /* 4934 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5642 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7063 */;
import apexExperimentDefault from "apexExperiment" /* 9911 */;
import handleInputModePressDefault from "handleInputModePress" /* 9912 */;
import SoundboardVolumeDefault from "SoundboardVolume" /* 9918 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9919 */;
import VoiceProcessingOptionsDefault from "VoiceProcessingOptions" /* 9921 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isMobileOverlaySupported } from "getUserAgnosticState" /* 9909 */;
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined" /* 9910 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = apexExperimentDefault;
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(handleInputModePressDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(9914), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1233).intl;
  obj[2] = intl.format(getSystemLocale.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(Text.Text, obj);
  items[3] = callback(SoundboardVolumeDefault, {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(UserSettingsVoiceOverlayDefault, {});
  items[5] = callback(VoiceProcessingOptionsDefault, {});
  items[6] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(Stack.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(TableRowGroupTitle.TableRowGroup, {});
};

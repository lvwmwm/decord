// Module ID: 17194
// Function ID: 17195
// Name: SettingsClipsScreen
// Dependencies: [19, 8503, 21, 11685, 16905, 2]
// Exports: default

// Module 17194 (SettingsClipsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import SettingLayoutDefault from "SettingLayout" /* 16905 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { settings: items };
    items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [obj];
    const obj2 = SettingBuilders;
    return obj2.createList({ sections });
  }, []);
  return jsx(SettingLayoutDefault, { node });
};

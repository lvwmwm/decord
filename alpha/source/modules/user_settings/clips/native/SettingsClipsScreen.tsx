// Module ID: 17147
// Function ID: 17148
// Name: SettingsClipsScreen
// Dependencies: [19, 8578, 21, 11737, 16858, 2]
// Exports: default

// Module 17147 (SettingsClipsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import SettingLayoutDefault from "SettingLayout" /* 16858 */;
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

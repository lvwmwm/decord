// Module ID: 16826
// Function ID: 16827
// Name: SettingsClipsScreen
// Dependencies: [19, 8424, 21, 11505, 16533, 2]
// Exports: default

// Module 16826 (SettingsClipsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import SettingLayoutDefault from "SettingLayout" /* 16533 */;
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

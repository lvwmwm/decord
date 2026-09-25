// Module ID: 14486
// Function ID: 14487
// Name: SettingsClipsScreen
// Dependencies: [19, 7412, 21, 10993, 14223, 2]
// Exports: default

// Module 14486 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 10993 */;
import SettingLayoutDefault from "SettingLayout" /* 14223 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7412).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = noop.useMemo(() => {
    const obj = { settings: null };
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    obj.settings = items;
    const sections = [obj];
    return SettingBuilders.createList({ sections });
  }, []);
  return jsx(SettingLayoutDefault, { node });
};

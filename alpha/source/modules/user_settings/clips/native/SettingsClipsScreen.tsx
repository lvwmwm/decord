// Module ID: 14686
// Function ID: 14687
// Name: SettingsClipsScreen
// Dependencies: [19, 7582, 21, 11175, 14423, 2]
// Exports: default

// Module 14686 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11175 */;
import SettingLayoutDefault from "SettingLayout" /* 14423 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7582).MobileUserSettings;
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

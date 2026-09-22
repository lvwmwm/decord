// Module ID: 15064
// Function ID: 15065
// Name: SettingsClipsScreen
// Dependencies: [19, 8079, 21, 11605, 14776, 2]
// Exports: default

// Module 15064 (SettingsClipsScreen)
import SettingBuilders from "SettingBuilders" /* 11605 */;
import SettingLayoutDefault from "SettingLayout" /* 14776 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8079).MobileUserSettings;
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

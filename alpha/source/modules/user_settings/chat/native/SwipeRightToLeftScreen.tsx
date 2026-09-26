// Module ID: 15027
// Function ID: 15028
// Name: SwipeRightToLeftScreen
// Dependencies: [19, 7417, 21, 11006, 14248, 2]
// Exports: default

// Module 15027 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14248 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7417).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { settings: null };
    const items = [constants.CHAT_GESTURES];
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};

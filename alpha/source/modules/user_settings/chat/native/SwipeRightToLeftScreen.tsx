// Module ID: 15238
// Function ID: 15239
// Name: SwipeRightToLeftScreen
// Dependencies: [19, 7590, 21, 11215, 14460, 2]
// Exports: default

// Module 15238 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11215 */;
import SettingLayoutDefault from "SettingLayout" /* 14460 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7590).MobileUserSettings;
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

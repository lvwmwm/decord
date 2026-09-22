// Module ID: 15761
// Function ID: 15762
// Name: SwipeRightToLeftScreen
// Dependencies: [19, 8237, 21, 11729, 14971, 2]
// Exports: default

// Module 15761 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11729 */;
import SettingLayoutDefault from "SettingLayout" /* 14971 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8237).MobileUserSettings;
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

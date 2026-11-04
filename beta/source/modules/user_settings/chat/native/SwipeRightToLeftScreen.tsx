// Module ID: 17469
// Function ID: 17470
// Name: SwipeRightToLeftScreen
// Dependencies: [19, 8432, 21, 11540, 16588, 2]
// Exports: default

// Module 17469 (SwipeRightToLeftScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import SettingLayoutDefault from "SettingLayout" /* 16588 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = react.useMemo(() => {
    let items;
    let items1;
    const obj3 = { settings: items };
    items = [constants.CHAT_GESTURES];
    const obj2 = { sections: items1 };
    items1 = [obj3];
    const obj = SettingBuilders;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};

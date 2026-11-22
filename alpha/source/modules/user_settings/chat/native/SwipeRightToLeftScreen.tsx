// Module ID: 16881
// Function ID: 16882
// Name: SwipeRightToLeftScreen
// Dependencies: [19, 8712, 21, 11937, 15983, 2]
// Exports: default

// Module 16881 (SwipeRightToLeftScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import SettingLayoutDefault from "SettingLayout" /* 15983 */;
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

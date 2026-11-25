// Module ID: 17439
// Function ID: 17440
// Name: RedesignSettingsFriendActivityTitleScreen
// Dependencies: [19, 21, 11942, 17428, 17429, 2]

// Module 17439 (RedesignSettingsFriendActivityTitleScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17428 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17429 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsFriendActivityTitleScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildFriendActivityTitleSettingsSection();
    return createList(obj);
  }, []);
  return jsx(SystemNotifPermissionLayoutDefault, { node, category: "222_social" });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsFriendActivityTitleScreen.tsx");

export default memoResult;

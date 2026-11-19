// Module ID: 17478
// Function ID: 17479
// Name: RedesignSettingsFriendActivityTitleScreen
// Dependencies: [19, 21, 11875, 17467, 17468, 2]

// Module 17478 (RedesignSettingsFriendActivityTitleScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17467 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17468 */;
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

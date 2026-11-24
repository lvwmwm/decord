// Module ID: 17470
// Function ID: 17471
// Name: RedesignSettingsCategoryServersScreen
// Dependencies: [19, 9414, 21, 17458, 11815, 17459, 2]

// Module 17470 (RedesignSettingsCategoryServersScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17458 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17459 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryServersScreen() {
  let node;
  let unavailableNode;
  const memo = react.useMemo(() => {
    let createList;
    let items1;
    let items2;
    let items3;
    let obj3;
    let obj5;
    let obj6;
    const obj = MobileNotifSettingsRouteBuilders;
    const categoryServersSettingsSection = obj.buildCategoryServersSettingsSection();
    const items = [constants.REDESIGN_COMMUNITY_ACTIVITY_ALERTS];
    const obj2 = { node: createList(obj3), unavailableNode: obj5.createList(obj6) };
    obj3 = { sections: items2 };
    const obj4 = { settings: items1 };
    createList = SettingBuilders.createList;
    SettingBuilders;
    const merged = Object.assign(categoryServersSettingsSection);
    items1 = [...items];
    items2 = [obj4];
    obj6 = { sections: items3 };
    items3 = [{ settings: items }];
    obj5 = SettingBuilders;
    return obj2;
  }, []);
  ({ node, unavailableNode } = memo);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "333_server" });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServersScreen.tsx");

export default memoResult;

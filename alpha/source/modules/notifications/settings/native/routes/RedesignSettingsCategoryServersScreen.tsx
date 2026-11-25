// Module ID: 17581
// Function ID: 17582
// Name: RedesignSettingsCategoryServersScreen
// Dependencies: [19, 9513, 21, 17569, 11914, 17570, 2]

// Module 17581 (RedesignSettingsCategoryServersScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17569 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17570 */;
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

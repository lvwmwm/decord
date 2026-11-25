// Module ID: 17436
// Function ID: 17437
// Name: RedesignSettingsCategoryCallsMessagesScreen
// Dependencies: [19, 21, 11942, 17428, 17429, 2]

// Module 17436 (RedesignSettingsCategoryCallsMessagesScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17428 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17429 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryCallsMessagesScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryCallsMessagesSettingsSection();
    return createList(obj);
  }, []);
  return jsx(SystemNotifPermissionLayoutDefault, { node, category: "111_realtime" });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryCallsMessagesScreen.tsx");

export default memoResult;

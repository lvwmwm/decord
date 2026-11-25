// Module ID: 17437
// Function ID: 17438
// Name: RedesignSettingsCategoryDiscoveryHighlightsScreen
// Dependencies: [19, 8712, 21, 17428, 11942, 17429, 2]

// Module 17437 (RedesignSettingsCategoryDiscoveryHighlightsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17428 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17429 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryDiscoveryHighlightsScreen() {
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
    const categoryDiscoveryHighlightsSettingsSection = obj.buildCategoryDiscoveryHighlightsSettingsSection();
    const items = [constants.REDESIGN_HIGHLIGHT_NOTIFICATIONS];
    const obj2 = { node: createList(obj3), unavailableNode: obj5.createList(obj6) };
    obj3 = { sections: items2 };
    const obj4 = { settings: items1 };
    createList = SettingBuilders.createList;
    SettingBuilders;
    const merged = Object.assign(categoryDiscoveryHighlightsSettingsSection);
    items1 = [...items];
    items2 = [obj4];
    obj6 = { sections: items3 };
    items3 = [{ settings: items }];
    obj5 = SettingBuilders;
    return obj2;
  }, []);
  ({ node, unavailableNode } = memo);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "444_other" });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryDiscoveryHighlightsScreen.tsx");

export default memoResult;

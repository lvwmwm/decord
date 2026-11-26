// Module ID: 18631
// Function ID: 18632
// Name: RedesignSettingsCategoryDiscoveryHighlightsScreen
// Dependencies: [19, 9202, 21, 18622, 12408, 18623, 2]

// Module 18631 (RedesignSettingsCategoryDiscoveryHighlightsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18622 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 18623 */;
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

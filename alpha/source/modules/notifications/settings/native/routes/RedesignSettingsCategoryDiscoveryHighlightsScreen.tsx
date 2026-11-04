// Module ID: 18223
// Function ID: 18224
// Name: RedesignSettingsCategoryDiscoveryHighlightsScreen
// Dependencies: [19, 21, 11729, 18215, 18220, 2]

// Module 18223 (RedesignSettingsCategoryDiscoveryHighlightsScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18215 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 18220 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryDiscoveryHighlightsScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryDiscoveryHighlightsSettingsSection();
    return createList(obj);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryDiscoveryHighlightsScreen.tsx");

export default memoResult;

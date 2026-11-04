// Module ID: 18226
// Function ID: 18227
// Name: RedesignSettingsCategoryServersScreen
// Dependencies: [19, 21, 11729, 18215, 18220, 2]

// Module 18226 (RedesignSettingsCategoryServersScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18215 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 18220 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryServersScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryServersSettingsSection();
    return createList(obj);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServersScreen.tsx");

export default memoResult;

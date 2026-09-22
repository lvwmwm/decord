// Module ID: 16018
// Function ID: 16019
// Name: RedesignSettingsCategoryOtherScreen
// Dependencies: [19, 21, 11605, 16010, 14776, 2]

// Module 16018 (RedesignSettingsCategoryOtherScreen)
import SettingBuilders from "SettingBuilders" /* 11605 */;
import SettingLayoutDefault from "SettingLayout" /* 14776 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16010 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryOtherScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryOtherSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});

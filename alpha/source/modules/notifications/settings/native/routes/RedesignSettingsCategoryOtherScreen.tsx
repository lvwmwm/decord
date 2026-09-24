// Module ID: 16338
// Function ID: 16339
// Name: RedesignSettingsCategoryOtherScreen
// Dependencies: [19, 21, 11811, 16330, 15057, 2]

// Module 16338 (RedesignSettingsCategoryOtherScreen)
import SettingBuilders from "SettingBuilders" /* 11811 */;
import SettingLayoutDefault from "SettingLayout" /* 15057 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16330 */;
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

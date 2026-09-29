// Module ID: 16255
// Function ID: 16256
// Name: RedesignSettingsCategoryOtherScreen
// Dependencies: [19, 21, 11754, 16247, 14992, 2]

// Module 16255 (RedesignSettingsCategoryOtherScreen)
import SettingBuilders from "SettingBuilders" /* 11754 */;
import SettingLayoutDefault from "SettingLayout" /* 14992 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16247 */;
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

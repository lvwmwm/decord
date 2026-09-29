// Module ID: 15717
// Function ID: 15718
// Name: RedesignSettingsRealtimeScreen
// Dependencies: [19, 21, 11175, 15712, 14423, 2]

// Module 15717 (RedesignSettingsRealtimeScreen)
import SettingBuilders from "SettingBuilders" /* 11175 */;
import SettingLayoutDefault from "SettingLayout" /* 14423 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15712 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsRealtimeScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildRealtimeSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});

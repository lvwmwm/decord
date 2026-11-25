// Module ID: 17441
// Function ID: 17442
// Name: RedesignSettingsReactionsChoiceScreen
// Dependencies: [19, 21, 11942, 17428, 17434, 2]

// Module 17441 (RedesignSettingsReactionsChoiceScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17428 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 17434 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsReactionsChoiceScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildReactionsChoiceSettingsSection();
    return createList(obj);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsReactionsChoiceScreen.tsx");

export default memoResult;

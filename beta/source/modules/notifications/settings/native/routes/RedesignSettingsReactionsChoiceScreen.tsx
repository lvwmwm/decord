// Module ID: 17445
// Function ID: 17446
// Name: RedesignSettingsReactionsChoiceScreen
// Dependencies: [19, 21, 11942, 17432, 17438, 2]

// Module 17445 (RedesignSettingsReactionsChoiceScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17432 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 17438 */;
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

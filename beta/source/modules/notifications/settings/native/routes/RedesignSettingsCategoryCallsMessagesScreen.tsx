// Module ID: 17968
// Function ID: 17969
// Name: RedesignSettingsCategoryCallsMessagesScreen
// Dependencies: [19, 21, 11540, 17963, 16588, 2]

// Module 17968 (RedesignSettingsCategoryCallsMessagesScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import SettingLayoutDefault from "SettingLayout" /* 16588 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17963 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryCallsMessagesScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryCallsMessagesSettingsSection();
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryCallsMessagesScreen.tsx");

export default memoResult;

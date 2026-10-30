// Module ID: 17914
// Function ID: 17915
// Name: RedesignSettingsCategoryFriendsActivityScreen
// Dependencies: [19, 21, 11505, 17907, 16533, 2]

// Module 17914 (RedesignSettingsCategoryFriendsActivityScreen)
import Fragment from "Fragment" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import SettingLayoutDefault from "SettingLayout" /* 16533 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17907 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryFriendsActivityScreen() {
  const node = react.useMemo(() => {
    let items;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildCategoryFriendsActivitySettingsSection();
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryFriendsActivityScreen.tsx");

export default memoResult;

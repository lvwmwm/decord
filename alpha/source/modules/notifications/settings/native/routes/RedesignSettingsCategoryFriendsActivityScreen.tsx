// Module ID: 17477
// Function ID: 17478
// Name: RedesignSettingsCategoryFriendsActivityScreen
// Dependencies: [19, 8593, 21, 17467, 1113, 11875, 5353, 16947, 17468, 2]

// Module 17477 (RedesignSettingsCategoryFriendsActivityScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useMountEffectDefault from "useMountEffect" /* 5353 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import FamilyCenterAgeGroupPrefetch from "FamilyCenterAgeGroupPrefetch" /* 16947 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17467 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17468 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryFriendsActivityScreen() {
  let node;
  let unavailableNode;
  const memo = react.useMemo(() => {
    let createList;
    let intl;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj4;
    let obj6;
    let obj7;
    const obj = MobileNotifSettingsRouteBuilders;
    const categoryFriendsActivitySettingsSection = obj.buildCategoryFriendsActivitySettingsSection();
    const items = [constants.REDESIGN_FRIEND_ANNIVERSARY_NOTIFICATIONS];
    const obj2 = { label: intl.string(intl2.t["0YtG+k"]), settings: items1 };
    intl = intl2.intl;
    items1 = [, ];
    ({ REDESIGN_SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr2[0], REDESIGN_SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr2[1] } = constants);
    const obj3 = { node: createList(obj4), unavailableNode: obj6.createList(obj7) };
    obj4 = { sections: items3 };
    const obj5 = { settings: items2 };
    createList = SettingBuilders.createList;
    SettingBuilders;
    const merged = Object.assign(categoryFriendsActivitySettingsSection);
    items2 = [...items];
    items3 = [obj5, obj2];
    obj7 = { sections: items4 };
    items4 = [{ settings: items }, obj2];
    obj6 = SettingBuilders;
    return obj3;
  }, []);
  ({ node, unavailableNode } = memo);
  const tmp2 = useMountEffectDefault;
  tmp2(FamilyCenterAgeGroupPrefetch.prefetchFamilyCenterAgeGroup);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "222_social" });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryFriendsActivityScreen.tsx");

export default memoResult;

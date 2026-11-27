// Module ID: 17643
// Function ID: 17644
// Name: RedesignSettingsCategoryFriendsActivityScreen
// Dependencies: [19, 9556, 21, 17633, 1112, 11970, 3207, 5604, 17107, 17634, 2]

// Module 17643 (RedesignSettingsCategoryFriendsActivityScreen)
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import FamilyCenterAgeGroupPrefetch from "FamilyCenterAgeGroupPrefetch" /* 17107 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17633 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17634 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsCategoryFriendsActivityScreen() {
  let node;
  let unavailableNode;
  const memo = react.useMemo(() => {
    let createList;
    let createList2;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj5;
    let obj8;
    const obj = MobileNotifSettingsRouteBuilders;
    const friendActivityTitleSettingsSection = obj.buildFriendActivityTitleSettingsSection();
    const obj2 = MobileNotifSettingsRouteBuilders;
    const categoryFriendsActivitySettingsSection = obj2.buildCategoryFriendsActivitySettingsSection();
    const items = [constants.REDESIGN_FRIEND_ANNIVERSARY_NOTIFICATIONS];
    const obj3 = { label: intl.string(intl5.t["0YtG+k"]), settings: items1 };
    intl = intl5.intl;
    items1 = [, ];
    ({ REDESIGN_SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr2[0], REDESIGN_SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr2[1] } = constants);
    const obj4 = { node: createList(obj5), unavailableNode: createList2(obj8) };
    obj5 = { sections: items3 };
    const obj6 = { label: intl2.string(_modDef3207.B0OBFd), settings: items2 };
    createList = SettingBuilders.createList;
    SettingBuilders;
    const merged = Object.assign(friendActivityTitleSettingsSection);
    intl2 = intl5.intl;
    items2 = [...items];
    items3 = [obj6, , ];
    const obj7 = { label: intl3.string(_modDef3207.wB1ASV) };
    const merged1 = Object.assign(categoryFriendsActivitySettingsSection);
    intl3 = intl5.intl;
    items3[1] = obj7;
    items3[2] = obj3;
    obj8 = { sections: items4 };
    const obj9 = { label: intl4.string(_modDef3207.B0OBFd), settings: items };
    createList2 = SettingBuilders.createList;
    SettingBuilders;
    intl4 = intl5.intl;
    items4 = [obj9, obj3];
    return obj4;
  }, []);
  ({ node, unavailableNode } = memo);
  const tmp2 = useMountEffectDefault;
  tmp2(FamilyCenterAgeGroupPrefetch.prefetchFamilyCenterAgeGroup);
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode, category: "222_social" });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryFriendsActivityScreen.tsx");

export default memoResult;

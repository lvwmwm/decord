// Module ID: 18818
// Function ID: 18819
// Name: NotificationCenterActionSheet
// Dependencies: [19, 6942, 1072, 21, 504, 18819, 5374, 11282, 9897, 7635, 7426, 7382, 1113, 7428, 8733, 14219, 9288, 18820, 11293, 10311, 5864, 12763, 7633, 2]
// Exports: default

// Module 18818 (NotificationCenterActionSheet)
import Constants from "Constants" /* 1072 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10311 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 18819 */;
import react_mod from "react" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6942 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let react = react_mod;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let Icon6;
  let closure_2;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj3;
  let obj6;
  let obj8;
  let roleFilter;
  let obj = roleFilter(504);
  const items = [RecentMentionsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: RecentMentionsStore.everyoneFilter, roleFilter: RecentMentionsStore.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = react.useCallback((arg0) => {
    const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
    const obj = { roleFilter, everyoneFilter };
    MentionActionCreatorsDefault;
    const merged = Object.assign(arg0);
    setGuildFilter(obj);
  }, items1);
  react = react.useCallback((BOOKMARK) => {
    const obj = everyoneFilter(closure_2[6]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[7]);
    obj2.showForLaterModal(BOOKMARK);
  }, []);
  const callback = react.useCallback(() => {
    const obj = everyoneFilter(closure_2[6]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[8]);
    const result = obj2.showScheduledMessagesModal();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = everyoneFilter(closure_2[6]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[9]);
    const obj3 = { screen: constants.NOTIFICATIONS };
    obj2.openUserSettings(obj3);
  }, []);
  let obj2 = { showGradient: true, header: closure_6(BottomSheetTitleHeader, obj3), children: items3 };
  const ActionSheet = roleFilter(7426).ActionSheet;
  obj3 = { title: intl.string(roleFilter(1113).t.HcoRu0) };
  BottomSheetTitleHeader = roleFilter(7382).BottomSheetTitleHeader;
  intl = roleFilter(1113).intl;
  const obj4 = { hasIcons: true, children: items2 };
  const Group = roleFilter(7428).ActionSheetRow.Group;
  const obj5 = {
    onValueChange() {
      const obj = { roleFilter: !roleFilter };
      return closure_2(obj);
    },
    value: roleFilter,
    label: intl2.string(roleFilter(1113).t.asInft),
    icon: closure_6(Icon, obj6)
  };
  const ActionSheetSwitchRow = roleFilter(7428).ActionSheetSwitchRow;
  intl2 = roleFilter(1113).intl;
  obj6 = { IconComponent: roleFilter(8733).AtIcon, source: everyoneFilter(14219) };
  Icon = roleFilter(7428).ActionSheetRow.Icon;
  items2 = [closure_6(ActionSheetSwitchRow, obj5), ];
  const obj7 = {
    onValueChange() {
      const obj = { everyoneFilter: !everyoneFilter };
      return closure_2(obj);
    },
    value: everyoneFilter,
    label: intl3.string(roleFilter(1113).t.S9GLtt),
    subLabel: intl4.string(roleFilter(1113).t.jYgZa4),
    icon: closure_6(Icon2, obj8)
  };
  const ActionSheetSwitchRow2 = roleFilter(7428).ActionSheetSwitchRow;
  intl3 = roleFilter(1113).intl;
  intl4 = roleFilter(1113).intl;
  obj8 = { IconComponent: roleFilter(9288).BellIcon, source: everyoneFilter(18820) };
  Icon2 = roleFilter(7428).ActionSheetRow.Icon;
  items2[1] = closure_6(ActionSheetSwitchRow2, obj7);
  items3 = [closure_7(Group, obj4), ];
  const obj9 = { hasIcons: true, children: items4 };
  const Group2 = roleFilter(7428).ActionSheetRow.Group;
  const obj10 = {
    icon: closure_6(Icon3, obj11),
    label: intl5.string(roleFilter(1113).t["2pAkDA"]),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    },
    arrow: true
  };
  const ActionSheetRow = roleFilter(7428).ActionSheetRow;
  obj11 = { IconComponent: roleFilter(11293).BookmarkIcon };
  Icon3 = roleFilter(7428).ActionSheetRow.Icon;
  intl5 = roleFilter(1113).intl;
  items4 = [closure_6(ActionSheetRow, obj10, "bookmarks"), , , ];
  const obj12 = {
    icon: closure_6(Icon4, obj13),
    label: intl6.string(roleFilter(1113).t.aUXxzT),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    },
    arrow: true
  };
  const ActionSheetRow2 = roleFilter(7428).ActionSheetRow;
  obj13 = { IconComponent: roleFilter(5864).ClockIcon };
  Icon4 = roleFilter(7428).ActionSheetRow.Icon;
  intl6 = roleFilter(1113).intl;
  items4[1] = closure_6(ActionSheetRow2, obj12, "reminders");
  const obj14 = { icon: closure_6(Icon5, obj15), label: intl7.string(roleFilter(1113).t.SZVs3K), onPress: callback, arrow: true };
  const ActionSheetRow3 = roleFilter(7428).ActionSheetRow;
  obj15 = { IconComponent: roleFilter(12763).CalendarPlusIcon };
  Icon5 = roleFilter(7428).ActionSheetRow.Icon;
  intl7 = roleFilter(1113).intl;
  items4[2] = closure_6(ActionSheetRow3, obj14, "scheduled-messages");
  const obj16 = { icon: closure_6(Icon6, obj17), label: intl8.string(roleFilter(1113).t.h850Ss), onPress: callback1, arrow: true };
  const ActionSheetRow4 = roleFilter(7428).ActionSheetRow;
  obj17 = { IconComponent: roleFilter(7633).SettingsIcon };
  Icon6 = roleFilter(7428).ActionSheetRow.Icon;
  intl8 = roleFilter(1113).intl;
  items4[3] = closure_6(ActionSheetRow4, obj16, "settings");
  items3[1] = closure_7(Group2, obj9);
  return closure_7(ActionSheet, obj2);
};

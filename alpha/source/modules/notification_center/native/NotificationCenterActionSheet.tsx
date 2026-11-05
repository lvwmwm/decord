// Module ID: 18780
// Function ID: 18781
// Name: NotificationCenterActionSheet
// Dependencies: [19, 7025, 1072, 21, 504, 18781, 5384, 11345, 9963, 9962, 7705, 7504, 7460, 1113, 7506, 8808, 14217, 9360, 18782, 11356, 10376, 5877, 12785, 7703, 2]
// Exports: default

// Module 18780 (NotificationCenterActionSheet)
import Constants from "Constants" /* 1072 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10376 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 18781 */;
import react_mod from "react" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7025 */;
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
  let obj11;
  let obj13;
  let obj15;
  let obj18;
  let obj4;
  let obj7;
  let obj9;
  let roleFilter;
  const tmp = roleFilter;
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
  let obj2 = roleFilter(9963);
  const canUseScheduledMessages = obj2.useCanUseScheduledMessages();
  const callback = react.useCallback(() => {
    const obj = everyoneFilter(closure_2[6]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[9]);
    const result = obj2.showScheduledMessagesModal();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = everyoneFilter(closure_2[6]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[10]);
    const obj3 = { screen: constants.NOTIFICATIONS };
    obj2.openUserSettings(obj3);
  }, []);
  let obj3 = { showGradient: true, header: closure_6(BottomSheetTitleHeader, obj4), children: items3 };
  const ActionSheet = roleFilter(7504).ActionSheet;
  obj4 = { title: intl.string(roleFilter(1113).t.HcoRu0) };
  BottomSheetTitleHeader = roleFilter(7460).BottomSheetTitleHeader;
  intl = roleFilter(1113).intl;
  const obj5 = { hasIcons: true, children: items2 };
  const Group = roleFilter(7506).ActionSheetRow.Group;
  const obj6 = {
    onValueChange() {
      const obj = { roleFilter: !roleFilter };
      return closure_2(obj);
    },
    value: roleFilter,
    label: intl2.string(roleFilter(1113).t.asInft),
    icon: closure_6(Icon, obj7)
  };
  const ActionSheetSwitchRow = roleFilter(7506).ActionSheetSwitchRow;
  intl2 = roleFilter(1113).intl;
  obj7 = { IconComponent: roleFilter(8808).AtIcon, source: everyoneFilter(14217) };
  Icon = roleFilter(7506).ActionSheetRow.Icon;
  items2 = [closure_6(ActionSheetSwitchRow, obj6), ];
  const obj8 = {
    onValueChange() {
      const obj = { everyoneFilter: !everyoneFilter };
      return closure_2(obj);
    },
    value: everyoneFilter,
    label: intl3.string(roleFilter(1113).t.S9GLtt),
    subLabel: intl4.string(roleFilter(1113).t.jYgZa4),
    icon: closure_6(Icon2, obj9)
  };
  const ActionSheetSwitchRow2 = roleFilter(7506).ActionSheetSwitchRow;
  intl3 = roleFilter(1113).intl;
  intl4 = roleFilter(1113).intl;
  obj9 = { IconComponent: roleFilter(9360).BellIcon, source: everyoneFilter(18782) };
  Icon2 = roleFilter(7506).ActionSheetRow.Icon;
  items2[1] = closure_6(ActionSheetSwitchRow2, obj8);
  items3 = [closure_7(Group, obj5), ];
  const Group2 = roleFilter(7506).ActionSheetRow.Group;
  const obj10 = {
    icon: closure_6(Icon3, obj11),
    label: intl5.string(roleFilter(1113).t["2pAkDA"]),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    },
    arrow: true
  };
  const ActionSheetRow = roleFilter(7506).ActionSheetRow;
  obj11 = { IconComponent: roleFilter(11356).BookmarkIcon };
  Icon3 = roleFilter(7506).ActionSheetRow.Icon;
  intl5 = roleFilter(1113).intl;
  const items4 = [closure_6(ActionSheetRow, obj10, "bookmarks"), , , ];
  const obj12 = {
    icon: closure_6(Icon4, obj13),
    label: intl6.string(roleFilter(1113).t.aUXxzT),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    },
    arrow: true
  };
  const ActionSheetRow2 = roleFilter(7506).ActionSheetRow;
  obj13 = { IconComponent: roleFilter(5877).ClockIcon };
  Icon4 = roleFilter(7506).ActionSheetRow.Icon;
  intl6 = roleFilter(1113).intl;
  items4[1] = closure_6(ActionSheetRow2, obj12, "reminders");
  let tmp8Result = null;
  if (canUseScheduledMessages) {
    const obj14 = { icon: closure_6(Icon5, obj15), label: intl7.string(tmp(1113).t.SZVs3K), onPress: callback, arrow: true };
    const ActionSheetRow3 = tmp(7506).ActionSheetRow;
    obj15 = { IconComponent: tmp(12785).CalendarPlusIcon };
    Icon5 = tmp(7506).ActionSheetRow.Icon;
    intl7 = tmp(1113).intl;
    tmp8Result = tmp8(ActionSheetRow3, obj14, "scheduled-messages");
  }
  const obj16 = { hasIcons: true, children: items4 };
  items4[2] = tmp8Result;
  const obj17 = { icon: closure_6(Icon6, obj18), label: intl8.string(tmp(1113).t.h850Ss), onPress: callback1, arrow: true };
  const ActionSheetRow4 = tmp(7506).ActionSheetRow;
  obj18 = { IconComponent: tmp(7703).SettingsIcon };
  Icon6 = tmp(7506).ActionSheetRow.Icon;
  intl8 = tmp(1113).intl;
  items4[3] = closure_6(ActionSheetRow4, obj17, "settings");
  items3[1] = closure_7(Group2, obj16);
  return closure_7(ActionSheet, obj3);
};

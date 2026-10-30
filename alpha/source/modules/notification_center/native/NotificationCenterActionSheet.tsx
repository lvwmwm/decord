// Module ID: 18425
// Function ID: 18426
// Name: NotificationCenterActionSheet
// Dependencies: [19, 6881, 1072, 21, 504, 18426, 5253, 11131, 9787, 9786, 7557, 7360, 7315, 1114, 7362, 8654, 13936, 9189, 18427, 11142, 10172, 5735, 12382, 7555, 2]
// Exports: default

// Module 18425 (NotificationCenterActionSheet)
import Constants from "Constants" /* 1072 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10172 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 18426 */;
import react_mod from "react" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6881 */;
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
  let obj2 = roleFilter(9787);
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
  const ActionSheet = roleFilter(7360).ActionSheet;
  obj4 = { title: intl.string(roleFilter(1114).t.HcoRu0) };
  BottomSheetTitleHeader = roleFilter(7315).BottomSheetTitleHeader;
  intl = roleFilter(1114).intl;
  const obj5 = { hasIcons: true, children: items2 };
  const Group = roleFilter(7362).ActionSheetRow.Group;
  const obj6 = {
    onValueChange() {
      const obj = { roleFilter: !roleFilter };
      return closure_2(obj);
    },
    value: roleFilter,
    label: intl2.string(roleFilter(1114).t.asInft),
    icon: closure_6(Icon, obj7)
  };
  const ActionSheetSwitchRow = roleFilter(7362).ActionSheetSwitchRow;
  intl2 = roleFilter(1114).intl;
  obj7 = { IconComponent: roleFilter(8654).AtIcon, source: everyoneFilter(13936) };
  Icon = roleFilter(7362).ActionSheetRow.Icon;
  items2 = [closure_6(ActionSheetSwitchRow, obj6), ];
  const obj8 = {
    onValueChange() {
      const obj = { everyoneFilter: !everyoneFilter };
      return closure_2(obj);
    },
    value: everyoneFilter,
    label: intl3.string(roleFilter(1114).t.S9GLtt),
    subLabel: intl4.string(roleFilter(1114).t.jYgZa4),
    icon: closure_6(Icon2, obj9)
  };
  const ActionSheetSwitchRow2 = roleFilter(7362).ActionSheetSwitchRow;
  intl3 = roleFilter(1114).intl;
  intl4 = roleFilter(1114).intl;
  obj9 = { IconComponent: roleFilter(9189).BellIcon, source: everyoneFilter(18427) };
  Icon2 = roleFilter(7362).ActionSheetRow.Icon;
  items2[1] = closure_6(ActionSheetSwitchRow2, obj8);
  items3 = [closure_7(Group, obj5), ];
  const Group2 = roleFilter(7362).ActionSheetRow.Group;
  const obj10 = {
    icon: closure_6(Icon3, obj11),
    label: intl5.string(roleFilter(1114).t["2pAkDA"]),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    },
    arrow: true
  };
  const ActionSheetRow = roleFilter(7362).ActionSheetRow;
  obj11 = { IconComponent: roleFilter(11142).BookmarkIcon };
  Icon3 = roleFilter(7362).ActionSheetRow.Icon;
  intl5 = roleFilter(1114).intl;
  const items4 = [closure_6(ActionSheetRow, obj10, "bookmarks"), , , ];
  const obj12 = {
    icon: closure_6(Icon4, obj13),
    label: intl6.string(roleFilter(1114).t.aUXxzT),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    },
    arrow: true
  };
  const ActionSheetRow2 = roleFilter(7362).ActionSheetRow;
  obj13 = { IconComponent: roleFilter(5735).ClockIcon };
  Icon4 = roleFilter(7362).ActionSheetRow.Icon;
  intl6 = roleFilter(1114).intl;
  items4[1] = closure_6(ActionSheetRow2, obj12, "reminders");
  let tmp8Result = null;
  if (canUseScheduledMessages) {
    const obj14 = { icon: closure_6(Icon5, obj15), label: intl7.string(tmp(1114).t.SZVs3K), onPress: callback, arrow: true };
    const ActionSheetRow3 = tmp(7362).ActionSheetRow;
    obj15 = { IconComponent: tmp(12382).CalendarPlusIcon };
    Icon5 = tmp(7362).ActionSheetRow.Icon;
    intl7 = tmp(1114).intl;
    tmp8Result = tmp8(ActionSheetRow3, obj14, "scheduled-messages");
  }
  const obj16 = { hasIcons: true, children: items4 };
  items4[2] = tmp8Result;
  const obj17 = { icon: closure_6(Icon6, obj18), label: intl8.string(tmp(1114).t.h850Ss), onPress: callback1, arrow: true };
  const ActionSheetRow4 = tmp(7362).ActionSheetRow;
  obj18 = { IconComponent: tmp(7555).SettingsIcon };
  Icon6 = tmp(7362).ActionSheetRow.Icon;
  intl8 = tmp(1114).intl;
  items4[3] = closure_6(ActionSheetRow4, obj17, "settings");
  items3[1] = closure_7(Group2, obj16);
  return closure_7(ActionSheet, obj3);
};

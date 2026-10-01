// Module ID: 16044
// Function ID: 16045
// Name: NotificationCenterActionSheet
// Dependencies: [19, 7051, 1074, 21, 504, 16045, 7275, 4800, 7270, 7273, 6603, 7284, 7265, 11693, 6800, 6618, 6570, 1115, 6620, 5404, 11915, 9067, 16046, 11207, 7285, 4795, 11691, 6798, 2]
// Exports: default

// Module 16044 (NotificationCenterActionSheet)
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7270 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7273 */;
import showForLaterModal from "showForLaterModal" /* 7284 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 16045 */;
import react from "react" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7051 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4, dependencyMap;

let metroImportDefault;
let metroRequire;
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
  let hasForLaterAccess;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items3;
  let items4;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj20;
  let obj6;
  let obj9;
  let roleFilter;
  const tmp = roleFilter;
  let obj = roleFilter(504);
  let items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: closure_4.everyoneFilter, roleFilter: closure_4.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  dependencyMap = hasForLaterAccess.useCallback((arg0) => {
    const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
    const obj = { roleFilter, everyoneFilter };
    MentionActionCreatorsDefault;
    const merged = Object.assign(arg0);
    setGuildFilter(obj);
  }, items1);
  let obj2 = roleFilter(7275);
  const isForLaterExperimentOn = obj2.useIsForLaterExperimentOn("NotificationCenterActionSheet");
  let obj3 = roleFilter(7275);
  hasForLaterAccess = obj3.useHasForLaterAccess("NotificationCenterActionSheet");
  const items2 = [hasForLaterAccess];
  closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp4 = hasForLaterAccess;
    if (tmp4) {
      const obj2 = showForLaterModal;
      obj2.showForLaterModal(BOOKMARK);
    } else {
      const tmpResult = openPremiumUpsellActionSheetDefault;
      const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
      const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
      tmpResult(SAVED_MESSAGES, undefined, items);
    }
  }, items2);
  const obj4 = roleFilter(7265);
  const canUseScheduledMessages = obj4.useCanUseScheduledMessages();
  const callback = hasForLaterAccess.useCallback(() => {
    const obj = everyoneFilter(closure_2[7]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[13]);
    const result = obj2.showScheduledMessagesModal();
  }, []);
  const callback1 = hasForLaterAccess.useCallback(() => {
    const obj = everyoneFilter(closure_2[7]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[14]);
    const obj3 = { screen: constants.NOTIFICATIONS };
    obj2.openUserSettings(obj3);
  }, []);
  const obj5 = { showGradient: true, header: closure_6(BottomSheetTitleHeader, obj6), children: items4 };
  const ActionSheet = roleFilter(6618).ActionSheet;
  obj6 = { title: intl.string(roleFilter(1115).t.HcoRu0) };
  BottomSheetTitleHeader = roleFilter(6570).BottomSheetTitleHeader;
  intl = roleFilter(1115).intl;
  const obj7 = { hasIcons: true, children: items3 };
  const Group = roleFilter(6620).ActionSheetRow.Group;
  const obj8 = {
    onValueChange() {
      const obj = { roleFilter: !roleFilter };
      return closure_2(obj);
    },
    value: roleFilter,
    label: intl2.string(roleFilter(1115).t.asInft),
    icon: closure_6(Icon, obj9)
  };
  const ActionSheetSwitchRow = roleFilter(6620).ActionSheetSwitchRow;
  intl2 = roleFilter(1115).intl;
  obj9 = { IconComponent: roleFilter(5404).AtIcon, source: everyoneFilter(11915) };
  Icon = roleFilter(6620).ActionSheetRow.Icon;
  items3 = [closure_6(ActionSheetSwitchRow, obj8), ];
  const obj10 = {
    onValueChange() {
      const obj = { everyoneFilter: !everyoneFilter };
      return closure_2(obj);
    },
    value: everyoneFilter,
    label: intl3.string(roleFilter(1115).t.S9GLtt),
    subLabel: intl4.string(roleFilter(1115).t.jYgZa4),
    icon: closure_6(Icon2, obj11)
  };
  const ActionSheetSwitchRow2 = roleFilter(6620).ActionSheetSwitchRow;
  intl3 = roleFilter(1115).intl;
  intl4 = roleFilter(1115).intl;
  obj11 = { IconComponent: roleFilter(9067).BellIcon, source: everyoneFilter(16046) };
  Icon2 = roleFilter(6620).ActionSheetRow.Icon;
  items3[1] = closure_6(ActionSheetSwitchRow2, obj10);
  items4 = [closure_7(Group, obj7), ];
  let tmp10Result = null;
  const Group2 = roleFilter(6620).ActionSheetRow.Group;
  if (isForLaterExperimentOn) {
    const obj12 = {
      icon: closure_6(Icon3, obj13),
      label: intl5.string(tmp(1115).t["2pAkDA"]),
      onPress() {
          return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
        },
      arrow: true
    };
    const ActionSheetRow = tmp(6620).ActionSheetRow;
    obj13 = { IconComponent: tmp(11207).BookmarkIcon };
    Icon3 = tmp(6620).ActionSheetRow.Icon;
    intl5 = tmp(1115).intl;
    tmp10Result = tmp10(ActionSheetRow, obj12, "bookmarks");
  }
  const items5 = [tmp10Result, , , ];
  let tmp10Result3 = null;
  if (isForLaterExperimentOn) {
    const obj14 = {
      icon: closure_6(Icon4, obj15),
      label: intl6.string(tmp(1115).t.aUXxzT),
      onPress() {
          return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
        },
      arrow: true
    };
    const ActionSheetRow2 = tmp(6620).ActionSheetRow;
    obj15 = { IconComponent: tmp(4795).ClockIcon };
    Icon4 = tmp(6620).ActionSheetRow.Icon;
    intl6 = tmp(1115).intl;
    tmp10Result3 = tmp10(ActionSheetRow2, obj14, "reminders");
  }
  items5[1] = tmp10Result3;
  let tmp10Result4 = null;
  if (canUseScheduledMessages) {
    const obj16 = { icon: closure_6(Icon5, obj17), label: intl7.string(tmp(1115).t.SZVs3K), onPress: callback, arrow: true };
    const ActionSheetRow3 = tmp(6620).ActionSheetRow;
    obj17 = { IconComponent: tmp(11691).CalendarPlusIcon };
    Icon5 = tmp(6620).ActionSheetRow.Icon;
    intl7 = tmp(1115).intl;
    tmp10Result4 = tmp10(ActionSheetRow3, obj16, "scheduled-messages");
  }
  const obj18 = { hasIcons: true, children: items5 };
  items5[2] = tmp10Result4;
  const obj19 = { icon: closure_6(Icon6, obj20), label: intl8.string(tmp(1115).t.h850Ss), onPress: callback1, arrow: true };
  const ActionSheetRow4 = tmp(6620).ActionSheetRow;
  obj20 = { IconComponent: tmp(6798).SettingsIcon };
  Icon6 = tmp(6620).ActionSheetRow.Icon;
  intl8 = tmp(1115).intl;
  items5[3] = closure_6(ActionSheetRow4, obj19, "settings");
  items4[1] = closure_7(Group2, obj18);
  return closure_7(ActionSheet, obj5);
};

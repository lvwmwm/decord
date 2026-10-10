// Module ID: 16843
// Function ID: 16844
// Name: NotificationCenterActionSheet
// Dependencies: [19, 6078, 1085, 21, 558, 576, 504, 16844, 5056, 12643, 9293, 9292, 7093, 6838, 1126, 6894, 8217, 12134, 8772, 16845, 12654, 9681, 5051, 11917, 7091, 6898, 2]

// Module 16843 (NotificationCenterActionSheet)
import Constants from "Constants" /* 1085 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9681 */;
import MentionActionCreatorsDefault from "MentionActionCreators" /* 16844 */;
import react_mod from "react" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6078 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let react = react_mod;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationCenterActionSheet() {
  let Icon3;
  let Icon4;
  let Icon5;
  let Icon6;
  let closure_2;
  let intl;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let obj10;
  let obj12;
  let obj6;
  let obj8;
  let roleFilter;
  let tmp4;
  let tmp5;
  const tmp = roleFilter;
  let obj = roleFilter(576);
  const cResult = obj.c(39);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RecentMentionsStore];
    const fn = function c() {
      return { everyoneFilter: RecentMentionsStore.everyoneFilter, roleFilter: RecentMentionsStore.roleFilter };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  if (cResult[2] === everyoneFilter) {
    let tmp8;
    let tmp9;
    let tmp11;
    let tmp12;
    let tmp13;
    if (cResult[3] === roleFilter) {
      tmp8 = cResult[4];
    }
    dependencyMap = tmp8;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function w(BOOKMARK) {
        const obj = everyoneFilter(closure_2[8]);
        obj.hideActionSheet();
        const obj2 = roleFilter(closure_2[9]);
        obj2.showForLaterModal(BOOKMARK);
      };
      cResult[5] = fn2;
      tmp9 = fn2;
    } else {
      tmp9 = cResult[5];
    }
    let closure_3 = tmp9;
    const tmpResult2 = tmp(9293);
    const canUseScheduledMessages = tmpResult2.useCanUseScheduledMessages();
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function b() {
        const obj = everyoneFilter(closure_2[8]);
        obj.hideActionSheet();
        const obj2 = roleFilter(closure_2[11]);
        const result = obj2.showScheduledMessagesModal();
      };
      cResult[6] = fn3;
      tmp11 = fn3;
    } else {
      tmp11 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn4 = function v() {
        const obj = everyoneFilter(closure_2[8]);
        obj.hideActionSheet();
        const obj2 = roleFilter(closure_2[12]);
        const obj3 = { screen: constants.NOTIFICATIONS };
        obj2.openUserSettings(obj3);
      };
      cResult[7] = fn4;
      tmp12 = fn4;
    } else {
      tmp12 = cResult[7];
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { title: intl.string(tmp(1126).t.HcoRu0) };
      const BottomSheetTitleHeader = tmp(6838).BottomSheetTitleHeader;
      intl = tmp(1126).intl;
      const tmp15 = closure_6(BottomSheetTitleHeader, obj2);
      cResult[8] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === roleFilter) {
      let tmp16;
      let tmp19;
      let tmp18;
      if (cResult[10] === tmp8) {
        tmp16 = cResult[11];
      }
      const _Symbol5 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.asInft);
        let obj3 = { IconComponent: tmp(8217).AtIcon, source: everyoneFilter(12134) };
        const Icon = tmp(6894).ActionSheetRow.Icon;
        const tmp23 = closure_6(Icon, obj3);
        cResult[12] = stringResult;
        cResult[13] = tmp23;
        tmp19 = tmp23;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[12];
        tmp19 = cResult[13];
      }
      if (cResult[14] === roleFilter) {
        if (cResult[17] === everyoneFilter) {
          let tmp27;
          let tmp30;
          let tmp29;
          let tmp31;
          if (cResult[18] === tmp8) {
            tmp27 = cResult[19];
          }
          const _Symbol6 = Symbol;
          class T {
            constructor() {
              const obj = { everyoneFilter: !everyoneFilter };
              return closure_2(obj);
            }
          }
          if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
            const string = tmp(1126).intl.string;
            class T {
              constructor() {
                const obj = { everyoneFilter: !everyoneFilter };
                return closure_2(obj);
              }
            }
            const intl3 = tmp(1126).intl;
            const stringResult1 = intl3.string(tmp(1126).t.jYgZa4);
            const obj4 = { IconComponent: tmp(8772).BellIcon, source: everyoneFilter(16845) };
            const Icon2 = tmp(6894).ActionSheetRow.Icon;
            cResult[20] = tmp32;
            cResult[21] = stringResult1;
            const tmp36 = closure_6(Icon2, obj4);
            class S {
              constructor(arg0) {
                const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
                const obj = { roleFilter, everyoneFilter };
                MentionActionCreatorsDefault;
                const merged = Object.assign(arg0);
                setGuildFilter(obj);
              }
            }
            tmp30 = stringResult1;
            tmp29 = tmp32;
            tmp31 = tmp36;
          } else {
            tmp29 = cResult[20];
            tmp30 = cResult[21];
            class T {
              constructor() {
                const obj = { everyoneFilter: !everyoneFilter };
                return closure_2(obj);
              }
            }
          }
          if (cResult[23] === everyoneFilter) {
            let tmp37;
            if (cResult[24] === tmp27) {
              tmp37 = cResult[25];
            }
            if (cResult[26] === tmp24) {
              let tmp40;
              let tmp43;
              let tmp47;
              let tmp51;
              let tmp55;
              let tmp59;
              if (cResult[27] === tmp37) {
                tmp40 = cResult[28];
              }
              const _Symbol7 = Symbol;
              class T {
                constructor() {
                  const obj = { everyoneFilter: !everyoneFilter };
                  return closure_2(obj);
                }
              }
              if (tmp42 === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = {
                  icon: closure_6(Icon3, obj6),
                  label: intl4.string(tmp(1126).t["2pAkDA"]),
                  onPress() {
                                  return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
                                },
                  arrow: true
                };
                class T {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                obj6 = { IconComponent: tmp(12654).BookmarkIcon };
                Icon3 = tmp(6894).ActionSheetRow.Icon;
                intl4 = tmp(1126).intl;
                const tmp46 = closure_6(tmp45, obj5, "bookmarks");
                cResult[29] = tmp46;
                tmp43 = tmp46;
              } else {
                tmp43 = cResult[29];
              }
              const _Symbol8 = Symbol;
              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                const obj7 = {
                  icon: closure_6(Icon4, obj8),
                  label: intl5.string(tmp(1126).t.aUXxzT),
                  onPress() {
                                  return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
                                },
                  arrow: true
                };
                class T {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                obj8 = { IconComponent: tmp(5051).ClockIcon };
                Icon4 = tmp(6894).ActionSheetRow.Icon;
                intl5 = tmp(1126).intl;
                const tmp50 = closure_6(tmp49, obj7, "reminders");
                cResult[30] = tmp50;
                tmp47 = tmp50;
              } else {
                tmp47 = cResult[30];
              }
              if (cResult[31] !== canUseScheduledMessages) {
                let tmp52 = null;
                if (canUseScheduledMessages) {
                  const obj9 = { icon: closure_6(Icon5, obj10), label: intl6.string(tmp(1126).t.SZVs3K), onPress: tmp11, arrow: true };
                  class T {
                    constructor() {
                      const obj = { everyoneFilter: !everyoneFilter };
                      return closure_2(obj);
                    }
                  }
                  obj10 = { IconComponent: tmp(11917).CalendarPlusIcon };
                  Icon5 = tmp(6894).ActionSheetRow.Icon;
                  intl6 = tmp(1126).intl;
                  tmp52 = closure_6(tmp54, obj9, "scheduled-messages");
                }
                class T {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                cResult[31] = canUseScheduledMessages;
                cResult[32] = tmp52;
                tmp51 = tmp52;
              } else {
                tmp51 = cResult[32];
              }
              const _Symbol9 = Symbol;
              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                const obj11 = { icon: closure_6(Icon6, obj12), label: intl7.string(tmp(1126).t.h850Ss), onPress: tmp12, arrow: true };
                class T {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                obj12 = { IconComponent: tmp(7091).SettingsIcon };
                Icon6 = tmp(6894).ActionSheetRow.Icon;
                intl7 = tmp(1126).intl;
                const tmp58 = closure_6(tmp57, obj11, "settings");
                cResult[33] = tmp58;
                tmp55 = tmp58;
              } else {
                tmp55 = cResult[33];
              }
              if (cResult[34] !== tmp51) {
                const obj13 = { hasIcons: true, children: tmp61 };
                class T {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                tmp61[0] = tmp43;
                tmp61[1] = tmp47;
                tmp61[2] = tmp51;
                tmp61[3] = tmp55;
                const tmp62 = closure_7(tmp(6894).ActionSheetRow.Group, obj13);
                cResult[34] = tmp51;
                cResult[35] = tmp62;
                tmp59 = tmp62;
              } else {
                tmp59 = cResult[35];
              }
              if (cResult[36] === tmp40) {
                let tmp63;
                if (cResult[37] === tmp59) {
                  tmp63 = cResult[38];
                }
                return tmp63;
              }
              const obj14 = { showGradient: true, header: tmp13, children: items1 };
              items1 = [tmp40, ];
              class S {
                constructor(arg0) {
                  const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
                  const obj = { roleFilter, everyoneFilter };
                  MentionActionCreatorsDefault;
                  const merged = Object.assign(arg0);
                  setGuildFilter(obj);
                }
              }
              const tmp65 = closure_7(tmp(6898).ActionSheet, obj14);
              cResult[36] = tmp40;
              cResult[37] = tmp59;
              cResult[38] = tmp65;
              tmp63 = tmp65;
            }
            class T {
              constructor() {
                const obj = { everyoneFilter: !everyoneFilter };
                return closure_2(obj);
              }
            }
            const obj15 = { hasIcons: true, children: items2 };
            items2 = [tmp24, tmp37];
            const tmp41 = closure_7(tmp(6894).ActionSheetRow.Group, obj15);
            cResult[26] = tmp24;
            cResult[27] = tmp37;
            cResult[28] = tmp41;
            tmp40 = tmp41;
          }
          const obj16 = { onValueChange: tmp27, value: everyoneFilter, label: tmp29, subLabel: tmp30, icon: tmp31 };
          cResult[23] = everyoneFilter;
          cResult[24] = tmp27;
          const tmp39 = closure_6(tmp(6894).ActionSheetSwitchRow, obj16);
          class S {
            constructor(arg0) {
              const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
              const obj = { roleFilter, everyoneFilter };
              MentionActionCreatorsDefault;
              const merged = Object.assign(arg0);
              setGuildFilter(obj);
            }
          }
          tmp37 = tmp39;
        }
        class T {
          constructor() {
            const obj = { everyoneFilter: !everyoneFilter };
            return closure_2(obj);
          }
        }
        cResult[17] = everyoneFilter;
        cResult[18] = tmp8;
        cResult[19] = T;
        tmp27 = T;
      }
      const obj17 = { onValueChange: tmp16, value: roleFilter, label: tmp18, icon: tmp19 };
      cResult[14] = roleFilter;
      cResult[15] = tmp16;
      cResult[16] = closure_6(tmp(6894).ActionSheetSwitchRow, obj17);
      closure_6(tmp(6894).ActionSheetSwitchRow, obj17);
      class S {
        constructor(arg0) {
          const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
          const obj = { roleFilter, everyoneFilter };
          MentionActionCreatorsDefault;
          const merged = Object.assign(arg0);
          setGuildFilter(obj);
        }
      }
    }
    class S {
      constructor(arg0) {
        const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
        const obj = { roleFilter, everyoneFilter };
        MentionActionCreatorsDefault;
        const merged = Object.assign(arg0);
        setGuildFilter(obj);
      }
    }
    cResult[9] = roleFilter;
    cResult[10] = tmp8;
    cResult[11] = tmp17;
    tmp16 = tmp17;
  }
  class S {
    constructor(arg0) {
      const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
      const obj = { roleFilter, everyoneFilter };
      MentionActionCreatorsDefault;
      const merged = Object.assign(arg0);
      setGuildFilter(obj);
    }
  }
  cResult[2] = everyoneFilter;
  cResult[3] = roleFilter;
  cResult[4] = S;
  tmp8 = S;
}) : (function NotificationCenterActionSheet() {
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
    const obj = everyoneFilter(closure_2[8]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[9]);
    obj2.showForLaterModal(BOOKMARK);
  }, []);
  let obj2 = roleFilter(9293);
  const canUseScheduledMessages = obj2.useCanUseScheduledMessages();
  const callback = react.useCallback(() => {
    const obj = everyoneFilter(closure_2[8]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[11]);
    const result = obj2.showScheduledMessagesModal();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = everyoneFilter(closure_2[8]);
    obj.hideActionSheet();
    const obj2 = roleFilter(closure_2[12]);
    const obj3 = { screen: constants.NOTIFICATIONS };
    obj2.openUserSettings(obj3);
  }, []);
  let obj3 = { showGradient: true, header: closure_6(BottomSheetTitleHeader, obj4), children: items3 };
  const ActionSheet = roleFilter(6898).ActionSheet;
  obj4 = { title: intl.string(roleFilter(1126).t.HcoRu0) };
  BottomSheetTitleHeader = roleFilter(6838).BottomSheetTitleHeader;
  intl = roleFilter(1126).intl;
  const obj5 = { hasIcons: true, children: items2 };
  const Group = roleFilter(6894).ActionSheetRow.Group;
  const obj6 = {
    onValueChange() {
      const obj = { roleFilter: !roleFilter };
      return closure_2(obj);
    },
    value: roleFilter,
    label: intl2.string(roleFilter(1126).t.asInft),
    icon: closure_6(Icon, obj7)
  };
  const ActionSheetSwitchRow = roleFilter(6894).ActionSheetSwitchRow;
  intl2 = roleFilter(1126).intl;
  obj7 = { IconComponent: roleFilter(8217).AtIcon, source: everyoneFilter(12134) };
  Icon = roleFilter(6894).ActionSheetRow.Icon;
  items2 = [closure_6(ActionSheetSwitchRow, obj6), ];
  const obj8 = {
    onValueChange() {
      const obj = { everyoneFilter: !everyoneFilter };
      return closure_2(obj);
    },
    value: everyoneFilter,
    label: intl3.string(roleFilter(1126).t.S9GLtt),
    subLabel: intl4.string(roleFilter(1126).t.jYgZa4),
    icon: closure_6(Icon2, obj9)
  };
  const ActionSheetSwitchRow2 = roleFilter(6894).ActionSheetSwitchRow;
  intl3 = roleFilter(1126).intl;
  intl4 = roleFilter(1126).intl;
  obj9 = { IconComponent: roleFilter(8772).BellIcon, source: everyoneFilter(16845) };
  Icon2 = roleFilter(6894).ActionSheetRow.Icon;
  items2[1] = closure_6(ActionSheetSwitchRow2, obj8);
  items3 = [closure_7(Group, obj5), ];
  const Group2 = roleFilter(6894).ActionSheetRow.Group;
  const obj10 = {
    icon: closure_6(Icon3, obj11),
    label: intl5.string(roleFilter(1126).t["2pAkDA"]),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
    },
    arrow: true
  };
  const ActionSheetRow = roleFilter(6894).ActionSheetRow;
  obj11 = { IconComponent: roleFilter(12654).BookmarkIcon };
  Icon3 = roleFilter(6894).ActionSheetRow.Icon;
  intl5 = roleFilter(1126).intl;
  const items4 = [closure_6(ActionSheetRow, obj10, "bookmarks"), , , ];
  const obj12 = {
    icon: closure_6(Icon4, obj13),
    label: intl6.string(roleFilter(1126).t.aUXxzT),
    onPress() {
      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    },
    arrow: true
  };
  const ActionSheetRow2 = roleFilter(6894).ActionSheetRow;
  obj13 = { IconComponent: roleFilter(5051).ClockIcon };
  Icon4 = roleFilter(6894).ActionSheetRow.Icon;
  intl6 = roleFilter(1126).intl;
  items4[1] = closure_6(ActionSheetRow2, obj12, "reminders");
  let tmp8Result = null;
  if (canUseScheduledMessages) {
    const obj14 = { icon: closure_6(Icon5, obj15), label: intl7.string(tmp(1126).t.SZVs3K), onPress: callback, arrow: true };
    const ActionSheetRow3 = tmp(6894).ActionSheetRow;
    obj15 = { IconComponent: tmp(11917).CalendarPlusIcon };
    Icon5 = tmp(6894).ActionSheetRow.Icon;
    intl7 = tmp(1126).intl;
    tmp8Result = tmp8(ActionSheetRow3, obj14, "scheduled-messages");
  }
  const obj16 = { hasIcons: true, children: items4 };
  items4[2] = tmp8Result;
  const obj17 = { icon: closure_6(Icon6, obj18), label: intl8.string(tmp(1126).t.h850Ss), onPress: callback1, arrow: true };
  const ActionSheetRow4 = tmp(6894).ActionSheetRow;
  obj18 = { IconComponent: tmp(7091).SettingsIcon };
  Icon6 = tmp(6894).ActionSheetRow.Icon;
  intl8 = tmp(1126).intl;
  items4[3] = closure_6(ActionSheetRow4, obj17, "settings");
  items3[1] = closure_7(Group2, obj16);
  return closure_7(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default tmp3;

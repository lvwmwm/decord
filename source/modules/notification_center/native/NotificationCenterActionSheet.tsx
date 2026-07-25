// Module ID: 15191
// Function ID: 115684
// Name: NotificationCenterActionSheet
// Dependencies: [31, 5869, 653, 33, 566, 15192, 9492, 4099, 9493, 6145, 6147, 9874, 6554, 5498, 5186, 1212, 5500, 4648, 10325, 10167, 15193, 9893, 9490, 4095, 8943, 2]
// Exports: default

// Module 15191 (NotificationCenterActionSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const result = require("ME").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let obj = roleFilter(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: outer1_4.everyoneFilter, roleFilter: outer1_4.roleFilter }));
  roleFilter = stateFromStoresObject.roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  const dependencyMap = React.useCallback((arg0) => {
    let obj = everyoneFilter(15192);
    obj = { roleFilter, everyoneFilter };
    const merged = Object.assign(arg0);
    obj.setGuildFilter(obj);
  }, items1);
  let obj1 = everyoneFilter(9492);
  const enabled = obj1.useConfig({ location: "NotificationCenterActionSheet" }).enabled;
  React = React.useCallback((BOOKMARK) => {
    everyoneFilter(4099).hideActionSheet();
    if (everyoneFilter(9493)()) {
      roleFilter(9874).showForLaterModal(BOOKMARK);
      const obj2 = roleFilter(9874);
    } else {
      everyoneFilter(6145)(roleFilter(6147).EntitlementFeatureNames.SAVED_MESSAGES);
      const tmp4 = everyoneFilter(6145);
    }
  }, []);
  const callback = React.useCallback(() => {
    let obj = everyoneFilter(4099);
    obj.hideActionSheet();
    obj = { screen: outer1_5.NOTIFICATIONS };
    roleFilter(6554).openUserSettings(obj);
  }, []);
  obj = { showGradient: true };
  obj = {};
  const intl = roleFilter(1212).intl;
  obj.title = intl.string(roleFilter(1212).t.HcoRu0);
  obj.header = callback(roleFilter(5186).BottomSheetTitleHeader, obj);
  obj1 = { hasIcons: true };
  let obj2 = {
    onValueChange() {
      return dependencyMap({ roleFilter: !roleFilter });
    },
    value: roleFilter
  };
  const intl2 = roleFilter(1212).intl;
  obj2.label = intl2.string(roleFilter(1212).t.asInft);
  const obj3 = { IconComponent: roleFilter(4648).AtIcon, source: everyoneFilter(10325) };
  obj2.icon = callback(roleFilter(5500).ActionSheetRow.Icon, obj3);
  const items2 = [callback(roleFilter(5500).ActionSheetSwitchRow, obj2), ];
  const obj4 = {
    onValueChange() {
      return dependencyMap({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter
  };
  const intl3 = roleFilter(1212).intl;
  obj4.label = intl3.string(roleFilter(1212).t.S9GLtt);
  const intl4 = roleFilter(1212).intl;
  obj4.subLabel = intl4.string(roleFilter(1212).t.jYgZa4);
  const obj5 = { IconComponent: roleFilter(10167).BellIcon, source: everyoneFilter(15193) };
  obj4.icon = callback(roleFilter(5500).ActionSheetRow.Icon, obj5);
  items2[1] = callback(roleFilter(5500).ActionSheetSwitchRow, obj4);
  obj1.children = items2;
  const items3 = [callback2(roleFilter(5500).ActionSheetRow.Group, obj1), ];
  const obj6 = { hasIcons: true };
  let tmp4 = null;
  if (enabled) {
    const obj7 = {};
    const obj8 = { IconComponent: roleFilter(9893).BookmarkIcon };
    obj7.icon = callback(roleFilter(5500).ActionSheetRow.Icon, obj8);
    const intl5 = roleFilter(1212).intl;
    obj7.label = intl5.string(roleFilter(1212).t["2pAkDA"]);
    obj7.onPress = function onPress() {
      return callback(roleFilter(9490).SavedMessageSortTypes.BOOKMARK);
    };
    obj7.arrow = true;
    tmp4 = callback(roleFilter(5500).ActionSheetRow, obj7, "bookmarks");
  }
  const items4 = [tmp4, , ];
  let tmp8 = null;
  if (enabled) {
    const obj9 = {};
    const obj10 = { IconComponent: roleFilter(4095).ClockIcon };
    obj9.icon = callback(roleFilter(5500).ActionSheetRow.Icon, obj10);
    const intl6 = roleFilter(1212).intl;
    obj9.label = intl6.string(roleFilter(1212).t.aUXxzT);
    obj9.onPress = function onPress() {
      return callback(roleFilter(9490).SavedMessageSortTypes.REMINDER);
    };
    obj9.arrow = true;
    tmp8 = callback(roleFilter(5500).ActionSheetRow, obj9, "reminders");
  }
  items4[1] = tmp8;
  const obj11 = {};
  const obj12 = { IconComponent: roleFilter(8943).SettingsIcon };
  obj11.icon = callback(roleFilter(5500).ActionSheetRow.Icon, obj12);
  const intl7 = roleFilter(1212).intl;
  obj11.label = intl7.string(roleFilter(1212).t.h850Ss);
  obj11.onPress = callback;
  obj11.arrow = true;
  items4[2] = callback(roleFilter(5500).ActionSheetRow, obj11, "settings");
  obj6.children = items4;
  items3[1] = callback2(roleFilter(5500).ActionSheetRow.Group, obj6);
  obj.children = items3;
  return callback2(roleFilter(5498).ActionSheet, obj);
};

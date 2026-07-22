// Module ID: 15018
// Function ID: 113066
// Name: NotificationCenterActionSheet
// Dependencies: []
// Exports: default

// Module 15018 (NotificationCenterActionSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const UserSettingsSections = arg1(dependencyMap[2]).UserSettingsSections;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default function NotificationCenterActionSheet() {
  let obj = arg1(closure_2[4]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ everyoneFilter: closure_4.everyoneFilter, roleFilter: closure_4.roleFilter }));
  const roleFilter = stateFromStoresObject.roleFilter;
  const arg1 = roleFilter;
  const everyoneFilter = stateFromStoresObject.everyoneFilter;
  const importDefault = everyoneFilter;
  const items1 = [everyoneFilter, roleFilter];
  closure_2 = React.useCallback((arg0) => {
    let obj = everyoneFilter(closure_2[5]);
    obj = { roleFilter, everyoneFilter };
    const merged = Object.assign(arg0);
    obj.setGuildFilter(obj);
  }, items1);
  let obj1 = importDefault(closure_2[6]);
  const callback = React.useCallback(() => {
    let obj = everyoneFilter(closure_2[7]);
    obj.hideActionSheet();
    if (everyoneFilter(closure_2[8])()) {
      let tmp2Result = tmp2(tmp3[11]);
      obj = { presentation: "modal" };
      tmp2Result.pushLazy(roleFilter(tmp3[13])(tmp3[12], tmp3.paths), {}, "for-later-modal", obj);
    } else {
      tmp2Result = tmp2(tmp3[9]);
      tmp2Result(roleFilter(tmp3[10]).EntitlementFeatureNames.SAVED_MESSAGES);
    }
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = everyoneFilter(closure_2[7]);
    obj.hideActionSheet();
    obj = { screen: constants.NOTIFICATIONS };
    roleFilter(closure_2[14]).openUserSettings(obj);
  }, []);
  obj = { showGradient: true };
  obj = {};
  const intl = arg1(closure_2[17]).intl;
  obj.title = intl.string(arg1(closure_2[17]).t.HcoRu0);
  obj.header = callback(arg1(closure_2[16]).BottomSheetTitleHeader, obj);
  obj1 = { hasIcons: true };
  const obj2 = {
    onValueChange() {
      return callback({ roleFilter: !roleFilter });
    },
    value: roleFilter
  };
  const intl2 = arg1(closure_2[17]).intl;
  obj2.label = intl2.string(arg1(closure_2[17]).t.asInft);
  const obj3 = { IconComponent: arg1(closure_2[19]).AtIcon, source: importDefault(closure_2[20]) };
  obj2.icon = callback(arg1(closure_2[18]).ActionSheetRow.Icon, obj3);
  const items2 = [callback(arg1(closure_2[18]).ActionSheetSwitchRow, obj2), ];
  const obj4 = {
    onValueChange() {
      return callback({ everyoneFilter: !everyoneFilter });
    },
    value: everyoneFilter
  };
  const intl3 = arg1(closure_2[17]).intl;
  obj4.label = intl3.string(arg1(closure_2[17]).t.S9GLtt);
  const intl4 = arg1(closure_2[17]).intl;
  obj4.subLabel = intl4.string(arg1(closure_2[17]).t.jYgZa4);
  const obj5 = { IconComponent: arg1(closure_2[21]).BellIcon, source: importDefault(closure_2[22]) };
  obj4.icon = callback(arg1(closure_2[18]).ActionSheetRow.Icon, obj5);
  items2[1] = callback(arg1(closure_2[18]).ActionSheetSwitchRow, obj4);
  obj1.children = items2;
  const items3 = [callback2(arg1(closure_2[18]).ActionSheetRow.Group, obj1), ];
  const obj6 = { hasIcons: true };
  let tmp5 = null;
  if (obj1.useConfig({ location: "NotificationCenterActionSheet" }).enabled) {
    const obj7 = {};
    const obj8 = { IconComponent: arg1(closure_2[23]).BookmarkIcon, source: importDefault(closure_2[24]) };
    obj7.icon = callback(arg1(closure_2[18]).ActionSheetRow.Icon, obj8);
    const intl5 = arg1(closure_2[17]).intl;
    obj7.label = intl5.string(arg1(closure_2[17]).t.2pAkDA);
    obj7.onPress = callback;
    obj7.arrow = true;
    tmp5 = callback(arg1(closure_2[18]).ActionSheetRow, obj7, "for-later");
  }
  const items4 = [tmp5, ];
  const obj9 = {};
  const obj10 = { IconComponent: arg1(closure_2[25]).SettingsIcon, source: importDefault(closure_2[26]) };
  obj9.icon = callback(arg1(closure_2[18]).ActionSheetRow.Icon, obj10);
  const intl6 = arg1(closure_2[17]).intl;
  obj9.label = intl6.string(arg1(closure_2[17]).t.h850Ss);
  obj9.onPress = callback1;
  obj9.arrow = true;
  items4[1] = callback(arg1(closure_2[18]).ActionSheetRow, obj9, "settings");
  obj6.children = items4;
  items3[1] = callback2(arg1(closure_2[18]).ActionSheetRow.Group, obj6);
  obj.children = items3;
  return callback2(arg1(closure_2[15]).ActionSheet, obj);
};

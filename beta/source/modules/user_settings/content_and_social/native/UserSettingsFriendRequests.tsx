// Module ID: 16595
// Function ID: 16596
// Name: UserSettingsFriendRequests
// Dependencies: [19, 17, 1074, 21, 2021, 6416, 5999, 1115, 6621, 1385, 2]
// Exports: default

// Module 16595 (UserSettingsFriendRequests)
import react_native from "react-native" /* 17 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import UserSettings from "UserSettings" /* 2021 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6416 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ AllFriendSourceFlags: hasOwnProperty, FriendSourceFlags: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default function UserSettingsFriendRequests() {
  let TableRowGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj2;
  let setting;
  let FriendSourceFlagsSetting = setting(2021).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items);
  let obj = { children: closure_8(TableRowGroup, obj2) };
  obj2 = { title: intl.string(setting(1115).t.vyodkM), hasIcons: false, children: items1 };
  TableRowGroup = setting(5999).TableRowGroup;
  intl = setting(1115).intl;
  const obj3 = {
    label: intl2.string(setting(1115).t.mGr3CX),
    value: memo.all,
    onValueChange(arg0) {
      let tmp3;
      const FriendSourceFlagsSetting = setting(dependencyMap[4]).FriendSourceFlagsSetting;
      const updateSetting = FriendSourceFlagsSetting.updateSetting;
      if (arg0) {
        tmp3 = tmp;
      } else {
        tmp3 = tmp & ~constants.NO_RELATION;
      }
      return updateSetting(tmp3);
    }
  };
  const TableSwitchRow = setting(6621).TableSwitchRow;
  intl2 = setting(1115).intl;
  items1 = [closure_7(TableSwitchRow, obj3), , ];
  const obj4 = {
    label: intl3.string(setting(1115).t.IqlCSq),
    value: memo.mutualFriends,
    onValueChange(arg0) {
      let addFlagResult;
      const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
      const updateSetting = FriendSourceFlagsSetting.updateSetting;
      const obj = FlagUtilsAll;
      const tmp = arg0;
      if (tmp) {
        addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_FRIENDS);
      } else {
        addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_FRIENDS, metroRequire.NO_RELATION);
      }
      return updateSetting(addFlagResult);
    }
  };
  const TableSwitchRow2 = setting(6621).TableSwitchRow;
  intl3 = setting(1115).intl;
  items1[1] = closure_7(TableSwitchRow2, obj4);
  const obj5 = {
    label: intl4.string(setting(1115).t.mozb8f),
    value: memo.mutualGuilds,
    onValueChange(arg0) {
      let addFlagResult;
      const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
      const updateSetting = FriendSourceFlagsSetting.updateSetting;
      const obj = FlagUtilsAll;
      const tmp = arg0;
      if (tmp) {
        addFlagResult = obj.addFlag(setting, metroRequire.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(setting, metroRequire.MUTUAL_GUILDS, metroRequire.NO_RELATION);
      }
      return updateSetting(addFlagResult);
    }
  };
  const TableSwitchRow3 = setting(6621).TableSwitchRow;
  intl4 = setting(1115).intl;
  items1[2] = closure_7(TableSwitchRow3, obj5);
  return closure_7(View, obj);
};

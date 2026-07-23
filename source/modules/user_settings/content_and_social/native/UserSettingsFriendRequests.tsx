// Module ID: 15464
// Function ID: 119015
// Name: UserSettingsFriendRequests
// Dependencies: [31, 27, 653, 33, 3803, 5793, 5503, 1212, 5504, 1360, 2]
// Exports: default

// Module 15464 (UserSettingsFriendRequests)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AllFriendSourceFlags: closure_5, FriendSourceFlags: closure_6 } = ME);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const result = require("ME").fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default function UserSettingsFriendRequests() {
  let FriendSourceFlagsSetting = setting(3803).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_2[5]).computeFlags(setting), items);
  let obj = {};
  obj = {};
  const intl = setting(1212).intl;
  obj.title = intl.string(setting(1212).t.vyodkM);
  obj.hasIcons = false;
  obj = {};
  const intl2 = setting(1212).intl;
  obj.label = intl2.string(setting(1212).t.mGr3CX);
  obj.value = memo.all;
  obj.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(outer1_2[4]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~outer1_6.NO_RELATION;
    }
    return FriendSourceFlagsSetting.updateSetting(tmp3);
  };
  const items1 = [callback(setting(5504).TableSwitchRow, obj), , ];
  const obj1 = {};
  const intl3 = setting(1212).intl;
  obj1.label = intl3.string(setting(1212).t.IqlCSq);
  obj1.value = memo.mutualFriends;
  obj1.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(outer1_2[4]).FriendSourceFlagsSetting;
    const obj = outer1_1(outer1_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, outer1_6.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, outer1_6.MUTUAL_FRIENDS, outer1_6.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[1] = callback(setting(5504).TableSwitchRow, obj1);
  const obj2 = {};
  const intl4 = setting(1212).intl;
  obj2.label = intl4.string(setting(1212).t.mozb8f);
  obj2.value = memo.mutualGuilds;
  obj2.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(outer1_2[4]).FriendSourceFlagsSetting;
    const obj = outer1_1(outer1_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, outer1_6.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, outer1_6.MUTUAL_GUILDS, outer1_6.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[2] = callback(setting(5504).TableSwitchRow, obj2);
  obj.children = items1;
  obj.children = callback2(setting(5503).TableRowGroup, obj);
  return callback(View, obj);
};

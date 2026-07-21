// Module ID: 15339
// Function ID: 116798
// Name: UserSettingsFriendRequests
// Dependencies: []
// Exports: default

// Module 15339 (UserSettingsFriendRequests)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AllFriendSourceFlags: closure_5, FriendSourceFlags: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/content_and_social/native/UserSettingsFriendRequests.tsx");

export default function UserSettingsFriendRequests() {
  const FriendSourceFlagsSetting = arg1(dependencyMap[4]).FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  const arg1 = setting;
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_2[5]).computeFlags(setting), items);
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.vyodkM);
  obj.hasIcons = false;
  obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.label = intl2.string(arg1(dependencyMap[7]).t.mGr3CX);
  obj.value = memo.all;
  obj.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(closure_2[4]).FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    return FriendSourceFlagsSetting.updateSetting(tmp3);
  };
  const items1 = [callback(arg1(dependencyMap[8]).TableSwitchRow, obj), , ];
  const obj1 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj1.label = intl3.string(arg1(dependencyMap[7]).t.IqlCSq);
  obj1.value = memo.mutualFriends;
  obj1.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(closure_2[4]).FriendSourceFlagsSetting;
    const obj = callback(closure_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, constants.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, constants.MUTUAL_FRIENDS, constants.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[1] = callback(arg1(dependencyMap[8]).TableSwitchRow, obj1);
  const obj2 = {};
  const intl4 = arg1(dependencyMap[7]).intl;
  obj2.label = intl4.string(arg1(dependencyMap[7]).t.mozb8f);
  obj2.value = memo.mutualGuilds;
  obj2.onValueChange = function onValueChange(arg0) {
    const FriendSourceFlagsSetting = setting(closure_2[4]).FriendSourceFlagsSetting;
    const obj = callback(closure_2[9]);
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, constants.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, constants.MUTUAL_GUILDS, constants.NO_RELATION);
    }
    return FriendSourceFlagsSetting.updateSetting(addFlagResult);
  };
  items1[2] = callback(arg1(dependencyMap[8]).TableSwitchRow, obj2);
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[6]).TableRowGroup, obj);
  return callback(View, obj);
};

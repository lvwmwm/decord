// Module ID: 14897
// Function ID: 112239
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: []
// Exports: default

// Module 14897 (GuildRoleSubscriptionsChannelLongPressActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(true)": 1, "Bool(true)": "Golive Simulcast without prober 720p@500k", "Bool(true)": 144.002, "Bool(true)": null, tintColor: importDefault(dependencyMap[5]).colors.CHANNEL_ICON };
obj.headerIcon = obj;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: closure_0, onClose: closure_1 } = arg0);
  let obj = {};
  obj = {};
  obj = { style: callback3().headerIcon };
  const obj1 = { disableColor: true, source: importDefault(dependencyMap[9]) };
  obj.children = callback(arg1(dependencyMap[8]).Icon, obj1);
  obj.leading = callback(View, obj);
  const intl = arg1(dependencyMap[10]).intl;
  obj.title = intl.string(arg1(dependencyMap[10]).t.KzCF/6);
  const items = [callback(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj), ];
  const obj2 = {};
  const obj3 = { source: importDefault(dependencyMap[12]) };
  obj2.leading = callback(arg1(dependencyMap[8]).Icon, obj3);
  const obj4 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj4.text = intl2.string(arg1(dependencyMap[10]).t.WqhZss);
  obj2.label = callback(arg1(dependencyMap[11]).FormLabel, obj4);
  obj2.onPress = function onPress() {
    callback2();
    const result = callback(closure_2[13]).copyGuildChannelOrThreadLink(callback, constants.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(arg1(dependencyMap[11]).FormRow, obj2);
  obj.children = items;
  return callback2(arg1(dependencyMap[6]).ActionSheet, obj);
};

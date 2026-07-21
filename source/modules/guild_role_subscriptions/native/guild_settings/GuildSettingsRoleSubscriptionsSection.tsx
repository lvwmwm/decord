// Module ID: 16090
// Function ID: 123710
// Name: HasCreatedListingsSection
// Dependencies: []
// Exports: default

// Module 16090 (HasCreatedListingsSection)
function HasCreatedListingsSection(arg0) {
  ({ guild: closure_0, pushScreen: closure_1 } = arg0);
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  let stateFromStores = obj.useStateFromStores(items, () => callback2(closure_0, currentUser.getCurrentUser()));
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.KzCF/6);
  obj.hasIcons = true;
  obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.label = intl2.string(arg1(dependencyMap[7]).t./CfKoD);
  obj.arrow = true;
  const obj1 = { source: importDefault(dependencyMap[9]) };
  obj.icon = callback(arg1(dependencyMap[8]).TableRow.Icon, obj1);
  obj.onPress = function onPress() {
    return callback(constants.ROLE_SUBSCRIPTIONS_BASIC);
  };
  const items1 = [callback(arg1(dependencyMap[8]).TableRow, obj, "guild-role-subscriptions-basic"), , , ];
  const obj2 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[7]).t.pXbGYc);
  obj2.arrow = true;
  const obj3 = { source: importDefault(dependencyMap[10]) };
  obj2.icon = callback(arg1(dependencyMap[8]).TableRow.Icon, obj3);
  obj2.onPress = function onPress() {
    return callback(constants.ROLE_SUBSCRIPTIONS_TIERS);
  };
  items1[1] = callback(arg1(dependencyMap[8]).TableRow, obj2, "guild-role-subscriptions-tiers");
  if (stateFromStores) {
    const obj4 = {};
    const intl4 = arg1(dependencyMap[7]).intl;
    obj4.label = intl4.string(arg1(dependencyMap[7]).t.p2Rsdl);
    obj4.arrow = true;
    const obj5 = { source: importDefault(dependencyMap[11]) };
    obj4.icon = callback(arg1(dependencyMap[8]).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      return callback(constants.ROLE_SUBSCRIPTIONS_PAYMENTS, { guildId: id.id });
    };
    stateFromStores = callback(arg1(dependencyMap[8]).TableRow, obj4, "guild-role-subscriptions-payments");
  }
  items1[2] = stateFromStores;
  const obj6 = {};
  const intl5 = arg1(dependencyMap[7]).intl;
  obj6.label = intl5.string(arg1(dependencyMap[7]).t.C5Dbwn);
  obj6.arrow = true;
  const obj7 = { source: importDefault(dependencyMap[12]) };
  obj6.icon = callback(arg1(dependencyMap[8]).TableRow.Icon, obj7);
  obj6.onPress = function onPress() {
    return callback(constants.ROLE_SUBSCRIPTIONS_EMOJIS);
  };
  items1[3] = callback(arg1(dependencyMap[8]).TableRow, obj6, "guild-role-subscriptions-emojis");
  obj.children = items1;
  return closure_8(arg1(dependencyMap[6]).TableRowGroup, obj);
}
importAll(dependencyMap[0]);
const isGuildOwner = arg1(dependencyMap[1]).isGuildOwner;
let closure_4 = importDefault(dependencyMap[2]);
({ GuildFeatures: closure_5, GuildSettingsSections: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsSection.tsx");

export default function GuildSettingsRoleSubscriptionsSection(guild) {
  guild = guild.guild;
  let obj = arg1(dependencyMap[13]);
  let tmp = null;
  if (obj.useCanSeeGuildRoleSubscriptionSettings(guild)) {
    const features = guild.features;
    tmp = null;
    if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
      obj = { pushScreen: guild.pushScreen, guild };
      tmp = callback(HasCreatedListingsSection, obj);
    }
  }
  return tmp;
};

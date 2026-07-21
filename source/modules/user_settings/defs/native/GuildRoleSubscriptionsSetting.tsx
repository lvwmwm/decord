// Module ID: 13972
// Function ID: 106195
// Name: route
// Dependencies: []

// Module 13972 (route)
let closure_3 = require(dependencyMap[2]).UserGuildRoleSubscriptionRelationship;
const _module = require(dependencyMap[4]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.trSpHX);
  },
  parent: require(dependencyMap[0]).MobileSetting.PREMIUM,
  IconComponent: require(dependencyMap[6]).TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return importDefault(dependencyMap[3])() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(dependencyMap[7]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;

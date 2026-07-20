// Module ID: 13982
// Function ID: 106300
// Name: route
// Dependencies: []

// Module 13982 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.7j5bMU);
  },
  parent: require(dependencyMap[0]).MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;

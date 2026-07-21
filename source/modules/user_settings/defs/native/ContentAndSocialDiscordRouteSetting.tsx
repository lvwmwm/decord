// Module ID: 14422
// Function ID: 108773
// Name: route
// Dependencies: []

// Module 14422 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t./7xJCF);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL,
  IconComponent: require(dependencyMap[4]).FriendsIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require(dependencyMap[5]).DiscordPermissionsPage;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;

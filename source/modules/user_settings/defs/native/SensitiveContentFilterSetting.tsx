// Module ID: 13595
// Function ID: 103034
// Name: route
// Dependencies: []

// Module 13595 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.Hj/But);
  },
  IconComponent: require(dependencyMap[4]).ImageWarningIcon,
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj,
  useSearchTerms() {
    const intl = require(dependencyMap[3]).intl;
    const items = [intl.string(require(dependencyMap[3]).t.uEz8JF), , , , , ];
    const intl2 = require(dependencyMap[3]).intl;
    items[1] = intl2.string(require(dependencyMap[3]).t.N/oRI+);
    const intl3 = require(dependencyMap[3]).intl;
    items[2] = intl3.string(require(dependencyMap[3]).t.QVdYsK);
    const intl4 = require(dependencyMap[3]).intl;
    items[3] = intl4.string(require(dependencyMap[3]).t.aWD+tu);
    const intl5 = require(dependencyMap[3]).intl;
    items[4] = intl5.string(require(dependencyMap[3]).t.5mnTa7);
    const intl6 = require(dependencyMap[3]).intl;
    items[5] = intl6.string(require(dependencyMap[3]).t.K0OWP+);
    return items;
  }
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return require(dependencyMap[5]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;

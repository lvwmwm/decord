// Module ID: 13766
// Function ID: 104048
// Name: route
// Dependencies: []

// Module 13766 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.JALI2K);
  },
  usePredicate() {
    return require(dependencyMap[3]).getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require(dependencyMap[4]).QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(closure_1[6]);
      obj = { fromContent: callback(closure_1[7]).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.QUESTS,
  getComponent() {
    return require(dependencyMap[5]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;

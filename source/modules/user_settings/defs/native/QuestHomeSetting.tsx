// Module ID: 14024
// Function ID: 14025
// Name: route
// Dependencies: [676, 10120, 1236, 10493, 14025, 14027, 6006, 5038, 2]

// Module 14024 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JALI2K);
  },
  usePredicate() {
    return require(10493) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(6006);
      obj = { fromContent: callback(5038).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.QUESTS,
  getComponent() {
    return require(14027) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;

// Module ID: 14318
// Function ID: 14319
// Name: route
// Dependencies: [676, 10421, 1236, 10437, 14319, 14321, 7249, 5228, 2]

// Module 14318 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JALI2K);
  },
  usePredicate() {
    return require(10437) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7249);
      obj = { fromContent: callback(5228).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.QUESTS,
  getComponent() {
    return require(14321) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;

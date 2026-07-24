// Module ID: 13947
// Function ID: 106606
// Name: route
// Dependencies: [653, 10127, 1212, 10494, 13948, 13950, 6962, 4981, 2]

// Module 13947 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JALI2K);
  },
  usePredicate() {
    return require(10494) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = outer1_0(outer1_1[6]);
      obj = { fromContent: outer1_0(outer1_1[7]).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.QUESTS,
  getComponent() {
    return require(13950) /* parseSortMethod */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;

// Module ID: 14003
// Function ID: 106911
// Name: route
// Dependencies: [653, 10099, 1212, 10469, 14004, 14006, 5987, 5016, 2]

// Module 14003 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JALI2K);
  },
  usePredicate() {
    return require(10469) /* getIsEligibleForQuests */.getIsEligibleForQuests();
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
    return require(14006) /* parseSortMethod */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;

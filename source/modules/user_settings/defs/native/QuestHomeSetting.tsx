// Module ID: 14019
// Function ID: 14020
// Name: route
// Dependencies: [676, 10116, 1236, 10489, 14020, 14022, 6004, 5038, 2]

// Module 14019 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JALI2K);
  },
  usePredicate() {
    return require(10489) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(6004);
      obj = { fromContent: callback(5038).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.QUESTS,
  getComponent() {
    return require(14022) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;

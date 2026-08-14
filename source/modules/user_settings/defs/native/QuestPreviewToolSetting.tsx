// Module ID: 14489
// Function ID: 14490
// Name: route
// Dependencies: [676, 10421, 1236, 10436, 14319, 14490, 2]

// Module 14489 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.BDUDau);
  },
  usePredicate() {
    return require(10436) /* useQuests */.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(14490) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

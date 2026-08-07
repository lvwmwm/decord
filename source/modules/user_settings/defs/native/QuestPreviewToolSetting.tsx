// Module ID: 14339
// Function ID: 14340
// Name: route
// Dependencies: [676, 10380, 1236, 10393, 14169, 14340, 2]

// Module 14339 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.BDUDau);
  },
  usePredicate() {
    return require(10393) /* useQuests */.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(14340) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

// Module ID: 14115
// Function ID: 108484
// Name: route
// Dependencies: [653, 10127, 1212, 10493, 13948, 14116, 2]

// Module 14115 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.BDUDau);
  },
  usePredicate() {
    return require(10493) /* _createForOfIteratorHelperLoose */.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(14116) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

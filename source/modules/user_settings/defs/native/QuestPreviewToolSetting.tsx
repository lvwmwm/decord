// Module ID: 14126
// Function ID: 108611
// Name: route
// Dependencies: [653, 10059, 1212, 10427, 13959, 14127, 2]

// Module 14126 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.BDUDau);
  },
  usePredicate() {
    return require(10427) /* _createForOfIteratorHelperLoose */.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(14127) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

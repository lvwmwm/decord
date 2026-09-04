// Module ID: 15094
// Function ID: 15095
// Name: route
// Dependencies: [673, 11400, 1233, 11415, 14919, 15095, 2]

// Module 15094 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useQuests from "useQuests" /* 11415 */;
import QuestsIcon from "QuestsIcon" /* 14919 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BDUDau);
  },
  usePredicate() {
    return useQuests.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(15095) /* SettingsQuestPreviewScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

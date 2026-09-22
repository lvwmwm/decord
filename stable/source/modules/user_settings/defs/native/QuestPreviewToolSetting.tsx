// Module ID: 15251
// Function ID: 15252
// Name: QuestPreviewToolSetting
// Dependencies: [1074, 11605, 1114, 11620, 15084, 15252, 2]

// Module 15251 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11620 */;
import QuestsIcon from "QuestsIcon" /* 15084 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BDUDau);
  },
  usePredicate() {
    return hooks_QuestHooks.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: Constants.UserSettingsSections.QUEST_PREVIEW_TOOL_2,
    getComponent() {
      return require("SettingsQuestPreviewScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

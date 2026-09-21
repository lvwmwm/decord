// Module ID: 15426
// Function ID: 15427
// Name: QuestPreviewToolSetting
// Dependencies: [1078, 11594, 1119, 11607, 15261, 15427, 2]

// Module 15426 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11607 */;
import QuestsIcon from "QuestsIcon" /* 15261 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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

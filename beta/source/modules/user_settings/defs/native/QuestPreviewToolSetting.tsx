// Module ID: 15436
// Function ID: 15437
// Name: QuestPreviewToolSetting
// Dependencies: [1078, 11630, 1119, 11643, 15271, 15437, 2]

// Module 15436 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11643 */;
import QuestsIcon from "QuestsIcon" /* 15271 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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

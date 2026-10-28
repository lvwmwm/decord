// Module ID: 16782
// Function ID: 16783
// Name: QuestPreviewToolSetting
// Dependencies: [1084, 11248, 1125, 9604, 14408, 16783, 2]

// Module 16782 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9604 */;
import QuestsIcon from "QuestsIcon" /* 14408 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.BDUDau);
  },
  usePredicate() {
    const obj = hooks_QuestHooks;
    return obj.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: UserSettingsSections.QUEST_PREVIEW_TOOL_2,
    getComponent() {
      return require("SettingsQuestPreviewScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;

// Module ID: 14699
// Function ID: 14700
// Name: QuestPreviewToolSetting
// Dependencies: [1074, 11006, 1115, 10681, 14531, 14700, 2]

// Module 14699 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10681 */;
import QuestsIcon from "QuestsIcon" /* 14531 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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

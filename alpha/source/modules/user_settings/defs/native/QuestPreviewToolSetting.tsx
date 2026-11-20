// Module ID: 16432
// Function ID: 16433
// Name: QuestPreviewToolSetting
// Dependencies: [1071, 11817, 1112, 9838, 13676, 16433, 2]

// Module 16432 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9838 */;
import QuestsIcon from "QuestsIcon" /* 13676 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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

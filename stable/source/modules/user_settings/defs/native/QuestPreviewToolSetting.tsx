// Module ID: 14687
// Function ID: 14688
// Name: QuestPreviewToolSetting
// Dependencies: [1086, 10874, 1127, 10670, 14519, 14688, 2]

// Module 14687 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10670 */;
import QuestsIcon from "QuestsIcon" /* 14519 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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

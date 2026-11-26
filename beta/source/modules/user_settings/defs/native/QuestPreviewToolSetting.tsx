// Module ID: 16567
// Function ID: 16568
// Name: QuestPreviewToolSetting
// Dependencies: [1071, 11942, 1112, 9958, 13802, 16568, 2]

// Module 16567 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9958 */;
import QuestsIcon from "QuestsIcon" /* 13802 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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

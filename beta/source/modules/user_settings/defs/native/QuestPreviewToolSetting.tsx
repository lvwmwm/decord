// Module ID: 15447
// Function ID: 15448
// Name: QuestPreviewToolSetting
// Dependencies: [1085, 10663, 1126, 9166, 13007, 15448, 2]

// Module 15447 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9166 */;
import QuestsIcon from "QuestsIcon" /* 13007 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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

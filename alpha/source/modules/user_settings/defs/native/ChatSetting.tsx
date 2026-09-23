// Module ID: 15795
// Function ID: 15796
// Name: ChatSetting
// Dependencies: [1074, 11805, 1115, 15796, 15798, 2]

// Module 15795 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ImageTextIcon from "ImageTextIcon" /* 15796 */;
import SettingBuilders from "SettingBuilders" /* 11805 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/VQax8"]);
  },
  parent: null,
  IconComponent: ImageTextIcon.ImageTextIcon,
  screen: {
    route: Constants.UserSettingsSections.TEXT,
    getComponent() {
      return require("SettingsChatScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;

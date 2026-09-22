// Module ID: 15542
// Function ID: 15543
// Name: ChatSetting
// Dependencies: [1074, 11605, 1114, 15543, 15545, 2]

// Module 15542 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ImageTextIcon from "ImageTextIcon" /* 15543 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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

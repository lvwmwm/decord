// Module ID: 14979
// Function ID: 14980
// Name: ChatSetting
// Dependencies: [1074, 10993, 1115, 14980, 14982, 2]

// Module 14979 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ImageTextIcon from "ImageTextIcon" /* 14980 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
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

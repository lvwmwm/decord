// Module ID: 15718
// Function ID: 15719
// Name: ChatSetting
// Dependencies: [1078, 11594, 1119, 15719, 15721, 2]

// Module 15718 (ChatSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import ImageTextIcon from "ImageTextIcon" /* 15719 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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

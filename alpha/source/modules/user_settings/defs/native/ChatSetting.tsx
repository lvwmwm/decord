// Module ID: 16640
// Function ID: 16641
// Name: ChatSetting
// Dependencies: [1087, 11155, 1128, 16641, 16643, 2]

// Module 16640 (ChatSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import ImageTextIcon from "ImageTextIcon" /* 16641 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/VQax8"]);
  },
  parent: null,
  IconComponent: ImageTextIcon.ImageTextIcon,
  screen: {
    route: UserSettingsSections.TEXT,
    getComponent() {
      return require("SettingsChatScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;

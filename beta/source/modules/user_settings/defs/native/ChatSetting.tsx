// Module ID: 15005
// Function ID: 15006
// Name: ChatSetting
// Dependencies: [1074, 11006, 1115, 15006, 15008, 2]

// Module 15005 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import ImageTextIcon from "ImageTextIcon" /* 15006 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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

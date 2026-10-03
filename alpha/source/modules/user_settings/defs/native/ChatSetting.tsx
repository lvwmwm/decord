// Module ID: 15274
// Function ID: 15275
// Name: ChatSetting
// Dependencies: [1085, 11129, 1126, 15275, 15277, 2]

// Module 15274 (ChatSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ImageTextIcon from "ImageTextIcon" /* 15275 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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

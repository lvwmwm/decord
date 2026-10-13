// Module ID: 16068
// Function ID: 16069
// Name: ChatSetting
// Dependencies: [1085, 10663, 1126, 16069, 16071, 2]

// Module 16068 (ChatSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ImageTextIcon from "ImageTextIcon" /* 16069 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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

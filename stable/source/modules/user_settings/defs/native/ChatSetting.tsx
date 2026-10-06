// Module ID: 14993
// Function ID: 14994
// Name: ChatSetting
// Dependencies: [1086, 10874, 1127, 14994, 14996, 2]

// Module 14993 (ChatSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import ImageTextIcon from "ImageTextIcon" /* 14994 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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

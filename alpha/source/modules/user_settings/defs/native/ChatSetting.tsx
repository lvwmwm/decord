// Module ID: 17322
// Function ID: 17323
// Name: ChatSetting
// Dependencies: [1084, 11302, 1125, 17323, 17325, 2]

// Module 17322 (ChatSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import ImageTextIcon from "ImageTextIcon" /* 17323 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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

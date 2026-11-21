// Module ID: 16863
// Function ID: 16864
// Name: ChatSetting
// Dependencies: [1071, 11937, 1112, 16864, 16866, 2]

// Module 16863 (ChatSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ImageTextIcon from "ImageTextIcon" /* 16864 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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

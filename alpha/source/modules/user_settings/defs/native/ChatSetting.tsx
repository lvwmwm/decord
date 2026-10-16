// Module ID: 16448
// Function ID: 16449
// Name: ChatSetting
// Dependencies: [1087, 11003, 1128, 16449, 16451, 2]

// Module 16448 (ChatSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import ImageTextIcon from "ImageTextIcon" /* 16449 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
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

// Module ID: 17808
// Function ID: 17809
// Name: ChatSetting
// Dependencies: [1072, 11717, 1113, 17809, 17811, 2]

// Module 17808 (ChatSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ImageTextIcon from "ImageTextIcon" /* 17809 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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

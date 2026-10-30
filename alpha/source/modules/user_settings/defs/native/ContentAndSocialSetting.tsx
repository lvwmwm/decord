// Module ID: 17852
// Function ID: 17853
// Name: ContentAndSocialSetting
// Dependencies: [1072, 11505, 1114, 5710, 17853, 2]

// Module 17852 (ContentAndSocialSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 5710 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+o1pDZ"]);
  },
  parent: null,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return require("ContentAndSocialScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;

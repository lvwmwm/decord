// Module ID: 16148
// Function ID: 16149
// Name: ConnectionsSetting
// Dependencies: [1071, 11817, 1112, 5490, 16121, 2]

// Module 16148 (ConnectionsSetting)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import LinkIcon from "LinkIcon" /* 5490 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.lrVuZO);
  },
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t["3fe7U5"]), ];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t["f6kk+r"]);
    return items;
  },
  parent: null,
  IconComponent: LinkIcon.LinkIcon,
  screen: {
    route: UserSettingsSections.CONNECTIONS,
    getComponent() {
      return require("ConnectedAppsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;

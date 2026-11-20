// Module ID: 17501
// Function ID: 17502
// Name: ConnectionsSetting
// Dependencies: [1072, 12408, 1113, 6019, 17474, 2]

// Module 17501 (ConnectionsSetting)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import LinkIcon from "LinkIcon" /* 6019 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
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

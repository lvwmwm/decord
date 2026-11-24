// Module ID: 17213
// Function ID: 17214
// Name: PhoenixSetting
// Dependencies: [1071, 21, 6033, 9496, 17214, 11815, 1112, 4665, 14128, 17220, 2]

// Module 17213 (PhoenixSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef4665 from "module_4665" /* 4665 */;
import Badge_Badge from "Badge/Badge" /* 6033 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9496 */;
import FireIcon from "FireIcon" /* 14128 */;
import PhoenixEntrypoint from "PhoenixEntrypoint" /* 17214 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef4665["3uRAgZ"]);
  },
  useSearchTerms() {
    const intl = intl2.intl;
    const items = [intl.string(intl2.t.EYxi0o)];
    return items;
  },
  parent: null,
  IconComponent: FireIcon.FireIcon,
  useTrailing: function usePhoenixSettingTrailing() {
    const Badge = Badge_Badge.Badge;
    return <Badge type="early_access" variant="expressive" icon={NitroWheelIcon.NitroWheelIcon} />;
  },
  usePredicate: function usePhoenixSettingPredicate() {
    const obj = PhoenixEntrypoint;
    return obj.useIsPhoenixEntrypointVisible("PhoenixSetting", true);
  },
  screen: {
    route: UserSettingsSections.PHOENIX,
    getComponent() {
      return require("PhoenixSettingsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixSetting.tsx");

export default route;

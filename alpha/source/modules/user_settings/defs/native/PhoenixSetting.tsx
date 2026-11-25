// Module ID: 17326
// Function ID: 17327
// Name: PhoenixSetting
// Dependencies: [1071, 21, 17327, 6128, 9595, 17328, 11914, 1112, 4728, 14251, 17333, 2]

// Module 17326 (PhoenixSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef4728 from "module_4728" /* 4728 */;
import Badge_Badge from "Badge/Badge" /* 6128 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9595 */;
import FireIcon from "FireIcon" /* 14251 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17327 */;
import PhoenixEntrypoint from "PhoenixEntrypoint" /* 17328 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef4728["3uRAgZ"]);
  },
  useSearchTerms() {
    const intl = intl2.intl;
    const items = [intl.string(intl2.t.EYxi0o)];
    return items;
  },
  parent: null,
  IconComponent: FireIcon.FireIcon,
  useTrailing: function usePhoenixSettingTrailing() {
    let tmp2 = null;
    const obj = PhoenixSwitchEntrypointExperimentDefault;
    if (obj.useConfig({ location: "PhoenixSetting" }, { autoTrackExposure: false }).requiresNitro) {
      const Badge = Badge_Badge.Badge;
      tmp2 = <Badge type="early_access" variant="expressive" icon={NitroWheelIcon.NitroWheelIcon} />;
    }
    return tmp2;
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

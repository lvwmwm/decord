// Module ID: 17384
// Function ID: 17385
// Name: PhoenixSetting
// Dependencies: [1071, 21, 17385, 6159, 9638, 17386, 11970, 1112, 4729, 14310, 17391, 2]

// Module 17384 (PhoenixSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef4729 from "module_4729" /* 4729 */;
import Badge_Badge from "Badge/Badge" /* 6159 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9638 */;
import FireIcon from "FireIcon" /* 14310 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17385 */;
import PhoenixEntrypoint from "PhoenixEntrypoint" /* 17386 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef4729["3uRAgZ"]);
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

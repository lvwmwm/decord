// Module ID: 17377
// Function ID: 17378
// Name: PhoenixSetting
// Dependencies: [1071, 21, 17378, 6159, 9637, 17379, 11962, 1112, 4729, 14303, 17384, 2]

// Module 17377 (PhoenixSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef4729 from "module_4729" /* 4729 */;
import Badge_Badge from "Badge/Badge" /* 6159 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9637 */;
import FireIcon from "FireIcon" /* 14303 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17378 */;
import PhoenixEntrypoint from "PhoenixEntrypoint" /* 17379 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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

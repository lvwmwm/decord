// Module ID: 15173
// Function ID: 15174
// Name: ReduceSaturationSetting
// Dependencies: [19, 4834, 7590, 21, 14207, 15071, 10983, 11215, 1115, 1177, 2]

// Module 15173 (ReduceSaturationSetting)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10983 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14207 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15071 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4834 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11215);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(7590).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;

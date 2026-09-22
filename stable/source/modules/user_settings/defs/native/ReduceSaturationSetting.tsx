// Module ID: 15499
// Function ID: 15500
// Name: ReduceSaturationSetting
// Dependencies: [19, 4628, 8079, 21, 14526, 15398, 11341, 11605, 1114, 1176, 2]

// Module 15499 (ReduceSaturationSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11341 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14526 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15398 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11605);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(8079).MobileUserSettings.ACCESSIBILITY,
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

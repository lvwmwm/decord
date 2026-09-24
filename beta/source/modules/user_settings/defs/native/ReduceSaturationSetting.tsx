// Module ID: 15685
// Function ID: 15686
// Name: ReduceSaturationSetting
// Dependencies: [19, 4782, 8270, 21, 558, 568, 14758, 15583, 11494, 11630, 1119, 1181, 2]

// Module 15685 (ReduceSaturationSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11494 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14758 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15583 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: AccessibilityStore.saturation, onSlidingComplete: tmp(14758).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(tmp(15583).CircleMinusIcon, {}), endIcon: jsx(tmp(11494).CirclePlusIcon, {}) };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []));
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(8270).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { value: AccessibilityStore.saturation, onSlidingComplete: tmp(14758).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(tmp(15583).CircleMinusIcon, {}), endIcon: jsx(tmp(11494).CirclePlusIcon, {}) };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []))
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;

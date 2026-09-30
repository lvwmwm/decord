// Module ID: 15167
// Function ID: 15168
// Name: ContrastModeSetting
// Dependencies: [19, 4855, 7612, 21, 14199, 15065, 10979, 11211, 1115, 1177, 2]

// Module 15167 (ContrastModeSetting)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10979 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14199 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15065 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11211);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(7612).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return noop.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;

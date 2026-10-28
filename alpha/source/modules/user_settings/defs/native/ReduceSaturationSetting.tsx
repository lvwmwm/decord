// Module ID: 17041
// Function ID: 17042
// Name: ReduceSaturationSetting
// Dependencies: [19, 5005, 8365, 21, 558, 576, 15949, 16942, 11195, 11248, 1125, 1199, 2]

// Module 17041 (ReduceSaturationSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11195 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15949 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16942 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSaturationSettingProps() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: AccessibilityStore.saturation, onChangeEnd: AccessibilityActionCreators.setSaturation, minValue: 0, maxValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useSaturationSettingProps() {
  let saturation;
  return react.useMemo(() => {
    const obj = { value: saturation.saturation, onChangeEnd: AccessibilityActionCreators.setSaturation, minValue: 0, maxValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    return obj;
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5PWWCY"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    const BetaTag = native.BetaTag;
    return <BetaTag size={native.BetaSizes.SMALL} />;
  },
  useProps: tmp2
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;

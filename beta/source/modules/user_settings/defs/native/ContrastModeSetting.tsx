// Module ID: 16769
// Function ID: 16770
// Name: ContrastModeSetting
// Dependencies: [19, 4972, 8332, 21, 558, 576, 15687, 16671, 11156, 11208, 1128, 1202, 2]

// Module 16769 (ContrastModeSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11156 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15687 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16671 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContrastSettingProps() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: AccessibilityStore.contrast, onChangeEnd: AccessibilityActionCreators.setContrast, minValue: 0, maxValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useContrastSettingProps() {
  let contrast;
  return react.useMemo(() => {
    const obj = { value: contrast.contrast, onChangeEnd: AccessibilityActionCreators.setContrast, minValue: 0, maxValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    return obj;
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["TYyfO/"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    const BetaTag = native.BetaTag;
    return <BetaTag size={native.BetaSizes.SMALL} />;
  },
  useProps: tmp2
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;

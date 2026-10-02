// Module ID: 14949
// Function ID: 14950
// Name: ContrastModeSetting
// Dependencies: [19, 4826, 7421, 21, 558, 576, 14000, 14847, 10738, 10874, 1127, 1189, 2]

// Module 14949 (ContrastModeSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import native from "native" /* 1189 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10738 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14000 */;
import CircleMinusIcon from "CircleMinusIcon" /* 14847 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: AccessibilityStore.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let contrast;
  return react.useMemo(() => {
    const obj = { value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
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

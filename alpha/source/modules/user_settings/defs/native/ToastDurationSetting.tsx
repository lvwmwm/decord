// Module ID: 16771
// Function ID: 16772
// Name: ToastDurationSetting
// Dependencies: [19, 4972, 8332, 1087, 21, 1128, 558, 576, 504, 15687, 16671, 11157, 11209, 2]

// Module 16771 (ToastDurationSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11157 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15687 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16671 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11209 */;
import size from "module_2" /* 2 */;

function formatToastDuration(seconds) {
  const intl = intl2.intl;
  const obj = { seconds };
  return intl.formatToPlainString(intl2.t.geSp4K, obj);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Accessibility = Constants.Accessibility;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useToastDurationSettingProps() {
  let minToastDurationMs;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return minToastDurationMs.minToastDurationMs / 1000;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(arg0) {
      const obj = AccessibilityActionCreators;
      obj.setMinToastDuration(1000 * arg0);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const intl = tmp(1128).intl;
    const obj2 = { seconds: stateFromStores };
    const formatResult = intl.format(intl2.t.pyvjRp, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
    const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
    cResult[5] = tmp14;
    cResult[6] = tmp15;
    tmp12 = tmp15;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    let tmp16;
    if (cResult[8] === tmp9) {
      tmp16 = cResult[9];
    }
    return tmp16;
  }
  const obj3 = { value: stateFromStores, onChange: tmp8, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: tmp11, endIcon: tmp12, formatValue: formatToastDuration, valueLabel: tmp9, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
  cResult[7] = stateFromStores;
  cResult[8] = tmp9;
  cResult[9] = obj3;
  tmp16 = obj3;
}) : (function useToastDurationSettingProps() {
  let minToastDurationMs;
  let onChange;
  let stateFromStores;
  let obj = stateFromStores(onChange[8]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
  onChange = react.useCallback((arg0) => {
    const obj = stateFromStores(callback[9]);
    obj.setMinToastDuration(1000 * arg0);
  }, []);
  const items1 = [stateFromStores, onChange];
  return react.useMemo(() => {
    let formatResult;
    const intl = intl2.intl;
    const obj = { seconds: stateFromStores };
    const obj2 = { value: stateFromStores, onChange, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: null, endIcon: null, formatValue: formatToastDuration, valueLabel: formatResult, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
    formatResult = intl.format(intl2.t.pyvjRp, obj);
    return obj2;
  }, items1);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3oxlia"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useProps: tmp2
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;

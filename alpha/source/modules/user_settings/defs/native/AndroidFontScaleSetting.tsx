// Module ID: 16670
// Function ID: 16671
// Name: AndroidFontScaleSetting
// Dependencies: [19, 16622, 1097, 8332, 21, 558, 576, 1274, 16671, 11154, 11206, 1128, 1384, 2]

// Module 16670 (AndroidFontScaleSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import intl2 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11154 */;
import FontScaleStore from "FontScaleStore" /* 16622 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16671 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11206 */;
import size from "module_2" /* 2 */;

function formatFontScale(arg0) {
  return 100 * FontScales[Math.round(Math, arg0)] + "%";
}
const useFontScaleStore = FontScaleStore.useFontScaleStore;
const FontScales = UserSettingsConstants.FontScales;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFontScaleSliderProps() {
  let state;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp5;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(9);
  const tmp4 = useFontScaleStore();
  if (cResult[0] !== tmp4.persistedFontScale) {
    let index;
    if (null != tmp4.persistedFontScale) {
      index = FontScales.indexOf(tmp4.persistedFontScale);
    }
    cResult[0] = tmp4.persistedFontScale;
    cResult[1] = index;
    tmp5 = index;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(arg0) {
      let closure_0 = arg0;
      let obj = closure_0(closure_1[7]);
      obj.batchUpdates(() => {
        const obj = { fontScale: FontScales[closure_0] };
        return state.setState(obj);
      });
    };
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const fontScale = tmp4.fontScale;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = jsx(CircleMinusIcon.CircleMinusIcon, {});
    const tmp14 = jsx(CirclePlusIcon.CirclePlusIcon, {});
    cResult[3] = tmp13;
    cResult[4] = tmp14;
    tmp11 = tmp14;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const index1 = FontScales.indexOf(1);
    cResult[5] = index1;
    tmp15 = index1;
  } else {
    tmp15 = cResult[5];
  }
  const text = `${fontScale * 100}%`;
  if (cResult[6] === tmp5) {
    let tmp19;
    if (cResult[7] === `${fontScale * 100}%`) {
      tmp19 = cResult[8];
    }
    return tmp19;
  }
  const obj2 = { value: tmp5, minValue: 0, maxValue: FontScales.length - 1, step: 1, onChange: tmp9, startIcon: tmp10, endIcon: tmp11, formatValue: formatFontScale, valueLabel: text, defaultValue: tmp15 };
  cResult[6] = tmp5;
  cResult[7] = text;
  cResult[8] = obj2;
  tmp19 = obj2;
}) : (function useFontScaleSliderProps() {
  let onChange;
  let state;
  const tmp = useFontScaleStore();
  let closure_0 = tmp;
  let index;
  if (null != tmp.persistedFontScale) {
    index = FontScales.indexOf(tmp.persistedFontScale);
  }
  onChange = onChange.useCallback((arg0) => {
    closure_0 = arg0;
    let obj = closure_0(index[7]);
    obj.batchUpdates(() => {
      const obj = { fontScale: FontScales[closure_0] };
      return state.setState(obj);
    });
  }, []);
  const items = [index, onChange, tmp.fontScale];
  return onChange.useMemo(() => {
    let fontScale;
    const obj = { value: index, minValue: 0, maxValue: FontScales.length - 1, step: 1, onChange, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), formatValue: formatFontScale, valueLabel: `${fontScale * 100}%`, defaultValue: FontScales.indexOf(1) };
    fontScale = closure_0.fontScale;
    return obj;
  }, items);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.i19n5L);
  },
  parent: MobileUserSettings.APPEARANCE,
  useProps: tmp2,
  usePredicate: PlatformUtils.isAndroid
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;

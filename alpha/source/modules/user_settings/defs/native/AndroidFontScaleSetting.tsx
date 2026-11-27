// Module ID: 16930
// Function ID: 16931
// Name: AndroidFontScaleSetting
// Dependencies: [19, 16883, 1081, 9556, 21, 1263, 16931, 13103, 11970, 1112, 1379, 2]

// Module 16930 (AndroidFontScaleSetting)
import Fragment from "Fragment" /* 21 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import CirclePlusIcon from "CirclePlusIcon" /* 13103 */;
import FontScaleStore from "FontScaleStore" /* 16883 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16931 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

function formatFontScale(arg0) {
  return 100 * FontScales[Math.round(Math, arg0)] + "%";
}
const useFontScaleStore = FontScaleStore.useFontScaleStore;
const FontScales = UserSettingsConstants.FontScales;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.i19n5L);
  },
  parent: MobileUserSettings.APPEARANCE,
  useProps: function useFontScaleSliderProps() {
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
      let obj = closure_0(index[5]);
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
  },
  usePredicate: PlatformUtils.isAndroid
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;

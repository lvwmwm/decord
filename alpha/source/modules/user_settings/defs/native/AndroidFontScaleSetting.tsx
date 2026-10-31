// Module ID: 17291
// Function ID: 17292
// Name: AndroidFontScaleSetting
// Dependencies: [19, 17243, 1082, 8432, 21, 1259, 17292, 11488, 11539, 1113, 1375, 2]

// Module 17291 (AndroidFontScaleSetting)
import Fragment from "Fragment" /* 21 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11488 */;
import FontScaleStore from "FontScaleStore" /* 17243 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17292 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
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

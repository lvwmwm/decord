// Module ID: 14858
// Function ID: 14859
// Name: AndroidFontScaleSetting
// Dependencies: [19, 14810, 1084, 7417, 21, 1248, 14859, 10774, 1115, 11006, 1364, 2]

// Module 14858 (AndroidFontScaleSetting)
import Fragment from "Fragment" /* 21 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10774 */;
import FontScaleStore from "FontScaleStore" /* 14810 */;
import CircleMinusIcon from "CircleMinusIcon" /* 14859 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

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
    let onValueChange;
    let state;
    const tmp = useFontScaleStore();
    let closure_0 = tmp;
    let index;
    if (null != tmp.persistedFontScale) {
      index = FontScales.indexOf(tmp.persistedFontScale);
    }
    onValueChange = onValueChange.useCallback((arg0) => {
      closure_0 = arg0;
      let obj = closure_0(index[5]);
      obj.batchUpdates(() => {
        const obj = { fontScale: FontScales[closure_0] };
        return state.setState(obj);
      });
    }, []);
    const items = [index, onValueChange, tmp.fontScale];
    return onValueChange.useMemo(() => {
      let intl;
      const text = `${closure_0.fontScale * 100}%`;
      const obj = { value: index, minimumValue: 0, maximumValue: FontScales.length - 1, step: 1, onValueChange, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), accessibilityLabel: intl.string(intl2.t.i19n5L), accessibilityValue: { text }, valueLabel: text, defaultValue: FontScales.indexOf(1) };
      intl = intl2.intl;
      return obj;
    }, items);
  },
  usePredicate: PlatformUtils.isAndroid
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;

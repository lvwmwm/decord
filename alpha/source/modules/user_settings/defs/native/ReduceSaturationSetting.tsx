// Module ID: 17921
// Function ID: 17922
// Name: ReduceSaturationSetting
// Dependencies: [19, 5244, 9136, 21, 16771, 17818, 13367, 12317, 1113, 1187, 2]

// Module 17921 (ReduceSaturationSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import CirclePlusIcon from "CirclePlusIcon" /* 13367 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16771 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17818 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
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
  useProps: function useSaturationSettingProps() {
    let saturation;
    return react.useMemo(() => {
      const obj = { value: saturation.saturation, onChangeEnd: AccessibilityActionCreators.setSaturation, minValue: 0, maxValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
      return obj;
    }, []);
  }
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;

// Module ID: 17407
// Function ID: 17408
// Name: ReduceSaturationSetting
// Dependencies: [19, 5015, 8432, 21, 16270, 17305, 11489, 11540, 1113, 1187, 2]

// Module 17407 (ReduceSaturationSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11489 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16270 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17305 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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

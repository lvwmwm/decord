// Module ID: 16821
// Function ID: 16822
// Name: ReduceSaturationSetting
// Dependencies: [19, 4914, 8712, 21, 15647, 16718, 13002, 11937, 1112, 1186, 2]

// Module 16821 (ReduceSaturationSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import CirclePlusIcon from "CirclePlusIcon" /* 13002 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15647 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16718 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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

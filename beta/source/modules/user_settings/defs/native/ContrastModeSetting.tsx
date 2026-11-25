// Module ID: 16828
// Function ID: 16829
// Name: ContrastModeSetting
// Dependencies: [19, 4914, 8712, 21, 15655, 16726, 13003, 11942, 1112, 1186, 2]

// Module 16828 (ContrastModeSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import CirclePlusIcon from "CirclePlusIcon" /* 13003 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15655 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16726 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
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
  useProps: function useContrastSettingProps() {
    let contrast;
    return react.useMemo(() => {
      const obj = { value: contrast.contrast, onChangeEnd: AccessibilityActionCreators.setContrast, minValue: 0, maxValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
      return obj;
    }, []);
  }
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;

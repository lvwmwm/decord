// Module ID: 16697
// Function ID: 16698
// Name: ContrastModeSetting
// Dependencies: [19, 4795, 8592, 21, 15524, 16595, 12880, 11817, 1112, 1186, 2]

// Module 16697 (ContrastModeSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import CirclePlusIcon from "CirclePlusIcon" /* 12880 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15524 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16595 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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

// Module ID: 17651
// Function ID: 17652
// Name: ContrastModeSetting
// Dependencies: [19, 5142, 8573, 21, 16515, 17551, 11678, 11729, 1113, 1187, 2]

// Module 17651 (ContrastModeSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11678 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16515 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17551 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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

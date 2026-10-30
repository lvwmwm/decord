// Module ID: 17333
// Function ID: 17334
// Name: ContrastModeSetting
// Dependencies: [19, 5010, 8424, 21, 16225, 17235, 11454, 11505, 1114, 1188, 2]

// Module 17333 (ContrastModeSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11454 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16225 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17235 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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

// Module ID: 17917
// Function ID: 17918
// Name: ToastDurationSetting
// Dependencies: [19, 5244, 9135, 1072, 21, 1113, 504, 16766, 17813, 13361, 12311, 2]

// Module 17917 (ToastDurationSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

function formatToastDuration(seconds) {
  const intl = intl2.intl;
  const obj = { seconds };
  return intl.formatToPlainString(intl2.t.geSp4K, obj);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Accessibility = Constants.Accessibility;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3oxlia"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useProps: function useToastDurationSettingProps() {
    let minToastDurationMs;
    let onChange;
    let stateFromStores;
    let obj = stateFromStores(onChange[6]);
    const items = [AccessibilityStore];
    stateFromStores = obj.useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
    onChange = react.useCallback((arg0) => {
      const obj = stateFromStores(callback[7]);
      obj.setMinToastDuration(1000 * arg0);
    }, []);
    const items1 = [stateFromStores, onChange];
    return react.useMemo(() => {
      let formatResult;
      const intl = intl2.intl;
      const obj = { seconds: stateFromStores };
      const obj2 = { value: stateFromStores, onChange, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: null, endIcon: null, formatValue: formatToastDuration, valueLabel: formatResult, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
      formatResult = intl.format(intl2.t.pyvjRp, obj);
      return obj2;
    }, items1);
  }
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;

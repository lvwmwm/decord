// Module ID: 17101
// Function ID: 17102
// Name: TimestampHourCycleSetting
// Dependencies: [19, 8365, 4832, 558, 576, 1125, 1208, 11248, 5688, 2]

// Module 17101 (TimestampHourCycleSetting)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import UserSettings from "UserSettings" /* 4832 */;
import SystemDateFormatter from "SystemDateFormatter" /* 5688 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDMsMessagePreviewsOptions() {
  let first;
  let intl;
  let intl2;
  let intl3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl4.t.FMWYvb), value: preloaded_user_settings.TimestampHourCycle.AUTO };
    intl = tmp(1125).intl;
    const items = [obj2, , ];
    const obj3 = { label: intl2.string(intl4.t.p8NOwi), value: preloaded_user_settings.TimestampHourCycle.H12 };
    intl2 = tmp(1125).intl;
    items[1] = obj3;
    const obj4 = { label: intl3.string(intl4.t["+o/sOo"]), value: preloaded_user_settings.TimestampHourCycle.H23 };
    intl3 = tmp(1125).intl;
    items[2] = obj4;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useDMsMessagePreviewsOptions() {
  return react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(intl4.t.FMWYvb), value: preloaded_user_settings.TimestampHourCycle.AUTO };
    intl = intl4.intl;
    const items = [obj, , ];
    const obj2 = { label: intl2.string(intl4.t.p8NOwi), value: preloaded_user_settings.TimestampHourCycle.H12 };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(intl4.t["+o/sOo"]), value: preloaded_user_settings.TimestampHourCycle.H23 };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.dyamEI);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: tmp2,
  usePredicate: SystemDateFormatter.supportsSystemDateFormatter
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;

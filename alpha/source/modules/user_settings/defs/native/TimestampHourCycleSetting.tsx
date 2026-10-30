// Module ID: 17394
// Function ID: 17395
// Name: TimestampHourCycleSetting
// Dependencies: [19, 8424, 4834, 1114, 1197, 11505, 5696, 2]

// Module 17394 (TimestampHourCycleSetting)
import intl4 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 4834 */;
import SystemDateFormatter from "SystemDateFormatter" /* 5696 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  useOptions: function useDMsMessagePreviewsOptions() {
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
  },
  usePredicate: SystemDateFormatter.supportsSystemDateFormatter
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;

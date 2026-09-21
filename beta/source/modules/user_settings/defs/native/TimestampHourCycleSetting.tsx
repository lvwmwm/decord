// Module ID: 15736
// Function ID: 15737
// Name: TimestampHourCycleSetting
// Dependencies: [19, 8238, 2023, 558, 568, 1119, 1190, 11594, 4445, 2]

// Module 15736 (TimestampHourCycleSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import UserSettings from "UserSettings" /* 2023 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11594);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: null };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.FMWYvb);
    obj2.value = tmp(1190).TimestampHourCycle.AUTO;
    const items = [obj2, , ];
    const obj3 = { label: null, value: null };
    const intl2 = tmp(1119).intl;
    obj3.label = intl2.string(tmp(1119).t.p8NOwi);
    obj3.value = tmp(1190).TimestampHourCycle.H12;
    items[1] = obj3;
    const obj4 = { label: null, value: null };
    const intl3 = tmp(1119).intl;
    obj4.label = intl3.string(tmp(1119).t["+o/sOo"]);
    obj4.value = tmp(1190).TimestampHourCycle.H23;
    items[2] = obj4;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => {
  const obj = { label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.FMWYvb);
  obj.value = preloaded_user_settings.TimestampHourCycle.AUTO;
  const items = [obj, , ];
  const obj2 = { label: null, value: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.p8NOwi);
  obj2.value = preloaded_user_settings.TimestampHourCycle.H12;
  items[1] = obj2;
  const obj3 = { label: null, value: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t["+o/sOo"]);
  obj3.value = preloaded_user_settings.TimestampHourCycle.H23;
  items[2] = obj3;
  return items;
}, []));
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dyamEI);
  },
  parent: fn(8238).MobileUserSettings.APPEARANCE,
  useValue: fn(2023).TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = UserSettings.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { label: null, value: null };
      const intl = tmp(1119).intl;
      obj2.label = intl.string(tmp(1119).t.FMWYvb);
      obj2.value = tmp(1190).TimestampHourCycle.AUTO;
      const items = [obj2, , ];
      const obj3 = { label: null, value: null };
      const intl2 = tmp(1119).intl;
      obj3.label = intl2.string(tmp(1119).t.p8NOwi);
      obj3.value = tmp(1190).TimestampHourCycle.H12;
      items[1] = obj3;
      const obj4 = { label: null, value: null };
      const intl3 = tmp(1119).intl;
      obj4.label = intl3.string(tmp(1119).t["+o/sOo"]);
      obj4.value = tmp(1190).TimestampHourCycle.H23;
      items[2] = obj4;
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => noop.useMemo(() => {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.FMWYvb);
    obj.value = preloaded_user_settings.TimestampHourCycle.AUTO;
    const items = [obj, , ];
    const obj2 = { label: null, value: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.p8NOwi);
    obj2.value = preloaded_user_settings.TimestampHourCycle.H12;
    items[1] = obj2;
    const obj3 = { label: null, value: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["+o/sOo"]);
    obj3.value = preloaded_user_settings.TimestampHourCycle.H23;
    items[2] = obj3;
    return items;
  }, [])),
  usePredicate: fn(4445).supportsSystemDateFormatter
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;

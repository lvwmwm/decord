// Module ID: 14354
// Function ID: 109888
// Name: radio
// Dependencies: [31, 7751, 3803, 1212, 1282, 10127, 3817, 2]

// Module 14354 (radio)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dyamEI);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = require(3803) /* explicitContentFromProto */.TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = outer1_0(outer1_1[3]).intl;
      obj.label = intl.string(outer1_0(outer1_1[3]).t.FMWYvb);
      obj.value = outer1_0(outer1_1[4]).TimestampHourCycle.AUTO;
      const items = [obj, , ];
      obj = {};
      const intl2 = outer1_0(outer1_1[3]).intl;
      obj.label = intl2.string(outer1_0(outer1_1[3]).t.p8NOwi);
      obj.value = outer1_0(outer1_1[4]).TimestampHourCycle.H12;
      items[1] = obj;
      obj = {};
      const intl3 = outer1_0(outer1_1[3]).intl;
      obj.label = intl3.string(outer1_0(outer1_1[3]).t["+o/sOo"]);
      obj.value = outer1_0(outer1_1[4]).TimestampHourCycle.H23;
      items[2] = obj;
      return items;
    }, []);
  },
  usePredicate: require("__DiscordCreateDateFormatter").supportsSystemDateFormatter
};
createToggle = createToggle.createRadio(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default createToggle;

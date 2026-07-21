// Module ID: 14179
// Function ID: 107334
// Name: radio
// Dependencies: []

// Module 14179 (radio)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.dyamEI);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.APPEARANCE,
  useValue: arg1(dependencyMap[2]).TimestampHourCycle.useSetting,
  onValueChange: function onTimestampHourCycleChange(arg0) {
    const TimestampHourCycle = arg1(dependencyMap[2]).TimestampHourCycle;
    TimestampHourCycle.updateSetting(Number(arg0));
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = callback(closure_1[3]).intl;
      obj.label = intl.string(callback(closure_1[3]).t.FMWYvb);
      obj.value = callback(closure_1[4]).TimestampHourCycle.AUTO;
      const items = [obj, , ];
      obj = {};
      const intl2 = callback(closure_1[3]).intl;
      obj.label = intl2.string(callback(closure_1[3]).t.p8NOwi);
      obj.value = callback(closure_1[4]).TimestampHourCycle.H12;
      items[1] = obj;
      obj = {};
      const intl3 = callback(closure_1[3]).intl;
      obj.label = intl3.string(callback(closure_1[3]).t.+o/sOo);
      obj.value = callback(closure_1[4]).TimestampHourCycle.H23;
      items[2] = obj;
      return items;
    }, []);
  },
  usePredicate: arg1(dependencyMap[6]).supportsSystemDateFormatter
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/TimestampHourCycleSetting.tsx");

export default radio;

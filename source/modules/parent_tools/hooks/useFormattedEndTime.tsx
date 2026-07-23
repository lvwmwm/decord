// Module ID: 15970
// Function ID: 123350
// Name: useFormattedEndTime
// Dependencies: [1849, 1212, 566, 2]
// Exports: default

// Module 15970 (useFormattedEndTime)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default function useFormattedEndTime() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    let nextEndTime;
    if (null != currentUser) {
      const restrictedSchedule = currentUser.restrictedSchedule;
      if (null != restrictedSchedule) {
        nextEndTime = restrictedSchedule.getNextEndTime();
      }
    }
    let formatResult = null;
    if (null != nextEndTime) {
      const _Intl = Intl;
      const prototype = DateTimeFormat.prototype;
      const dateTimeFormat = new DateTimeFormat(outer1_0(outer1_1[1]).intl.currentLocale, { hour: "numeric", minute: "2-digit", weekday: "long" });
      formatResult = dateTimeFormat.format(nextEndTime);
    }
    return formatResult;
  });
};

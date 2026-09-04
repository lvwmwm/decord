// Module ID: 17215
// Function ID: 17216
// Name: useFormattedEndTime
// Dependencies: [1921, 1233, 586, 2]
// Exports: default

// Module 17215 (useFormattedEndTime)
import initialize from "initialize" /* 586 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default function useFormattedEndTime() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nextEndTime;
    if (currentUser != null) {
      const restrictedSchedule = currentUser.restrictedSchedule;
      if (restrictedSchedule != null) {
        nextEndTime = restrictedSchedule.getNextEndTime();
      }
    }
    let formatResult = null;
    if (null != nextEndTime) {
      const _Intl = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(callback(table[1]).intl.currentLocale, { hour: "numeric", minute: "2-digit", weekday: "long" });
      formatResult = dateTimeFormat.format(nextEndTime);
    }
    return formatResult;
  });
};

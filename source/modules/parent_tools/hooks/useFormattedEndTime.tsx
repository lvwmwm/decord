// Module ID: 15853
// Function ID: 121177
// Name: useFormattedEndTime
// Dependencies: []
// Exports: default

// Module 15853 (useFormattedEndTime)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default function useFormattedEndTime() {
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
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
      const dateTimeFormat = new DateTimeFormat(callback(closure_1[1]).intl.currentLocale, { "Null": false, "Null": false, "Null": false });
      formatResult = dateTimeFormat.format(nextEndTime);
    }
    return formatResult;
  });
};

// Module ID: 9090
// Function ID: 71214
// Name: useRecipientsLabel
// Dependencies: []
// Exports: useRecipientsLabel

// Module 9090 (useRecipientsLabel)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = function useRecipientsLabel(channel) {
  const arg1 = channel;
  const items = [closure_4];
  const stateFromStoresArray = arg1(dependencyMap[3]).useStateFromStoresArray(items, () => {
    const recipients = arg0.recipients;
    const mapped = recipients.map((arg0) => user.getUser(arg0));
    const found = mapped.filter(arg0(closure_2[4]).isNotNullish);
    return found.map((arg0) => callback(closure_2[5]).getName(arg0));
  });
  const importDefault = stateFromStoresArray;
  const items1 = [channel, stateFromStoresArray];
  return React.useMemo(() => {
    if ("" === arg0.name) {
      return null;
    } else {
      let num3 = 0;
      let formatToPlainStringResult = null;
      if (0 !== stateFromStoresArray.length) {
        let num = 1;
        if (1 === arr.length) {
          num = arg0;
          const intl4 = arg0(closure_2[2]).intl;
          let obj = {};
          num3 = arr[num3];
          obj.first = num3;
          formatToPlainStringResult = intl4.formatToPlainString(arg0(closure_2[2]).t.J+Wpst, obj);
        } else {
          if (2 === arr.length) {
            const intl3 = arg0(closure_2[2]).intl;
            obj = { first: arr[num3] };
            num = arr[num];
            obj.second = num;
            formatToPlainStringResult = intl3.formatToPlainString(arg0(closure_2[2]).t.gwRP0Y, obj);
          } else if (3 !== arr.length) {
            const diff = arr.length - 3;
            const intl = arg0(closure_2[2]).intl;
            obj = { first: arr[num3], second: arr[num], third: arr[2], count: diff };
            formatToPlainStringResult = intl.formatToPlainString(arg0(closure_2[2]).t.VYfueb, obj);
          }
          const intl2 = arg0(closure_2[2]).intl;
          const obj1 = { first: arr[num3], second: arr[num], third: arr[2] };
          formatToPlainStringResult = intl2.formatToPlainString(arg0(closure_2[2]).t.QDB5et, obj1);
        }
      }
    }
  }, items1);
};

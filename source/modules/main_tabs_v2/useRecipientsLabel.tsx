// Module ID: 9135
// Function ID: 71467
// Name: useRecipientsLabel
// Dependencies: [31, 1849, 1212, 566, 1327, 3969, 2]
// Exports: useRecipientsLabel

// Module 9135 (useRecipientsLabel)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = function useRecipientsLabel(channel) {
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((arg0) => outer2_4.getUser(arg0));
    const found = mapped.filter(channel(outer1_2[4]).isNotNullish);
    return found.map((arg0) => stateFromStoresArray(outer2_2[5]).getName(arg0));
  });
  const items1 = [channel, stateFromStoresArray];
  return React.useMemo(() => {
    if ("" === channel.name) {
      return null;
    } else {
      let num3 = 0;
      let formatToPlainStringResult = null;
      if (0 !== stateFromStoresArray.length) {
        let num = 1;
        if (1 === arr.length) {
          num = channel;
          const intl4 = channel(outer1_2[2]).intl;
          let obj = {};
          num3 = arr[num3];
          obj.first = num3;
          formatToPlainStringResult = intl4.formatToPlainString(channel(outer1_2[2]).t["J+Wpst"], obj);
        } else {
          if (2 === arr.length) {
            const intl3 = channel(outer1_2[2]).intl;
            obj = { first: arr[num3] };
            num = arr[num];
            obj.second = num;
            formatToPlainStringResult = intl3.formatToPlainString(channel(outer1_2[2]).t.gwRP0Y, obj);
          } else if (3 !== arr.length) {
            const diff = arr.length - 3;
            const intl = channel(outer1_2[2]).intl;
            obj = { first: arr[num3], second: arr[num], third: arr[2], count: diff };
            formatToPlainStringResult = intl.formatToPlainString(channel(outer1_2[2]).t.VYfueb, obj);
          }
          const intl2 = channel(outer1_2[2]).intl;
          const obj1 = { first: arr[num3], second: arr[num], third: arr[2] };
          formatToPlainStringResult = intl2.formatToPlainString(channel(outer1_2[2]).t.QDB5et, obj1);
        }
      }
    }
  }, items1);
};

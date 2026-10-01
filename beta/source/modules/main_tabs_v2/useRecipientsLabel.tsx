// Module ID: 10372
// Function ID: 10373
// Name: useRecipientsLabel
// Dependencies: [19, 1372, 1115, 504, 1370, 4678, 2]
// Exports: useRecipientsLabel

// Module 10372 (useRecipientsLabel)
import intl5 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = function useRecipientsLabel(channel) {
  _require = channel;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    const recipients = channel.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map((item) => {
      const obj = stateFromStoresArray(closure_1_2[5]);
      return obj.getName(item);
    });
  });
  const items1 = [channel, stateFromStoresArray];
  return react.useMemo(() => {
    let tmp = null;
    if ("" !== channel.name) {
      let formatToPlainStringResult = null;
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          const intl4 = intl5.intl;
          const obj4 = { first: stateFromStoresArray[0] };
          formatToPlainStringResult = intl4.formatToPlainString(intl5.t["J+Wpst"], obj4);
        } else if (2 === stateFromStoresArray.length) {
          const intl3 = intl5.intl;
          const obj7 = { first: null, second: null };
          [obj3.first, obj3.second] = stateFromStoresArray;
          formatToPlainStringResult = intl3.formatToPlainString(intl5.t.gwRP0Y, obj7);
        } else if (3 === stateFromStoresArray.length) {
          const intl2 = intl5.intl;
          const obj8 = { first: null, second: null, third: null };
          [obj2.first, obj2.second, obj2.third] = stateFromStoresArray;
          formatToPlainStringResult = intl2.formatToPlainString(intl5.t.QDB5et, obj8);
        } else {
          const diff = arr.length - 3;
          const intl = intl5.intl;
          const obj = { first: null, second: null, third: null, count: diff };
          [obj.first, obj.second, obj.third] = stateFromStoresArray;
          formatToPlainStringResult = intl.formatToPlainString(intl5.t.VYfueb, obj);
        }
      }
      tmp = formatToPlainStringResult;
    }
    return tmp;
  }, items1);
};

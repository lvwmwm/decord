// Module ID: 12752
// Function ID: 12753
// Name: CheckpointNumberUtils
// Dependencies: [2160, 1112, 3440, 2]
// Exports: formatCheckpointStatAccessibilityLabel, formatCheckpointStatNumber

// Module 12752 (CheckpointNumberUtils)
import intl8 from "intl" /* 1112 */;
import _modDef3440 from "module_3440" /* 3440 */;
import FunctionUtils from "FunctionUtils" /* 2160 */;
import size from "module_2" /* 2 */;

let closure_3 = FunctionUtils.cachedFunction((arg0) => {
  const numberFormat = new Intl.NumberFormat(arg0, { maximumFractionDigits: 0, useGrouping: true });
  return numberFormat;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/CheckpointNumberUtils.tsx");

export function formatCheckpointStatNumber(rounded) {
  const obj = closure_3(intl8.intl.currentLocale);
  return obj.format(rounded);
}
export function formatCheckpointStatAccessibilityLabel(messages, roundResult) {
  let intl7;
  let obj3;
  if ("voice" === messages) {
    const intl6 = intl8.intl;
    const formatToPlainString = intl6.formatToPlainString;
    const obj2 = { duration: intl7.formatToPlainString(_modDef3440.x7PkHm, obj3) };
    const lw35aH = _modDef3440.lw35aH;
    intl7 = intl8.intl;
    obj3 = { minutes: roundResult };
    return formatToPlainString(lw35aH, obj2);
  } else if ("messages" === messages) {
    const intl5 = intl8.intl;
    const obj4 = { count: roundResult };
    return intl5.formatToPlainString(_modDef3440.IdRUAC, obj4);
  } else if ("topServerDays" === messages) {
    const intl4 = intl8.intl;
    const obj5 = { days: roundResult };
    return intl4.formatToPlainString(_modDef3440.MpSH8v, obj5);
  } else if ("emoji" === messages) {
    const intl3 = intl8.intl;
    const obj6 = { count: roundResult };
    return intl3.formatToPlainString(_modDef3440["36qpUG"], obj6);
  } else if ("games" === messages) {
    const intl2 = intl8.intl;
    const obj7 = { count: roundResult };
    return intl2.formatToPlainString(_modDef3440.z72P4t, obj7);
  } else if ("gameDays" === messages) {
    const intl = intl8.intl;
    const obj = { days: roundResult };
    return intl.formatToPlainString(_modDef3440.LYcKX7, obj);
  }
}

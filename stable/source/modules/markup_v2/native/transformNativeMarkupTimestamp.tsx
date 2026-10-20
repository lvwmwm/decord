// Module ID: 8150
// Function ID: 8151
// Name: transformNativeMarkupTimestamp
// Dependencies: [8151, 5400, 2]
// Exports: transformNativeTimestamp

// Module 8150 (transformNativeMarkupTimestamp)
import MarkupTypes from "MarkupTypes" /* 5400 */;
import TimestampUtils from "TimestampUtils" /* 8151 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  let obj3;
  let tmp2Result;
  const str = value.value;
  const str1 = str.toString();
  const style = value.style;
  const obj = TimestampUtils;
  const parseTimestampResult = obj.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: MarkupTypes.AST_KEY.TEXT, content: tmp2Result.unparseTimestamp(str1, style) };
    obj3 = obj2;
    tmp2Result = TimestampUtils;
  } else {
    obj3 = { type: MarkupTypes.AST_KEY.TIMESTAMP };
    const merged = Object.assign(parseTimestampResult);
  }
  return obj3;
};

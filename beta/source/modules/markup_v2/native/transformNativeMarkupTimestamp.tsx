// Module ID: 8406
// Function ID: 8407
// Name: transformNativeMarkupTimestamp
// Dependencies: [5268, 5241, 2]
// Exports: transformNativeTimestamp

// Module 8406 (transformNativeMarkupTimestamp)
import TimestampUtils from "TimestampUtils" /* 5268 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  const str1 = value.value.toString();
  const style = value.style;
  const parseTimestampResult = TimestampUtils.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: tmp2(5241).AST_KEY.TEXT, content: tmp2(5268).unparseTimestamp(str1, style) };
    let obj3 = obj2;
    const tmp2Result = tmp2(5268);
  } else {
    obj3 = {};
    const merged = Object.assign(parseTimestampResult);
    obj3.type = tmp2(5241).AST_KEY.TIMESTAMP;
  }
  return obj3;
};

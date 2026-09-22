// Module ID: 8218
// Function ID: 8219
// Name: transformNativeMarkupTimestamp
// Dependencies: [5103, 5077, 2]
// Exports: transformNativeTimestamp

// Module 8218 (transformNativeMarkupTimestamp)
import TimestampUtils from "TimestampUtils" /* 5103 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  const str1 = value.value.toString();
  const style = value.style;
  const parseTimestampResult = TimestampUtils.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: tmp2(5077).AST_KEY.TEXT, content: tmp2(5103).unparseTimestamp(str1, style) };
    let obj3 = obj2;
    const tmp2Result = tmp2(5103);
  } else {
    obj3 = {};
    const merged = Object.assign(parseTimestampResult);
    obj3.type = tmp2(5077).AST_KEY.TIMESTAMP;
  }
  return obj3;
};

// Module ID: 7739
// Function ID: 7740
// Name: transformNativeMarkupTimestamp
// Dependencies: [5514, 5486, 2]
// Exports: transformNativeTimestamp

// Module 7739 (transformNativeMarkupTimestamp)
import TimestampUtils from "TimestampUtils" /* 5514 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  const str1 = value.value.toString();
  const style = value.style;
  const parseTimestampResult = TimestampUtils.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: tmp2(5486).AST_KEY.TEXT, content: tmp2(5514).unparseTimestamp(str1, style) };
    let obj3 = obj2;
    const tmp2Result = tmp2(5514);
  } else {
    obj3 = {};
    const merged = Object.assign(parseTimestampResult);
    obj3.type = tmp2(5486).AST_KEY.TIMESTAMP;
  }
  return obj3;
};

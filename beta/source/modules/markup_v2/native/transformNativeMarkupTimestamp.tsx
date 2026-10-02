// Module ID: 7561
// Function ID: 7562
// Name: transformNativeMarkupTimestamp
// Dependencies: [5331, 5303, 2]
// Exports: transformNativeTimestamp

// Module 7561 (transformNativeMarkupTimestamp)
import MarkupTypes from "MarkupTypes" /* 5303 */;
import TimestampUtils from "TimestampUtils" /* 5331 */;
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

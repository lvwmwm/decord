// Module ID: 8401
// Function ID: 8402
// Name: transformNativeMarkupTimestamp
// Dependencies: [5266, 5239, 2]
// Exports: transformNativeTimestamp

// Module 8401 (transformNativeMarkupTimestamp)
import TimestampUtils from "TimestampUtils" /* 5266 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  const str1 = value.value.toString();
  const style = value.style;
  const parseTimestampResult = TimestampUtils.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: tmp2(5239).AST_KEY.TEXT, content: tmp2(5266).unparseTimestamp(str1, style) };
    let obj3 = obj2;
    const tmp2Result = tmp2(5266);
  } else {
    obj3 = {};
    const merged = Object.assign(parseTimestampResult);
    obj3.type = tmp2(5239).AST_KEY.TIMESTAMP;
  }
  return obj3;
};

// Module ID: 13203
// Function ID: 13204
// Name: conjureManagedCopyStatusText
// Dependencies: [1113, 4131, 5128, 2]
// Exports: conjureCopySourceLine, conjureCopySyncLine

// Module 13203 (conjureManagedCopyStatusText)
import intl7 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import DateUtils from "DateUtils" /* 5128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/managed_copy/conjureManagedCopyStatusText.tsx");

export function conjureCopySourceLine(sourceName, updatesPaused) {
  let stringResult;
  sourceName = sourceName.sourceName;
  if (null == sourceName) {
    const intl2 = intl7.intl;
    const string = intl2.string;
    const tmp9 = _modDef4131;
    stringResult = string(updatesPaused ? tmp9["5wuDGB"] : tmp9.rxvuqx);
  } else {
    const intl = intl7.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp4 = _modDef4131;
    const obj = { name: sourceName };
    stringResult = formatToPlainString(updatesPaused ? tmp4.HHthpS : tmp4.qpGg7d, obj);
  }
  return stringResult;
}
export function conjureCopySyncLine(conjureCopyLastSync, updatesPaused) {
  const tmp = updatesPaused;
  if (tmp) {
    const intl6 = intl7.intl;
    return intl6.string(_modDef4131["uV/luq"]);
  } else {
    if (null != conjureCopyLastSync) {
      if (null != conjureCopyLastSync.atMs) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const dateFormat = DateUtils.dateFormat;
        DateUtils;
        const date = new Date(conjureCopyLastSync.atMs);
        const dateFormatResult = dateFormat(date, "LLL");
        const status = conjureCopyLastSync.status;
        if ("updated" === status) {
          const intl4 = tmp14(1113).intl;
          const obj2 = { time: dateFormatResult };
          return intl4.formatToPlainString(_modDef4131["6rQ8So"], obj2);
        } else if ("failed" === status) {
          const intl3 = tmp14(1113).intl;
          const obj3 = { time: dateFormatResult };
          return intl3.formatToPlainString(_modDef4131.HZnsMq, obj3);
        } else if ("held" === status) {
          const intl2 = tmp14(1113).intl;
          return intl2.string(_modDef4131.AwPHix);
        } else {
          const intl = tmp14(1113).intl;
          const obj = { time: dateFormatResult };
          return intl.formatToPlainString(_modDef4131.yc0AaP, obj);
        }
      }
    }
    const intl5 = intl7.intl;
    return intl5.string(_modDef4131.gHndTq);
  }
}

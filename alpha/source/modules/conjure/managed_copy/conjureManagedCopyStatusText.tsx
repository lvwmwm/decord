// Module ID: 18489
// Function ID: 18490
// Name: conjureManagedCopyStatusText
// Dependencies: [1112, 4245, 4865, 2]
// Exports: conjureCopySourceLine, conjureCopySyncLine

// Module 18489 (conjureManagedCopyStatusText)
import intl7 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import DateUtils from "DateUtils" /* 4865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/managed_copy/conjureManagedCopyStatusText.tsx");

export function conjureCopySourceLine(sourceName, updatesPaused) {
  let stringResult;
  sourceName = sourceName.sourceName;
  if (null == sourceName) {
    const intl2 = intl7.intl;
    const string = intl2.string;
    const tmp9 = _modDef4245;
    stringResult = string(updatesPaused ? tmp9["5wuDGB"] : tmp9.rxvuqx);
  } else {
    const intl = intl7.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp4 = _modDef4245;
    const obj = { name: sourceName };
    stringResult = formatToPlainString(updatesPaused ? tmp4.HHthpS : tmp4.qpGg7d, obj);
  }
  return stringResult;
}
export function conjureCopySyncLine(conjureCopyLastSync, updatesPaused) {
  const tmp = updatesPaused;
  if (tmp) {
    const intl6 = intl7.intl;
    return intl6.string(_modDef4245["uV/luq"]);
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
          const intl4 = tmp14(1112).intl;
          const obj2 = { time: dateFormatResult };
          return intl4.formatToPlainString(_modDef4245["6rQ8So"], obj2);
        } else if ("failed" === status) {
          const intl3 = tmp14(1112).intl;
          const obj3 = { time: dateFormatResult };
          return intl3.formatToPlainString(_modDef4245.HZnsMq, obj3);
        } else if ("held" === status) {
          const intl2 = tmp14(1112).intl;
          return intl2.string(_modDef4245.AwPHix);
        } else {
          const intl = tmp14(1112).intl;
          const obj = { time: dateFormatResult };
          return intl.formatToPlainString(_modDef4245.yc0AaP, obj);
        }
      }
    }
    const intl5 = intl7.intl;
    return intl5.string(_modDef4245.gHndTq);
  }
}

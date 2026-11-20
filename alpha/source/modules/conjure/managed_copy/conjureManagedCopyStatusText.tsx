// Module ID: 18147
// Function ID: 18148
// Name: conjureManagedCopyStatusText
// Dependencies: [1112, 4091, 4616, 2]
// Exports: conjureCopySourceLine, conjureCopySyncLine

// Module 18147 (conjureManagedCopyStatusText)
import intl7 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import DateUtils from "DateUtils" /* 4616 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/managed_copy/conjureManagedCopyStatusText.tsx");

export function conjureCopySourceLine(sourceName, updatesPaused) {
  let stringResult;
  sourceName = sourceName.sourceName;
  if (null == sourceName) {
    const intl2 = intl7.intl;
    const string = intl2.string;
    const tmp9 = _modDef4091;
    stringResult = string(updatesPaused ? tmp9["5wuDGB"] : tmp9.rxvuqx);
  } else {
    const intl = intl7.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp4 = _modDef4091;
    const obj = { name: sourceName };
    stringResult = formatToPlainString(updatesPaused ? tmp4.HHthpS : tmp4.qpGg7d, obj);
  }
  return stringResult;
}
export function conjureCopySyncLine(conjureCopyLastSync, updatesPaused) {
  const tmp = updatesPaused;
  if (tmp) {
    const intl6 = intl7.intl;
    return intl6.string(_modDef4091["uV/luq"]);
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
          return intl4.formatToPlainString(_modDef4091["6rQ8So"], obj2);
        } else if ("failed" === status) {
          const intl3 = tmp14(1112).intl;
          const obj3 = { time: dateFormatResult };
          return intl3.formatToPlainString(_modDef4091.HZnsMq, obj3);
        } else if ("held" === status) {
          const intl2 = tmp14(1112).intl;
          return intl2.string(_modDef4091.AwPHix);
        } else {
          const intl = tmp14(1112).intl;
          const obj = { time: dateFormatResult };
          return intl.formatToPlainString(_modDef4091.yc0AaP, obj);
        }
      }
    }
    const intl5 = intl7.intl;
    return intl5.string(_modDef4091.gHndTq);
  }
}

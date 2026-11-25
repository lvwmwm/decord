// Module ID: 18626
// Function ID: 18627
// Name: ConjureMessageTime
// Dependencies: [4834, 2]
// Exports: describeMessageTime

// Module 18626 (ConjureMessageTime)
import DateUtils from "DateUtils" /* 4834 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureMessageTime.tsx");

export function describeMessageTime(at) {
  let isFiniteResult = null != at;
  if (isFiniteResult) {
    const _Number = Number;
    isFiniteResult = Number.isFinite(at);
  }
  if (isFiniteResult) {
    isFiniteResult = at > 0;
  }
  let calendarFormatResult = null;
  if (isFiniteResult) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const calendarFormat = DateUtils.calendarFormat;
    DateUtils;
    const date = new Date(at);
    calendarFormatResult = calendarFormat(date, true);
  }
  return calendarFormatResult;
}

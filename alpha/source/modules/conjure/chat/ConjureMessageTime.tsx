// Module ID: 12072
// Function ID: 12073
// Name: ConjureMessageTime
// Dependencies: [4849, 2]
// Exports: describeMessageTime

// Module 12072 (ConjureMessageTime)
import DateUtils from "DateUtils" /* 4849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureMessageTime.tsx");

export const describeMessageTime = function describeMessageTime(at) {
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
};

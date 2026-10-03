// Module ID: 16648
// Function ID: 16649
// Name: VibegrationsMessageTime
// Dependencies: [4552, 2]
// Exports: describeMessageTime

// Module 16648 (VibegrationsMessageTime)
import DateUtils from "DateUtils" /* 4552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsMessageTime.tsx");

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

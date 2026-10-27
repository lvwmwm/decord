// Module ID: 12195
// Function ID: 12196
// Name: conjurePublishSchedule
// Dependencies: [1128, 3830, 2]
// Exports: formatPublishScheduleTime, publishScheduleDetails

// Module 12195 (conjurePublishSchedule)
import intl7 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

function publishScheduleSummary(trigger) {
  if ("cron" === trigger.type) {
    const intl4 = intl7.intl;
    const obj2 = { expression: trigger.expression };
    return intl4.formatToPlainString(_modDef3830.aewci7, obj2);
  } else {
    let formatToPlainStringResult;
    const result = trigger.everyMs / 60000;
    if (result % 1440 === 0) {
      const intl3 = intl7.intl;
      const obj3 = { count: result / 1440 };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef3830["x/G8tD"], obj3);
    } else if (result % 60 === 0) {
      const intl2 = intl7.intl;
      const obj4 = { count: result / 60 };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3830["q4AgE/"], obj4);
    } else {
      const intl = intl7.intl;
      const obj = { count: result };
      formatToPlainStringResult = intl.formatToPlainString(_modDef3830["+y7hwg"], obj);
    }
    return formatToPlainStringResult;
  }
}
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/conjurePublishSchedule.tsx");

export { publishScheduleSummary };
export const formatPublishScheduleTime = function formatPublishScheduleTime(next_run_at) {
  const date = new Date(next_run_at);
  return date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
};
export const publishScheduleDetails = function publishScheduleDetails(saved) {
  let date;
  let date1;
  let error;
  const tmp = publishScheduleSummary(saved.trigger);
  let formatToPlainStringResult = tmp;
  const tmp2 = "interval" === saved.trigger.type && null != saved.trigger.startsAt;
  if (tmp2) {
    const intl = intl7.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj = { interval: tmp, time: date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) };
    const prop = _modDef3830["qCM+Fa"];
    date = new Date(saved.trigger.startsAt);
    formatToPlainStringResult = formatToPlainString(prop, obj);
  }
  const items = [formatToPlainStringResult];
  const push = items.push;
  const intl2 = intl7.intl;
  const formatToPlainString2 = intl2.formatToPlainString;
  const obj2 = { time: date1.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) };
  const prop1 = _modDef3830["T/dCkl"];
  date1 = new Date(saved.next_run_at);
  push(formatToPlainString2(prop1, obj2));
  const last_run = saved.last_run;
  if (null != last_run) {
    let formatToPlainStringResult1;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date2 = new Date(last_run.scheduled_at);
    const toLocaleStringResult = date2.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    const push2 = items.push;
    if ("succeeded" === last_run.status) {
      const intl6 = tmp11(1128).intl;
      const obj3 = { time: toLocaleStringResult };
      formatToPlainStringResult1 = intl6.formatToPlainString(tmp13(3830).yMA4zs, obj3);
    } else if ("skipped" === last_run.status) {
      const intl5 = tmp11(1128).intl;
      const obj4 = { time: toLocaleStringResult };
      formatToPlainStringResult1 = intl5.formatToPlainString(tmp13(3830)["0ikIhz"], obj4);
    } else {
      const intl3 = tmp11(1128).intl;
      const formatToPlainString3 = intl3.formatToPlainString;
      const obj5 = { time: toLocaleStringResult, error };
      error = last_run.error;
      const HMNRj4 = tmp13(3830).HMNRj4;
      if (error == null) {
        const intl4 = tmp11(1128).intl;
        error = intl4.string(tmp13(3830).dRxtva);
      }
      formatToPlainStringResult1 = formatToPlainString3(HMNRj4, obj5);
    }
    push2(formatToPlainStringResult1);
  }
  return items;
};

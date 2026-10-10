// Module ID: 10608
// Function ID: 10609
// Name: formatClearAfterValue
// Dependencies: [10518, 4793, 1126, 1102, 1388, 2]
// Exports: default

// Module 10608 (formatClearAfterValue)
import DurationsDefault from "Durations" /* 1102 */;
import intl6 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import DateUtils from "DateUtils" /* 4793 */;
import Constants from "Constants" /* 10518 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants.ClearAfterValues;
let result = size.fileFinishedImporting("modules/custom_status/utils/formatClearAfterValue.tsx");

export default function formatClearAfterValue(arg0) {
  let data;
  let data3;
  let data5;
  let data7;
  if (ClearAfterValues.TODAY === arg0) {
    let formatTimeResult;
    const _Date10 = Date;
    const sum = Date.now() + DurationsDefault.Millis.DAY;
    const _Date11 = Date;
    const self13 = this;
    const self14 = this;
    const isSameDay4 = DateUtils.isSameDay;
    DateUtils;
    const _Date12 = Date;
    const self15 = this;
    const self16 = this;
    const date = new Date();
    const date1 = new Date(sum);
    const isSameDay4Result = isSameDay4(date, date1);
    const intl5 = intl6.intl;
    if (isSameDay4Result) {
      const data8 = intl5.data;
      formatTimeResult = data8.formatTime(sum, { format: "short" });
    } else {
      const formatToPlainString4 = intl5.formatToPlainString;
      const obj2 = { time: data7.formatTime(sum, { format: "short" }) };
      const bI7n9i4 = tmp52(1126).t.bI7n9i;
      data7 = tmp52(1126).intl.data;
      formatTimeResult = formatToPlainString4(bI7n9i4, obj2);
    }
    return formatTimeResult;
  } else if (ClearAfterValues.HOURS_4 === arg0) {
    let formatTimeResult1;
    const _Date7 = Date;
    const result = 4 * DurationsDefault.Millis.HOUR;
    const sum1 = Date.now() + result;
    const _Date8 = Date;
    const self9 = this;
    const self10 = this;
    const isSameDay3 = DateUtils.isSameDay;
    DateUtils;
    const _Date9 = Date;
    const self11 = this;
    const self12 = this;
    const date2 = new Date();
    const date3 = new Date(sum1);
    const isSameDay3Result = isSameDay3(date2, date3);
    const intl4 = intl6.intl;
    if (isSameDay3Result) {
      const data6 = intl4.data;
      formatTimeResult1 = data6.formatTime(sum1, { format: "short" });
    } else {
      const formatToPlainString3 = intl4.formatToPlainString;
      const obj3 = { time: data5.formatTime(sum1, { format: "short" }) };
      const bI7n9i3 = tmp39(1126).t.bI7n9i;
      data5 = tmp39(1126).intl.data;
      formatTimeResult1 = formatToPlainString3(bI7n9i3, obj3);
    }
    return formatTimeResult1;
  } else if (ClearAfterValues.HOURS_1 === arg0) {
    let formatTimeResult2;
    const _Date4 = Date;
    const sum2 = Date.now() + DurationsDefault.Millis.HOUR;
    const _Date5 = Date;
    const self5 = this;
    const self6 = this;
    const isSameDay2 = DateUtils.isSameDay;
    DateUtils;
    const _Date6 = Date;
    const self7 = this;
    const self8 = this;
    const date4 = new Date();
    const date5 = new Date(sum2);
    const isSameDay2Result = isSameDay2(date4, date5);
    const intl3 = intl6.intl;
    if (isSameDay2Result) {
      const data4 = intl3.data;
      formatTimeResult2 = data4.formatTime(sum2, { format: "short" });
    } else {
      const formatToPlainString2 = intl3.formatToPlainString;
      const obj4 = { time: data3.formatTime(sum2, { format: "short" }) };
      const bI7n9i2 = tmp25(1126).t.bI7n9i;
      data3 = tmp25(1126).intl.data;
      formatTimeResult2 = formatToPlainString2(bI7n9i2, obj4);
    }
    return formatTimeResult2;
  } else if (ClearAfterValues.MINUTES_30 === arg0) {
    let formatTimeResult3;
    const _Date = Date;
    const result1 = 30 * DurationsDefault.Millis.MINUTE;
    const sum3 = Date.now() + result1;
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    const isSameDay = DateUtils.isSameDay;
    DateUtils;
    const _Date3 = Date;
    const self3 = this;
    const self4 = this;
    const date6 = new Date();
    const date7 = new Date(sum3);
    const isSameDayResult = isSameDay(date6, date7);
    const intl2 = intl6.intl;
    if (isSameDayResult) {
      const data2 = intl2.data;
      formatTimeResult3 = data2.formatTime(sum3, { format: "short" });
    } else {
      const formatToPlainString = intl2.formatToPlainString;
      const obj5 = { time: data.formatTime(sum3, { format: "short" }) };
      const bI7n9i = tmp12(1126).t.bI7n9i;
      data = tmp12(1126).intl.data;
      formatTimeResult3 = formatToPlainString(bI7n9i, obj5);
    }
    return formatTimeResult3;
  } else if (ClearAfterValues.DONT_CLEAR === arg0) {
    const intl = intl6.intl;
    return intl.string(intl6.t.bRn8cq);
  } else {
    const obj = GlobalUtils;
    obj.assertNever(arg0);
  }
};

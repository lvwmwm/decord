// Module ID: 10232
// Function ID: 79044
// Name: isSameDate
// Dependencies: [1212, 2]
// Exports: getStatusExpiryParts

// Module 10232 (isSameDate)
function isSameDate(date, date1) {
  const fullYear = date.getFullYear();
  let tmp2 = fullYear === date1.getFullYear();
  if (tmp2) {
    const month = date.getMonth();
    tmp2 = month === date1.getMonth();
  }
  if (tmp2) {
    tmp2 = date.getDate() === date1.getDate();
    date = date.getDate();
  }
  return tmp2;
}
const result = require("set").fileFinishedImporting("modules/multi_account/StatusUtils.tsx");

export const getStatusExpiryParts = function getStatusExpiryParts(arg0) {
  const date = new Date(Number(arg0));
  const date1 = new Date();
  const date2 = new Date();
  date2.setDate(date2.getDate() + 1);
  const tmp3 = isSameDate(date, new Date());
  const data = require(1212) /* getSystemLocale */.intl.data;
  const formatTimeResult = data.formatTime(date, { format: "short" });
  let obj = {};
  if (tmp3) {
    obj.kind = "today";
    const data4 = require(1212) /* getSystemLocale */.intl.data;
    obj = { numeric: "auto" };
    obj.dateString = data4.formatRelativeTime(0, "day", obj);
    obj.timeString = formatTimeResult;
    let tmp9 = obj;
  } else if (tmp5) {
    obj.kind = "tomorrow";
    const data3 = require(1212) /* getSystemLocale */.intl.data;
    const obj1 = { numeric: "auto" };
    obj.dateString = data3.formatRelativeTime(1, "day", obj1);
    obj.timeString = formatTimeResult;
    tmp9 = obj;
  } else {
    obj.kind = "date";
    const data2 = require(1212) /* getSystemLocale */.intl.data;
    const obj2 = { dateStyle: "short" };
    obj.dateString = data2.formatDate(date, obj2);
    obj.timeString = formatTimeResult;
    tmp9 = obj;
  }
  return tmp9;
};

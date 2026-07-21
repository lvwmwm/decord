// Module ID: 3452
// Function ID: 26787
// Name: dateLongFormatter
// Dependencies: []

// Module 3452 (dateLongFormatter)
function dateLongFormatter(arg0, date) {
  if ("P" === arg0) {
    let obj = { width: "short" };
    return date.date(obj);
  } else if ("PP" === arg0) {
    obj = { width: "medium" };
    return date.date(obj);
  } else if ("PPP" === arg0) {
    const obj1 = { width: "long" };
    return date.date(obj1);
  } else {
    obj = { width: "full" };
    return date.date(obj);
  }
}
function timeLongFormatter(arg0, time) {
  if ("p" === arg0) {
    let obj = { width: "short" };
    return time.time(obj);
  } else if ("pp" === arg0) {
    obj = { width: "medium" };
    return time.time(obj);
  } else if ("ppp" === arg0) {
    const obj1 = { width: "long" };
    return time.time(obj1);
  } else {
    obj = { width: "full" };
    return time.time(obj);
  }
}

export default {
  p: timeLongFormatter,
  P: function dateTimeLongFormatter(str, dateTime) {
    const tmp = str.match(/(P+)(p+)?/) || [];
    if (tmp[2]) {
      if ("P" === tmp2) {
        let obj = { width: "short" };
        let str5 = dateTime.dateTime(obj);
      } else if ("PP" === tmp2) {
        obj = { width: "medium" };
        str5 = dateTime.dateTime(obj);
      } else if ("PPP" === tmp2) {
        const obj1 = { width: "long" };
        str5 = dateTime.dateTime(obj1);
      } else {
        obj = { width: "full" };
        str5 = dateTime.dateTime(obj);
      }
      return str5.replace("{{date}}", dateLongFormatter(tmp2, dateTime)).replace("{{time}}", timeLongFormatter(tmp3, dateTime));
    } else {
      return dateLongFormatter(str, dateTime);
    }
  }
};
export default exports.default;

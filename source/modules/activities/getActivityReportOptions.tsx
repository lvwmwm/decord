// Module ID: 15912
// Function ID: 121913
// Name: getActivityReportOptions
// Dependencies: []
// Exports: default

// Module 15912 (getActivityReportOptions)
const ActivityFeedbackReasons = require(dependencyMap[0]).ActivityFeedbackReasons;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/getActivityReportOptions.tsx");

export default function getActivityReportOptions(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = { value: ActivityFeedbackReasons.FAILED_LOAD };
  const intl = require(dependencyMap[1]).intl;
  const string = intl.string;
  const t = require(dependencyMap[1]).t;
  if (arg0) {
    let stringResult = string(t.uaiF6B);
  } else {
    stringResult = string(t.aO6OMZ);
  }
  obj.label = stringResult;
  const items = [obj, , , , ];
  obj = { value: ActivityFeedbackReasons.LAGGING };
  const intl2 = require(dependencyMap[1]).intl;
  const string2 = intl2.string;
  const t2 = require(dependencyMap[1]).t;
  if (arg0) {
    let string2Result = string2(t2./nJOlj);
  } else {
    string2Result = string2(t2.79HFwf);
  }
  obj.label = string2Result;
  items[1] = obj;
  obj = { value: ActivityFeedbackReasons.CONFUSING };
  const intl3 = require(dependencyMap[1]).intl;
  const string3 = intl3.string;
  const t3 = require(dependencyMap[1]).t;
  if (arg0) {
    let string3Result = string3(t3./8psS7);
  } else {
    string3Result = string3(t3.iSv55N);
  }
  obj.label = string3Result;
  items[2] = obj;
  const obj1 = { value: ActivityFeedbackReasons.NOT_FUN };
  const intl4 = require(dependencyMap[1]).intl;
  const string4 = intl4.string;
  const t4 = require(dependencyMap[1]).t;
  if (arg0) {
    let string4Result = string4(t4.7GVmLm);
  } else {
    string4Result = string4(t4.GnVff5);
  }
  obj1.label = string4Result;
  items[3] = obj1;
  const obj2 = { value: ActivityFeedbackReasons.OTHER };
  const intl5 = require(dependencyMap[1]).intl;
  obj2.label = intl5.string(require(dependencyMap[1]).t.emlT91);
  items[4] = obj2;
  if (!flag) {
    return items;
  } else {
    let obj3 = { value: ActivityFeedbackReasons.ADS };
    const intl6 = require(dependencyMap[1]).intl;
    const string5 = intl6.string;
    if (arg0) {
      let string5Result = string5(_5o1UL6);
    } else {
      string5Result = string5(_5o1UL6.XeeDhK);
    }
    obj3.label = string5Result;
    obj3 = items.push(obj3);
  }
};

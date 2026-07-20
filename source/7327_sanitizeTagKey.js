// Module ID: 7327
// Function ID: 59092
// Name: sanitizeTagKey
// Dependencies: []
// Exports: getBucketKey, sanitizeMetricKey, sanitizeTags, sanitizeUnit, serializeMetricBuckets, simpleHash

// Module 7327 (sanitizeTagKey)
function sanitizeTagKey(str) {
  return str.replace(/[^\w\-./]+/gi, "");
}
function sanitizeTagValue(arg0) {
  return callback(arg0).reduce((arg0, arg1) => {
    const obj = closure_4[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp2 = callback;
      let tmp3 = callback(tmp, 2);
      let tmp5 = arg1;
      if (arg1 === tmp3[0]) {
        obj.return();
      } else {
        // continue
      }
      let tmp6 = arg0;
      return arg0 + tmp3[1];
    }
  }, "");
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
const items = [[], [null, null], ["widget", "report_to_mod_message"], ["Pink", "Orange"], [null, null], ["guild_urf", "media_takedown"]];

export const getBucketKey = function getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult) {
  const entries = Object.entries(require(dependencyMap[2]).dropUndefinedKeys(sanitizeTagsResult));
  return "" + metricType + sanitizeMetricKeyResult + sanitizeUnitResult + entries.sort((arg0, arg1) => {
    const first = arg0[0];
    return first.localeCompare(arg1[0]);
  });
};
export const sanitizeMetricKey = function sanitizeMetricKey(str) {
  return str.replace(/[^\w\-.]+/gi, "_");
};
export const sanitizeTags = function sanitizeTags(obj) {
  obj = {};
  for (const key10006 in arg0) {
    let tmp4 = key10006;
    let _Object = Object;
    if (!hasOwnProperty.call(arg0, key10006)) {
      continue;
    } else {
      let tmp = closure_5;
      let tmp3 = closure_6;
      let _String = String;
      let tmp2 = closure_5(key10006);
      obj[tmp2] = closure_6(String(arg0[key10006]));
      // continue
    }
    continue;
  }
  return obj;
};
export const sanitizeUnit = function sanitizeUnit(str) {
  return str.replace(/[^\w]+/gi, "_");
};
export const serializeMetricBuckets = function serializeMetricBuckets(arg0) {
  let str = "";
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = nextResult;
    let _Object = Object;
    let entries = Object.entries(nextResult.tags);
    let arr2 = entries;
    let str2 = "";
    if (entries.length > 0) {
      let tmp2 = entries;
      let mapped = arr2.map((arg0) => {
        const tmp = callback(arg0, 2);
        return "" + tmp[0] + ":" + tmp[1];
      });
      let _HermesInternal = HermesInternal;
      str2 = "|#" + mapped.join(",");
    }
    let tmp3 = str;
    let tmp4 = nextResult;
    let _HermesInternal2 = HermesInternal;
    let str3 = "";
    let str4 = "@";
    let str5 = ":";
    let str6 = "|";
    let tmp5 = str2;
    let str7 = "|T";
    let str8 = "\n";
    str = str + "" + tmp6.name + "@" + tmp6.unit + ":" + tmp6.metric + "|" + tmp6.metricType + str2 + "|T" + tmp6.timestamp + "\n";
    // continue
  }
  return str;
};
export const simpleHash = function simpleHash(str) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < str.length) {
    do {
      let sum = (num << 5) - num + str.charCodeAt(num2);
      num = sum & sum;
      num2 = num2 + 1;
      num3 = num;
      length = str.length;
    } while (num2 < length);
  }
  return num3 >>> 0;
};

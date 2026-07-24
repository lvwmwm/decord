// Module ID: 7337
// Function ID: 59189
// Name: sanitizeTagKey
// Dependencies: [65, 57, 7242]
// Exports: getBucketKey, sanitizeMetricKey, sanitizeTags, sanitizeUnit, serializeMetricBuckets, simpleHash

// Module 7337 (sanitizeTagKey)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";

function sanitizeTagKey(key10006) {
  return key10006.replace(/[^\w\-./]+/gi, "");
}
function sanitizeTagValue(arg0) {
  return _toConsumableArray(arg0).reduce((arg0, arg1) => {
    const obj = outer1_4[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp2 = outer1_3;
      let tmp3 = outer1_3(tmp, 2);
      let tmp5 = arg1;
      if (arg1 === tmp3[0]) {
        obj.return();
      }
      let tmp6 = arg0;
      return arg0 + tmp3[1];
    }
  }, "");
}
const items = [["\n", "\\n"], ["\r", "\\r"], ["\t", "\\t"], ["\\", "\\\\"], ["|", "\\u{7c}"], [",", "\\u{2c}"]];

export const getBucketKey = function getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult) {
  const entries = Object.entries(require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(sanitizeTagsResult));
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
      let tmp = sanitizeTagKey;
      let tmp3 = sanitizeTagValue;
      let _String = String;
      let tmp2 = sanitizeTagKey(key10006);
      obj[tmp2] = sanitizeTagValue(String(arg0[key10006]));
      continue;
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
        const tmp = outer1_3(arg0, 2);
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
    continue;
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

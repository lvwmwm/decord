// Module ID: 7247
// Function ID: 58366
// Name: getMetricSummaryJsonForSpan
// Dependencies: []
// Exports: getMetricSummaryJsonForSpan, updateMetricSummaryOnSpan

// Module 7247 (getMetricSummaryJsonForSpan)
let closure_2 = require(dependencyMap[0]);

export const getMetricSummaryJsonForSpan = function getMetricSummaryJsonForSpan(self) {
  let tmp7;
  let tmp9;
  const _sentryMetrics = self._sentryMetrics;
  if (_sentryMetrics) {
    const obj = {};
    const tmp2 = _sentryMetrics[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = callback;
      let tmp6 = callback(callback(tmp3, 2)[1], 2);
      [tmp7, tmp9] = tmp6;
      let tmp10 = obj;
      let tmp11 = obj[tmp7];
      let arr = tmp11;
      if (!tmp11) {
        let tmp12 = obj;
        let tmp13 = tmp7;
        let items = [];
        obj[tmp8] = items;
        arr = items;
      }
      let tmp14 = arr;
      let tmp15 = require;
      let tmp16 = dependencyMap;
      let obj2 = require(dependencyMap[1]);
      let tmp17 = tmp9;
      arr = arr.push(obj2.dropUndefinedKeys(tmp9));
      // continue
    }
    return obj;
  }
};
export const updateMetricSummaryOnSpan = function updateMetricSummaryOnSpan(_sentryMetrics, metricType, sanitizeMetricKeyResult, min, sanitizeUnitResult, tags, bucketKey) {
  _sentryMetrics = _sentryMetrics._sentryMetrics;
  if (!_sentryMetrics) {
    const _Map = Map;
    const map = new Map();
    _sentryMetrics._sentryMetrics = map;
    _sentryMetrics = map;
  }
  const combined = "" + metricType + ":" + sanitizeMetricKeyResult + "@" + sanitizeUnitResult;
  const value = _sentryMetrics.get(bucketKey);
  if (value) {
    const tmp11 = callback(value, 2)[1];
    const items = [combined, ];
    let obj = {};
    const _Math = Math;
    obj.min = Math.min(tmp11.min, min);
    const _Math2 = Math;
    obj.max = Math.max(tmp11.max, min);
    const sum = tmp11.count + 1;
    tmp11.count = sum;
    obj.count = sum;
    const sum1 = tmp11.sum + min;
    tmp11.sum = sum1;
    obj.sum = sum1;
    obj.tags = tmp11.tags;
    items[1] = obj;
    const result = _sentryMetrics.set(bucketKey, items);
  } else {
    const items1 = [combined, ];
    obj = { min, max: min, count: 1, sum: min, tags };
    items1[1] = obj;
    const result1 = _sentryMetrics.set(bucketKey, items1);
  }
};

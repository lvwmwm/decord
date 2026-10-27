// Module ID: 12693
// Function ID: 12694
// Name: BrowserMetricsAggregator
// Dependencies: [41, 42, 12686, 12603, 12690, 12691, 12594, 12692]

// Module 12693 (BrowserMetricsAggregator)
import _mod12594 from "module_12594" /* 12594 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12603 */;
import COUNTER_METRIC_TYPE from "COUNTER_METRIC_TYPE" /* 12686 */;
import _mod12690 from "module_12690" /* 12690 */;
import CounterMetric from "CounterMetric" /* 12691 */;
import captureAggregateMetrics from "captureAggregateMetrics" /* 12692 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class BrowserMetricsAggregator {
  constructor(_client) {
    const self = this;
    _classCallCheck(this, BrowserMetricsAggregator);
    this._client = _client;
    this._buckets = new Map();
    new Map();
    this._interval = setInterval(() => self.flush(), COUNTER_METRIC_TYPE.DEFAULT_BROWSER_FLUSH_INTERVAL);
  }
}
const entry = {
  key: "add",
  value: function add(metricType, arg1, diff, none, tags) {
    let obj7;
    let tmp14;
    let str = none;
    if (none === undefined) {
      str = "none";
    }
    let obj = tags;
    if (tags === undefined) {
      obj = {};
    }
    let timestampInSecondsResult = arg5;
    if (arg5 === undefined) {
      const obj2 = _browserPerformanceTimeOriginMode;
      timestampInSecondsResult = obj2.timestampInSeconds();
    }
    const rounded = Math.floor(timestampInSecondsResult);
    const obj3 = _mod12690;
    const sanitizeMetricKeyResult = obj3.sanitizeMetricKey(arg1);
    const obj4 = _mod12690;
    const sanitizeTagsResult = obj4.sanitizeTags(obj);
    const obj5 = _mod12690;
    const sanitizeUnitResult = obj5.sanitizeUnit(str);
    const obj6 = _mod12690;
    const bucketKey = obj6.getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
    const _buckets = this._buckets;
    const value = _buckets.get(bucketKey);
    let num = 0;
    if (value) {
      num = 0;
      if (metricType === COUNTER_METRIC_TYPE.SET_METRIC_TYPE) {
        num = value.metric.weight;
      }
    }
    if (value) {
      const metric = value.metric;
      metric.add(diff);
      obj7 = value;
      if (value.timestamp < rounded) {
        value.timestamp = rounded;
        obj7 = value;
      }
    } else {
      obj7 = { metric: tmp14, timestamp: rounded, metricType, name: sanitizeMetricKeyResult, unit: sanitizeUnitResult, tags: sanitizeTagsResult };
      const self = this;
      const self2 = this;
      const _buckets2 = this._buckets;
      tmp14 = new CounterMetric.METRIC_MAP[metricType](diff);
      const result = _buckets2.set(bucketKey, obj7);
    }
    if (typeof diff === "string") {
      diff = obj7.metric.weight - num;
    }
    const tmp5Result = _mod12594;
    const result1 = tmp5Result.updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
  }
};
const items = [
  entry,
  {
    key: "flush",
    value: function flush() {
      const self = this;
      if (0 !== this._buckets.size) {
        const _Array = Array;
        const _buckets = self._buckets;
        const arr = Array.from(_buckets.values());
        const obj = captureAggregateMetrics;
        const result = obj.captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
      }
    }
  },
  {
    key: "close",
    value: function close() {
      clearInterval(this._interval);
      this.flush();
    }
  }
];
const BrowserMetricsAggregator_export = _createClass(BrowserMetricsAggregator, items);

export { BrowserMetricsAggregator_export as BrowserMetricsAggregator };

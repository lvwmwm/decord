// Module ID: 13034
// Function ID: 13035
// Name: BrowserMetricsAggregator
// Dependencies: [41, 42, 13027, 12944, 13031, 13032, 12935, 13033]

// Module 13034 (BrowserMetricsAggregator)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const BrowserMetricsAggregator = require;
class BrowserMetricsAggregator {
  constructor(arg0) {
    self = this;
    tmp = c2(this, BrowserMetricsAggregator);
    this._client = global;
    map = new Map();
    this._buckets = map;
    this._interval = setInterval(() => self.flush(), closure_0(closure_1[2]).DEFAULT_BROWSER_FLUSH_INTERVAL);
    return;
  }
}
const entry = {
  key: "add",
  value: function add(metricType, arg1, diff, none, tags) {
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
      timestampInSecondsResult = BrowserMetricsAggregator(12944).timestampInSeconds();
      const obj2 = BrowserMetricsAggregator(12944);
    }
    const rounded = Math.floor(timestampInSecondsResult);
    const sanitizeMetricKeyResult = BrowserMetricsAggregator(13031).sanitizeMetricKey(arg1);
    const obj3 = BrowserMetricsAggregator(13031);
    const sanitizeTagsResult = BrowserMetricsAggregator(13031).sanitizeTags(obj);
    const obj4 = BrowserMetricsAggregator(13031);
    const sanitizeUnitResult = BrowserMetricsAggregator(13031).sanitizeUnit(str);
    const obj5 = BrowserMetricsAggregator(13031);
    const bucketKey = BrowserMetricsAggregator(13031).getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
    const _buckets = this._buckets;
    value = _buckets.get(bucketKey);
    let num = 0;
    if (value) {
      num = 0;
      if (metricType === tmp5(13027).SET_METRIC_TYPE) {
        num = value.metric.weight;
      }
    }
    if (value) {
      const metric = value.metric;
      metric.add(diff);
      let obj7 = value;
      if (value.timestamp < rounded) {
        value.timestamp = rounded;
        obj7 = value;
      }
    } else {
      obj7 = { metric: null, timestamp: null, metricType: null, name: null, unit: null, tags: null };
      const tmp16 = new tmp5(13032).METRIC_MAP[metricType](diff);
      obj7.metric = tmp16;
      obj7.timestamp = rounded;
      obj7.metricType = metricType;
      obj7.name = sanitizeMetricKeyResult;
      obj7.unit = sanitizeUnitResult;
      obj7.tags = sanitizeTagsResult;
      const _buckets2 = this._buckets;
      const result = _buckets2.set(bucketKey, obj7);
    }
    if (typeof diff === "string") {
      diff = obj7.metric.weight - num;
    }
    const obj6 = BrowserMetricsAggregator(13031);
    const result1 = BrowserMetricsAggregator(12935).updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
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
        const result = BrowserMetricsAggregator(13033).captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
        const obj = BrowserMetricsAggregator(13033);
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

export const BrowserMetricsAggregator = _createClass(BrowserMetricsAggregator, items);

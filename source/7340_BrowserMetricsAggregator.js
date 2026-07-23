// Module ID: 7340
// Function ID: 59197
// Name: BrowserMetricsAggregator
// Dependencies: [6, 7, 7333, 7250, 7337, 7338, 7241, 7339]

// Module 7340 (BrowserMetricsAggregator)
import _classCallCheck from "spanTimeInputToSeconds";
import _defineProperties from "createMetricEnvelope";


export const BrowserMetricsAggregator = (() => {
  class BrowserMetricsAggregator {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, self);
      this._client = arg0;
      map = new Map();
      this._buckets = map;
      this._interval = setInterval(() => self.flush(), BrowserMetricsAggregator(outer1_1[2]).DEFAULT_BROWSER_FLUSH_INTERVAL);
      return;
    }
  }
  let obj = {
    key: "add",
    value: function add(metricType, arg1, diff) {
      const self = this;
      let str = "none";
      if (arguments.length > 3) {
        str = "none";
        if (undefined !== arguments[3]) {
          str = arguments[3];
        }
      }
      if (arguments.length > 4) {
        if (undefined !== arguments[4]) {
          let obj = arguments[4];
        }
        if (arguments.length > 5) {
          if (undefined !== arguments[5]) {
            let timestampInSecondsResult = arguments[5];
          }
          const _Math = Math;
          const rounded = Math.floor(timestampInSecondsResult);
          const sanitizeMetricKeyResult = BrowserMetricsAggregator(outer1_1[4]).sanitizeMetricKey(arg1);
          const obj3 = BrowserMetricsAggregator(outer1_1[4]);
          const sanitizeTagsResult = BrowserMetricsAggregator(outer1_1[4]).sanitizeTags(obj);
          const obj4 = BrowserMetricsAggregator(outer1_1[4]);
          const sanitizeUnitResult = BrowserMetricsAggregator(outer1_1[4]).sanitizeUnit(str);
          const obj6 = BrowserMetricsAggregator(outer1_1[4]);
          const bucketKey = obj6.getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
          const _buckets = self._buckets;
          const value = _buckets.get(bucketKey);
          let num2 = 0;
          if (value) {
            num2 = 0;
            if (metricType === BrowserMetricsAggregator(outer1_1[2]).SET_METRIC_TYPE) {
              num2 = value.metric.weight;
            }
          }
          if (value) {
            const metric = value.metric;
            metric.add(diff);
            obj = value;
            if (value.timestamp < rounded) {
              value.timestamp = rounded;
              obj = value;
            }
          } else {
            obj = {};
            let tmp24 = BrowserMetricsAggregator(outer1_1[5]).METRIC_MAP[metricType];
            const prototype = tmp24.prototype;
            tmp24 = new tmp24(diff);
            obj.metric = tmp24;
            obj.timestamp = rounded;
            obj.metricType = metricType;
            obj.name = sanitizeMetricKeyResult;
            obj.unit = sanitizeUnitResult;
            obj.tags = sanitizeTagsResult;
            const _buckets2 = self._buckets;
            const result = _buckets2.set(bucketKey, obj);
          }
          if ("string" === typeof diff) {
            diff = obj.metric.weight - num2;
          }
          const obj8 = BrowserMetricsAggregator(outer1_1[6]);
          const result1 = obj8.updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
        }
        timestampInSecondsResult = BrowserMetricsAggregator(outer1_1[3]).timestampInSeconds();
        const obj2 = BrowserMetricsAggregator(outer1_1[3]);
      }
      obj = {};
    }
  };
  const items = [obj, , ];
  obj = {
    key: "flush",
    value: function flush() {
      const self = this;
      if (0 !== this._buckets.size) {
        const _Array = Array;
        const _buckets = self._buckets;
        const arr = Array.from(_buckets.values());
        const result = BrowserMetricsAggregator(outer1_1[7]).captureAggregateMetrics(self._client, arr);
        const _buckets2 = self._buckets;
        _buckets2.clear();
        const obj = BrowserMetricsAggregator(outer1_1[7]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "close",
    value: function close() {
      clearInterval(this._interval);
      this.flush();
    }
  };
  items[2] = obj;
  return _defineProperties(BrowserMetricsAggregator, items);
})();

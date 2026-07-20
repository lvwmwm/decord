// Module ID: 7326
// Function ID: 59082
// Name: MetricsAggregator
// Dependencies: []

// Module 7326 (MetricsAggregator)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);

export const MetricsAggregator = () => {
  class MetricsAggregator {
    constructor(arg0) {
      self = this;
      MetricsAggregator = this;
      tmp = closure_3(this, MetricsAggregator);
      this._client = arg0;
      map = new Map();
      this._buckets = map;
      this._bucketsTotalWeight = 0;
      this._interval = setInterval(() => self._flush(), MetricsAggregator(closure_1[3]).DEFAULT_FLUSH_INTERVAL);
      if (this._interval.unref) {
        _interval = self._interval;
        unrefResult = _interval.unref();
      }
      random = Math.random();
      self._flushShift = Math.floor(random * MetricsAggregator(closure_1[3]).DEFAULT_FLUSH_INTERVAL / 1000);
      self._forceFlush = false;
      return;
    }
  }
  const require = MetricsAggregator;
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
          const sanitizeMetricKeyResult = MetricsAggregator(closure_1[5]).sanitizeMetricKey(arg1);
          const obj3 = MetricsAggregator(closure_1[5]);
          const sanitizeTagsResult = MetricsAggregator(closure_1[5]).sanitizeTags(obj);
          const obj4 = MetricsAggregator(closure_1[5]);
          const sanitizeUnitResult = MetricsAggregator(closure_1[5]).sanitizeUnit(str);
          const obj6 = MetricsAggregator(closure_1[5]);
          const bucketKey = obj6.getBucketKey(metricType, sanitizeMetricKeyResult, sanitizeUnitResult, sanitizeTagsResult);
          const _buckets = self._buckets;
          const value = _buckets.get(bucketKey);
          let num2 = 0;
          if (value) {
            num2 = 0;
            if (metricType === MetricsAggregator(closure_1[3]).SET_METRIC_TYPE) {
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
            let tmp24 = MetricsAggregator(closure_1[6]).METRIC_MAP[metricType];
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
          const obj8 = MetricsAggregator(closure_1[7]);
          const result1 = obj8.updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, obj, bucketKey);
          self._bucketsTotalWeight = self._bucketsTotalWeight + obj.metric.weight;
          if (self._bucketsTotalWeight >= MetricsAggregator(closure_1[3]).MAX_WEIGHT) {
            self.flush();
          }
        }
        timestampInSecondsResult = MetricsAggregator(closure_1[4]).timestampInSeconds();
        const obj2 = MetricsAggregator(closure_1[4]);
      }
      obj = {};
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "flush",
    value: function flush() {
      this._forceFlush = true;
      this._flush();
    }
  };
  items[1] = obj;
  obj = {
    key: "close",
    value: function close() {
      this._forceFlush = true;
      clearInterval(this._interval);
      this._flush();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_flush",
    value: function _flush() {
      let tmp15;
      let tmp16;
      const self = this;
      if (this._forceFlush) {
        self._forceFlush = false;
        self._bucketsTotalWeight = 0;
        self._captureMetrics(self._buckets);
        const _buckets3 = self._buckets;
        _buckets3.clear();
      } else {
        const _Math = Math;
        const rounded = Math.floor(MetricsAggregator(closure_1[4]).timestampInSeconds());
        const diff = rounded - MetricsAggregator(closure_1[3]).DEFAULT_FLUSH_INTERVAL / 1000 - self._flushShift;
        const _Map = Map;
        const map = new Map();
        const _buckets = self._buckets;
        const tmp10 = _buckets[Symbol.iterator]();
        while (tmp10 !== undefined) {
          let tmp13 = callback;
          let tmp14 = callback(tmp11, 2);
          [tmp15, tmp16] = tmp14;
          let tmp17 = tmp16;
          let tmp18 = diff;
          if (tmp16.timestamp <= diff) {
            let tmp19 = map;
            let tmp20 = tmp15;
            let tmp21 = tmp16;
            let result = obj2.set(tmp15, tmp17);
            self._bucketsTotalWeight = self._bucketsTotalWeight - tmp17.metric.weight;
          }
          // continue
        }
        for (const item10061 of map) {
          let tmp25 = closure_2;
          let _buckets2 = self._buckets;
          let deleteResult = _buckets2.delete(closure_2(item10061, 1)[0]);
        }
        self._captureMetrics(map);
      }
    }
  };
  items[4] = {
    key: "_captureMetrics",
    value: function _captureMetrics(_buckets) {
      if (_buckets.size > 0) {
        const _Array = Array;
        const mapped = Array.from(_buckets).map((arg0) => callback(arg0, 2)[1]);
        const arr = Array.from(_buckets);
        const self = this;
        const result = MetricsAggregator(closure_1[8]).captureAggregateMetrics(this._client, mapped);
        const obj = MetricsAggregator(closure_1[8]);
      }
    }
  };
  return callback(MetricsAggregator, items);
}();

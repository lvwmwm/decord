// Module ID: 7328
// Function ID: 59104
// Name: CounterMetric
// Dependencies: []

// Module 7328 (CounterMetric)
const _module = require(dependencyMap[0]);
let closure_2 = require(dependencyMap[1]);
let closure_3 = require(dependencyMap[2]);
const tmp3 = () => {
  class CounterMetric {
    constructor(arg0) {
      tmp = closure_2(this, CounterMetric);
      this._value = arg0;
      return;
    }
  }
  const require = CounterMetric;
  let obj = {
    key: "weight",
    get() {
      return 1;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "add",
    value: function add(arg0) {
      this._value = this._value + arg0;
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value: function toString() {
      return "" + this._value;
    }
  };
  items[2] = obj;
  return callback(CounterMetric, items);
}();
const tmp4 = () => {
  class GaugeMetric {
    constructor(arg0) {
      tmp = closure_2(this, GaugeMetric);
      this._last = arg0;
      this._min = arg0;
      this._max = arg0;
      this._sum = arg0;
      this._count = 1;
      return;
    }
  }
  const require = GaugeMetric;
  let obj = {
    key: "weight",
    get() {
      return 5;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "add",
    value: function add(_last) {
      const self = this;
      this._last = _last;
      if (_last < this._min) {
        self._min = _last;
      }
      if (_last > self._max) {
        self._max = _last;
      }
      self._sum = self._sum + _last;
      self._count = self._count + 1;
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value: function toString() {
      return "" + this._last + ":" + this._min + ":" + this._max + ":" + this._sum + ":" + this._count;
    }
  };
  items[2] = obj;
  return callback(GaugeMetric, items);
}();
const tmp5 = () => {
  class DistributionMetric {
    constructor(arg0) {
      tmp = closure_2(this, DistributionMetric);
      items = [];
      items[0] = arg0;
      this._value = items;
      return;
    }
  }
  const require = DistributionMetric;
  let obj = {
    key: "weight",
    get() {
      return this._value.length;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "add",
    value: function add(arg0) {
      const _value = this._value;
      _value.push(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value: function toString() {
      const _value = this._value;
      return _value.join(":");
    }
  };
  items[2] = obj;
  return callback(DistributionMetric, items);
}();
const tmp6 = () => {
  class SetMetric {
    constructor(arg0) {
      tmp = closure_2(this, SetMetric);
      this.first = arg0;
      items = [];
      items[0] = arg0;
      set = new Set(items);
      this._value = set;
      return;
    }
  }
  const require = SetMetric;
  let obj = {
    key: "weight",
    get() {
      return this._value.size;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "add",
    value: function add(arg0) {
      const _value = this._value;
      _value.add(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value: function toString() {
      const mapped = Array.from(this._value).map((arg0) => {
        let simpleHashResult = arg0;
        if ("string" === typeof arg0) {
          simpleHashResult = callback(closure_1[3]).simpleHash(arg0);
          const obj = callback(closure_1[3]);
        }
        return simpleHashResult;
      });
      return mapped.join(":");
    }
  };
  items[2] = obj;
  return callback(SetMetric, items);
}();
const _moduleResult = _module({}, require(dependencyMap[4]).COUNTER_METRIC_TYPE, tmp3);
const _moduleResult1 = _module(_module({}, require(dependencyMap[4]).COUNTER_METRIC_TYPE, tmp3), require(dependencyMap[4]).GAUGE_METRIC_TYPE, tmp4);

export const CounterMetric = tmp3;
export const DistributionMetric = tmp5;
export const GaugeMetric = tmp4;
export const METRIC_MAP = _module(_module(_module(_module({}, require(dependencyMap[4]).COUNTER_METRIC_TYPE, tmp3), require(dependencyMap[4]).GAUGE_METRIC_TYPE, tmp4), require(dependencyMap[4]).DISTRIBUTION_METRIC_TYPE, tmp5), require(dependencyMap[4]).SET_METRIC_TYPE, tmp6);
export const SetMetric = tmp6;

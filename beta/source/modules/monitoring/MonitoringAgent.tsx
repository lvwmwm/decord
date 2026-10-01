// Module ID: 5179
// Function ID: 5180
// Name: MonitoringAgent
// Dependencies: [1074, 1364, 5180, 5181, 17, 5182, 5183, 1271, 2]

// Module 5179 (MonitoringAgent)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import react_native from "react-native" /* 5182 */;
import MonitoringAgentUtils from "MonitoringAgentUtils" /* 5183 */;
import react_native2 from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let obj;

let MetricMonitor;
let NativeEventEmitter;
let NativeModules;
const Endpoints = Constants.Endpoints;
const set = new Set(["darwin", "linux", "win32", "ios", "android"]);
const MetricType = { COUNT: "count", DISTRIBUTION: "distribution" };
class MonitoringAgent {
  constructor() {
    let MetricMonitor;
    let NativeEventEmitter;
    let NativeModules;
    const obj2 = Object.create(new.target.prototype);
    obj2._metrics = [];
    obj2._intervalId = setInterval(() => {
      obj2._flush();
    }, 120000);
    ({ NativeModules, NativeEventEmitter } = react_native2);
    react_native2;
    obj = PlatformUtils;
    if (obj.isAndroid()) {
      MetricMonitor = react_native.default;
    } else {
      MetricMonitor = NativeModules.MetricMonitor;
    }
    const nativeEventEmitter = new NativeEventEmitter(MetricMonitor);
    nativeEventEmitter.addListener("logMetric", (arg0) => {
      obj2.increment(arg0, false);
    });
    return obj2;
  }
  _getMetricWithDefaults(name, COUNT) {
    let obj2;
    let tags = name.tags;
    obj = { name: name.name, type: COUNT, tags: obj2.getGlobalTagsArray() };
    obj2 = MonitoringAgentUtils;
    if (null != tags) {
      const item = tags.forEach((item) => {
        const tags = obj.tags;
        tags.push(item);
      });
    }
    let str = "web";
    const tmpResult = PlatformUtils;
    if (!tmpResult.isWeb()) {
      const tmpResult2 = PlatformUtils;
      const platformName = tmpResult2.getPlatformName();
      let tmp6 = null;
      if (set.has(platformName)) {
        tmp6 = platformName;
      }
      str = tmp6;
    }
    if (null != str) {
      const tags1 = obj.tags;
      const _HermesInternal = HermesInternal;
      tags1.push("platform:" + str);
    }
    const CurrentReleaseChannel = tmp(5180).CurrentReleaseChannel;
    let tmp9 = null;
    if (null != CurrentReleaseChannel) {
      const ALL = tmp(5181).ReleaseChannelsSets.ALL;
      tmp9 = null;
      if (ALL.has(CurrentReleaseChannel)) {
        tmp9 = CurrentReleaseChannel;
      }
    }
    if (null != tmp9) {
      const tags2 = obj.tags;
      const _HermesInternal2 = HermesInternal;
      tags2.push("release_channel:" + tmp9);
    }
    return obj;
  }
  increment(name) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const self = this;
    const _metrics = this._metrics;
    _metrics.push(this._getMetricWithDefaults(name, obj.COUNT));
    if (!flag) {
      flag = self._metrics.length >= 100;
    }
    if (flag) {
      self._flush();
    }
  }
  distribution(name, value) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const self = this;
    obj = { value };
    const merged = Object.assign(this._getMetricWithDefaults(name, obj.DISTRIBUTION));
    const _metrics = this._metrics;
    _metrics.push(obj);
    if (!flag) {
      flag = self._metrics.length >= 100;
    }
    if (flag) {
      self._flush();
    }
  }
  _flush() {
    let body;
    const self = this;
    if (this._metrics.length > 0) {
      let items = [];
      HermesBuiltin.arraySpread(items, self._metrics, 0);
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.METRICS_V2, body, retries: 1, rejectWithError: true };
      body = { metrics: items, client_info: { built_at: "1790835611750", build_number: "6550" } };
      const postResult = HTTP.post(request);
      postResult.catch(() => {
        if (self._metrics.length + items.length < 100) {
          items = [];
          HermesBuiltin.arraySpread(items, items, HermesBuiltin.arraySpread(items, self._metrics, 0));
          self._metrics = items;
        }
      });
    }
    self._metrics = [];
  }
}
const prototype = MonitoringAgent.prototype;
let obj2 = Object.create(MonitoringAgent.prototype);
obj2._metrics = [];
obj2._intervalId = setInterval(() => {
  obj2._flush();
}, 120000);
({ NativeModules, NativeEventEmitter } = react_native2);
if (PlatformUtils.isAndroid()) {
  MetricMonitor = react_native.default;
} else {
  MetricMonitor = NativeModules.MetricMonitor;
}
let nativeEventEmitter = new NativeEventEmitter(MetricMonitor);
nativeEventEmitter.addListener("logMetric", (arg0) => {
  obj2.increment(arg0, false);
});
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgent.tsx");

export default obj2;
export { MetricType };

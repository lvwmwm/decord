// Module ID: 6832
// Function ID: 53987
// Name: set
// Dependencies: []

// Module 6832 (set)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const set = new Set([false, false, false, false, false]);
const obj = { COUNT: "count", DISTRIBUTION: "distribution" };
let tmp3 = () => {
  class MonitoringAgent {
    constructor() {
      MonitoringAgent = this;
      tmp = closure_2(this, MonitoringAgent);
      this._metrics = [];
      this._intervalId = setInterval(() => {
        self._flush();
      }, 120000);
      tmp2 = MonitoringAgent(closure_1[6]);
      obj = MonitoringAgent(closure_1[3]);
      if (obj.isAndroid()) {
        tmp3 = MonitoringAgent;
        tmp4 = closure_1;
        num = 7;
        MetricMonitor = MonitoringAgent(closure_1[7]).default;
      } else {
        MetricMonitor = tmp2.NativeModules.MetricMonitor;
      }
      nativeEventEmitter = new tmp2.NativeEventEmitter(MetricMonitor);
      addListenerResult = nativeEventEmitter.addListener("logMetric", (arg0) => {
        self.increment(arg0, false);
      });
      return;
    }
  }
  const arg1 = MonitoringAgent;
  let obj = {
    key: "_getMetricWithDefaults",
    value(name, type) {
      const tags = name.tags;
      const obj = { name: name.name, type, tags: MonitoringAgent(closure_1[8]).getGlobalTagsArray() };
      const MonitoringAgent = obj;
      if (null != tags) {
        const item = tags.forEach((arg0) => {
          const tags = obj.tags;
          tags.push(arg0);
        });
      }
      const obj2 = MonitoringAgent(closure_1[8]);
      let str = "web";
      if (!obj3.isWeb()) {
        const platformName = MonitoringAgent(closure_1[3]).getPlatformName();
        let tmp6 = null;
        if (set.has(platformName)) {
          tmp6 = platformName;
        }
        str = tmp6;
        const obj4 = MonitoringAgent(closure_1[3]);
      }
      if (null != str) {
        const tags1 = obj.tags;
        const _HermesInternal = HermesInternal;
        tags1.push("platform:" + str);
      }
      const CurrentReleaseChannel = MonitoringAgent(closure_1[4]).CurrentReleaseChannel;
      let tmp9 = null;
      if (null != CurrentReleaseChannel) {
        const ALL = MonitoringAgent(closure_1[5]).ReleaseChannelsSets.ALL;
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
  };
  const items = [obj, , , ];
  obj = {
    key: "increment",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      const _metrics = self._metrics;
      _metrics.push(self._getMetricWithDefaults(arg0, constants.COUNT));
      if (!flag) {
        flag = self._metrics.length >= 100;
      }
      if (flag) {
        self._flush();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "distribution",
    value(arg0, arg1) {
      let flag = arg2;
      const self = this;
      if (arg2 === undefined) {
        flag = false;
      }
      const obj = {};
      const merged = Object.assign(self._getMetricWithDefaults(arg0, constants.DISTRIBUTION));
      obj["value"] = arg1;
      const _metrics = self._metrics;
      _metrics.push(obj);
      if (!flag) {
        flag = self._metrics.length >= 100;
      }
      if (flag) {
        self._flush();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_flush",
    value() {
      const self = this;
      const MonitoringAgent = this;
      if (this._metrics.length > 0) {
        const items = [];
        HermesBuiltin.arraySpread(self._metrics, 0);
        const HTTP = MonitoringAgent(items[9]).HTTP;
        let obj = { url: METRICS_V2.METRICS_V2 };
        obj = { metrics: items, client_info: {} };
        obj.body = obj;
        obj.retries = 1;
        obj.rejectWithError = true;
        HTTP.post(obj).catch(() => {
          if (self._metrics.length + items.length < 100) {
            const items = [];
            HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(self._metrics, 0));
            self._metrics = items;
          }
        });
        const postResult = HTTP.post(obj);
      }
      self._metrics = [];
    }
  };
  return callback(MonitoringAgent, items);
}();
tmp3 = new tmp3();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/monitoring/MonitoringAgent.tsx");

export default tmp3;
export const MetricType = obj;

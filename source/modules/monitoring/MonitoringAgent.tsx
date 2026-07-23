// Module ID: 6837
// Function ID: 54019
// Name: set
// Dependencies: [6, 7, 653, 477, 6838, 6839, 27, 6840, 6841, 507, 2]

// Module 6837 (set)
import getActivityIndicator from "get ActivityIndicator";
import enforcing from "enforcing";
import { Endpoints } from "ME";
import set from "ME";

const require = arg1;
let set = new Set(["darwin", "linux", "win32", "ios", "android"]);
let obj = { COUNT: "count", DISTRIBUTION: "distribution" };
let tmp3 = (() => {
  class MonitoringAgent {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this._metrics = [];
      this._intervalId = setInterval(() => {
        self._flush();
      }, 120000);
      tmp2 = MonitoringAgent(outer1_1[6]);
      obj = MonitoringAgent(outer1_1[3]);
      if (obj.isAndroid()) {
        tmp3 = MonitoringAgent;
        tmp4 = outer1_1;
        num = 7;
        MetricMonitor = MonitoringAgent(outer1_1[7]).default;
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
  let obj = {
    key: "_getMetricWithDefaults",
    value(name, type) {
      let tags = name.tags;
      const obj = { name: name.name, type, tags: MonitoringAgent(outer1_1[8]).getGlobalTagsArray() };
      if (null != tags) {
        const item = tags.forEach((arg0) => {
          const tags = obj.tags;
          tags.push(arg0);
        });
      }
      const obj2 = MonitoringAgent(outer1_1[8]);
      let str = "web";
      if (!obj3.isWeb()) {
        const platformName = MonitoringAgent(outer1_1[3]).getPlatformName();
        let tmp6 = null;
        if (outer1_5.has(platformName)) {
          tmp6 = platformName;
        }
        str = tmp6;
        const obj4 = MonitoringAgent(outer1_1[3]);
      }
      if (null != str) {
        const tags1 = obj.tags;
        const _HermesInternal = HermesInternal;
        tags1.push("platform:" + str);
      }
      const CurrentReleaseChannel = MonitoringAgent(outer1_1[4]).CurrentReleaseChannel;
      let tmp9 = null;
      if (null != CurrentReleaseChannel) {
        const ALL = MonitoringAgent(outer1_1[5]).ReleaseChannelsSets.ALL;
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
  let items = [obj, , , ];
  obj = {
    key: "increment",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      const _metrics = self._metrics;
      _metrics.push(self._getMetricWithDefaults(arg0, outer1_6.COUNT));
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
      const merged = Object.assign(self._getMetricWithDefaults(arg0, outer1_6.DISTRIBUTION));
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
      let self = this;
      self = this;
      if (this._metrics.length > 0) {
        let items = [];
        HermesBuiltin.arraySpread(self._metrics, 0);
        const HTTP = MonitoringAgent(outer1_1[9]).HTTP;
        let obj = { url: outer1_4.METRICS_V2 };
        obj = { metrics: items, client_info: { built_at: "1784784017804", build_number: "6057" } };
        obj.body = obj;
        obj.retries = 1;
        obj.rejectWithError = true;
        HTTP.post(obj).catch(() => {
          if (self._metrics.length + items.length < 100) {
            items = [];
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
})();
tmp3 = new tmp3();
const result = set.fileFinishedImporting("modules/monitoring/MonitoringAgent.tsx");

export default tmp3;
export const MetricType = obj;

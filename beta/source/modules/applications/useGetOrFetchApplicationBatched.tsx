// Module ID: 11058
// Function ID: 11059
// Name: useGetOrFetchApplicationBatched
// Dependencies: [19, 5063, 2040, 12, 6584, 504, 2]
// Exports: useGetOrFetchApplicationBatched, useRequestApplication

// Module 11058 (useGetOrFetchApplicationBatched)
import Timers from "Timers" /* 2040 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

class ApplicationFetchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._lastFetchedAttempted = new Map();
    new Map();
    obj._pending = new Set();
    new Set();
    const delayedCall = new Timers.DelayedCall(32, () => obj._flush());
    obj._flushHandler = delayedCall;
    return obj;
  }
  request(arg0) {
    const self = this;
    const _pending = this._pending;
    if (!_pending.has(arg0)) {
      const _lastFetchedAttempted = self._lastFetchedAttempted;
      const value = _lastFetchedAttempted.get(arg0);
      let tmp3 = null != value;
      if (tmp3) {
        const _Date = Date;
        tmp3 = Date.now() - value < 60000;
      }
      if (!tmp3) {
        const _pending2 = self._pending;
        _pending2.add(arg0);
        const _flushHandler = self._flushHandler;
        _flushHandler.delay(false);
      }
    }
  }
  _flush() {
    const self = this;
    const items = [];
    const _pending1 = this._pending;
    const item = _pending1.forEach((item) => {
      const _lastFetchedAttempted = self._lastFetchedAttempted;
      const result = _lastFetchedAttempted.set(item, Date.now());
      items.push(item);
    });
    const _pending = this._pending;
    _pending.clear();
    const items1 = [];
    const items2 = [];
    const item1 = items.forEach((item) => {
      if (ApplicationStore.didFetchingApplicationFail(item)) {
        items2.push(item);
      } else {
        items1.push(item);
      }
    });
    if (items1.length > 0) {
      obj = items(items1[3]);
      const chunkResult = obj.chunk(items1, 20);
      const item2 = chunkResult.forEach((item) => {
        obj = items(items1[4]);
        const applications = obj.fetchApplications(item, false);
      });
    }
    if (items2.length > 0) {
      const obj2 = items(items1[3]);
      const chunkResult1 = obj2.chunk(items2, 20);
      const item3 = chunkResult1.forEach((item) => {
        obj = items(items1[4]);
        const applications = obj.fetchApplications(item, true);
      });
    }
  }
}
const prototype = ApplicationFetchManager.prototype;
let obj = Object.create(ApplicationFetchManager.prototype);
const map = new Map();
obj._lastFetchedAttempted = map;
const set = new Set();
obj._pending = set;
let delayedCall = new Timers.DelayedCall(32, () => obj._flush());
obj._flushHandler = delayedCall;
let result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export const useRequestApplication = function useRequestApplication(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && "" !== tmp;
    if (tmp2) {
      obj.request(closure_0);
    }
  }, items);
};
export const useGetOrFetchApplicationBatched = function useGetOrFetchApplicationBatched(applicationId) {
  _require = applicationId;
  const items = [applicationId];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && "" !== tmp;
    if (tmp2) {
      obj.request(closure_0);
    }
  }, items);
  obj = require("get initialized");
  const items1 = [ApplicationStore];
  const items2 = [applicationId];
  return obj.useStateFromStores(items1, () => {
    let application = null;
    if (null != applicationId) {
      application = null;
      if ("" !== applicationId) {
        application = ApplicationStore.getApplication(tmp);
      }
    }
    return application;
  }, items2);
};

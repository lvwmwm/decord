// Module ID: 9984
// Function ID: 77217
// Name: useRequestApplication
// Dependencies: [6, 7, 31, 4167, 4015, 22, 5465, 566, 2]
// Exports: useGetOrFetchApplicationBatched

// Module 9984 (useRequestApplication)
import fetchApplication from "fetchApplication";
import initialize from "initialize";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function useRequestApplication(applicationId) {
  let closure_0 = applicationId;
  const items = [applicationId];
  const effect = React.useEffect(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = "" !== closure_0;
    }
    if (tmp) {
      outer1_7.request(closure_0);
    }
  }, items);
}
let tmp2 = (() => {
  class ApplicationFetchManager {
    constructor() {
      self = this;
      tmp = outer1_3(this, self);
      map = new Map();
      this._lastFetchedAttempted = map;
      set = new Set();
      this._pending = set;
      delayedCall = new ApplicationFetchManager(outer1_2[4]).DelayedCall(32, () => self._flush());
      this._flushHandler = delayedCall;
      return;
    }
  }
  let obj = {
    key: "request",
    value(arg0) {
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
          self._flushHandler.delay(false);
          const _flushHandler = self._flushHandler;
        }
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "_flush",
    value() {
      const self = this;
      const items = [];
      let _pending = this._pending;
      const item = _pending.forEach((arg0) => {
        const _lastFetchedAttempted = self._lastFetchedAttempted;
        const result = _lastFetchedAttempted.set(arg0, Date.now());
        items.push(arg0);
      });
      _pending = this._pending;
      _pending.clear();
      const items1 = [];
      const items2 = [];
      const item1 = items.forEach((arg0) => {
        if (outer2_6.didFetchingApplicationFail(arg0)) {
          items2.push(arg0);
        } else {
          items1.push(arg0);
        }
      });
      if (items1.length > 0) {
        const obj = outer1_1(outer1_2[5]);
        const item2 = outer1_1(outer1_2[5]).chunk(items1, 20).forEach((arg0) => {
          const applications = outer2_1(outer2_2[6]).fetchApplications(arg0, false);
        });
        const chunkResult = outer1_1(outer1_2[5]).chunk(items1, 20);
      }
      if (items2.length > 0) {
        const obj2 = outer1_1(outer1_2[5]);
        const item3 = outer1_1(outer1_2[5]).chunk(items2, 20).forEach((arg0) => {
          const applications = outer2_1(outer2_2[6]).fetchApplications(arg0, true);
        });
        const chunkResult1 = outer1_1(outer1_2[5]).chunk(items2, 20);
      }
    }
  };
  items[1] = obj;
  return callback(ApplicationFetchManager, items);
})();
tmp2 = new tmp2();
let closure_7 = tmp2;
let result = require("result").fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export { useRequestApplication };
export const useGetOrFetchApplicationBatched = function useGetOrFetchApplicationBatched(applicationId) {
  const _require = applicationId;
  useRequestApplication(applicationId);
  const items = [_isNativeReflectConstruct];
  const items1 = [applicationId];
  return _require(566).useStateFromStores(items, () => {
    let application = null;
    if (null != closure_0) {
      application = null;
      if ("" !== closure_0) {
        application = outer1_6.getApplication(closure_0);
      }
    }
    return application;
  }, items1);
};

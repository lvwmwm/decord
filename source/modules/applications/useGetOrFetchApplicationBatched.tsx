// Module ID: 9975
// Function ID: 77153
// Name: useRequestApplication
// Dependencies: []
// Exports: useGetOrFetchApplicationBatched

// Module 9975 (useRequestApplication)
function useRequestApplication(applicationId) {
  const arg1 = applicationId;
  const items = [applicationId];
  const effect = React.useEffect(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = "" !== arg0;
    }
    if (tmp) {
      closure_7.request(arg0);
    }
  }, items);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let tmp2 = () => {
  class ApplicationFetchManager {
    constructor() {
      ApplicationFetchManager = this;
      tmp = closure_3(this, ApplicationFetchManager);
      map = new Map();
      this._lastFetchedAttempted = map;
      set = new Set();
      this._pending = set;
      delayedCall = new ApplicationFetchManager(closure_2[4]).DelayedCall(32, () => self._flush());
      this._flushHandler = delayedCall;
      return;
    }
  }
  const arg1 = ApplicationFetchManager;
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
  const items = [obj, ];
  obj = {
    key: "_flush",
    value() {
      const ApplicationFetchManager = this;
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
        if (closure_6.didFetchingApplicationFail(arg0)) {
          items2.push(arg0);
        } else {
          items1.push(arg0);
        }
      });
      if (items1.length > 0) {
        const obj = items(items1[5]);
        const item2 = items(items1[5]).chunk(items1, 20).forEach((arg0) => {
          const applications = items(items1[6]).fetchApplications(arg0, false);
        });
        const chunkResult = items(items1[5]).chunk(items1, 20);
      }
      if (items2.length > 0) {
        const obj2 = items(items1[5]);
        const item3 = items(items1[5]).chunk(items2, 20).forEach((arg0) => {
          const applications = items(items1[6]).fetchApplications(arg0, true);
        });
        const chunkResult1 = items(items1[5]).chunk(items2, 20);
      }
    }
  };
  items[1] = obj;
  return callback(ApplicationFetchManager, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/applications/useGetOrFetchApplicationBatched.tsx");

export { useRequestApplication };
export const useGetOrFetchApplicationBatched = function useGetOrFetchApplicationBatched(applicationId) {
  const arg1 = applicationId;
  useRequestApplication(applicationId);
  const items = [closure_6];
  const items1 = [applicationId];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => {
    let application = null;
    if (null != arg0) {
      application = null;
      if ("" !== arg0) {
        application = application.getApplication(arg0);
      }
    }
    return application;
  }, items1);
};

// Module ID: 1434
// Function ID: 16743
// Name: State
// Dependencies: []

// Module 1434 (State)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[2]);
class State {
  constructor(arg0) {
    importDefault = this;
    tmp = closure_4(this, State);
    this._nativeEventSubscription = null;
    set = new Set();
    this._subscriptions = set;
    this._latestState = null;
    this._handleNativeStateUpdate = (arg0) => {
      const _internetReachability = self._internetReachability;
      _internetReachability.update(arg0);
      const _convertStateResult = self._convertState(arg0);
      const self = _convertStateResult;
      self._latestState = _convertStateResult;
      const _subscriptions = self._subscriptions;
      const item = _subscriptions.forEach((arg0) => arg0(_convertStateResult));
    };
    this._handleInternetReachabilityUpdate = (isInternetReachable) => {
      if (self._latestState) {
        const _Object = Object;
        const obj = { isInternetReachable };
        const merged = Object.assign({}, self._latestState, obj);
        const self = merged;
        self._latestState = merged;
        const _subscriptions = self._subscriptions;
        const item = _subscriptions.forEach((arg0) => arg0(merged));
      }
    };
    this._fetchCurrentState = () => {
      let closure_0 = callback(async (arg0) => {
        let _convertStateResult;
        const tmp = yield _convertStateResult(closure_2[3]).getCurrentState(arg0);
        const _internetReachability = _convertStateResult._internetReachability;
        _internetReachability.update(tmp);
        _convertStateResult = _convertStateResult._convertState(tmp);
        if (!arg0) {
          _convertStateResult._latestState = _convertStateResult;
          const _subscriptions = _convertStateResult._subscriptions;
          const item = _subscriptions.forEach((arg0) => arg0(_convertStateResult));
        }
        return _convertStateResult;
      });
      return function(arg0) {
        return callback(...arguments);
      };
    }();
    this._convertState = (isInternetReachable) => {
      let merged = isInternetReachable;
      if ("boolean" !== typeof isInternetReachable.isInternetReachable) {
        const _Object = Object;
        const obj = {};
        const _internetReachability = self._internetReachability;
        obj.isInternetReachable = _internetReachability.currentState();
        merged = Object.assign({}, isInternetReachable, obj);
      }
      return merged;
    };
    this.latest = (arg0) => {
      if (arg0) {
        let _fetchCurrentStateResult = obj._fetchCurrentState(arg0);
      } else if (obj._latestState) {
        _fetchCurrentStateResult = Promise.resolve(self._latestState);
      } else {
        _fetchCurrentStateResult = self._fetchCurrentState();
      }
      return _fetchCurrentStateResult;
    };
    this.add = (arg0) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.add(arg0);
      if (self._latestState) {
        arg0(obj._latestState);
      } else {
        obj.latest().then(arg0);
        const latestResult = obj.latest();
      }
    };
    this.remove = (arg0) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.delete(arg0);
    };
    this.tearDown = () => {
      if (self._internetReachability) {
        const _internetReachability = self._internetReachability;
        _internetReachability.tearDown();
      }
      if (self._nativeEventSubscription) {
        const _nativeEventSubscription = self._nativeEventSubscription;
        _nativeEventSubscription.remove();
      }
      const _subscriptions = self._subscriptions;
      _subscriptions.clear();
    };
    tmp3 = importDefault(dependencyMap[4]);
    tmp3 = new tmp3(global, this._handleInternetReachabilityUpdate);
    this._internetReachability = tmp3;
    eventEmitter = importDefault(dependencyMap[3]).eventEmitter;
    this._nativeEventSubscription = eventEmitter.addListener(importAll(dependencyMap[5]).DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);
    _fetchCurrentStateResult = this._fetchCurrentState();
    return;
  }
}

export default importDefault(dependencyMap[1])(State);

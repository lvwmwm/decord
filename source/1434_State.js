// Module ID: 1434
// Function ID: 16749
// Name: State
// Dependencies: [5, 7, 6, 1435, 1437, 1438]

// Module 1434 (State)
import module_1438 from "module_1438";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

class State {
  constructor(arg0) {
    self = this;
    tmp = c4(this, State);
    this._nativeEventSubscription = null;
    set = new Set();
    this._subscriptions = set;
    this._latestState = null;
    this._handleNativeStateUpdate = (arg0) => {
      const _internetReachability = self._internetReachability;
      _internetReachability.update(arg0);
      const _convertStateResult = self._convertState(arg0);
      self = _convertStateResult;
      self._latestState = _convertStateResult;
      const _subscriptions = self._subscriptions;
      const item = _subscriptions.forEach((arg0) => arg0(closure_0));
    };
    this._handleInternetReachabilityUpdate = (isInternetReachable) => {
      if (merged._latestState) {
        const _Object = Object;
        const obj = { isInternetReachable };
        merged = Object.assign({}, merged._latestState, obj);
        merged._latestState = merged;
        const _subscriptions = merged._subscriptions;
        const item = _subscriptions.forEach((arg0) => arg0(merged));
      }
    };
    this._fetchCurrentState = (() => {
      let closure_0 = outer1_3(async (arg0) => {
        let c0;
        const tmp = yield self(outer3_2[3]).getCurrentState(arg0);
        const _internetReachability = closure_0._internetReachability;
        _internetReachability.update(tmp);
        const _convertStateResult = closure_0._convertState(tmp);
        c0 = _convertStateResult;
        if (!arg0) {
          closure_0._latestState = _convertStateResult;
          const _subscriptions = closure_0._subscriptions;
          const item = _subscriptions.forEach((arg0) => arg0(c0));
        }
        return _convertStateResult;
      });
      return function(arg0) {
        return callback(...arguments);
      };
    })();
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
    tmp3 = require("InternetReachability");
    tmp3 = new tmp3(global, this._handleInternetReachabilityUpdate);
    this._internetReachability = tmp3;
    eventEmitter = require("get ActivityIndicator").eventEmitter;
    this._nativeEventSubscription = eventEmitter.addListener(require("module_1438").DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);
    _fetchCurrentStateResult = this._fetchCurrentState();
    return;
  }
}

export default _defineProperties(State);

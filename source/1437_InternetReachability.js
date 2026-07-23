// Module ID: 1437
// Function ID: 16768
// Name: InternetReachability
// Dependencies: [7, 6]

// Module 1437 (InternetReachability)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

class InternetReachability {
  constructor(arg0, arg1) {
    self = this;
    tmp = self(this, InternetReachability);
    this._isInternetReachable = undefined;
    this._currentInternetReachabilityCheckHandler = null;
    this._currentTimeoutHandle = null;
    this._setIsInternetReachable = (_isInternetReachable) => {
      if (self._isInternetReachable !== _isInternetReachable) {
        self._isInternetReachable = _isInternetReachable;
        self._listener(self._isInternetReachable);
      }
    };
    this._setExpectsConnection = (arg0) => {
      if (null !== self._currentInternetReachabilityCheckHandler) {
        self._currentInternetReachabilityCheckHandler.cancel();
        self._currentInternetReachabilityCheckHandler = null;
        const _currentInternetReachabilityCheckHandler = self._currentInternetReachabilityCheckHandler;
      }
      if (null !== self._currentTimeoutHandle) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._currentTimeoutHandle);
        self._currentTimeoutHandle = null;
      }
      if (arg0) {
        const _configuration = self._configuration;
        if (_configuration.reachabilityShouldRun()) {
          if (!self._isInternetReachable) {
            const result = self._setIsInternetReachable(null);
          }
          self._currentInternetReachabilityCheckHandler = self._checkInternetReachability();
        }
      }
      const result1 = self._setIsInternetReachable(false);
    };
    this._checkInternetReachability = () => {
      const abortController = new AbortController();
      let obj = { headers: self._configuration.reachabilityHeaders, method: self._configuration.reachabilityMethod, cache: "no-cache", signal: abortController.signal };
      const response = fetch(self._configuration.reachabilityUrl, obj);
      let promise = new Promise((arg0, arg1) => {
        let timeout = arg1;
        timeout = setTimeout(() => callback("timedout"), outer1_0._configuration.reachabilityRequestTimeout);
      });
      function cancel() {

      }
      promise = new Promise((arg0, arg1) => {
        let _classCallCheck = arg1;
        function cancel() {
          return callback("canceled");
        }
      });
      obj = {};
      const items = [response, promise, promise];
      const racePromise = Promise.race(items);
      const nextPromise = Promise.race(items).then((status) => {
        const _configuration = outer1_0._configuration;
        return _configuration.reachabilityTest(status);
      });
      const nextPromise1 = Promise.race(items).then((status) => {
        const _configuration = outer1_0._configuration;
        return _configuration.reachabilityTest(status);
      }).then((arg0) => {
        const result = outer1_0._setIsInternetReachable(arg0);
        const _configuration = outer1_0._configuration;
        outer1_0._currentTimeoutHandle = setTimeout(outer1_0._checkInternetReachability, outer1_0._isInternetReachable ? _configuration.reachabilityLongTimeout : _configuration.reachabilityShortTimeout);
      });
      obj.promise = Promise.race(items).then((status) => {
        const _configuration = outer1_0._configuration;
        return _configuration.reachabilityTest(status);
      }).then((arg0) => {
        const result = outer1_0._setIsInternetReachable(arg0);
        const _configuration = outer1_0._configuration;
        outer1_0._currentTimeoutHandle = setTimeout(outer1_0._checkInternetReachability, outer1_0._isInternetReachable ? _configuration.reachabilityLongTimeout : _configuration.reachabilityShortTimeout);
      }).catch((arg0) => {
        if ("canceled" === arg0) {
          abortController.abort();
        } else {
          if ("timedout" === arg0) {
            abortController.abort();
          }
          const result = outer1_0._setIsInternetReachable(false);
          const _setTimeout = setTimeout;
          outer1_0._currentTimeoutHandle = setTimeout(outer1_0._checkInternetReachability, outer1_0._configuration.reachabilityShortTimeout);
        }
      }).then(() => {
        clearTimeout(_classCallCheck);
      }, (arg0) => {
        clearTimeout(_classCallCheck);
        throw arg0;
      });
      obj.cancel = cancel;
      return obj;
    };
    this.update = (isInternetReachable) => {
      if ("boolean" === typeof isInternetReachable.isInternetReachable) {
        if (self._configuration.useNativeReachability) {
          const result = self._setIsInternetReachable(isInternetReachable.isInternetReachable);
        }
      }
      const result1 = self._setExpectsConnection(isInternetReachable.isConnected);
    };
    this.currentState = () => self._isInternetReachable;
    this.tearDown = () => {
      if (null !== self._currentInternetReachabilityCheckHandler) {
        self._currentInternetReachabilityCheckHandler.cancel();
        self._currentInternetReachabilityCheckHandler = null;
        const _currentInternetReachabilityCheckHandler = self._currentInternetReachabilityCheckHandler;
      }
      if (null !== self._currentTimeoutHandle) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._currentTimeoutHandle);
        self._currentTimeoutHandle = null;
      }
    };
    this._configuration = global;
    this._listener = arg1;
    return;
  }
}

export default _defineProperties(InternetReachability);

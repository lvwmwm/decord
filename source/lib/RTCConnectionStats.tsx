// Module ID: 12611
// Function ID: 96896
// Name: StateHistory
// Dependencies: []

// Module 12611 (StateHistory)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const RTCConnectionStates = arg1(dependencyMap[2]).RTCConnectionStates;
const tmp2 = () => {
  class StateHistory {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, StateHistory);
      this.current = null;
      this.history = [];
      if (null != arg0) {
        updateResult = self.update(arg0);
      }
      return;
    }
  }
  const arg1 = StateHistory;
  let obj = {
    key: "reset",
    value(arg0) {
      const self = this;
      this.current = null;
      this.history = [];
      if (null != arg0) {
        self.update(arg0);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "update",
    value(current) {
      const self = this;
      if (this.current !== current) {
        self.current = current;
        const history = self.history;
        const obj = { state: current, startTime: StateHistory(closure_2[3]).now() };
        history.push(obj);
        const obj2 = StateHistory(closure_2[3]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceConnectionSuccessStats",
    value() {
      let nowResult = arg0;
      const self = this;
      if (arg0 === undefined) {
        let obj = StateHistory(closure_2[3]);
        nowResult = obj.now();
      }
      let StateHistory;
      function totalDuration(AUTHENTICATING) {
        let closure_0 = AUTHENTICATING;
        return callback(closure_2[4]).sumBy(closure_0, (state) => {
          let num = 0;
          if (state.state === state) {
            num = state.durationMs;
          }
          return num;
        });
      }
      StateHistory = self.getStateDurations(nowResult);
      obj = { state_awaiting_endpoint_ms: totalDuration(constants.AWAITING_ENDPOINT), state_authenticating_ms: totalDuration(constants.AUTHENTICATING), state_connecting_ms: totalDuration(constants.CONNECTING), state_disconnected_ms: totalDuration(constants.DISCONNECTED), state_ice_checking_ms: totalDuration(constants.ICE_CHECKING), state_no_route_ms: totalDuration(constants.NO_ROUTE), state_rtc_connecting_ms: totalDuration(constants.RTC_CONNECTING), state_rtc_disconnected_ms: totalDuration(constants.RTC_DISCONNECTED) };
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStateDurations",
    value(arg0) {
      const self = this;
      if (0 === this.history.length) {
        return [];
      } else {
        let arr = callback(closure_2[5])(self.history, (state, startTime) => ({ state: state.state, durationMs: startTime.startTime - state.startTime }));
        let obj = callback(closure_2[4]);
        const lastResult = obj.last(self.history);
        obj = { state: lastResult.state, durationMs: arg0 - lastResult.startTime };
        arr = arr.push(obj);
        return arr;
      }
    }
  };
  return callback(StateHistory, items);
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("lib/RTCConnectionStats.tsx");

export const StateHistory = tmp2;

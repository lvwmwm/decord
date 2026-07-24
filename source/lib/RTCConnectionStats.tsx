// Module ID: 12783
// Function ID: 99423
// Name: StateHistory
// Dependencies: [6, 7, 653, 4206, 22, 12784, 2]

// Module 12783 (StateHistory)
import set from "set";
import _defineProperties from "_defineProperties";
import { RTCConnectionStates } from "ME";

const require = arg1;
const tmp2 = (() => {
  class StateHistory {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, StateHistory);
      this.current = null;
      this.history = [];
      if (null != arg0) {
        updateResult = self.update(arg0);
      }
      return;
    }
  }
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
        const obj = { state: current, startTime: StateHistory(outer1_2[3]).now() };
        history.push(obj);
        const obj2 = StateHistory(outer1_2[3]);
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
        let obj = StateHistory(outer1_2[3]);
        nowResult = obj.now();
      }
      let stateDurations;
      function totalDuration(AUTHENTICATING) {
        let closure_0 = AUTHENTICATING;
        return outer2_1(outer2_2[4]).sumBy(closure_0, (state) => {
          let num = 0;
          if (state.state === closure_0) {
            num = state.durationMs;
          }
          return num;
        });
      }
      stateDurations = self.getStateDurations(nowResult);
      obj = { state_awaiting_endpoint_ms: totalDuration(outer1_5.AWAITING_ENDPOINT), state_authenticating_ms: totalDuration(outer1_5.AUTHENTICATING), state_connecting_ms: totalDuration(outer1_5.CONNECTING), state_disconnected_ms: totalDuration(outer1_5.DISCONNECTED), state_ice_checking_ms: totalDuration(outer1_5.ICE_CHECKING), state_no_route_ms: totalDuration(outer1_5.NO_ROUTE), state_rtc_connecting_ms: totalDuration(outer1_5.RTC_CONNECTING), state_rtc_disconnected_ms: totalDuration(outer1_5.RTC_DISCONNECTED) };
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
        let arr = outer1_1(outer1_2[5])(self.history, (state, startTime) => ({ state: state.state, durationMs: startTime.startTime - state.startTime }));
        let obj = outer1_1(outer1_2[4]);
        const lastResult = obj.last(self.history);
        obj = { state: lastResult.state, durationMs: arg0 - lastResult.startTime };
        arr = arr.push(obj);
        return arr;
      }
    }
  };
  return callback(StateHistory, items);
})();
const result = require("ME").fileFinishedImporting("lib/RTCConnectionStats.tsx");

export const StateHistory = tmp2;

// Module ID: 12727
// Function ID: 99085
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 22, 1273, 2]

// Module 12727 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import apply from "apply";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsxs } from "jsxProd";
import importAllResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp3 = ((PureComponent) => {
  class Timer {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, apply);
      items = [];
      items[0] = PureComponent;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result._incrementSecond = () => {
        let hours;
        let minutes;
        const state = tmp2Result.state;
        ({ minutes, hours } = state);
        let num = state.seconds + 1;
        let tmp = minutes;
        let tmp2 = hours;
        if (num >= 60) {
          let num2 = minutes + 1;
          let sum = hours;
          if (num2 >= 60) {
            sum = hours + 1;
            num2 = 0;
          }
          num = 0;
          tmp = num2;
          tmp2 = sum;
        }
        const obj = { seconds: num, minutes: tmp, hours: tmp2 };
        tmp2Result.setState(obj);
      };
      tmp2Result._decrementSecond = () => {
        let hours;
        let minutes;
        const state = tmp2Result.state;
        ({ minutes, hours } = state);
        let num = state.seconds - 1;
        if (num >= 1) {
          if (num <= 0) {
            const _clearInterval = clearInterval;
            clearInterval(tmp2Result._timerId);
            tmp2Result._timerId = null;
            const onComplete = tmp2Result.props.onComplete;
            if (null != onComplete) {
              onComplete();
            }
          } else {
            const obj = { seconds: num, minutes, hours };
            tmp2Result.setState(obj);
          }
        } else if (minutes >= 1) {
          let num2 = minutes - 1;
          num = 59;
          let diff = hours;
        } else {
          num2 = minutes;
          diff = hours;
          if (tmp) {
            diff = hours - 1;
            num = 59;
            num2 = 59;
          }
          tmp = minutes < 1 && hours >= 1;
        }
      };
      ({ seconds, minutes, hours, timestamp } = PureComponent);
      rounded2 = seconds;
      rounded1 = minutes;
      rounded = hours;
      if (null != timestamp) {
        num4 = 0;
        rounded2 = seconds;
        rounded1 = minutes;
        rounded = hours;
        if (timestamp > 0) {
          tmp10 = globalThis;
          _Math = Math;
          _Date = Date;
          num5 = 1000;
          _Math2 = Math;
          num6 = 86400;
          result = Math.max(0, Date.now() - timestamp) / 1000 % 86400;
          num7 = 3600;
          rounded = Math.floor(result / 3600);
          _Math3 = Math;
          result1 = result % 3600;
          num8 = 60;
          rounded1 = Math.floor(result1 / 60);
          _Math4 = Math;
          rounded2 = Math.floor(result1 % 60);
        }
      }
      obj = {};
      num = 0;
      if (null != rounded2) {
        num = rounded2;
      }
      obj.seconds = num;
      num2 = 0;
      if (null != rounded1) {
        num2 = rounded1;
      }
      obj.minutes = num2;
      num3 = 0;
      if (null != rounded) {
        num3 = rounded;
      }
      obj.hours = num3;
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
  callback2(Timer, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      const _setInterval = setInterval;
      if (this.props.countdown) {
        self._timerId = _setInterval(self._decrementSecond, 1000);
      } else {
        self._timerId = _setInterval(self._incrementSecond, 1000);
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      clearInterval(this._timerId);
      this._timerId = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      let hideMinutes;
      let hours;
      let minutes;
      let props;
      let seconds;
      let state;
      let style;
      ({ props, state } = this);
      ({ seconds, minutes, hours } = state);
      ({ style, hideMinutes } = props);
      if (!props.hideHours) {
        const _String = String;
        const _HermesInternal = HermesInternal;
        let str = "" + outer1_1(outer1_2[7]).padStart(String(hours), 2, "0") + ":";
        const obj = outer1_1(outer1_2[7]);
      } else {
        str = "";
      }
      if (!hideMinutes) {
        const _String2 = String;
        const _HermesInternal2 = HermesInternal;
        let str5 = "" + outer1_1(outer1_2[7]).padStart(String(minutes), 2, "0") + ":";
        const obj2 = outer1_1(outer1_2[7]);
      } else {
        str5 = "";
      }
      if (str.length > 0) {
        const _String3 = String;
        let padStartResult = outer1_1(outer1_2[7]).padStart(String(seconds), 2, "0");
        const obj3 = outer1_1(outer1_2[7]);
      } else {
        padStartResult = seconds;
      }
      const children = [str, str5, padStartResult];
      return outer1_8(Timer(outer1_2[8]).LegacyText, { style, accessibilityRole: "timer", children });
    }
  };
  items[2] = obj;
  return callback(Timer, items);
})(require("result").PureComponent);
tmp3.defaultProps = { hideMinutes: false, hideHours: false };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_calls/native/components/Timer.tsx");

export default tmp3;

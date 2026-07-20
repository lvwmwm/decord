// Module ID: 12599
// Function ID: 96856
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12599 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const jsxs = arg1(dependencyMap[6]).jsxs;
const tmp3 = (PureComponent) => {
  class Timer {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, Timer);
      items = [];
      items[0] = PureComponent;
      obj = closure_6(Timer);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      Timer = tmp2Result;
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
          const tmp = minutes < 1 && hours >= 1;
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
  const arg1 = Timer;
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
  const items = [obj, , ];
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
        let str = "" + callback(closure_2[7]).padStart(String(hours), 2, "0") + ":";
        const obj = callback(closure_2[7]);
      } else {
        str = "";
      }
      if (!hideMinutes) {
        const _String2 = String;
        const _HermesInternal2 = HermesInternal;
        let str5 = "" + callback(closure_2[7]).padStart(String(minutes), 2, "0") + ":";
        const obj2 = callback(closure_2[7]);
      } else {
        str5 = "";
      }
      if (str.length > 0) {
        const _String3 = String;
        let padStartResult = callback(closure_2[7]).padStart(String(seconds), 2, "0");
        const obj3 = callback(closure_2[7]);
      } else {
        padStartResult = seconds;
      }
      const children = [str, str5, padStartResult];
      return callback4(Timer(closure_2[8]).LegacyText, { style, accessibilityRole: "timer", children });
    }
  };
  items[2] = obj;
  return callback(Timer, items);
}(importAll(dependencyMap[5]).PureComponent);
tmp3.defaultProps = {};
const importAllResult = importAll(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/voice_calls/native/components/Timer.tsx");

export default tmp3;

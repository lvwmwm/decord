// Module ID: 10157
// Function ID: 78523
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10157 (_isNativeReflectConstruct)
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
const jsx = arg1(dependencyMap[6]).jsx;
const importAllResult = importAll(dependencyMap[5]);
const tmp3 = (Component) => {
  class CountDown {
    constructor() {
      self = this;
      tmp = closure_3(this, CountDown);
      obj = closure_6(CountDown);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = CountDown;
  callback2(CountDown, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      const CountDown = this;
      this._interval = setInterval(() => self.forceUpdate(), 1000);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      this.clearRefreshInterval();
    }
  };
  items[1] = obj;
  obj = {
    key: "clearRefreshInterval",
    value() {
      if (null != this._interval) {
        const _clearInterval = clearInterval;
        clearInterval(tmp._interval);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let deadline;
      let freezeAtRemainingSeconds;
      let postDeadlineText;
      let withUnits;
      const self = this;
      const props = this.props;
      ({ postDeadlineText, deadline, withUnits, freezeAtRemainingSeconds } = props);
      let tmp = null != withUnits;
      if (tmp) {
        tmp = withUnits;
      }
      if (deadline === Infinity) {
        const intl5 = CountDown(closure_2[7]).intl;
        postDeadlineText = intl5.string(CountDown(closure_2[7]).t.PqEzn8);
      } else {
        const _Math5 = Math;
        const _Number = Number;
        const _Date = Date;
        let result = Math.max(0, Number(deadline) - Date.now()) / 1000;
        if (tmp2) {
          self.clearRefreshInterval();
          result = freezeAtRemainingSeconds;
        }
        if (result < 0) {
          const _Math = Math;
          const items = [Math.floor(result / callback(closure_2[8]).Seconds.DAY), , , ];
          const _Math2 = Math;
          const result1 = result % callback(closure_2[8]).Seconds.DAY;
          items[1] = Math.floor(result1 / callback(closure_2[8]).Seconds.HOUR);
          const _Math3 = Math;
          const result2 = result1 % callback(closure_2[8]).Seconds.HOUR;
          items[2] = Math.floor(result2 / callback(closure_2[8]).Seconds.MINUTE);
          const _Math4 = Math;
          items[3] = Math.floor(result2 % callback(closure_2[8]).Seconds.MINUTE);
          let num2 = 0;
          if (0 === items[0]) {
            items.shift();
            num2 = 1;
          }
          const mapped = items.map((arg0) => {
            let combined = arg0;
            if (arg0 < 10) {
              const _HermesInternal = HermesInternal;
              combined = "0" + arg0;
            }
            return combined;
          });
          const joined = mapped.join(":");
          postDeadlineText = joined;
          if (tmp) {
            const intl = CountDown(closure_2[7]).intl;
            const items1 = [intl.string(CountDown(closure_2[7]).t.QJyuxY), , , ];
            const intl2 = CountDown(closure_2[7]).intl;
            items1[1] = intl2.string(CountDown(closure_2[7]).t.1LyF1h);
            const intl3 = CountDown(closure_2[7]).intl;
            items1[2] = intl3.string(CountDown(closure_2[7]).t.n7dksO);
            const intl4 = CountDown(closure_2[7]).intl;
            items1[3] = intl4.string(CountDown(closure_2[7]).t.6m/6nM);
            let tmp12 = joined;
            let tmp13 = num2;
            if (-1 !== joined.indexOf(":")) {
              let str4 = joined;
              let tmp14 = num2;
              tmp12 = joined;
              tmp13 = num2;
              if (num2 < items1.length) {
                const _HermesInternal = HermesInternal;
                const replaced = str4.replace(":", "" + items1[tmp14] + " ");
                const sum = tmp14 + 1;
                tmp12 = replaced;
                tmp13 = sum;
                while (-1 !== replaced.indexOf(":")) {
                  str4 = replaced;
                  tmp14 = sum;
                  tmp12 = replaced;
                  tmp13 = sum;
                  if (sum >= items1.length) {
                    break;
                  }
                }
              }
            }
            const _HermesInternal2 = HermesInternal;
            postDeadlineText = "" + tmp12 + items1[tmp13];
          }
        }
        const NumberResult = Number(deadline);
        const tmp2 = null != freezeAtRemainingSeconds && result <= freezeAtRemainingSeconds;
      }
      const obj = { style: props.style, children: postDeadlineText };
      return callback4(CountDown(closure_2[9]).Text, obj);
    }
  };
  return callback(CountDown, items);
}(importAll(dependencyMap[5]).Component);
const result = arg1(dependencyMap[10]).fileFinishedImporting("components_native/common/CountDown.tsx");

export default tmp3;

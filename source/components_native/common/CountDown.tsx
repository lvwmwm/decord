// Module ID: 10166
// Function ID: 78576
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 1212, 664, 4126, 2]

// Module 10166 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import getSystemLocale from "getSystemLocale";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsx } from "jsxProd";
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
const tmp3 = ((Component) => {
  class CountDown {
    constructor() {
      self = this;
      tmp = outer1_3(this, CountDown);
      obj = outer1_6(CountDown);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CountDown, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      this._interval = setInterval(() => self.forceUpdate(), 1000);
    }
  };
  let items = [obj, , , ];
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
        const intl5 = CountDown(outer1_2[7]).intl;
        postDeadlineText = intl5.string(CountDown(outer1_2[7]).t.PqEzn8);
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
          const items = [Math.floor(result / outer1_1(outer1_2[8]).Seconds.DAY), , , ];
          const _Math2 = Math;
          const result1 = result % outer1_1(outer1_2[8]).Seconds.DAY;
          items[1] = Math.floor(result1 / outer1_1(outer1_2[8]).Seconds.HOUR);
          const _Math3 = Math;
          const result2 = result1 % outer1_1(outer1_2[8]).Seconds.HOUR;
          items[2] = Math.floor(result2 / outer1_1(outer1_2[8]).Seconds.MINUTE);
          const _Math4 = Math;
          items[3] = Math.floor(result2 % outer1_1(outer1_2[8]).Seconds.MINUTE);
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
            const intl = CountDown(outer1_2[7]).intl;
            const items1 = [intl.string(CountDown(outer1_2[7]).t.QJyuxY), , , ];
            const intl2 = CountDown(outer1_2[7]).intl;
            items1[1] = intl2.string(CountDown(outer1_2[7]).t["1LyF1h"]);
            const intl3 = CountDown(outer1_2[7]).intl;
            items1[2] = intl3.string(CountDown(outer1_2[7]).t.n7dksO);
            const intl4 = CountDown(outer1_2[7]).intl;
            items1[3] = intl4.string(CountDown(outer1_2[7]).t["6m/6nM"]);
            let tmp12 = joined;
            let tmp13 = num2;
            if (-1 !== joined.indexOf(":")) {
              let str4 = joined;
              let tmp14 = num2;
              tmp12 = joined;
              tmp13 = num2;
              if (num2 < items1.length) {
                let _HermesInternal = HermesInternal;
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
        tmp2 = null != freezeAtRemainingSeconds && result <= freezeAtRemainingSeconds;
      }
      const obj = { tabularNumbers: true, variant: "text-md/semibold", style: props.style, children: postDeadlineText };
      return outer1_8(CountDown(outer1_2[9]).Text, obj);
    }
  };
  return callback(CountDown, items);
})(require("result").Component);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/CountDown.tsx");

export default tmp3;

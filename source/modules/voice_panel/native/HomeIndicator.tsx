// Module ID: 10566
// Function ID: 82469
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 621, 682, 477, 1569, 2]

// Module 10566 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_4 from "keys";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NativeModules } from "get ActivityIndicator";
import keys from "keys";
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
function createStackEntry(prefersHidden) {
  return { prefersHidden: prefersHidden.prefersHidden, prefersDeferringSystemGestures: prefersHidden.prefersDeferringSystemGestures };
}
keys = keys.create(() => ({ autoHideHomeIndicator: false }));
const tmp4 = ((Component) => {
  class HomeIndicator {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, HomeIndicator);
      items1 = [...items];
      obj = outer1_6(HomeIndicator);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._stackEntry = null;
      return tmp2Result;
    }
  }
  callback2(HomeIndicator, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      this._stackEntry = HomeIndicator.pushStackEntry(this.props);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value() {
      this._stackEntry = HomeIndicator.replaceStackEntry(this._stackEntry, this.props);
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value() {
      HomeIndicator.popStackEntry(this._stackEntry);
      this._stackEntry = null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      return null;
    }
  };
  let items1 = [
    {
      key: "pushStackEntry",
      value(arg0) {
        const tmp = outer1_11(arg0);
        const _propsStack = HomeIndicator._propsStack;
        _propsStack.push(tmp);
        HomeIndicator._updatePropsStack();
        return tmp;
      }
    },
    {
      key: "popStackEntry",
      value(arg0) {
        let num = -1;
        if (null != arg0) {
          const _propsStack = HomeIndicator._propsStack;
          num = _propsStack.indexOf(arg0);
        }
        if (-1 !== num) {
          const _propsStack1 = HomeIndicator._propsStack;
          _propsStack1.splice(num, 1);
          HomeIndicator._updatePropsStack();
        }
      }
    },
    {
      key: "replaceStackEntry",
      value(arg0, arg1) {
        const tmp = outer1_11(arg1);
        let num = -1;
        if (null != arg0) {
          const _propsStack = HomeIndicator._propsStack;
          num = _propsStack.indexOf(arg0);
        }
        if (-1 !== num) {
          HomeIndicator._propsStack[num] = tmp;
        }
        HomeIndicator._updatePropsStack();
        return tmp;
      }
    },
    {
      key: "_updatePropsStack",
      value() {
        clearImmediate(HomeIndicator._updateImmediate);
        HomeIndicator._updateImmediate = setImmediate(() => {
          let obj = outer1_0._propsStack[outer1_0._propsStack.length - 1];
          if (null == obj) {
            obj = {};
          }
          const prefersHidden = obj.prefersHidden;
          let closure_0 = tmp;
          const prefersDeferringSystemGestures = obj.prefersDeferringSystemGestures;
          HomeIndicator(outer2_2[8]).batchUpdates(() => outer3_9.setState({ autoHideHomeIndicator: closure_0 }));
          const obj2 = HomeIndicator(outer2_2[8]);
          const tmp2 = undefined !== prefersDeferringSystemGestures && prefersDeferringSystemGestures;
          if (obj3.isAndroid()) {
            const result = outer2_1(outer2_2[10]).setNavigationBarVisible(!tmp);
            const obj4 = outer2_1(outer2_2[10]);
          } else if (outer2_8.DCDHomeIndicator) {
            const DCDHomeIndicator = outer2_8.DCDHomeIndicator;
            DCDHomeIndicator.setPrefersAutoHidden(tmp);
            const DCDHomeIndicator2 = outer2_8.DCDHomeIndicator;
            const result1 = DCDHomeIndicator2.setPrefersDeferringSystemGestures(tmp2);
          }
        });
      }
    }
  ];
  return callback(HomeIndicator, items, items1);
})(require("result").Component);
tmp4.defaultProps = { prefersHidden: false, prefersDeferringSystemGestures: false };
tmp4._propsStack = [];
tmp4._updateImmediate = null;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_panel/native/HomeIndicator.tsx");

export default tmp4;
export const useHomeIndicatorStore = keys;

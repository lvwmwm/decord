// Module ID: 10526
// Function ID: 82203
// Name: _isNativeReflectConstruct
// Dependencies: [57, 31, 587, 10530, 2, 57, 31, 27, 10197, 653, 33, 4126]

// Module 10526 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import module_31 from "module_31";
import Storage from "Storage";
import PictureInPicturePositions from "PictureInPicturePositions";
import result2 from "result2";
import { NativeModules } from "module_31";
import keys from "keys";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

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
const tmp4 = (Component) => {
  class HomeIndicator {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = _slicedToArray(this, HomeIndicator);
      items1 = [...items];
      obj = PictureInPicturePositions(HomeIndicator);
      tmp2 = Storage;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = PictureInPicturePositions;
        constructResult = Reflect.construct(obj, items1, PictureInPicturePositions(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._stackEntry = null;
      return tmp2Result;
    }
  }
  const arg1 = HomeIndicator;
  callback2(HomeIndicator, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      this._stackEntry = HomeIndicator.pushStackEntry(this.props);
    }
  };
  const items = [obj, , , ];
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
  const items1 = [
    {
      key: "pushStackEntry",
      value(arg0) {
        const tmp = callback4(arg0);
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
        const tmp = callback4(arg1);
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
          let obj = tmp._propsStack[closure_0._propsStack.length - 1];
          if (null == obj) {
            obj = {};
          }
          const prefersHidden = obj.prefersHidden;
          const tmp = undefined !== prefersHidden && prefersHidden;
          const prefersDeferringSystemGestures = obj.prefersDeferringSystemGestures;
          tmp(closure_2[8]).batchUpdates(() => state.setState({ autoHideHomeIndicator: tmp }));
          const obj2 = tmp(closure_2[8]);
          const tmp2 = undefined !== prefersDeferringSystemGestures && prefersDeferringSystemGestures;
          if (obj3.isAndroid()) {
            const result = callback(closure_2[10]).setNavigationBarVisible(!tmp);
            const obj4 = callback(closure_2[10]);
          } else if (closure_8.DCDHomeIndicator) {
            const DCDHomeIndicator = closure_8.DCDHomeIndicator;
            DCDHomeIndicator.setPrefersAutoHidden(tmp);
            const DCDHomeIndicator2 = closure_8.DCDHomeIndicator;
            const result1 = DCDHomeIndicator2.setPrefersDeferringSystemGestures(tmp2);
          }
        });
      }
    }
  ];
  return callback(HomeIndicator, items, items1);
}(require("_slicedToArray").Component);
tmp4.defaultProps = { 9223372036854775807: null, 0: null };
tmp4._propsStack = [];
tmp4._updateImmediate = null;
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/voice_panel/native/HomeIndicator.tsx");

export default tmp4;
export const useHomeIndicatorStore = keys;

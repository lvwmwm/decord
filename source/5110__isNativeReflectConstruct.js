// Module ID: 5110
// Function ID: 44370
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33]

// Module 5110 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = ["maskElement", "children"];
({ View: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = get_ActivityIndicator.requireNativeComponent("RNCMaskedView");

export default ((Component) => {
  class MaskedView {
    constructor() {
      self = this;
      tmp = outer1_2(this, MaskedView);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_5(MaskedView);
      tmp3 = outer1_4;
      if (outer1_13()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, combined, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result._hasWarnedInvalidRenderMask = false;
      return tmp3Result;
    }
  }
  callback2(MaskedView, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        let children;
        let maskElement;
        const self = this;
        const props = this.props;
        ({ maskElement, children } = props);
        const tmp = outer1_1(props, MaskedView);
        if (outer1_7.isValidElement(maskElement)) {
          const _Object2 = Object;
          let obj = {};
          obj = { pointerEvents: "none", style: outer1_9.absoluteFill, children: maskElement };
          const items = [outer1_10(outer1_8, obj), children];
          obj.children = items;
          let tmp7 = outer1_11(outer1_12, Object.assign({}, tmp, obj));
        } else {
          if (!self._hasWarnedInvalidRenderMask) {
            const _console = console;
            console.warn("MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.");
            self._hasWarnedInvalidRenderMask = true;
          }
          const _Object = Object;
          obj = { children };
          tmp7 = outer1_10(outer1_8, Object.assign({}, tmp, obj));
        }
        return tmp7;
      }
    }
  ];
  return callback(MaskedView, items);
})(importAllResult.Component);

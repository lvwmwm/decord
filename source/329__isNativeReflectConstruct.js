// Module ID: 329
// Function ID: 4909
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 147, 112, 319, 253]

// Module 329 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import closure_5 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import jsxProd from "jsxProd";

let closure_10;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["children", "style", "imageStyle", "imageRef", "importantForAccessibility"];
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);

export default ((Component) => {
  class ImageBackground {
    constructor() {
      self = this;
      tmp = outer1_4(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_7(apply);
      tmp3 = outer1_6;
      if (outer1_11()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, combined, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result._viewRef = null;
      tmp3Result._captureRef = (_viewRef) => {
        closure_0._viewRef = _viewRef;
      };
      return tmp3Result;
    }
  }
  callback2(ImageBackground, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const _viewRef = this._viewRef;
      if (_viewRef) {
        _viewRef.setNativeProps(arg0);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      let children;
      let imageRef;
      let imageStyle;
      let importantForAccessibility;
      let style;
      const props = this.props;
      ({ style, importantForAccessibility } = props);
      ({ children, imageStyle, imageRef } = props);
      const size = ImageBackground(outer1_1[8])(style);
      let obj = { accessibilityIgnoresInvertColors: true, importantForAccessibility, style, ref: this._captureRef };
      const tmp = outer1_3(props, outer1_2);
      const tmp2 = outer1_10;
      obj = { importantForAccessibility };
      const tmp3 = ImageBackground(outer1_1[9]);
      const tmp4 = outer1_9;
      const items = [ImageBackground(outer1_1[11]).absoluteFill, , ];
      obj = {};
      let width;
      if (null != size) {
        width = size.width;
      }
      obj.width = width;
      let height;
      if (null != size) {
        height = size.height;
      }
      obj.height = height;
      items[1] = obj;
      items[2] = imageStyle;
      obj.style = items;
      obj.ref = imageRef;
      const items1 = [tmp4(ImageBackground(outer1_1[10]), Object.assign({}, tmp, obj)), children];
      obj.children = items1;
      return tmp2(tmp3, obj);
    }
  };
  items[1] = obj;
  return callback(ImageBackground, items);
})(require("result").Component);

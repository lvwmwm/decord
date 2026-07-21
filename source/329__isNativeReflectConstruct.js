// Module ID: 329
// Function ID: 4909
// Name: _isNativeReflectConstruct
// Dependencies: [26476544, 16580608, 1399914496, 1912602625, 110, 42, 1908208, 393216, 458752, 983040, 1114112, 1179648]

// Module 329 (_isNativeReflectConstruct)
import weakSet from "weakSet";
import get from "get";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const importAllResult = importAll(dependencyMap[6]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[7]));

export default (Component) => {
  class ImageBackground {
    constructor() {
      self = this;
      tmp = closure_4(this, ImageBackground);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = weakSet(ImageBackground);
      tmp3 = closure_6;
      if (closure_11()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = weakSet;
        constructResult = Reflect.construct(obj, combined, weakSet(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      ImageBackground = tmp3Result;
      tmp3Result._viewRef = null;
      tmp3Result._captureRef = (_viewRef) => {
        tmp3Result._viewRef = _viewRef;
      };
      return tmp3Result;
    }
  }
  const importDefault = ImageBackground;
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
  const items = [obj, ];
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
      const size = ImageBackground(closure_1[8])(style);
      let obj = { accessibilityIgnoresInvertColors: true, importantForAccessibility, style, ref: this._captureRef };
      const tmp = callback(props, closure_2);
      const tmp2 = closure_10;
      obj = { importantForAccessibility };
      const tmp3 = ImageBackground(closure_1[9]);
      const tmp4 = closure_9;
      const items = [ImageBackground(closure_1[11]).absoluteFill, , ];
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
      const items1 = [tmp4(ImageBackground(closure_1[10]), Object.assign({}, tmp, obj)), children];
      obj.children = items1;
      return tmp2(tmp3, obj);
    }
  };
  items[1] = obj;
  return callback(ImageBackground, items);
}(importAllResult.Component);

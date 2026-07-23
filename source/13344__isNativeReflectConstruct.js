// Module ID: 13344
// Function ID: 102503
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33]

// Module 13344 (_isNativeReflectConstruct)
import _classCallCheck from "get ActivityIndicator";
import _defineProperties from "jsxProd";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { container: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 1000, opacity: 0.25 }, debugContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", zIndex: 2000 }, debugTextContainer: { backgroundColor: "lightgray", margin: 50, padding: 20 }, debugText: { color: "red", fontSize: 16, marginBottom: 10 } };

export default ((Component) => {
  class FullScreenOverlay {
    constructor(arg0) {
      self = this;
      tmp = FullScreenOverlay(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_3(apply);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = { opacity: null, uri: null, justifyContent: "center", alignItems: "center" };
      obj.opacity = outer1_7.container.opacity;
      tmp2Result.state = obj;
      emitter = Component.emitter;
      onResult = emitter.on("overlay", (arg0) => {
        tmp2Result.setState(Object.assign({}, tmp2Result.state, arg0));
      });
      return tmp2Result;
    }
  }
  _inherits(FullScreenOverlay, Component);
  let obj = {
    key: "createContainerStyle",
    value: function createContainerStyle() {
      let alignItems;
      let justifyContent;
      let opacity;
      const Dimensions = outer1_5.Dimensions;
      ({ opacity, justifyContent, alignItems } = this.state);
      const size = Dimensions.get("window");
      return Object.assign({}, outer1_7.container, { opacity, width: size.width, height: size.height, justifyContent, alignItems });
    }
  };
  let items = [obj, , ];
  obj = {
    key: "renderDebug",
    value: function renderDebug() {
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let Fragment;
      let growToWindow;
      let height;
      let jsx2;
      let jsxs;
      let marginLeft;
      let resizeMode;
      let uri;
      let width;
      const self = this;
      const state = this.state;
      ({ uri, growToWindow, marginLeft } = state);
      let num = 0;
      ({ width, height, resizeMode } = state);
      if (undefined !== marginLeft) {
        num = marginLeft;
      }
      const marginRight = state.marginRight;
      let num2 = 0;
      if (undefined !== marginRight) {
        num2 = marginRight;
      }
      const marginTop = state.marginTop;
      let num3 = 0;
      if (undefined !== marginTop) {
        num3 = marginTop;
      }
      const marginBottom = state.marginBottom;
      let obj = { width, height, marginTop: num3, marginRight: num2 };
      let num4 = 0;
      if (undefined !== marginBottom) {
        num4 = marginBottom;
      }
      obj.marginBottom = num4;
      obj.marginLeft = num;
      if (growToWindow) {
        const Dimensions = outer1_5.Dimensions;
        const value = Dimensions.get("window");
        ({ width: obj.width, height: obj.height } = value);
      }
      const jsx = outer1_6.jsx;
      if (uri) {
        obj = {};
        obj = { uri };
        obj.source = obj;
        obj.style = obj;
        let tmp5 = null;
        if (growToWindow) {
          tmp5 = resizeMode;
        }
        obj.resizeMode = tmp5;
        let jsxResult = <tmp3.Image uri={uri} />;
      } else {
        jsxResult = <tmp3.View />;
      }
      const obj1 = {};
      const obj2 = { style: self.createContainerStyle(), pointerEvents: "none" };
      ({ jsxs, Fragment, jsx: jsx2 } = outer1_6);
      obj2.children = jsxResult;
      const items = [jsx2(outer1_5.View, obj2), self.renderDebug()];
      obj1.children = items;
      return <></>;
    }
  };
  items[2] = obj;
  return _defineProperties(FullScreenOverlay, items);
})(result.Component);

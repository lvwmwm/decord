// Module ID: 13214
// Function ID: 100269
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13214 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
let closure_2 = require(dependencyMap[2]);
let closure_3 = require(dependencyMap[3]);
let closure_4 = require(dependencyMap[4]);
let closure_5 = require(dependencyMap[6]);
let closure_6 = require(dependencyMap[7]);
let closure_7 = { container: { "Null": "4d2adea177cc0cf5fd8e4a93e093db12", "Null": "mic", "Null": "png", "Null": "ad", "Null": "Starting ad session heartbeat", "Null": "ad", "Null": "Ad heartbeat called but scheduler not started" }, debugContainer: {}, debugTextContainer: { 0: "2026-05-mana-type-consolidation", 0: "user", 0: "absolute" }, debugText: {} };

export default (Component) => {
  class FullScreenOverlay {
    constructor(arg0) {
      self = this;
      tmp = FullScreenOverlay(this, FullScreenOverlay);
      items = [];
      items[0] = Component;
      obj = closure_3(FullScreenOverlay);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      FullScreenOverlay = tmp2Result;
      obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null };
      obj.opacity = closure_7.container.opacity;
      tmp2Result.state = obj;
      emitter = Component.emitter;
      onResult = emitter.on("overlay", (arg0) => {
        tmp2Result.setState(Object.assign({}, tmp2Result.state, arg0));
      });
      return tmp2Result;
    }
  }
  let closure_0 = FullScreenOverlay;
  callback2(FullScreenOverlay, Component);
  let obj = {
    key: "createContainerStyle",
    value: function createContainerStyle() {
      let alignItems;
      let justifyContent;
      let opacity;
      const Dimensions = RN.Dimensions;
      ({ opacity, justifyContent, alignItems } = this.state);
      const size = Dimensions.get("window");
      return Object.assign({}, closure_7.container, { opacity, width: size.width, height: size.height, justifyContent, alignItems });
    }
  };
  const items = [obj, , ];
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
        const Dimensions = RN.Dimensions;
        const value = Dimensions.get("window");
        ({ width: obj.width, height: obj.height } = value);
      }
      const jsx = React.jsx;
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
        let jsxResult = <tmp3.Image {...obj} />;
      } else {
        jsxResult = <tmp3.View />;
      }
      const obj1 = {};
      const obj2 = { style: self.createContainerStyle(), pointerEvents: "none" };
      ({ jsxs, Fragment, jsx: jsx2 } = React);
      obj2.children = jsxResult;
      const items = [jsx2(RN.View, obj2), self.renderDebug()];
      obj1.children = items;
      return <></>;
    }
  };
  items[2] = obj;
  return callback(FullScreenOverlay, items);
}(function _interopRequireWildcard(__esModule) {
  if ("function" === typeof WeakMap) {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
  }
  if (!__esModule) {
    const obj = Object.create(null);
    obj.default = __esModule;
    let value = obj;
    if (null !== __esModule) {
      if ("object" === typeof __esModule) {
        if (!weakMap) {
          value = obj;
          const keys = Object.keys();
          if (keys !== undefined) {
            value = obj;
            while (keys[tmp] !== undefined) {
              let tmp22 = tmp13;
              let callResult = "default" !== tmp13;
              if (callResult) {
                let hasOwnProperty = {}.hasOwnProperty;
                callResult = hasOwnProperty.call(__esModule, tmp13);
              }
              if (!callResult) {
                continue;
              } else {
                let _Object = Object;
                let ownPropertyDescriptor = defineProperty;
                if (defineProperty) {
                  let _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, tmp13);
                }
                if (!ownPropertyDescriptor) {
                  obj[tmp13] = __esModule[tmp13];
                  let tmp16 = defineProperty;
                  let tmp17 = ownPropertyDescriptor;
                  // continue
                } else {
                  let definePropertyResult = defineProperty(obj, tmp13, ownPropertyDescriptor);
                  let tmp19 = defineProperty;
                  let tmp20 = ownPropertyDescriptor;
                  // continue
                }
                continue;
              }
              continue;
            }
          }
        } else if (weakMap.has(__esModule)) {
          value = weakMap.get(__esModule);
        } else {
          const result = weakMap.set(__esModule, obj);
        }
      } else {
        value = obj;
      }
    }
  } else {
    value = __esModule;
  }
  return value;
}(require(dependencyMap[5])).Component);

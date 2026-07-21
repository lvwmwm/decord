// Module ID: 13239
// Function ID: 100452
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13239 (_isNativeReflectConstruct)
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

export default (Component) => {
  class StorybookSwitcher {
    constructor(arg0) {
      self = this;
      tmp = StorybookSwitcher(this, StorybookSwitcher);
      items = [];
      items[0] = Component;
      obj = closure_3(StorybookSwitcher);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      StorybookSwitcher = tmp2Result;
      tmp2Result.state = { showStorybook: false };
      emitter = Component.emitter;
      onResult = emitter.on("storybook", (showStorybook) => {
        tmp2Result.setState({ showStorybook });
      });
      return tmp2Result;
    }
  }
  let closure_0 = StorybookSwitcher;
  callback2(StorybookSwitcher, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        let children = this.props.children;
        const obj = { style: { flex: 1 } };
        if (this.state.showStorybook) {
          children = <tmp />;
        }
        obj.children = children;
        return <RN.View {...obj} />;
      }
    }
  ];
  return callback(StorybookSwitcher, items);
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

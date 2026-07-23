// Module ID: 13362
// Function ID: 102663
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33]

// Module 13362 (_isNativeReflectConstruct)
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

export default ((Component) => {
  class StorybookSwitcher {
    constructor(arg0) {
      self = this;
      tmp = StorybookSwitcher(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_3(apply);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { showStorybook: false };
      emitter = Component.emitter;
      onResult = emitter.on("storybook", (showStorybook) => {
        tmp2Result.setState({ showStorybook });
      });
      return tmp2Result;
    }
  }
  _inherits(StorybookSwitcher, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        let children = this.props.children;
        const obj = { style: { flex: 1 } };
        if (this.state.showStorybook) {
          children = <tmp />;
        }
        obj.children = children;
        return <outer1_5.View style={{ flex: 1 }} />;
      }
    }
  ];
  return _defineProperties(StorybookSwitcher, items);
})(result.Component);

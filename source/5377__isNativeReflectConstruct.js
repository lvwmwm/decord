// Module ID: 5377
// Function ID: 45930
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5377 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = ["PL", "TR"];
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const obj = arg1(dependencyMap[7]);
({ View: closure_8, StyleSheet: closure_9 } = obj);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[8]));
let closure_12 = obj.requireNativeComponent("RNCMaskedView");

export default (Component) => {
  class MaskedView {
    constructor() {
      self = this;
      tmp = closure_2(this, MaskedView);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(MaskedView);
      tmp3 = closure_4;
      if (closure_13()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result._hasWarnedInvalidRenderMask = false;
      return tmp3Result;
    }
  }
  let closure_0 = MaskedView;
  callback2(MaskedView, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        let children;
        let maskElement;
        const self = this;
        const props = this.props;
        ({ maskElement, children } = props);
        const tmp = callback(props, MaskedView);
        if (validElement.isValidElement(maskElement)) {
          const _Object2 = Object;
          let obj = {};
          obj = { pointerEvents: "none", style: absoluteFill.absoluteFill, children: maskElement };
          const items = [callback4(closure_8, obj), children];
          obj.children = items;
          let tmp7 = callback5(closure_12, Object.assign({}, tmp, obj));
        } else {
          if (!self._hasWarnedInvalidRenderMask) {
            const _console = console;
            console.warn("MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.");
            self._hasWarnedInvalidRenderMask = true;
          }
          const _Object = Object;
          obj = { children };
          tmp7 = callback4(closure_8, Object.assign({}, tmp, obj));
        }
        return tmp7;
      }
    }
  ];
  return callback(MaskedView, items);
}(importAllResult.Component);

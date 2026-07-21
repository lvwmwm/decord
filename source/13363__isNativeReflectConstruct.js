// Module ID: 13363
// Function ID: 101626
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 13363 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[6]).jsx;
let closure_9 = (Component) => {
  class ReanimatedScreenWrapper {
    constructor() {
      self = this;
      tmp = closure_3(this, ReanimatedScreenWrapper);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(ReanimatedScreenWrapper);
      tmp3 = closure_5;
      if (closure_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, combined, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      ReanimatedScreenWrapper = tmp3Result;
      tmp3Result.ref = null;
      tmp3Result.setRef = (ref) => {
        tmp3Result.ref = ref;
        if (null != tmp3Result.props.onComponentRef) {
          const props = tmp3Result.props;
          props.onComponentRef(ref);
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = ReanimatedScreenWrapper;
  callback2(ReanimatedScreenWrapper, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const ref = this.ref;
      if (null != ref) {
        ref.setNativeProps(arg0);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      if (this.props.isNativeStack) {
        let tmpResult = tmp(tmp2[7]);
      } else {
        tmpResult = tmp(tmp2[8]);
      }
      return callback3(tmpResult, Object.assign({}, self.props, { ref: self.setRef }));
    }
  };
  items[1] = obj;
  return callback(ReanimatedScreenWrapper, items);
}(importDefault(dependencyMap[5]).Component);

export default function ReanimatedScreenProvider(children) {
  return jsx(arg1(dependencyMap[9]).ScreenContext.Provider, { value: closure_9, children: children.children });
};

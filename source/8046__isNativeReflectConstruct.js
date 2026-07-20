// Module ID: 8046
// Function ID: 63871
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8046 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (Component) => {
  class FilterPrimitive {
    constructor() {
      self = this;
      tmp = closure_1(this, FilterPrimitive);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_3(FilterPrimitive);
      tmp3 = closure_2;
      if (closure_5()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, combined, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      FilterPrimitive = tmp3Result;
      tmp3Result.root = null;
      tmp3Result.refMethod = (root) => {
        tmp3Result.root = root;
      };
      tmp3Result.setNativeProps = (arg0) => {
        const root = tmp3Result.root;
        if (null != root) {
          root.setNativeProps(arg0);
        }
      };
      return tmp3Result;
    }
  }
  const callback = FilterPrimitive;
  callback2(FilterPrimitive, Component);
  return callback(FilterPrimitive);
}(arg1(dependencyMap[5]).Component);
tmp2.defaultPrimitiveProps = {};

export default tmp2;

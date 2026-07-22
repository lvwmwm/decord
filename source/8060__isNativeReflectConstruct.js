// Module ID: 8060
// Function ID: 63962
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8060 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = (Component) => {
  class FeDistantLight {
    constructor() {
      self = this;
      tmp = closure_2(this, FeDistantLight);
      obj = closure_5(FeDistantLight);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = FeDistantLight;
  callback2(FeDistantLight, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeDistantLight(closure_1[6]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeDistantLight, items);
}(arg1(dependencyMap[5]).Component);
tmp2.displayName = "FeDistantLight";
tmp2.defaultProps = {};

export default tmp2;

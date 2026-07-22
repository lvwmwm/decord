// Module ID: 8076
// Function ID: 64068
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8076 (_isNativeReflectConstruct)
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
  class FeSpotLight {
    constructor() {
      self = this;
      tmp = closure_2(this, FeSpotLight);
      obj = closure_5(FeSpotLight);
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
  const arg1 = FeSpotLight;
  callback2(FeSpotLight, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeSpotLight(closure_1[6]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeSpotLight, items);
}(arg1(dependencyMap[5]).Component);
tmp2.displayName = "FeSpotLight";
tmp2.defaultProps = {};

export default tmp2;

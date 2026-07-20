// Module ID: 8072
// Function ID: 64040
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8072 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class FeTile {
    constructor() {
      self = this;
      tmp = closure_2(this, FeTile);
      obj = closure_5(FeTile);
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
  const arg1 = FeTile;
  callback2(FeTile, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeTile(closure_1[5]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeTile, items);
}(importDefault(dependencyMap[6]));
tmp2.displayName = "FeTile";
tmp2.defaultProps = Object.assign({}, tmp2.defaultPrimitiveProps);

export default tmp2;

// Module ID: 8057
// Function ID: 63941
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8057 (_isNativeReflectConstruct)
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
importDefault(dependencyMap[5]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = (arg0) => {
  class FeGaussianBlur {
    constructor() {
      self = this;
      tmp = closure_3(this, FeGaussianBlur);
      obj = closure_6(FeGaussianBlur);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = FeGaussianBlur;
  callback2(FeGaussianBlur, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const FeGaussianBlur = this;
        const obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp = callback(closure_2[7]);
        const obj2 = FeGaussianBlur(closure_2[8]);
        const extractFilterResult = FeGaussianBlur(closure_2[8]).extractFilter(this.props);
        const obj3 = FeGaussianBlur(closure_2[8]);
        const extractInResult = FeGaussianBlur(closure_2[8]).extractIn(this.props);
        return callback4(tmp, Object.assign(obj, extractFilterResult, extractInResult, FeGaussianBlur(closure_2[8]).extractFeGaussianBlur(this.props)));
      }
    }
  ];
  return callback(FeGaussianBlur, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "FeGaussianBlur";
tmp3.defaultProps = Object.assign({}, tmp3.defaultPrimitiveProps, { "Null": 1, "Null": null });

export default tmp3;

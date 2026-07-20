// Module ID: 8050
// Function ID: 63896
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8050 (_isNativeReflectConstruct)
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
  class FeComposite {
    constructor() {
      self = this;
      tmp = closure_3(this, FeComposite);
      obj = closure_6(FeComposite);
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
  const arg1 = FeComposite;
  callback2(FeComposite, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const FeComposite = this;
        const obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp = callback(closure_2[7]);
        const obj2 = FeComposite(closure_2[8]);
        const extractFilterResult = FeComposite(closure_2[8]).extractFilter(this.props);
        return callback4(tmp, Object.assign(obj, extractFilterResult, FeComposite(closure_2[8]).extractFeComposite(this.props)));
      }
    }
  ];
  return callback(FeComposite, items);
}(importDefault(dependencyMap[9]));
tmp3.displayName = "FeComposite";
tmp3.defaultProps = Object.assign({}, tmp3.defaultPrimitiveProps, { 351738488: "r", 1643106979: "onRequireModeratorMFAClick", 1851348039: "Array", 1944915675: "isSpamMessageRequest" });

export default tmp3;

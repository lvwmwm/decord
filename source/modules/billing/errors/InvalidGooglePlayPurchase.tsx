// Module ID: 7111
// Function ID: 57146
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7111 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class InvalidGooglePlayPurchase {
    constructor() {
      self = this;
      tmp = closure_1(this, InvalidGooglePlayPurchase);
      obj = closure_3(InvalidGooglePlayPurchase);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const callback = InvalidGooglePlayPurchase;
  callback2(InvalidGooglePlayPurchase, arg0);
  return callback(InvalidGooglePlayPurchase);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/billing/errors/InvalidGooglePlayPurchase.tsx");

export default tmp2;

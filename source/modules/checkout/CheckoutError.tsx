// Module ID: 8195
// Function ID: 64831
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8195 (_isNativeReflectConstruct)
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
const tmp2 = (RevenueError) => {
  class CheckoutError {
    constructor(arg0) {
      self = this;
      tmp = closure_1(this, CheckoutError);
      items = [];
      items[0] = RevenueError;
      obj = closure_3(CheckoutError);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "FatalCheckoutError";
      return tmp2Result;
    }
  }
  const callback = CheckoutError;
  callback2(CheckoutError, RevenueError);
  return callback(CheckoutError);
}(arg1(dependencyMap[5]).RevenueError);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = tmp2;

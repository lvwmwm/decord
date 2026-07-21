// Module ID: 4029
// Function ID: 33559
// Name: _callSuper
// Dependencies: []

// Module 4029 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
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
let closure_5 = importDefault(dependencyMap[5]);
const tmp2 = (arg0) => {
  class StripeError {
    constructor(arg0) {
      self = this;
      error = arg0.error;
      tmp = closure_1(this, StripeError);
      if (null != error.param) {
        tmp5 = closure_6;
        tmp6 = StripeError;
        obj = {};
        obj = {};
        items = [];
        items[0] = error.message;
        obj[error.param] = items;
        obj.body = obj;
        items1 = [];
        items1[0] = obj;
        tmp4 = closure_6(self, StripeError, items1);
      } else {
        tmp2 = closure_6;
        tmp3 = StripeError;
        items2 = [];
        items2[0] = error.message;
        tmp4 = closure_6(self, StripeError, items2);
      }
      return closure_2(tmp4);
    }
  }
  const callback = StripeError;
  callback3(StripeError, arg0);
  return callback(StripeError);
}(importDefault(dependencyMap[6]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("errors/StripeError.tsx");

export default tmp2;

// Module ID: 4033
// Function ID: 33579
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4033 (_isNativeReflectConstruct)
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
const AbortCodes = arg1(dependencyMap[6]).AbortCodes;
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (arg0) => {
  class ClientOutdatedAcceptGiftError {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_1(this, ClientOutdatedAcceptGiftError);
      items1 = [...items];
      obj = closure_3(ClientOutdatedAcceptGiftError);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.code = closure_5.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
      return tmp2Result;
    }
  }
  const callback = ClientOutdatedAcceptGiftError;
  callback2(ClientOutdatedAcceptGiftError, arg0);
  return callback(ClientOutdatedAcceptGiftError);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[7]).fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default tmp3;

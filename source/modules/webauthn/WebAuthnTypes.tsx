// Module ID: 9194
// Function ID: 72013
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9194 (_isNativeReflectConstruct)
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
  class IgnorableWebAuthnError {
    constructor() {
      self = this;
      tmp = closure_1(this, IgnorableWebAuthnError);
      obj = closure_3(IgnorableWebAuthnError);
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
  const callback = IgnorableWebAuthnError;
  callback2(IgnorableWebAuthnError, arg0);
  return callback(IgnorableWebAuthnError);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/webauthn/WebAuthnTypes.tsx");

export const IgnorableWebAuthnError = tmp2;

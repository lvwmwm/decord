// Module ID: 4028
// Function ID: 33553
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4028 (_isNativeReflectConstruct)
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
const Links = arg1(dependencyMap[5]).Links;
const tmp2 = (V8APIError) => {
  class APIErrorWithDefaultMessage {
    constructor(arg0, arg1) {
      self = this;
      tmp = APIErrorWithDefaultMessage;
      tmp2 = closure_3(this, APIErrorWithDefaultMessage);
      items = [, , ];
      items[0] = V8APIError;
      items[1] = arg1;
      if (null != arg1) {
        tmp7 = APIErrorWithDefaultMessage;
        tmp8 = closure_1;
        num2 = 6;
        intl2 = APIErrorWithDefaultMessage(closure_1[6]).intl;
        obj = {};
        tmp9 = closure_7;
        obj.statusPageURL = closure_7.STATUS;
        tmp10 = globalThis;
        _HermesInternal = HermesInternal;
        str = "";
        obj.details = "" + arg1;
        formatToPlainStringResult = intl2.formatToPlainString(APIErrorWithDefaultMessage(closure_1[6]).t.aKRa0Q, obj);
      } else {
        tmp3 = APIErrorWithDefaultMessage;
        tmp4 = closure_1;
        num = 6;
        intl = APIErrorWithDefaultMessage(closure_1[6]).intl;
        obj = {};
        tmp5 = closure_7;
        obj.statusPageURL = closure_7.STATUS;
        formatToPlainStringResult = intl.formatToPlainString(APIErrorWithDefaultMessage(closure_1[6]).t.aTVNes, obj);
      }
      items[2] = formatToPlainStringResult;
      obj3 = closure_5(tmp);
      tmp11 = closure_4;
      if (closure_8()) {
        tmp13 = globalThis;
        _Reflect = Reflect;
        tmp14 = closure_5;
        constructResult = Reflect.construct(obj3, items, closure_5(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      return tmp11(self, constructResult);
    }
  }
  const arg1 = APIErrorWithDefaultMessage;
  callback2(APIErrorWithDefaultMessage, V8APIError);
  return callback(APIErrorWithDefaultMessage);
}(arg1(dependencyMap[7]).V8APIError);
const result = arg1(dependencyMap[8]).fileFinishedImporting("errors/APIError.tsx");

export default tmp2;

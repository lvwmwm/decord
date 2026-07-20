// Module ID: 10480
// Function ID: 81194
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10480 (_isNativeReflectConstruct)
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
  class RPCError {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_1(this, RPCError);
      items = [];
      items[0] = arg1;
      obj = closure_3(RPCError);
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
      if ("closeCode" in arg0) {
        ({ closeCode: tmp6.code, closeCode: tmp6.closeCode } = arg0);
      } else {
        ({ errorCode: tmp6.code, errorCode: tmp6.errorCode } = arg0);
      }
      tmp2Result.message = arg1;
      tmp2Result.name = "RPCError";
      return tmp2Result;
    }
  }
  const callback = RPCError;
  callback2(RPCError, arg0);
  return callback(RPCError);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/shared/lib/RPCError.tsx");

export const RPCError = tmp2;

// Module ID: 11112
// Function ID: 86502
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11112 (_isNativeReflectConstruct)
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
  class UploaderError {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_1(this, UploaderError);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = closure_3(UploaderError);
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
      tmp2Result.attachments = [];
      tmp7 = null != arg0.body && null != arg0.body.attachments;
      if (tmp7) {
        tmp2Result.attachments = arg0.body.attachments;
      }
      return tmp2Result;
    }
  }
  const callback = UploaderError;
  callback2(UploaderError, arg0);
  return callback(UploaderError);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/errors/UploaderError.tsx");

export default tmp2;

// Module ID: 16128
// Function ID: 124355
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]

// Module 16128 (_isNativeReflectConstruct)
import closure_0 from "result";
import closure_1 from "result";
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import importDefaultResult from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
result = result.fileFinishedImporting("records/EmojiRecord.tsx");

export default (importDefaultResult) => {
  class EmojiRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_1(this, EmojiRecord);
      obj = closure_3(EmojiRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, name: tmp6.name, managed: tmp6.managed, roles: tmp6.roles, requiredColons: tmp6.requiredColons } = importDefaultResult);
      tmp7 = new closure_5(importDefaultResult.user);
      tmp2Result.user = tmp7;
      ({ animated: tmp6.animated, available: tmp6.available } = importDefaultResult);
      return tmp2Result;
    }
  }
  const callback = EmojiRecord;
  callback2(EmojiRecord, importDefaultResult);
  return callback(EmojiRecord);
}(require("result"));

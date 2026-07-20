// Module ID: 4344
// Function ID: 38515
// Name: _isNativeReflectConstruct
// Dependencies: [1348, 1917, 1838, 2, 5, 57, 4359, 1849]

// Module 4344 (_isNativeReflectConstruct)
import closure_0 from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import keys from "keys";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_5 from "_isNativeReflectConstruct";
import importDefaultResult from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const result = _isNativeReflectConstruct.fileFinishedImporting("records/InteractionRecord.tsx");

export default (importDefaultResult) => {
  class InteractionRecord {
    constructor(arg0) {
      self = this;
      tmp = InteractionRecord(this, InteractionRecord);
      obj = keys(InteractionRecord);
      tmp2 = _createForOfIteratorHelperLoose;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = keys;
        constructResult = Reflect.construct(obj, [], keys(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, name: tmp6.name, type: tmp6.type, user: tmp6.user, name_localized } = importDefaultResult);
      if (null == name_localized) {
        name_localized = importDefaultResult.name;
      }
      tmp2Result.displayName = name_localized;
      return tmp2Result;
    }
  }
  let closure_0 = InteractionRecord;
  callback2(InteractionRecord, importDefaultResult);
  const items = [
    {
      key: "createFromServer",
      value(user) {
        const obj = {};
        const merged = Object.assign(user);
        obj["user"] = new closure_5(user.user);
        const tmp2 = new closure_5(user.user);
        return new InteractionRecord(obj);
      }
    }
  ];
  return callback(InteractionRecord, null, items);
}(require("_slicedToArray"));

// Module ID: 13413
// Function ID: 101872
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 13413 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_1 from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_1884 from "module_1884";
import _classCallCheck from "_classCallCheck";

function _isNativeReflectConstruct() {
  let asyncGeneratorStep = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return asyncGeneratorStep;
  }
  const result = _isNativeReflectConstruct();
}
const result = _classCallCheck.fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersModels.tsx");

export const GeneratedTestPoolRecord = (arg0) => {
  class GeneratedTestPoolRecord {
    constructor(arg0) {
      self = this;
      tmp = GeneratedTestPoolRecord(this, GeneratedTestPoolRecord);
      obj = _createForOfIteratorHelperLoose(GeneratedTestPoolRecord);
      tmp2 = _defineProperties;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = _createForOfIteratorHelperLoose;
        constructResult = Reflect.construct(obj, [], _createForOfIteratorHelperLoose(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ pool_id: tmp6.id, summary: tmp6.summary, user_ids: tmp6.userIds } = arg0);
      return tmp2Result;
    }
  }
  let asyncGeneratorStep = GeneratedTestPoolRecord;
  callback2(GeneratedTestPoolRecord, arg0);
  let obj = {
    key: "setPassword",
    value(password) {
      this.password = password;
      return this;
    }
  };
  const items = [obj];
  obj = {
    key: "fromServer",
    value(arg0) {
      return new GeneratedTestPoolRecord(arg0);
    }
  };
  const items1 = [obj];
  return callback(GeneratedTestPoolRecord, items, items1);
}(require("keys"));

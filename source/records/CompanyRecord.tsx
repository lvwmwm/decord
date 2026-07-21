// Module ID: 4150
// Function ID: 35087
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 4150 (_isNativeReflectConstruct)
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
const result = _classCallCheck.fileFinishedImporting("records/CompanyRecord.tsx");

export default (arg0) => {
  class CompanyRecord {
    constructor(arg0) {
      self = this;
      tmp = CompanyRecord(this, CompanyRecord);
      obj = _createForOfIteratorHelperLoose(CompanyRecord);
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
      ({ id: tmp6.id, name: tmp6.name } = arg0);
      return tmp2Result;
    }
  }
  let asyncGeneratorStep = CompanyRecord;
  callback2(CompanyRecord, arg0);
  const items = [
    {
      key: "createFromServer",
      value(arg0) {
        return new CompanyRecord(arg0);
      }
    }
  ];
  return callback(CompanyRecord, null, items);
}(require("result2"));

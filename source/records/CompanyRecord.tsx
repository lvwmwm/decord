// Module ID: 4150
// Function ID: 35095
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4150 (_isNativeReflectConstruct)
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
  class CompanyRecord {
    constructor(arg0) {
      self = this;
      tmp = CompanyRecord(this, CompanyRecord);
      obj = closure_3(CompanyRecord);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, name: tmp6.name } = arg0);
      return tmp2Result;
    }
  }
  let closure_0 = CompanyRecord;
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
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("records/CompanyRecord.tsx");

export default tmp2;

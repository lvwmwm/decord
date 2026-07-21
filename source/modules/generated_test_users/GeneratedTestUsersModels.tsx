// Module ID: 13422
// Function ID: 101917
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13422 (_isNativeReflectConstruct)
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
  class GeneratedTestPoolRecord {
    constructor(arg0) {
      self = this;
      tmp = GeneratedTestPoolRecord(this, GeneratedTestPoolRecord);
      obj = closure_3(GeneratedTestPoolRecord);
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
      ({ pool_id: tmp6.id, summary: tmp6.summary, user_ids: tmp6.userIds } = arg0);
      return tmp2Result;
    }
  }
  let closure_0 = GeneratedTestPoolRecord;
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
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersModels.tsx");

export const GeneratedTestPoolRecord = tmp2;

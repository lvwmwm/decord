// Module ID: 4348
// Function ID: 38563
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4348 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class InteractionRecord {
    constructor(arg0) {
      self = this;
      tmp = InteractionRecord(this, InteractionRecord);
      obj = closure_3(InteractionRecord);
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
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/InteractionRecord.tsx");

export default tmp3;

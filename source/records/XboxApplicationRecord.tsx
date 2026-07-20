// Module ID: 12547
// Function ID: 96492
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12547 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class XboxApplicationRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, XboxApplicationRecord);
      items = [];
      items[0] = arg0;
      obj = closure_5(XboxApplicationRecord);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.id = "" + "xbox:" + arg0.name;
      tmp2Result.name = arg0.name;
      return tmp2Result;
    }
  }
  const importDefault = XboxApplicationRecord;
  callback2(XboxApplicationRecord, arg0);
  const items = [
    {
      key: "getIconURL",
      value() {
        return XboxApplicationRecord(closure_1[6]).get("xbox").icon.lightPNG;
      }
    }
  ];
  return callback(XboxApplicationRecord, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/XboxApplicationRecord.tsx");

export default tmp2;
export const XBOX_APPLICATION_ID_PREFIX = "xbox:";

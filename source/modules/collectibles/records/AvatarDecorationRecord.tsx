// Module ID: 6774
// Function ID: 53334
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isAvatarDecorationRecord

// Module 6774 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
const tmp2 = (arg0) => {
  class AvatarDecorationRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, AvatarDecorationRecord);
      items = [];
      items[0] = arg0;
      obj = closure_5(AvatarDecorationRecord);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.type = AvatarDecorationRecord(closure_1[7]).CollectiblesItemType.AVATAR_DECORATION;
      ({ asset: tmp6.asset, label: tmp6.label } = arg0);
      return tmp2Result;
    }
  }
  const arg1 = AvatarDecorationRecord;
  callback2(AvatarDecorationRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let tmp = AvatarDecorationRecord;
        const AvatarDecorationRecord = this;
        let fn = callback3(callback2(AvatarDecorationRecord), "fromServer", this);
        if ("function" === typeof fn) {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0];
        const merged = Object.assign(fn(items));
        const merged1 = Object.assign(arg0);
        tmp = new tmp({});
        return tmp;
      }
    }
  ];
  return callback(AvatarDecorationRecord, null, items);
}(importDefault(dependencyMap[6]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/records/AvatarDecorationRecord.tsx");

export default tmp2;
export const isAvatarDecorationRecord = function isAvatarDecorationRecord(first) {
  return first instanceof tmp2;
};

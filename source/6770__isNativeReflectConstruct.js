// Module ID: 6770
// Function ID: 53303
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isProfileFrameRecord

// Module 6770 (_isNativeReflectConstruct)
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
  class ProfileFrameRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ProfileFrameRecord);
      items = [];
      items[0] = arg0;
      obj = closure_5(ProfileFrameRecord);
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
      tmp2Result.type = ProfileFrameRecord(closure_1[7]).CollectiblesItemType.PROFILE_FRAME;
      ({ label: tmp6.label, layers: tmp6.layers, innerWidth: tmp6.innerWidth, overflowTop: tmp6.overflowTop, overflowBottom: tmp6.overflowBottom, overflowHorizontal: tmp6.overflowHorizontal } = arg0);
      return tmp2Result;
    }
  }
  const arg1 = ProfileFrameRecord;
  callback2(ProfileFrameRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let inner_width;
        let overflow_bottom;
        let overflow_horizontal;
        let overflow_top;
        let obj = { -1106203316: "r", -1106006702: "onRequireModeratorMFAClick", -1377116225: "Array", -1407781622: "isSpamMessageRequest" };
        ({ inner_width, overflow_top, overflow_bottom, overflow_horizontal } = arg0);
        Object.setPrototypeOf(null);
        const merged = Object.assign(arg0, obj);
        let tmp3 = ProfileFrameRecord;
        obj = {};
        const ProfileFrameRecord = this;
        let fn = callback3(callback2(ProfileFrameRecord), "fromServer", this);
        if ("function" === typeof fn) {
          fn = (items) => fn.apply(self, items);
        }
        const items = [merged];
        const merged1 = Object.assign(fn(items));
        const merged2 = Object.assign(merged);
        obj["innerWidth"] = inner_width;
        obj["overflowTop"] = overflow_top;
        obj["overflowBottom"] = overflow_bottom;
        obj["overflowHorizontal"] = overflow_horizontal;
        tmp3 = new tmp3(obj);
        return tmp3;
      }
    }
  ];
  return callback(ProfileFrameRecord, null, items);
}(importDefault(dependencyMap[6]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/records/ProfileFrameRecord.tsx");

export default tmp2;
export const isProfileFrameRecord = function isProfileFrameRecord(item) {
  return item instanceof tmp2;
};

// Module ID: 6775
// Function ID: 53351
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isProfileEffectRecord

// Module 6775 (_isNativeReflectConstruct)
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
  class ProfileEffectRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ProfileEffectRecord);
      items = [];
      items[0] = arg0;
      obj = closure_5(ProfileEffectRecord);
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
      tmp2Result.type = ProfileEffectRecord(closure_1[7]).CollectiblesItemType.PROFILE_EFFECT;
      ({ title: tmp6.title, description: tmp6.description, accessibilityLabel: tmp6.accessibilityLabel, reducedMotionSrc: tmp6.reducedMotionSrc, thumbnailPreviewSrc: tmp6.thumbnailPreviewSrc, effects: tmp6.effects, animationType: tmp6.animationType, staticFrameSrc: tmp6.staticFrameSrc } = arg0);
      return tmp2Result;
    }
  }
  const arg1 = ProfileEffectRecord;
  callback2(ProfileEffectRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let tmp = ProfileEffectRecord;
        const ProfileEffectRecord = this;
        let fn = callback3(callback2(ProfileEffectRecord), "fromServer", this);
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
  return callback(ProfileEffectRecord, null, items);
}(importDefault(dependencyMap[6]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/records/ProfileEffectRecord.tsx");

export default tmp2;
export const RestartMethod = { FromLoop: "fromLoop", FromStart: "fromStart" };
export const isProfileEffectRecord = function isProfileEffectRecord(first) {
  return first instanceof tmp2;
};

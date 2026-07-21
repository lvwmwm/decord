// Module ID: 9556
// Function ID: 74466
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9556 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class ForumGuidelinesManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, ForumGuidelinesManager);
      items1 = [...items];
      obj = closure_5(ForumGuidelinesManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      set = new Set();
      tmp2Result.seenForumGuidelines = set;
      return tmp2Result;
    }
  }
  const arg1 = ForumGuidelinesManager;
  callback2(ForumGuidelinesManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const Storage = ForumGuidelinesManager(closure_1[5]).Storage;
      const value = Storage.get("formGuidelinesStorageKey");
      if (null != value) {
        const _Set = Set;
        const set = new Set(value);
        const self = this;
        this.seenForumGuidelines = set;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "_terminate",
    value() {
      const Storage = ForumGuidelinesManager(closure_1[5]).Storage;
      const result = Storage.set("formGuidelinesStorageKey", this.seenForumGuidelines);
    }
  };
  items[1] = obj;
  obj = {
    key: "markAsSeen",
    value(arg0) {
      const seenForumGuidelines = this.seenForumGuidelines;
      seenForumGuidelines.add(arg0);
      const Storage = ForumGuidelinesManager(closure_1[5]).Storage;
      const result = Storage.set("formGuidelinesStorageKey", this.seenForumGuidelines);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasSeen",
    value(arg0) {
      const seenForumGuidelines = this.seenForumGuidelines;
      return seenForumGuidelines.has(arg0);
    }
  };
  return callback(ForumGuidelinesManager, items);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/forums/ForumGuidelinesManager.tsx");

export default tmp2;

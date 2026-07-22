// Module ID: 16380
// Function ID: 126400
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16380 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const CLIPS_TOAST_DURATION = arg1(dependencyMap[5]).CLIPS_TOAST_DURATION;
let tmp2 = (arg0) => {
  class ClipsManager {
    constructor() {
      self = this;
      tmp = closure_3(this, ClipsManager);
      obj = closure_6(ClipsManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ClipsManager;
  callback2(ClipsManager, arg0);
  let obj = {
    key: "showClipsToast",
    value() {
      let obj = callback(closure_2[6]);
      obj = { key: "CLIPS_IN_CALL_WARNING" };
      const intl = ClipsManager(closure_2[7]).intl;
      obj.content = intl.string(ClipsManager(closure_2[7]).t.d+41qJ);
      obj.toastDurationMs = closure_8;
      obj.open(obj);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "applyNativeClipsSettings",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "handleClipsInitOnToggleDetection",
    value() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleClipsInitOnGamesChange",
    value() {

    }
  };
  items[4] = {
    key: "fireClipsInitEvent",
    value() {

    }
  };
  items[5] = {
    key: "handleStreamEnded",
    value() {

    }
  };
  return callback(ClipsManager, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/clips/native/ClipsManager.tsx");

export default tmp2;

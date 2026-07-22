// Module ID: 12560
// Function ID: 96558
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12560 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class TwitchApplicationRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, TwitchApplicationRecord);
      items = [];
      items[0] = arg0;
      obj = closure_6(TwitchApplicationRecord);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.id = "" + "twitch:" + arg0.url;
      intl = TwitchApplicationRecord(closure_2[6]).intl;
      tmp2Result.name = intl.string(TwitchApplicationRecord(closure_2[6]).t.JIPtgq);
      return tmp2Result;
    }
  }
  const arg1 = TwitchApplicationRecord;
  callback2(TwitchApplicationRecord, arg0);
  const items = [
    {
      key: "getIconURL",
      value() {
        return callback(closure_2[7]).get("twitch").icon.lightPNG;
      }
    }
  ];
  return callback(TwitchApplicationRecord, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("records/TwitchApplicationRecord.tsx");

export default tmp2;
export const TWITCH_APPLICATION_ID_PREFIX = "twitch:";

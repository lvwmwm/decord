// Module ID: 12178
// Function ID: 93622
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12178 (_isNativeReflectConstruct)
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
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_5 = importDefault(dependencyMap[6]).get("spotify");
let tmp3 = (importDefaultResult) => {
  class SpotifyApplicationRecord {
    constructor() {
      self = this;
      tmp = SpotifyApplicationRecord(this, SpotifyApplicationRecord);
      items = [];
      items[0] = {};
      obj = closure_3(SpotifyApplicationRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.id = "spotify";
      tmp2Result.name = closure_5.name;
      return tmp2Result;
    }
  }
  let closure_0 = SpotifyApplicationRecord;
  callback2(SpotifyApplicationRecord, importDefaultResult);
  let obj = {
    key: "getIconURL",
    value() {
      return closure_5.icon.lightPNG;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getWhiteIconURL",
    value() {
      return closure_5.icon.whitePNG;
    }
  };
  items[1] = obj;
  return callback(SpotifyApplicationRecord, items);
}(importDefaultResult);
tmp3 = new tmp3();
const importDefaultResult1 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default tmp3;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp3;

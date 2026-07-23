// Module ID: 12303
// Function ID: 95834
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4153, 4814, 2]

// Module 12303 (_isNativeReflectConstruct)
import getPlatformUserUrl from "getPlatformUserUrl";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "_callSuper";
import importDefaultResult1 from "getPlatformUserUrl";

function _isNativeReflectConstruct() {
  let getPlatformUserUrl = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return getPlatformUserUrl;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = require("getPlatformUserUrl").get("spotify");
let tmp3 = ((importDefaultResult) => {
  class SpotifyApplicationRecord {
    constructor() {
      self = this;
      tmp = SpotifyApplicationRecord(this, SpotifyApplicationRecord);
      items = [];
      items[0] = {};
      obj = outer1_3(SpotifyApplicationRecord);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.id = "spotify";
      tmp2Result.name = outer1_5.name;
      return tmp2Result;
    }
  }
  callback2(SpotifyApplicationRecord, importDefaultResult);
  let obj = {
    key: "getIconURL",
    value() {
      return outer1_5.icon.lightPNG;
    }
  };
  let items = [obj, ];
  obj = {
    key: "getWhiteIconURL",
    value() {
      return outer1_5.icon.whitePNG;
    }
  };
  items[1] = obj;
  return callback(SpotifyApplicationRecord, items);
})(importDefaultResult);
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/SpotifyApplicationRecord.tsx");

export default tmp3;
export const SPOTIFY_APPLICATION_ID = "spotify";
export const SpotifyApplication = tmp3;

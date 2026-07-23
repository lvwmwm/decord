// Module ID: 8852
// Function ID: 69872
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 1212, 507, 2]

// Module 8852 (_isNativeReflectConstruct)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
let closure_8 = { ASSET: "asset" };
const tmp2 = ((V8APIError) => {
  class VideoFilterImageError {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_3(this, VideoFilterImageError);
      items = [, , ];
      items[0] = V8APIError;
      items[1] = arg1;
      intl = VideoFilterImageError(outer1_1[5]).intl;
      items[2] = intl.string(VideoFilterImageError(outer1_1[5]).t.Mt8yDB);
      obj = outer1_5(VideoFilterImageError);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      fieldErrors = tmp2Result.getFieldErrors(outer1_8.ASSET);
      tmp7 = null != fieldErrors;
      if (tmp7) {
        num = 0;
        first = fieldErrors[0];
        code = undefined;
        if (null != first) {
          code = first.code;
        }
        tmp10 = outer1_7;
        tmp7 = code === outer1_7.ASSET_SIZE;
      }
      if (tmp7) {
        tmp11 = VideoFilterImageError;
        tmp12 = outer1_1;
        intl2 = VideoFilterImageError(outer1_1[5]).intl;
        tmp2Result.message = intl2.string(VideoFilterImageError(outer1_1[5]).t.mrlScX);
      }
      return tmp2Result;
    }
  }
  callback2(VideoFilterImageError, V8APIError);
  return callback(VideoFilterImageError);
})(require("_isNativeReflectConstruct").V8APIError);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default tmp2;

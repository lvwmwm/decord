// Module ID: 8844
// Function ID: 69807
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8844 (_isNativeReflectConstruct)
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
let closure_7 = { ASSET_SIZE: "BINARY_TYPE_MAX_SIZE" };
let closure_8 = { ASSET: "asset" };
const tmp2 = (V8APIError) => {
  class VideoFilterImageError {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_3(this, VideoFilterImageError);
      items = [, , ];
      items[0] = V8APIError;
      items[1] = arg1;
      intl = VideoFilterImageError(closure_1[5]).intl;
      items[2] = intl.string(VideoFilterImageError(closure_1[5]).t.Mt8yDB);
      obj = closure_5(VideoFilterImageError);
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
      fieldErrors = tmp2Result.getFieldErrors(closure_8.ASSET);
      tmp7 = null != fieldErrors;
      if (tmp7) {
        num = 0;
        first = fieldErrors[0];
        code = undefined;
        if (null != first) {
          code = first.code;
        }
        tmp10 = closure_7;
        tmp7 = code === closure_7.ASSET_SIZE;
      }
      if (tmp7) {
        tmp11 = VideoFilterImageError;
        tmp12 = closure_1;
        intl2 = VideoFilterImageError(closure_1[5]).intl;
        tmp2Result.message = intl2.string(VideoFilterImageError(closure_1[5]).t.mrlScX);
      }
      return tmp2Result;
    }
  }
  const arg1 = VideoFilterImageError;
  callback2(VideoFilterImageError, V8APIError);
  return callback(VideoFilterImageError);
}(arg1(dependencyMap[6]).V8APIError);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/video_backgrounds/VideoFilterImageError.tsx");

export default tmp2;

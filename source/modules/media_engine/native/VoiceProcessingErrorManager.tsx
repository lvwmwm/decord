// Module ID: 16067
// Function ID: 123433
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16067 (_isNativeReflectConstruct)
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
  class VoiceProcessingErrorManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, VoiceProcessingErrorManager);
      items1 = [...items];
      obj = closure_5(VoiceProcessingErrorManager);
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
      VoiceProcessingErrorManager = tmp2Result;
      tmp2Result.actions = {
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR() {
              return tmp2Result.handleNoiseCancellationError();
            },
        MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR() {
              return tmp2Result.handleVoiceActivityDetectionError();
            }
      };
      tmp2Result.handleNoiseCancellationError = () => {
        const result = tmp2Result(closure_1[5]).presentNoiseCancellationError();
      };
      tmp2Result.handleVoiceActivityDetectionError = () => {
        const result = tmp2Result(closure_1[5]).presentVoiceActivityDetectionError();
      };
      return tmp2Result;
    }
  }
  const arg1 = VoiceProcessingErrorManager;
  callback2(VoiceProcessingErrorManager, arg0);
  return callback(VoiceProcessingErrorManager);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_engine/native/VoiceProcessingErrorManager.tsx");

export default tmp2;

// Module ID: 17913
// Function ID: 17914
// Name: VoiceProcessingErrorManager
// Dependencies: [7395, 4485, 2]

// Module 17913 (VoiceProcessingErrorManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

let require = fn;
const prototype = function VoiceProcessingErrorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR() {
      return applyArgumentsResult.handleNoiseCancellationError();
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR() {
      return applyArgumentsResult.handleVoiceActivityDetectionError();
    }
  };
  applyArgumentsResult.handleNoiseCancellationError = function handleNoiseCancellationError() {
    const result = applyArgumentsResult(4485).presentNoiseCancellationError();
  };
  applyArgumentsResult.handleVoiceActivityDetectionError = function handleVoiceActivityDetectionError() {
    const result = applyArgumentsResult(4485).presentVoiceActivityDetectionError();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_engine/native/VoiceProcessingErrorManager.tsx");

export default prototype1;

// Module ID: 17911
// Function ID: 17912
// Name: VoiceProcessingErrorManager
// Dependencies: [7365, 4457, 2]

// Module 17911 (VoiceProcessingErrorManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

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
    const result = applyArgumentsResult(4457).presentNoiseCancellationError();
  };
  applyArgumentsResult.handleVoiceActivityDetectionError = function handleVoiceActivityDetectionError() {
    const result = applyArgumentsResult(4457).presentVoiceActivityDetectionError();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_engine/native/VoiceProcessingErrorManager.tsx");

export default prototype1;

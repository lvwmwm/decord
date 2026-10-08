// Module ID: 17976
// Function ID: 17977
// Name: VoiceProcessingErrorManager
// Dependencies: [6797, 4765, 2]

// Module 17976 (VoiceProcessingErrorManager)
import ToastUtils from "ToastUtils" /* 4765 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

class VoiceProcessingErrorManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR() {
        return require.handleNoiseCancellationError();
      },
      MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR() {
        return require.handleVoiceActivityDetectionError();
      }
    };
    applyArgumentsResult.handleNoiseCancellationError = function handleNoiseCancellationError() {
      const obj = ToastUtils;
      const result = obj.presentNoiseCancellationError();
    };
    applyArgumentsResult.handleVoiceActivityDetectionError = function handleVoiceActivityDetectionError() {
      const obj = ToastUtils;
      const result = obj.presentVoiceActivityDetectionError();
    };
    return applyArgumentsResult;
  }
}
const voiceProcessingErrorManager = new VoiceProcessingErrorManager();
let result = size.fileFinishedImporting("modules/media_engine/native/VoiceProcessingErrorManager.tsx");

export default voiceProcessingErrorManager;

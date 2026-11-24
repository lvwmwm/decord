// Module ID: 19219
// Function ID: 19220
// Name: shouldShowSpeakingWhileMutedWarning
// Dependencies: [5950, 2]
// Exports: default

// Module 19219 (shouldShowSpeakingWhileMutedWarning)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5950 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/shouldShowSpeakingWhileMutedWarning.tsx");

export default function shouldShowSpeakingWhileMutedWarning(isGuildStageVoice, mute, arg2) {
  let tmp = !arg2;
  if (tmp) {
    mute = undefined;
    if (mute != null) {
      mute = mute.mute;
    }
    tmp = !mute;
  }
  if (tmp) {
    let isGuildStageVoiceResult;
    if (isGuildStageVoice != null) {
      isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
    }
    let tmp7 = !isGuildStageVoiceResult;
    if (isGuildStageVoiceResult) {
      const obj = useAudienceRequestToSpeakState;
      const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(mute);
      tmp7 = audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
    }
    tmp = tmp7;
  }
  return tmp;
};

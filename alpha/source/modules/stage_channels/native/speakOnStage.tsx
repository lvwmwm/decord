// Module ID: 11348
// Function ID: 11349
// Name: speakOnStage
// Dependencies: [6838, 8046, 6809, 8036, 2]
// Exports: default

// Module 11348 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6809 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6838 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8036 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8046 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/stage_channels/native/speakOnStage.tsx");

export default function speakOnStage(id) {
  const obj = useStageSpeakingForCurrentUser;
  if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
    const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
    AgeVerificationActionCreatorsDefault;
    const result = showAgeVerificationGetStartedModal(obj2);
  } else {
    const tmpResult = StageChannelActionCreators;
    const result1 = tmpResult.audienceAckRequestToSpeak(id, false);
  }
};

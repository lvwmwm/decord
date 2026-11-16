// Module ID: 11954
// Function ID: 11955
// Name: speakOnStage
// Dependencies: [6898, 8190, 6823, 6899, 2]
// Exports: default

// Module 11954 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6823 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6898 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6899 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8190 */;
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

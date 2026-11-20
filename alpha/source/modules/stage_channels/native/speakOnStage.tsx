// Module ID: 11602
// Function ID: 11603
// Name: speakOnStage
// Dependencies: [6383, 7673, 6295, 6384, 2]
// Exports: default

// Module 11602 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6295 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6383 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6384 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7673 */;
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

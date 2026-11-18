// Module ID: 11682
// Function ID: 11683
// Name: speakOnStage
// Dependencies: [6410, 7704, 6322, 6411, 2]
// Exports: default

// Module 11682 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6322 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6410 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6411 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7704 */;
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

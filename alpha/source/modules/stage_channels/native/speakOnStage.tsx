// Module ID: 11607
// Function ID: 11608
// Name: speakOnStage
// Dependencies: [6728, 7737, 6702, 7706, 2]
// Exports: default

// Module 11607 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6702 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6728 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7706 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7737 */;
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

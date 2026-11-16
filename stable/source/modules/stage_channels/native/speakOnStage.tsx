// Module ID: 11362
// Function ID: 11363
// Name: speakOnStage
// Dependencies: [6846, 8057, 6816, 8047, 2]
// Exports: default

// Module 11362 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6816 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6846 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8047 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8057 */;
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

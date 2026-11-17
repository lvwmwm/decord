// Module ID: 12400
// Function ID: 12401
// Name: speakOnStage
// Dependencies: [6906, 8201, 6818, 6907, 2]
// Exports: default

// Module 12400 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6818 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6906 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6907 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8201 */;
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

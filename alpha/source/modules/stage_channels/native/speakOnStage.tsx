// Module ID: 11706
// Function ID: 11707
// Name: speakOnStage
// Dependencies: [6823, 7836, 6797, 7805, 2]
// Exports: default

// Module 11706 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6797 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6823 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7805 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7836 */;
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

// Module ID: 11722
// Function ID: 11723
// Name: speakOnStage
// Dependencies: [6502, 7793, 6414, 6503, 2]
// Exports: default

// Module 11722 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6414 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6502 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6503 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7793 */;
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

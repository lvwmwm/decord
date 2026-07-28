// Module ID: 10412
// Function ID: 80182
// Name: useLikelyAtoWarning
// Dependencies: [9075, 10408, 10409, 10410, 10112, 10407, 2]
// Exports: useLikelyAtoWarning

// Module 10412 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10408) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10408) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10409) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10409) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10410) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10410) /* useChannelSafetyWarning */;
  const obj4 = require(10112) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10112) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(channelId)) {
          return channelSafetyWarning;
        }
      }
    }
  }
};

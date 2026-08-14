// Module ID: 10321
// Function ID: 10322
// Name: useLikelyAtoWarning
// Dependencies: [9728, 10313, 10314, 10315, 10316, 10312, 2]
// Exports: useLikelyAtoWarning

// Module 10321 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10313) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10313) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10314) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10314) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10315) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10315) /* useChannelSafetyWarning */;
  const obj4 = require(10316) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10316) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

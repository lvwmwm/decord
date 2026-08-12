// Module ID: 10395
// Function ID: 10396
// Name: useLikelyAtoWarning
// Dependencies: [9713, 10387, 10388, 10389, 10390, 10386, 2]
// Exports: useLikelyAtoWarning

// Module 10395 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10387) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10387) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10388) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10388) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10389) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10389) /* useChannelSafetyWarning */;
  const obj4 = require(10390) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10390) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

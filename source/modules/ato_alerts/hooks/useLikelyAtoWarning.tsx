// Module ID: 10282
// Function ID: 10283
// Name: useLikelyAtoWarning
// Dependencies: [9603, 10274, 10275, 10276, 10277, 10273, 2]
// Exports: useLikelyAtoWarning

// Module 10282 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10274) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10274) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10275) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10275) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10276) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10276) /* useChannelSafetyWarning */;
  const obj4 = require(10277) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10277) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

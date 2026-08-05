// Module ID: 10235
// Function ID: 10236
// Name: useLikelyAtoWarning
// Dependencies: [9558, 10227, 10228, 10229, 10230, 10226, 2]
// Exports: useLikelyAtoWarning

// Module 10235 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10227) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10227) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10228) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10228) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10229) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10229) /* useChannelSafetyWarning */;
  const obj4 = require(10230) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10230) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

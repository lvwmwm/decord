// Module ID: 10588
// Function ID: 10589
// Name: useLikelyAtoWarning
// Dependencies: [9279, 10584, 10585, 10586, 10285, 10583, 2]
// Exports: useLikelyAtoWarning

// Module 10588 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10584) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10584) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10585) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10585) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10586) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10586) /* useChannelSafetyWarning */;
  const obj4 = require(10285) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10285) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

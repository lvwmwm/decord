// Module ID: 10349
// Function ID: 10350
// Name: useLikelyAtoWarning
// Dependencies: [9668, 10341, 10342, 10343, 10344, 10340, 2]
// Exports: useLikelyAtoWarning

// Module 10349 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10341) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10341) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10342) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10342) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10343) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10343) /* useChannelSafetyWarning */;
  const obj4 = require(10344) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10344) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

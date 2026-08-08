// Module ID: 10348
// Function ID: 10349
// Name: useLikelyAtoWarning
// Dependencies: [9668, 10340, 10341, 10342, 10343, 10339, 2]
// Exports: useLikelyAtoWarning

// Module 10348 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10340) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10340) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10341) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10341) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10342) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10342) /* useChannelSafetyWarning */;
  const obj4 = require(10343) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10343) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

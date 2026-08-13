// Module ID: 10307
// Function ID: 10308
// Name: useLikelyAtoWarning
// Dependencies: [9717, 10299, 10300, 10301, 10302, 10298, 2]
// Exports: useLikelyAtoWarning

// Module 10307 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10299) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10299) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10300) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10300) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10301) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10301) /* useChannelSafetyWarning */;
  const obj4 = require(10302) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10302) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

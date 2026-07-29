// Module ID: 10436
// Function ID: 10437
// Name: useLikelyAtoWarning
// Dependencies: [9099, 10432, 10433, 10434, 10133, 10431, 2]
// Exports: useLikelyAtoWarning

// Module 10436 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10432) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10432) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10433) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10433) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10434) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10434) /* useChannelSafetyWarning */;
  const obj4 = require(10133) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10133) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

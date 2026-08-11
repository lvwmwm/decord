// Module ID: 10354
// Function ID: 10355
// Name: useLikelyAtoWarning
// Dependencies: [9673, 10346, 10347, 10348, 10349, 10345, 2]
// Exports: useLikelyAtoWarning

// Module 10354 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10346) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10346) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10347) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10347) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10348) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10348) /* useChannelSafetyWarning */;
  const obj4 = require(10349) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10349) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

// Module ID: 10266
// Function ID: 10267
// Name: useLikelyAtoWarning
// Dependencies: [9587, 10258, 10259, 10260, 10261, 10257, 2]
// Exports: useLikelyAtoWarning

// Module 10266 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10258) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10258) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10259) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10259) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10260) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10260) /* useChannelSafetyWarning */;
  const obj4 = require(10261) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10261) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

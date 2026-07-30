// Module ID: 10432
// Function ID: 10433
// Name: useLikelyAtoWarning
// Dependencies: [9095, 10428, 10429, 10430, 10129, 10427, 2]
// Exports: useLikelyAtoWarning

// Module 10432 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10428) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10428) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10429) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10429) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10430) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10430) /* useChannelSafetyWarning */;
  const obj4 = require(10129) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10129) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

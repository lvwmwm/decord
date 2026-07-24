// Module ID: 10437
// Function ID: 80379
// Name: useLikelyAtoWarning
// Dependencies: [9139, 10433, 10434, 10435, 10140, 10432, 2]
// Exports: useLikelyAtoWarning

// Module 10437 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10433) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10433) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10434) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10434) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10435) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10435) /* useChannelSafetyWarning */;
  const obj4 = require(10140) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10140) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

// Module ID: 10371
// Function ID: 80048
// Name: useLikelyAtoWarning
// Dependencies: [9031, 10367, 10368, 10369, 10072, 10366, 2]
// Exports: useLikelyAtoWarning

// Module 10371 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10367) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10367) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10368) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10368) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10369) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10369) /* useChannelSafetyWarning */;
  const obj4 = require(10072) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10072) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

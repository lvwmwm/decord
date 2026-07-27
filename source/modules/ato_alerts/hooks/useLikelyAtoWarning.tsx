// Module ID: 10372
// Function ID: 80053
// Name: useLikelyAtoWarning
// Dependencies: [9031, 10368, 10369, 10370, 10072, 10367, 2]
// Exports: useLikelyAtoWarning

// Module 10372 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10368) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10368) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10369) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10369) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10370) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10370) /* useChannelSafetyWarning */;
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

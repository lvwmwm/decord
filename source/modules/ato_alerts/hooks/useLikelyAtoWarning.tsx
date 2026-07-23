// Module ID: 10408
// Function ID: 80187
// Name: useLikelyAtoWarning
// Dependencies: [9101, 10404, 10405, 10406, 10108, 10403, 2]
// Exports: useLikelyAtoWarning

// Module 10408 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10404) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10404) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10405) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10405) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10406) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10406) /* useChannelSafetyWarning */;
  const obj4 = require(10108) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10108) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

// Module ID: 10579
// Function ID: 10580
// Name: useLikelyAtoWarning
// Dependencies: [9921, 10571, 10572, 10573, 10574, 10570, 2]
// Exports: useLikelyAtoWarning

// Module 10579 (useLikelyAtoWarning)
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10571) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10571) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10572) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10572) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10573) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10573) /* useChannelSafetyWarning */;
  const obj4 = require(10574) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10574) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

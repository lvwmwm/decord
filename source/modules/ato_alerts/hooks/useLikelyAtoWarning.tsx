// Module ID: 10397
// Function ID: 80124
// Name: useLikelyAtoWarning
// Dependencies: []
// Exports: useLikelyAtoWarning

// Module 10397 (useLikelyAtoWarning)
const SafetyWarningTypes = require(dependencyMap[0]).SafetyWarningTypes;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(dependencyMap[1]).useIsSpamMessageRequest(channelId);
  const obj = require(dependencyMap[1]);
  const isMessageRequest = require(dependencyMap[2]).useIsMessageRequest(channelId);
  const obj2 = require(dependencyMap[2]);
  const channelSafetyWarning = require(dependencyMap[3]).useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(dependencyMap[3]);
  const obj4 = require(dependencyMap[4]);
  const tmp4 = require(dependencyMap[4]).useInappropriateConversationWarningsForChannel(channelId).length > 0;
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

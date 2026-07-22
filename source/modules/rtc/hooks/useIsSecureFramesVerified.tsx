// Module ID: 8871
// Function ID: 69933
// Name: useIsUserSecureFramesVerified
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useIsCallSecureFramesVerified, useIsStreamSecureFramesVerified, useIsUserSecureFramesVerified

// Module 8871 (useIsUserSecureFramesVerified)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  const arg1 = userId;
  const isSecureFramesUIEnabled = arg1(dependencyMap[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const dependencyMap = isSecureFramesUIEnabled;
  const obj = arg1(dependencyMap[3]);
  const items = [closure_4, __exportStarResult1, closure_3];
  const items1 = [isSecureFramesUIEnabled, userId];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let isUserConnectedResult = null != userId && isSecureFramesUIEnabled;
    if (isUserConnectedResult) {
      isUserConnectedResult = userConnected.isUserConnected(userId);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = id.getId() !== userId;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = userVerified.isUserVerified(userId);
    }
    return isUserConnectedResult;
  }, items1);
};
export const useIsStreamSecureFramesVerified = function useIsStreamSecureFramesVerified(channelId) {
  const streamKey = channelId.streamKey;
  const arg1 = streamKey;
  const isSecureFramesUIEnabled = arg1(dependencyMap[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const dependencyMap = isSecureFramesUIEnabled;
  const obj = arg1(dependencyMap[3]);
  const isStreamRTCConnectionEmpty = arg1(dependencyMap[5]).useIsStreamRTCConnectionEmpty(streamKey);
  let __exportStarResult1 = isStreamRTCConnectionEmpty;
  const obj2 = arg1(dependencyMap[5]);
  const items = [closure_4, __exportStarResult1];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = isStreamRTCConnectionEmpty.getId();
          let isStreamVerifiedResult = streamKey(isSecureFramesUIEnabled[6]).decodeStreamKey(streamKey).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = streamVerified.isStreamVerified(streamKey);
          }
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  }, items1);
};
export const useIsCallSecureFramesVerified = function useIsCallSecureFramesVerified(channelId) {
  const isSecureFramesUIEnabled = arg1(dependencyMap[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const arg1 = isSecureFramesUIEnabled;
  const obj = arg1(dependencyMap[3]);
  const isCallRTCConnectionEmpty = arg1(dependencyMap[5]).useIsCallRTCConnectionEmpty();
  const dependencyMap = isCallRTCConnectionEmpty;
  const obj2 = arg1(dependencyMap[5]);
  const items = [closure_4];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let isCallVerifiedResult = !(!isSecureFramesUIEnabled || isCallRTCConnectionEmpty);
    if (isCallVerifiedResult) {
      isCallVerifiedResult = callVerified.isCallVerified();
    }
    return isCallVerifiedResult;
  }, items1);
};

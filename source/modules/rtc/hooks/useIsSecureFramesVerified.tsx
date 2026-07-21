// Module ID: 8870
// Function ID: 69920
// Name: useIsUserSecureFramesVerified
// Dependencies: []
// Exports: useIsCallSecureFramesVerified, useIsStreamSecureFramesVerified, useIsUserSecureFramesVerified

// Module 8870 (useIsUserSecureFramesVerified)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  const arg1 = userId;
  const isSecureFramesUIEnabled = arg1(dependencyMap[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const dependencyMap = isSecureFramesUIEnabled;
  const obj = arg1(dependencyMap[3]);
  const items = [closure_4, closure_2, closure_3];
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
  let closure_2 = isStreamRTCConnectionEmpty;
  const obj2 = arg1(dependencyMap[5]);
  const items = [closure_4, closure_2];
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

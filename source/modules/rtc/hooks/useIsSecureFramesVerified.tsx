// Module ID: 8917
// Function ID: 70189
// Name: useIsUserSecureFramesVerified
// Dependencies: [1194, 4202, 8918, 8955, 566, 8958, 4194, 2]
// Exports: useIsCallSecureFramesVerified, useIsStreamSecureFramesVerified, useIsUserSecureFramesVerified

// Module 8917 (useIsUserSecureFramesVerified)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  isSecureFramesUIEnabled = userId(isSecureFramesUIEnabled[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = userId(isSecureFramesUIEnabled[3]);
  const items = [closure_4, _isNativeReflectConstruct, closure_3];
  const items1 = [isSecureFramesUIEnabled, userId];
  return userId(isSecureFramesUIEnabled[4]).useStateFromStores(items, () => {
    let isUserConnectedResult = null != userId && isSecureFramesUIEnabled;
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_3.isUserConnected(userId);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_2.getId() !== userId;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_4.isUserVerified(userId);
    }
    return isUserConnectedResult;
  }, items1);
};
export const useIsStreamSecureFramesVerified = function useIsStreamSecureFramesVerified(channelId) {
  const streamKey = channelId.streamKey;
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = streamKey(isSecureFramesUIEnabled[3]);
  const isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[5]).useIsStreamRTCConnectionEmpty(streamKey);
  const obj2 = streamKey(isSecureFramesUIEnabled[5]);
  const items = [closure_4, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return streamKey(isSecureFramesUIEnabled[4]).useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = isStreamRTCConnectionEmpty.getId();
          let isStreamVerifiedResult = streamKey(isSecureFramesUIEnabled[6]).decodeStreamKey(streamKey).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = outer1_4.isStreamVerified(streamKey);
          }
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  }, items1);
};
export const useIsCallSecureFramesVerified = function useIsCallSecureFramesVerified(channelId) {
  isSecureFramesUIEnabled = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[3]);
  isCallRTCConnectionEmpty = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]).useIsCallRTCConnectionEmpty();
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]);
  const items = [closure_4];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return isSecureFramesUIEnabled(isCallRTCConnectionEmpty[4]).useStateFromStores(items, () => {
    let isCallVerifiedResult = !(!isSecureFramesUIEnabled || isCallRTCConnectionEmpty);
    if (isCallVerifiedResult) {
      isCallVerifiedResult = outer1_4.isCallVerified();
    }
    return isCallVerifiedResult;
  }, items1);
};

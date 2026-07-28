// Module ID: 4990
// Function ID: 42693
// Name: useIsStageSpeakingDisabledForCurrentUser
// Dependencies: [1348, 3793, 1907, 482, 4382, 3844, 4991, 566, 2]
// Exports: isStageSpeakingDisabledForCurrentUser, shouldAgeVerifyToSpeakForCurrentUser, useIsStageSpeakingDisabledForCurrentUser, useShouldAgeVerifyToSpeakForCurrentUser, useShouldShowAgeVerificationForEvent, useShouldShowAgeVerificationPopover

// Module 4990 (useIsStageSpeakingDisabledForCurrentUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = require(4382) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const obj2 = require(3844) /* isFeatureAgeGated */;
  return require(3844) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const isVerifiedTeenResult = require(4382) /* isReactiveCheckEnabled */.isVerifiedTeen();
  const obj2 = require(3844) /* isFeatureAgeGated */;
  return require(3844) /* isFeatureAgeGated */.isFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = require(4382) /* isReactiveCheckEnabled */;
  if (null == id) {
    channelId = store.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = channel.getChannel(channelId);
  }
  let canResult = null != channel;
  if (canResult) {
    canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
  }
  const isVerifiedAdultResult = require(4382) /* isReactiveCheckEnabled */.isVerifiedAdult();
  const obj2 = require(3844) /* isFeatureAgeGated */;
  return require(3844) /* isFeatureAgeGated */.isFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = channelId(566).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = outer1_2.getChannel(channelId);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(566);
  const isVerifiedAdult = channelId(4382).useIsVerifiedAdult();
  const obj2 = channelId(4382);
  const obj3 = channelId(3844);
  return channelId(3844).useIsFeatureAgeGated(channelId(4991).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = channelId(566).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = outer1_2.getChannel(channelId);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(566);
  const isAgeVerified = channelId(4382).useIsAgeVerified();
  const obj2 = channelId(4382);
  const obj3 = channelId(3844);
  return channelId(3844).useIsFeatureAgeGated(channelId(4991).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = require(4382) /* isReactiveCheckEnabled */.useIsVerifiedAdult();
  const obj = require(4382) /* isReactiveCheckEnabled */;
  const obj2 = require(3844) /* isFeatureAgeGated */;
  return require(3844) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4991) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};

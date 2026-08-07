// Module ID: 5139
// Function ID: 5140
// Name: useIsStageSpeakingDisabledForCurrentUser
// Dependencies: [1372, 3929, 1960, 505, 4517, 3980, 5140, 589, 2]
// Exports: isStageSpeakingDisabledForCurrentUser, shouldAgeVerifyToSpeakForCurrentUser, useIsStageSpeakingDisabledForCurrentUser, useShouldAgeVerifyToSpeakForCurrentUser, useShouldShowAgeVerificationForEvent, useShouldShowAgeVerificationPopover

// Module 5139 (useIsStageSpeakingDisabledForCurrentUser)
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import { Permissions } from "sum";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = require(4517) /* useAgeVerificationRunner */.useIsVerifiedTeen();
  const obj = require(4517) /* useAgeVerificationRunner */;
  const obj2 = require(3980) /* isFeatureAgeGated */;
  return require(3980) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5140) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = require(4517) /* useAgeVerificationRunner */;
  const isVerifiedTeenResult = require(4517) /* useAgeVerificationRunner */.isVerifiedTeen();
  const obj2 = require(3980) /* isFeatureAgeGated */;
  return require(3980) /* isFeatureAgeGated */.isFeatureAgeGated(require(5140) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = require(4517) /* useAgeVerificationRunner */;
  if (null == id) {
    channelId = store.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = channel.getChannel(channelId);
  }
  let canResult = null != channel;
  if (canResult) {
    canResult = getUncachedChannelPermissions.can(Permissions.REQUEST_TO_SPEAK, channel);
  }
  const isVerifiedAdultResult = require(4517) /* useAgeVerificationRunner */.isVerifiedAdult();
  const tmp2Result = require(3980) /* isFeatureAgeGated */;
  return require(3980) /* isFeatureAgeGated */.isFeatureAgeGated(require(5140) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [getUncachedChannelPermissions, ensureGuildLoaded];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = outer1_2.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isVerifiedAdult = channelId(4517).useIsVerifiedAdult();
  const obj2 = channelId(4517);
  const obj3 = channelId(3980);
  return channelId(3980).useIsFeatureAgeGated(channelId(5140).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [getUncachedChannelPermissions, ensureGuildLoaded];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = outer1_2.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isAgeVerified = channelId(4517).useIsAgeVerified();
  const obj2 = channelId(4517);
  const obj3 = channelId(3980);
  return channelId(3980).useIsFeatureAgeGated(channelId(5140).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = require(4517) /* useAgeVerificationRunner */.useIsVerifiedAdult();
  const obj = require(4517) /* useAgeVerificationRunner */;
  const obj2 = require(3980) /* isFeatureAgeGated */;
  return require(3980) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5140) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};

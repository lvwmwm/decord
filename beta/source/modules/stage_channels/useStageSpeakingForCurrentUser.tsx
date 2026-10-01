// Module ID: 5734
// Function ID: 5735
// Name: useStageSpeakingForCurrentUser
// Dependencies: [2045, 4469, 2099, 1085, 5048, 5735, 5736, 504, 2]
// Exports: isStageSpeakingDisabledForCurrentUser, shouldAgeVerifyToSpeakForCurrentUser, useIsStageSpeakingDisabledForCurrentUser, useShouldAgeVerifyToSpeakForCurrentUser, useShouldShowAgeVerificationForEvent, useShouldShowAgeVerificationPopover

// Module 5734 (useStageSpeakingForCurrentUser)
import Constants from "Constants" /* 1085 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5736 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
  return tmp2;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = AgeVerificationUtils;
  const isVerifiedTeenResult = obj.isVerifiedTeen();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
  return tmp2;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = AgeVerificationUtils;
  const isVerifiedAdultResult = obj.isVerifiedAdult();
  if (null == id) {
    channelId = SelectedChannelStore.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  const canResult = null != channel && PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
  const tmp2Result = RegionalFeatureConfigUtils;
  const tmp11 = tmp2Result.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
  return tmp11;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const items = [PermissionStore, ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    const canResult = null != channel && PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
    return canResult;
  }, items1);
  const obj2 = channelId(5048);
  const isVerifiedAdult = obj2.useIsVerifiedAdult();
  const obj3 = channelId(5735);
  const tmp5 = obj3.useIsFeatureAgeGated(channelId(5736).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
  return tmp5;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const items = [PermissionStore, ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    const canResult = null != channel && PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
    return canResult;
  }, items1);
  const obj2 = channelId(5048);
  const isAgeVerified = obj2.useIsAgeVerified();
  const obj3 = channelId(5735);
  const tmp5 = obj3.useIsFeatureAgeGated(channelId(5736).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
  return tmp5;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
  return tmp2;
};

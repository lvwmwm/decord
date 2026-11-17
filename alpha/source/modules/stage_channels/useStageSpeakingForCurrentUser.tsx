// Module ID: 6906
// Function ID: 6907
// Name: useStageSpeakingForCurrentUser
// Dependencies: [5159, 5242, 5213, 1083, 6815, 5989, 6820, 504, 2]
// Exports: isStageSpeakingDisabledForCurrentUser, shouldAgeVerifyToSpeakForCurrentUser, useIsStageSpeakingDisabledForCurrentUser, useShouldAgeVerifyToSpeakForCurrentUser, useShouldShowAgeVerificationForEvent, useShouldShowAgeVerificationPopover

// Module 6906 (useStageSpeakingForCurrentUser)
import Constants from "Constants" /* 1083 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5989 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6820 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import PermissionStore from "PermissionStore" /* 5242 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5213 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export function useIsStageSpeakingDisabledForCurrentUser() {
  const obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
  return tmp2;
}
export function isStageSpeakingDisabledForCurrentUser() {
  const obj = AgeVerificationUtils;
  const isVerifiedTeenResult = obj.isVerifiedTeen();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
  return tmp2;
}
export function shouldAgeVerifyToSpeakForCurrentUser(id) {
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
}
export function useShouldAgeVerifyToSpeakForCurrentUser(id) {
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
  const obj2 = channelId(6815);
  const isVerifiedAdult = obj2.useIsVerifiedAdult();
  const obj3 = channelId(5989);
  const tmp5 = obj3.useIsFeatureAgeGated(channelId(6820).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
  return tmp5;
}
export function useShouldShowAgeVerificationPopover(id) {
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
  const obj2 = channelId(6815);
  const isAgeVerified = obj2.useIsAgeVerified();
  const obj3 = channelId(5989);
  const tmp5 = obj3.useIsFeatureAgeGated(channelId(6820).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
  return tmp5;
}
export function useShouldShowAgeVerificationForEvent() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
  return tmp2;
}

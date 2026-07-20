// Module ID: 4951
// Function ID: 42486
// Name: useIsStageSpeakingDisabledForCurrentUser
// Dependencies: []
// Exports: isStageSpeakingDisabledForCurrentUser, shouldAgeVerifyToSpeakForCurrentUser, useIsStageSpeakingDisabledForCurrentUser, useShouldAgeVerifyToSpeakForCurrentUser, useShouldShowAgeVerificationForEvent, useShouldShowAgeVerificationPopover

// Module 4951 (useIsStageSpeakingDisabledForCurrentUser)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = arg1(dependencyMap[4]).useIsVerifiedTeen();
  const obj = arg1(dependencyMap[4]);
  const obj2 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).useIsFeatureAgeGated(arg1(dependencyMap[6]).AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = arg1(dependencyMap[4]);
  const isVerifiedTeenResult = arg1(dependencyMap[4]).isVerifiedTeen();
  const obj2 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).isFeatureAgeGated(arg1(dependencyMap[6]).AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = arg1(dependencyMap[4]);
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
  const isVerifiedAdultResult = arg1(dependencyMap[4]).isVerifiedAdult();
  const obj2 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).isFeatureAgeGated(arg1(dependencyMap[6]).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const arg1 = channelId;
  const items = [closure_3, closure_2];
  const items1 = [channelId];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = channel.getChannel(channelId);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_3.can(constants.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = arg1(dependencyMap[7]);
  const isVerifiedAdult = arg1(dependencyMap[4]).useIsVerifiedAdult();
  const obj2 = arg1(dependencyMap[4]);
  const obj3 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).useIsFeatureAgeGated(arg1(dependencyMap[6]).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const arg1 = channelId;
  const items = [closure_3, closure_2];
  const items1 = [channelId];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = channel.getChannel(channelId);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_3.can(constants.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = arg1(dependencyMap[7]);
  const isAgeVerified = arg1(dependencyMap[4]).useIsAgeVerified();
  const obj2 = arg1(dependencyMap[4]);
  const obj3 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).useIsFeatureAgeGated(arg1(dependencyMap[6]).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = arg1(dependencyMap[4]).useIsVerifiedAdult();
  const obj = arg1(dependencyMap[4]);
  const obj2 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).useIsFeatureAgeGated(arg1(dependencyMap[6]).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};

// Module ID: 5641
// Function ID: 5642
// Name: useStageSpeakingForCurrentUser
// Dependencies: [2045, 4399, 2099, 1089, 558, 4970, 5642, 5643, 568, 504, 2]
// Exports: isStageSpeakingDisabledForCurrentUser, shouldAgeVerifyToSpeakForCurrentUser

// Module 5641 (useStageSpeakingForCurrentUser)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4970 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5642 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5643 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

require = fn;
const Permissions = fn(1089).Permissions;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
}) : (() => {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(6);
  if (cResult[0] !== arg0) {
    let channelId = arg0;
    if (null == arg0) {
      channelId = SelectedChannelStore.getChannelId();
    }
    cResult[0] = arg0;
    cResult[1] = channelId;
    let tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ChannelStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = E;
    cResult[5] = items1;
    let tmp12 = items1;
    const tmp11 = E;
  } else {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    tmp12 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp11, tmp12);
  const tmpResult = require("initialize");
  const isVerifiedAdult = require("AgeVerificationUtils").useIsVerifiedAdult();
  const tmpResult3 = require("AgeVerificationUtils");
  const tmpResult4 = require("RegionalFeatureConfigUtils");
  return require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
}) : ((arg0) => {
  let channelId = arg0;
  if (null == arg0) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const items = [PermissionStore, ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(504);
  const isVerifiedAdult = channelId(4970).useIsVerifiedAdult();
  const obj2 = channelId(4970);
  const obj3 = channelId(5642);
  return channelId(5642).useIsFeatureAgeGated(channelId(5643).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(6);
  if (cResult[0] !== arg0) {
    let channelId = arg0;
    if (null == arg0) {
      channelId = SelectedChannelStore.getChannelId();
    }
    cResult[0] = arg0;
    cResult[1] = channelId;
    let tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ChannelStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = E;
    cResult[5] = items1;
    let tmp12 = items1;
    const tmp11 = E;
  } else {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    tmp12 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp11, tmp12);
  const tmpResult = require("initialize");
  const isAgeVerified = require("AgeVerificationUtils").useIsAgeVerified();
  const tmpResult3 = require("AgeVerificationUtils");
  const tmpResult4 = require("RegionalFeatureConfigUtils");
  return require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
}) : ((arg0) => {
  let channelId = arg0;
  if (null == arg0) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const items = [PermissionStore, ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(504);
  const isAgeVerified = channelId(4970).useIsAgeVerified();
  const obj2 = channelId(4970);
  const obj3 = channelId(5642);
  return channelId(5642).useIsFeatureAgeGated(channelId(5643).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = tmp2;
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = SelectedChannelStore.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  let canResult = null != channel;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
  }
  const isVerifiedAdultResult = AgeVerificationUtils.isVerifiedAdult();
  const tmp2Result = RegionalFeatureConfigUtils;
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = tmp3;
export const useShouldShowAgeVerificationPopover = tmp4;
export const useShouldShowAgeVerificationForEvent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
}) : (() => {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
});

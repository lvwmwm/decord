// Module ID: 8896
// Function ID: 8897
// Name: StreamQualityUtils
// Dependencies: [19, 4882, 502, 2067, 4859, 1372, 1074, 4883, 1374, 4861, 1115, 504, 4972, 1241, 2]
// Exports: getFPSText, getMaxQuality, getPremiumRequirement, getResolutionText, isPremiumFPS, isPremiumRequirement, isPremiumResolution, trackStreamSettingsUpdate, useMaxQuality

// Module 8896 (StreamQualityUtils)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants2 from "Constants" /* 4861 */;
import getReportedStreamResolutionDefault from "getReportedStreamResolution" /* 4972 */;
import react from "react" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4882 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2067 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import UserStore from "UserStore" /* 1372 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4883 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const AnalyticEvents = Constants.AnalyticEvents;
({ ApplicationStreamFPS: c10, ApplicationStreamResolutions: unpackModuleId, ApplicationStreamSettingRequirements: closure_12, getApplicationFramerate: map1, getApplicationResolution: closure_14 } = StreamSettingsConstants);
let closure_15 = PremiumConstants.StreamQualitiesToPremiumType;
const ResolutionTypes = Constants2.ResolutionTypes;
let size = size_mod;
const result = size.fileFinishedImporting("utils/StreamQualityUtils.tsx");

export const isPremiumResolution = function isPremiumResolution(maxQuality) {
  if (null != maxQuality) {
    let height;
    let tmp = ResolutionTypes;
    if (maxQuality.maxResolution.type === ResolutionTypes.SOURCE) {
      height = constants.RESOLUTION_SOURCE;
    } else {
      height = maxQuality.maxResolution.height;
    }
    let closure_0 = closure_14(height);
    const tmp6 = closure_13(maxQuality.maxFrameRate) !== FPS_5.FPS_5 && null == closure_12.find((resolution) => {
      let tmp = resolution.resolution === closure_0 && resolution.fps !== authStore.FPS_5;
      if (tmp) {
        tmp = !(null != resolution.quality || null != resolution.guildPremiumTier);
      }
      return tmp;
    });
    return tmp6;
  }
};
export const isPremiumFPS = function isPremiumFPS(maxQuality) {
  if (null != maxQuality) {
    let tmp = map1;
    let closure_0 = map1(maxQuality.maxFrameRate);
    return null == closure_12.find((fps) => {
      let tmp = fps.fps === closure_0;
      if (tmp) {
        tmp = !(null != fps.quality || null != fps.guildPremiumTier);
      }
      return tmp;
    });
  }
};
export const isPremiumRequirement = function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
};
export const getPremiumRequirement = function getPremiumRequirement(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return closure_12.find((preset) => (null == preset.preset || preset.preset === closure_0) && preset.resolution === closure_1 && preset.fps === closure_2);
};
export const getResolutionText = function getResolutionText(maxResolution) {
  let stringResult;
  if (maxResolution.type === ResolutionTypes.SOURCE) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.XjXqzh);
  } else {
    const intl = intl3.intl;
    const obj = { resolution: maxResolution.height };
    stringResult = intl.formatToPlainString(intl3.t.TEOC0I, obj);
  }
  return stringResult;
};
export const getFPSText = function getFPSText(maxFrameRate) {
  const intl = intl3.intl;
  const obj = { fps: maxFrameRate };
  return intl.formatToPlainString(intl3.t.Qb44XH, obj);
};
export const getMaxQuality = function getMaxQuality(participant) {
  let tmp = null;
  if (null != participant.maxResolution) {
    tmp = null;
    if (null != participant.maxFrameRate) {
      const obj = { maxFrameRate: null, maxResolution: null };
      ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = participant);
      tmp = obj;
    }
  }
  return tmp;
};
export const useMaxQuality = function useMaxQuality(participant) {
  let guildId;
  let id;
  let state;
  let stateFromStores;
  _require = participant;
  let obj = require("get initialized");
  const items = [ApplicationStreamingSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => state.getState());
  let obj2 = require("get initialized");
  const items1 = [AuthenticationStore];
  stateFromStores = obj2.useStateFromStores(items1, () => id.getId());
  const items2 = [RTCConnectionStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => guildId.getGuildId());
  const items3 = [stateFromStores, stateFromStores1, participant, stateFromStoresObject];
  return stateFromStores1.useMemo(() => {
    let FIXED;
    let tmp3;
    let tmp4;
    let tmp7;
    if (stateFromStores === participant.user.id) {
      const obj2 = { maxFrameRate: stateFromStoresObject.fps, maxResolution: tmp7("useMaxQuality", stateFromStores1, size, tmp4.fps) };
      size = { height: stateFromStoresObject.resolution, width: 0, type: FIXED };
      tmp4 = stateFromStoresObject;
      tmp7 = getReportedStreamResolutionDefault;
      if (0 === stateFromStoresObject.resolution) {
        FIXED = ResolutionTypes.SOURCE;
      } else {
        FIXED = ResolutionTypes.FIXED;
      }
      tmp3 = obj2;
    } else {
      tmp3 = null;
      if (null != participant.maxResolution) {
        tmp3 = null;
        if (null != participant.maxFrameRate) {
          const obj = { maxFrameRate: null, maxResolution: null };
          ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = participant);
          tmp3 = obj;
        }
      }
    }
    return tmp3;
  }, items3);
};
export const trackStreamSettingsUpdate = function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  let guildPremiumTier;
  let premiumTier;
  let tmp10;
  let closure_0 = preset;
  let closure_1 = resolution;
  let closure_2 = frameRate;
  const found = closure_12.find((preset) => (null == preset.preset || preset.preset === closure_0) && preset.resolution === closure_1 && preset.fps === closure_2);
  const currentUser = UserStore.getCurrentUser();
  const guildId = RTCConnectionStore.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let premiumType;
  const track = AnalyticsUtilsDefault.track;
  const STREAM_SETTINGS_UPDATE = AnalyticEvents.STREAM_SETTINGS_UPDATE;
  AnalyticsUtilsDefault;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  const obj = { user_premium_tier: premiumType, guild_premium_tier: premiumTier, stream_quality_user_premium_tier: tmp10, stream_quality_guild_premium_tier: guildPremiumTier, stream_quality_preset: preset, stream_quality_resolution: resolution, stream_quality_frame_rate: frameRate, soundshare_enabled: sound };
  premiumTier = undefined;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  let quality;
  if (found != null) {
    quality = found.quality;
  }
  tmp10 = null;
  if (null != quality) {
    tmp10 = closure_15[found.quality];
  }
  guildPremiumTier = undefined;
  if (found != null) {
    guildPremiumTier = found.guildPremiumTier;
  }
  track(STREAM_SETTINGS_UPDATE, obj);
};

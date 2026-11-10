// Module ID: 5942
// Function ID: 5943
// Name: StreamQualityUtils
// Dependencies: [19, 5943, 502, 4885, 5764, 1383, 1072, 5864, 1385, 5768, 1113, 504, 5944, 1252, 2]
// Exports: getFPSText, getMaxQuality, getPremiumRequirement, getResolutionText, isPremiumFPS, isPremiumRequirement, isPremiumResolution, trackStreamSettingsUpdate, useMaxQuality

// Module 5942 (StreamQualityUtils)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import Constants2 from "Constants" /* 5768 */;
import getReportedStreamResolutionDefault from "getReportedStreamResolution" /* 5944 */;
import react from "react" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 5943 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4885 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import UserStore from "UserStore" /* 1383 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5864 */;
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

export function isPremiumResolution(maxQuality) {
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
}
export function isPremiumFPS(maxQuality) {
  if (null != maxQuality) {
    let tmp = map1;
    let closure_0 = map1(maxQuality.maxFrameRate);
    return null == authStore2.find((fps) => {
      let tmp = fps.fps === closure_0;
      if (tmp) {
        tmp = !(null != fps.quality || null != fps.guildPremiumTier);
      }
      return tmp;
    });
  }
}
export function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
}
export function getPremiumRequirement(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return authStore2.find((preset) => (null == preset.preset || preset.preset === closure_0) && preset.resolution === closure_1 && preset.fps === closure_2);
}
export function getResolutionText(maxResolution) {
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
}
export function getFPSText(maxFrameRate) {
  const intl = intl3.intl;
  const obj = { fps: maxFrameRate };
  return intl.formatToPlainString(intl3.t.Qb44XH, obj);
}
export function getMaxQuality(participant) {
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
}
export function useMaxQuality(participant) {
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
}
export function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  let guildPremiumTier;
  let premiumTier;
  let tmp10;
  let closure_0 = preset;
  let closure_1 = resolution;
  let closure_2 = frameRate;
  const found = authStore2.find((preset) => (null == preset.preset || preset.preset === closure_0) && preset.resolution === closure_1 && preset.fps === closure_2);
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
}

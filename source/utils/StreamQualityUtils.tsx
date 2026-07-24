// Module ID: 8895
// Function ID: 70104
// Name: isPremiumRequirement
// Dependencies: [31, 4220, 1194, 1838, 4202, 1849, 653, 4185, 1851, 4191, 1212, 566, 675, 2]
// Exports: getFPSText, getResolutionText, isPremiumFPS, isPremiumResolution, trackStreamSettingsUpdate, useMaxQuality

// Module 8895 (isPremiumRequirement)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import makeButton from "makeButton";
import { StreamQualitiesToPremiumType as closure_15 } from "GuildFeatures";
import { ResolutionTypes } from "DesktopSources";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
}
function getPremiumRequirement(preset, resolution, frameRate) {
  let closure_0 = preset;
  let closure_1 = resolution;
  let closure_2 = frameRate;
  return closure_12.find((preset) => {
    let tmp = null == preset.preset;
    if (!tmp) {
      tmp = preset.preset === closure_0;
    }
    if (tmp) {
      tmp = preset.resolution === closure_1;
    }
    if (tmp) {
      tmp = preset.fps === closure_2;
    }
    return tmp;
  });
}
function getMaxQuality(participant) {
  let tmp = null;
  if (null != participant.maxResolution) {
    tmp = null;
    if (null != participant.maxFrameRate) {
      const obj = {};
      ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = participant);
      tmp = obj;
    }
  }
  return tmp;
}
({ ApplicationStreamFPS: closure_10, ApplicationStreamResolutions: closure_11, ApplicationStreamSettingRequirements: closure_12, getApplicationFramerate: closure_13, getApplicationResolution: closure_14 } = makeButton);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/StreamQualityUtils.tsx");

export const isPremiumResolution = function isPremiumResolution(maxQuality) {
  if (null != maxQuality) {
    if (maxQuality.maxResolution.type === ResolutionTypes.SOURCE) {
      let height = constants.RESOLUTION_SOURCE;
    } else {
      height = maxQuality.maxResolution.height;
    }
    let closure_0 = callback2(height);
    let tmp6 = callback(maxQuality.maxFrameRate) !== FPS_5.FPS_5;
    if (tmp6) {
      tmp6 = null == closure_12.find((resolution) => {
        let tmp = resolution.resolution === closure_0;
        if (tmp) {
          tmp = resolution.fps !== outer1_10.FPS_5;
        }
        if (tmp) {
          tmp = !outer1_17(resolution);
        }
        return tmp;
      });
    }
    return tmp6;
  }
};
export const isPremiumFPS = function isPremiumFPS(maxQuality) {
  if (null != maxQuality) {
    let closure_0 = callback(maxQuality.maxFrameRate);
    return null == closure_12.find((fps) => {
      let tmp = fps.fps === closure_0;
      if (tmp) {
        tmp = !outer1_17(fps);
      }
      return tmp;
    });
  }
};
export { isPremiumRequirement };
export { getPremiumRequirement };
export const getResolutionText = function getResolutionText(maxResolution) {
  if (maxResolution.type === ResolutionTypes.SOURCE) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.XjXqzh);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { resolution: maxResolution.height };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.TEOC0I, obj);
  }
  return stringResult;
};
export const getFPSText = function getFPSText(maxFrameRate) {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Qb44XH, { fps: maxFrameRate });
};
export { getMaxQuality };
export const useMaxQuality = function useMaxQuality(participant) {
  const _require = participant;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(stateFromStores[11]).useStateFromStoresObject(items, () => outer1_4.getState());
  let obj = _require(stateFromStores[11]);
  const items1 = [closure_5];
  stateFromStores = _require(stateFromStores[11]).useStateFromStores(items1, () => outer1_5.getId());
  const items2 = [stateFromStores, participant, stateFromStoresObject];
  return React.useMemo(() => {
    if (stateFromStores === participant.user.id) {
      let obj = { maxFrameRate: stateFromStoresObject.fps };
      obj = { height: stateFromStoresObject.resolution, width: 0 };
      if (0 === stateFromStoresObject.resolution) {
        let FIXED = outer1_16.SOURCE;
      } else {
        FIXED = outer1_16.FIXED;
      }
      obj.type = FIXED;
      obj.maxResolution = obj;
    } else {
      return outer1_19(participant);
    }
  }, items2);
};
export const trackStreamSettingsUpdate = function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  const tmp = getPremiumRequirement(preset, resolution, frameRate);
  currentUser = currentUser.getCurrentUser();
  guildId = guildId.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = guild.getGuild(guildId);
  }
  let obj = importDefault(675);
  obj = {};
  let premiumType;
  if (null != currentUser) {
    premiumType = currentUser.premiumType;
  }
  obj.user_premium_tier = premiumType;
  let premiumTier;
  if (null != guild) {
    premiumTier = guild.premiumTier;
  }
  obj.guild_premium_tier = premiumTier;
  let quality;
  if (null != tmp) {
    quality = tmp.quality;
  }
  let tmp9 = null;
  if (null != quality) {
    tmp9 = table[tmp.quality];
  }
  obj.stream_quality_user_premium_tier = tmp9;
  let guildPremiumTier;
  if (null != tmp) {
    guildPremiumTier = tmp.guildPremiumTier;
  }
  obj.stream_quality_guild_premium_tier = guildPremiumTier;
  obj.stream_quality_preset = preset;
  obj.stream_quality_resolution = resolution;
  obj.stream_quality_frame_rate = frameRate;
  obj.soundshare_enabled = sound;
  obj.track(AnalyticEvents.STREAM_SETTINGS_UPDATE, obj);
};

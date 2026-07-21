// Module ID: 8848
// Function ID: 69824
// Name: isPremiumRequirement
// Dependencies: []
// Exports: getFPSText, getResolutionText, isPremiumFPS, isPremiumResolution, trackStreamSettingsUpdate, useMaxQuality

// Module 8848 (isPremiumRequirement)
function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
}
function getPremiumRequirement(preset, resolution, frameRate) {
  resolution = preset;
  const importDefault = resolution;
  const dependencyMap = frameRate;
  return closure_12.find((preset) => {
    let tmp = null == preset.preset;
    if (!tmp) {
      tmp = preset.preset === preset;
    }
    if (tmp) {
      tmp = preset.resolution === arg1;
    }
    if (tmp) {
      tmp = preset.fps === arg2;
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
({ ApplicationStreamFPS: closure_10, ApplicationStreamResolutions: closure_11, ApplicationStreamSettingRequirements: closure_12, getApplicationFramerate: closure_13, getApplicationResolution: closure_14 } = arg1(dependencyMap[7]));
let closure_15 = arg1(dependencyMap[8]).StreamQualitiesToPremiumType;
const ResolutionTypes = arg1(dependencyMap[9]).ResolutionTypes;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("utils/StreamQualityUtils.tsx");

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
          tmp = resolution.fps !== FPS_5.FPS_5;
        }
        if (tmp) {
          tmp = !callback(resolution);
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
        tmp = !callback(fps);
      }
      return tmp;
    });
  }
};
export { isPremiumRequirement };
export { getPremiumRequirement };
export const getResolutionText = function getResolutionText(maxResolution) {
  if (maxResolution.type === ResolutionTypes.SOURCE) {
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.XjXqzh);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    const obj = { resolution: maxResolution.height };
    stringResult = intl.formatToPlainString(arg1(dependencyMap[10]).t.TEOC0I, obj);
  }
  return stringResult;
};
export const getFPSText = function getFPSText(maxFrameRate) {
  const intl = arg1(dependencyMap[10]).intl;
  return intl.formatToPlainString(arg1(dependencyMap[10]).t.Qb44XH, { fps: maxFrameRate });
};
export { getMaxQuality };
export const useMaxQuality = function useMaxQuality(participant) {
  const arg1 = participant;
  const items = [closure_4];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items, () => state.getState());
  const importDefault = stateFromStoresObject;
  const obj = arg1(dependencyMap[11]);
  const items1 = [closure_5];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items1, () => id.getId());
  const dependencyMap = stateFromStores;
  const items2 = [stateFromStores, participant, stateFromStoresObject];
  return React.useMemo(() => {
    if (stateFromStores === arg0.user.id) {
      let obj = { maxFrameRate: stateFromStoresObject.fps };
      obj = { height: stateFromStoresObject.resolution, width: 0 };
      if (0 === stateFromStoresObject.resolution) {
        let FIXED = constants.SOURCE;
      } else {
        FIXED = constants.FIXED;
      }
      obj.type = FIXED;
      obj.maxResolution = obj;
    } else {
      return callback(arg0);
    }
  }, items2);
};
export const trackStreamSettingsUpdate = function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  const tmp = getPremiumRequirement(preset, resolution, frameRate);
  const currentUser = currentUser.getCurrentUser();
  const guildId = guildId.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = guild.getGuild(guildId);
  }
  let obj = importDefault(dependencyMap[12]);
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
    tmp9 = closure_15[tmp.quality];
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

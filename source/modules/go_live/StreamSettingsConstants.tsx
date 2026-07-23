// Module ID: 4185
// Function ID: 36020
// Name: makeButton
// Dependencies: [653, 1851, 1212, 2]
// Exports: getApplicationFramerate, getApplicationResolution

// Module 4185 (makeButton)
import { BoostedGuildTiers } from "ME";
import { StreamQualities } from "GuildFeatures";

function makeButton(RESOLUTION_1080, arg1) {
  let closure_0 = RESOLUTION_1080;
  let closure_1 = arg1;
  const obj = { value: RESOLUTION_1080 };
  Object.defineProperty(obj, "label", {
    get: () => {
      if (null != callback) {
        let StringResult = callback();
      } else {
        const _String = String;
        StringResult = String(closure_0);
      }
      return StringResult;
    },
    set: undefined
  });
  Object.defineProperty(obj, "subtext", {
    get: () => {
      let tmp;
      if (null != callback2) {
        tmp = callback2();
      }
      return tmp;
    },
    set: undefined
  });
  return obj;
}
function makeResolutionLabel(RESOLUTION_1080) {
  if (RESOLUTION_1080 === obj.RESOLUTION_SOURCE) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.XjXqzh);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { resolution: RESOLUTION_1080 };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.TEOC0I, obj);
  }
  return stringResult;
}
let obj = { RESOLUTION_480: 480, [480]: "RESOLUTION_480", RESOLUTION_720: 720, [720]: "RESOLUTION_720", RESOLUTION_1080: 1080, [1080]: "RESOLUTION_1080", RESOLUTION_1440: 1440, [1440]: "RESOLUTION_1440", RESOLUTION_SOURCE: 0, [0]: "RESOLUTION_SOURCE" };
obj = { FPS_5: 5, [5]: "FPS_5", FPS_15: 15, [15]: "FPS_15", FPS_30: 30, [30]: "FPS_30", FPS_60: 60, [60]: "FPS_60" };
obj = { PRESET_VIDEO: 1, [1]: "PRESET_VIDEO", PRESET_DOCUMENTS: 2, [2]: "PRESET_DOCUMENTS", PRESET_CUSTOM: 3, [3]: "PRESET_CUSTOM", PRESET_AUTO: 4, [4]: "PRESET_AUTO", PRESET_MOBILE_DEFAULT: 5, [5]: "PRESET_MOBILE_DEFAULT", PRESET_MOBILE_PERFORMANCE: 6, [6]: "PRESET_MOBILE_PERFORMANCE", PRESET_MOBILE_HIGH_QUALITY: 7, [7]: "PRESET_MOBILE_HIGH_QUALITY" };
const items = [{ resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_60, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_30, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_15, quality: StreamQualities.HIGH_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_SOURCE, fps: obj.FPS_5, preset: obj.PRESET_DOCUMENTS }, { resolution: obj.RESOLUTION_1440, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1440, fps: obj.FPS_30, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1440, fps: obj.FPS_15, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1080, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1080, fps: obj.FPS_30, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_1080, fps: obj.FPS_15, guildPremiumTier: BoostedGuildTiers.TIER_2, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_1, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_30 }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_15 }, { resolution: obj.RESOLUTION_720, fps: obj.FPS_5 }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_60, guildPremiumTier: BoostedGuildTiers.TIER_1, quality: StreamQualities.MID_STREAMING_QUALITY }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_30 }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_15 }, { resolution: obj.RESOLUTION_480, fps: obj.FPS_5 }];
const items1 = [
  makeButton(obj.RESOLUTION_720),
  makeButton(obj.RESOLUTION_1080),
  makeButton(obj.RESOLUTION_1440),
  makeButton(obj.RESOLUTION_SOURCE, () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XjXqzh);
  })
];
const items2 = [makeButton(obj.RESOLUTION_720), makeButton(obj.RESOLUTION_1080), makeButton(obj.RESOLUTION_1440)];
const items3 = [makeButton(obj.RESOLUTION_480, () => makeResolutionLabel(obj.RESOLUTION_480)), makeButton(obj.RESOLUTION_720, () => makeResolutionLabel(obj.RESOLUTION_720)), makeButton(obj.RESOLUTION_1080, () => makeResolutionLabel(obj.RESOLUTION_1080)), makeButton(obj.RESOLUTION_1440, () => makeResolutionLabel(obj.RESOLUTION_1440)), makeButton(obj.RESOLUTION_SOURCE, () => makeResolutionLabel(obj.RESOLUTION_SOURCE))];
const items4 = [makeButton(obj.FPS_15), makeButton(obj.FPS_30), makeButton(obj.FPS_60)];
const items5 = [
  makeButton(obj.FPS_15, () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { value: obj.FPS_15 };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["bW+JCW"], obj);
  }),
  makeButton(obj.FPS_30, () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { value: obj.FPS_30 };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["bW+JCW"], obj);
  }),
  makeButton(obj.FPS_60, () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { value: obj.FPS_60 };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["bW+JCW"], obj);
  })
];
const result = require("getSystemLocale").fileFinishedImporting("modules/go_live/StreamSettingsConstants.tsx");

export const ApplicationStreamResolutions = obj;
export const getApplicationResolution = function getApplicationResolution(arg0) {
  if (obj.RESOLUTION_480 === arg0) {
    return obj.RESOLUTION_480;
  } else if (obj.RESOLUTION_720 === arg0) {
    return obj.RESOLUTION_720;
  } else if (obj.RESOLUTION_1080 === arg0) {
    return obj.RESOLUTION_1080;
  } else if (obj.RESOLUTION_1440 === arg0) {
    return obj.RESOLUTION_1440;
  } else if (obj.RESOLUTION_SOURCE === arg0) {
    return obj.RESOLUTION_SOURCE;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown resolution: " + arg0);
    throw error;
  }
};
export const ApplicationStreamFPS = obj;
export const ApplicationStreamPresets = obj;
export const getApplicationFramerate = function getApplicationFramerate(arg0) {
  if (obj.FPS_5 === arg0) {
    return obj.FPS_5;
  } else if (obj.FPS_15 === arg0) {
    return obj.FPS_15;
  } else if (obj.FPS_30 === arg0) {
    return obj.FPS_30;
  } else if (obj.FPS_60 === arg0) {
    return obj.FPS_60;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown frame rate: " + arg0);
    throw error;
  }
};
export const ApplicationStreamSettingRequirements = items;
export const ApplicationStreamResolutionButtons = items1;
export const GoLiveDeviceResolutionButtons = items2;
export { makeResolutionLabel };
export const ApplicationStreamResolutionButtonsWithSuffixLabel = items3;
export const ApplicationStreamFPSButtons = items4;
export const ApplicationStreamFPSButtonsWithSuffixLabel = items5;

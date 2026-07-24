// Module ID: 8889
// Function ID: 70055
// Name: isCustomBackgroundOption
// Dependencies: [1348, 4202, 7940, 653, 1392, 4324, 675, 2]
// Exports: getVideoBackgroundOptionFromProto, getVideoBackgroundProtoFromOption, trackBackgroundOptionAdded, trackBackgroundOptionDeleted, trackBackgroundOptionUpdated

// Module 8889 (isCustomBackgroundOption)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import VideoFilterType from "VideoFilterType";
import { AnalyticEvents } from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function isCustomBackgroundOption(lastUsedVideoBackgroundOption) {
  let tmp = null != lastUsedVideoBackgroundOption;
  if (tmp) {
    tmp = "object" === typeof lastUsedVideoBackgroundOption;
  }
  if (tmp) {
    tmp = "id" in lastUsedVideoBackgroundOption;
  }
  if (tmp) {
    let flag = lastUsedVideoBackgroundOption.type === constants.BACKGROUND;
    if (!flag) {
      const type = lastUsedVideoBackgroundOption.type;
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
}
function isDefaultBackgroundOption(videoBackgroundOptionFromProto) {
  let tmp = "number" === typeof videoBackgroundOptionFromProto;
  if (tmp) {
    tmp = videoBackgroundOptionFromProto in closure_5;
  }
  return tmp;
}
function isAnimatedBackgroundOption(asset) {
  if (isDefaultBackgroundOption(asset)) {
    let hasItem = closure_7.includes(asset);
  } else {
    const tmp2 = isCustomBackgroundOption(asset);
    hasItem = tmp2;
    if (tmp2) {
      let isAnimatedIconHashResult = require(1392) /* getAvatarURL */.isAnimatedIconHash(asset.asset);
      if (!isAnimatedIconHashResult) {
        isAnimatedIconHashResult = require(1392) /* getAvatarURL */.isVideoAssetHash(asset.asset);
        const obj2 = require(1392) /* getAvatarURL */;
      }
      hasItem = isAnimatedIconHashResult;
      const obj = require(1392) /* getAvatarURL */;
    }
  }
  return hasItem;
}
function getEffectAnalyticsType(lastUsedVideoBackgroundOption) {
  let str = "None";
  if (null != lastUsedVideoBackgroundOption) {
    str = "Video Background";
  }
  return str;
}
function getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption) {
  let str = "None";
  if (null != lastUsedVideoBackgroundOption) {
    let str2 = "Custom";
    if (!isCustomBackgroundOption(lastUsedVideoBackgroundOption)) {
      let str3 = "Blur";
      if ("blur" !== lastUsedVideoBackgroundOption) {
        let str5 = "Cybercity";
        if (closure_5.OPTION_1 !== lastUsedVideoBackgroundOption) {
          str5 = "Discord the Movie";
          if (closure_5.OPTION_2 !== lastUsedVideoBackgroundOption) {
            str5 = "Wumpus Vacation";
            if (closure_5.OPTION_3 !== lastUsedVideoBackgroundOption) {
              str5 = "Vaporwave";
              if (closure_5.OPTION_4 !== lastUsedVideoBackgroundOption) {
                str5 = "Capernite Day";
                if (closure_5.OPTION_7 !== lastUsedVideoBackgroundOption) {
                  str5 = "Capernite Night";
                  if (closure_5.OPTION_8 !== lastUsedVideoBackgroundOption) {
                    str5 = "Hacker Den";
                    if (closure_5.OPTION_9 !== lastUsedVideoBackgroundOption) {
                      if (closure_5.OPTION_10 === lastUsedVideoBackgroundOption) {
                        str5 = "Wumpice";
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const _HermesInternal = HermesInternal;
        str3 = "Preset - " + str5;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
({ DefaultVideoBackground: closure_5, VideoFilterType: closure_6, ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: closure_7 } = VideoFilterType);
const result = require("VideoFilterType").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundUtils.tsx");

export { isCustomBackgroundOption };
export { isDefaultBackgroundOption };
export { isAnimatedBackgroundOption };
export { getEffectAnalyticsType };
export { getEffectDetailAnalyticsName };
export const trackBackgroundOptionUpdated = function trackBackgroundOptionUpdated(lastUsedVideoBackgroundOption, location, Enabled) {
  const guildId = store.getGuildId();
  const channelId = store.getChannelId();
  channel = channel.getChannel(channelId);
  let obj = require(4324) /* _createForOfIteratorHelperLoose */;
  const voiceStateMetadata = obj.getVoiceStateMetadata(guildId, channelId, true);
  obj = { location, effect_type: getEffectAnalyticsType(lastUsedVideoBackgroundOption), effect_detail: getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption), effect_state: Enabled, channel_id: channelId };
  let type;
  if (null != channel) {
    type = channel.type;
  }
  obj.channel_type = type;
  obj.guild_id = guildId;
  ({ voice_state_count: obj3.voice_state_count, video_stream_count: obj3.video_stream_count } = voiceStateMetadata);
  obj.media_session_id = store.getMediaSessionId();
  obj.rtc_connection_id = store.getRTCConnectionId();
  obj.is_animated = isAnimatedBackgroundOption(lastUsedVideoBackgroundOption);
  importDefault(675).track(AnalyticEvents.VIDEO_EFFECT_UPDATED, obj);
};
export const trackBackgroundOptionAdded = function trackBackgroundOptionAdded(asset, is_video, is_from_tenor) {
  let obj = importDefault(675);
  obj = { is_animated: isAnimatedBackgroundOption(asset), is_video, is_from_tenor };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_ADDED, obj);
};
export const trackBackgroundOptionDeleted = function trackBackgroundOptionDeleted(asset) {
  let obj = importDefault(675);
  obj = { is_animated: isAnimatedBackgroundOption(asset) };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_DELETED, obj);
};
export const getVideoBackgroundProtoFromOption = function getVideoBackgroundProtoFromOption(closure_0) {
  if (null == closure_0) {
    let obj = { oneofKind: undefined };
  } else if (isCustomBackgroundOption(closure_0)) {
    obj = { oneofKind: "customAsset" };
    ({ id: obj5.id, asset: obj5.assetHash } = closure_0);
    obj.customAsset = {};
    const obj1 = {};
  } else if ("blur" === closure_0) {
    const obj2 = { oneofKind: "blur" };
    const obj3 = { useBlur: true };
    obj2.blur = obj3;
    obj = obj2;
  } else {
    obj = { oneofKind: "presetOption", presetOption: closure_0 };
  }
  return obj;
};
export const getVideoBackgroundOptionFromProto = function getVideoBackgroundOptionFromProto(prop, id) {
  if (null != prop) {
    if (undefined !== prop.oneofKind) {
      const oneofKind = prop.oneofKind;
      if ("customAsset" === oneofKind) {
        const obj = { type: constants.BACKGROUND, id: prop.customAsset.id, user_id: id, asset: prop.customAsset.assetHash };
        return obj;
      } else if ("blur" === oneofKind) {
        let str3 = null;
        if (prop.blur.useBlur) {
          str3 = "blur";
        }
        return str3;
      } else {
        return "presetOption" === oneofKind ? prop.presetOption : undefined;
      }
    }
  }
  return null;
};

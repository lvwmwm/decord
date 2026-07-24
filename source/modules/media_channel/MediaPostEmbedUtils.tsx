// Module ID: 4315
// Function ID: 37817
// Name: getMediaPostEmbedChannelPath
// Dependencies: [1838, 3767, 1849, 653, 4316, 1212, 4319, 1392, 1360, 4320, 4114, 4321, 2]
// Exports: canUseMediaPostEmbed, getMediaPostEmbedChannelId, getMediaPostEmbedCommonData

// Module 4315 (getMediaPostEmbedChannelPath)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
function getMediaPostEmbedChannelPath(url) {
  if (null != url) {
    const parseURLSafelyResult = require(4114) /* _createForOfIteratorHelperLoose */.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      const result = require(4114) /* _createForOfIteratorHelperLoose */.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        return require(4321) /* canViewChannel */.tryParseChannelPath(result);
      }
      const obj2 = require(4114) /* _createForOfIteratorHelperLoose */;
    }
    const obj = require(4114) /* _createForOfIteratorHelperLoose */;
  }
}
({ GuildFeatures: closure_6, MessageAttachmentFlags: closure_7 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_channel/MediaPostEmbedUtils.tsx");

export const getMediaPostEmbedCommonData = function getMediaPostEmbedCommonData(arg0) {
  let canAccess;
  let guild;
  let height;
  let mediaPostEmbedData;
  let parentChannel;
  let postThread;
  let selectedGuildId;
  let user;
  let width;
  ({ mediaPostEmbedData, guild, parentChannel, user, canAccess } = arg0);
  ({ postThread, selectedGuildId } = arg0);
  if (canAccess === undefined) {
    canAccess = false;
  }
  if (null == mediaPostEmbedData) {
    return null;
  } else {
    let has_media_attachment = !canAccess;
    const thumbnailImage = require(4316) /* MAX_THUMBNAIL_COUNT */.getThumbnailImage(mediaPostEmbedData.thumbnail);
    if (has_media_attachment) {
      has_media_attachment = mediaPostEmbedData.has_media_attachment;
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (canAccess) {
      let stringResult = string(t.UsZEBI);
    } else {
      stringResult = string(t.ReFzYZ);
    }
    let name;
    if (null != user) {
      let obj = importDefault(4319);
      name = obj.getName(mediaPostEmbedData.guild_id, mediaPostEmbedData.channel_id, user);
    }
    let avatarURL;
    if (null != user) {
      let id;
      if (null != guild) {
        id = guild.id;
      }
      avatarURL = user.getAvatarURL(id, 40);
    }
    if (!tmp9) {
      obj = {};
      ({ guild_id: obj3.id, guild_icon: obj3.icon } = mediaPostEmbedData);
      obj.size = 40;
      obj.canAnimate = false;
      avatarURL = importDefault(1392).getGuildIconURL(obj);
      const obj2 = importDefault(1392);
    }
    const thumbnail = mediaPostEmbedData.thumbnail;
    let flag3 = false;
    if (null != thumbnail) {
      ({ height, width } = thumbnail);
      flag3 = null != height && null != width && height >= width;
      const tmp12 = null != height && null != width && height >= width;
    }
    if (flag3) {
      flag3 = !has_media_attachment;
    }
    const obj7 = require(4316) /* MAX_THUMBNAIL_COUNT */;
    tmp9 = null != avatarURL && selectedGuildId === mediaPostEmbedData.guild_id;
    const thumbnail2 = mediaPostEmbedData.thumbnail;
    let flags;
    if (null != thumbnail2) {
      flags = thumbnail2.flags;
    }
    let num7 = 0;
    if (null != flags) {
      num7 = flags;
    }
    obj = {};
    const title = mediaPostEmbedData.title;
    let str = "";
    const obj4 = require(1360) /* hasFlag */;
    if (null != title) {
      str = title;
    }
    obj.title = str;
    obj.subtitle = mediaPostEmbedData.description;
    obj.ctaText = stringResult;
    obj.coverImage = thumbnailImage;
    let stringResult1;
    if (has_media_attachment) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t.Yonlia);
    }
    obj.coverImageOverlayText = stringResult1;
    ({ parent_channel_id: obj5.parentChannelId, channel_id: obj5.threadId } = mediaPostEmbedData);
    obj.postThread = postThread;
    obj.messageId = mediaPostEmbedData.message_id;
    obj.canAccess = canAccess;
    obj.guildId = mediaPostEmbedData.guild_id;
    let name1;
    if (null != guild) {
      name1 = guild.name;
    }
    if (null == name1) {
      name1 = mediaPostEmbedData.guild_name;
    }
    obj.guildName = name1;
    let author_id;
    if (null != mediaPostEmbedData) {
      author_id = mediaPostEmbedData.author_id;
    }
    obj.authorId = author_id;
    obj.authorName = name;
    let channelName;
    if (null != parentChannel) {
      channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(parentChannel, closure_5, _isNativeReflectConstruct);
      const obj6 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    }
    obj.channelName = channelName;
    obj.avatarUrl = avatarURL;
    obj.shouldShowBlurredThumbnailImage = has_media_attachment;
    obj.shouldContainMediaWithBackground = flag3;
    obj.shouldSpoiler = require(1360) /* hasFlag */.hasFlag(num7, constants2.IS_SPOILER);
    obj.obscureAwaitingScan = false;
    ({ flags: obj5.flags, content_scan_version: obj5.contentScanVersion } = mediaPostEmbedData);
    return obj;
  }
};
export const getMediaPostEmbedChannelId = function getMediaPostEmbedChannelId(url) {
  const tmp = getMediaPostEmbedChannelPath(url);
  if (null != tmp) {
    let channelId = tmp.threadId;
    if (null == channelId) {
      channelId = tmp.channelId;
    }
    if (channelId === tmp.messageId) {
      return channelId;
    }
  }
};
export { getMediaPostEmbedChannelPath };
export const canUseMediaPostEmbed = function canUseMediaPostEmbed(guildId, isMediaChannel) {
  guild = guild.getGuild(guildId);
  if (null != guild) {
    if (null != isMediaChannel) {
      const features = guild.features;
      let hasItem = features.has(constants.CREATOR_MONETIZABLE);
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      return true === isMediaChannel.isMediaChannel() && hasItem;
    }
  }
  return false;
};

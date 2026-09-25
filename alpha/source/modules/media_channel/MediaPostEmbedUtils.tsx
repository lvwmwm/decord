// Module ID: 4977
// Function ID: 4978
// Name: MediaPostEmbedUtils
// Dependencies: [2066, 4476, 1372, 1074, 4978, 1115, 4981, 1397, 1385, 4982, 4812, 4983, 2]
// Exports: canUseMediaPostEmbed, getMediaPostEmbedChannelId, getMediaPostEmbedChannelPath, getMediaPostEmbedCommonData

// Module 4977 (MediaPostEmbedUtils)
import FlagUtils from "FlagUtils" /* 1385 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import findCodedLinks from "findCodedLinks" /* 4812 */;
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils" /* 4978 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4981 */;
import GuildStore from "GuildStore" /* 2066 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ GuildFeatures: metroRequire, MessageAttachmentFlags: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedUtils.tsx");

export const getMediaPostEmbedCommonData = function getMediaPostEmbedCommonData(arg0) {
  ({ mediaPostEmbedData, guild, parentChannel, user, canAccess } = arg0);
  ({ postThread, selectedGuildId } = arg0);
  if (canAccess === undefined) {
    canAccess = false;
  }
  if (null == mediaPostEmbedData) {
    return null;
  } else {
    let has_media_attachment = !canAccess;
    const thumbnailImage = MediaPostThumbnailUtils.getThumbnailImage(mediaPostEmbedData.thumbnail);
    if (!canAccess) {
      has_media_attachment = mediaPostEmbedData.has_media_attachment;
    }
    const intl = tmp17(1115).intl;
    const string = intl.string;
    const t = tmp17(1115).t;
    if (canAccess) {
      let stringResult = string(t.UsZEBI);
    } else {
      stringResult = string(t.ReFzYZ);
    }
    let name;
    if (null != user) {
      name = NicknameUtilsDefault.getName(mediaPostEmbedData.guild_id, mediaPostEmbedData.channel_id, user);
    }
    let avatarURL;
    if (user != null) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      avatarURL = user.getAvatarURL(id, 40);
    }
    if (!tmp6) {
      ({ guild_id: obj3.id, guild_icon: obj3.icon } = mediaPostEmbedData);
      avatarURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 40, canAnimate: false });
      const obj4 = { id: null, icon: null, size: 40, canAnimate: false };
    }
    const thumbnail = mediaPostEmbedData.thumbnail;
    let flag = false;
    if (null != thumbnail) {
      ({ height, width } = thumbnail);
      flag = null != height && null != width && height >= width;
      const tmp8 = null != height && null != width && height >= width;
    }
    if (flag) {
      flag = !has_media_attachment;
    }
    tmp6 = null != avatarURL && selectedGuildId === mediaPostEmbedData.guild_id;
    const thumbnail2 = mediaPostEmbedData.thumbnail;
    let num2;
    if (thumbnail2 != null) {
      num2 = thumbnail2.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let str = mediaPostEmbedData.title;
    const tmp17Result = FlagUtils;
    if (str == null) {
      str = "";
    }
    const obj6 = { title: str, subtitle: mediaPostEmbedData.description, ctaText: stringResult, coverImage: thumbnailImage, coverImageOverlayText: null, parentChannelId: null, threadId: null, postThread: null, messageId: null, canAccess: null, guildId: null, guildName: null, authorId: null, authorName: null, channelName: null, avatarUrl: null, shouldShowBlurredThumbnailImage: null, shouldContainMediaWithBackground: null, shouldSpoiler: null, obscureAwaitingScan: false, flags: null, contentScanVersion: null };
    let stringResult1;
    if (has_media_attachment) {
      const intl2 = tmp17(1115).intl;
      stringResult1 = intl2.string(tmp17(1115).t.Yonlia);
    }
    obj6.coverImageOverlayText = stringResult1;
    ({ parent_channel_id: obj5.parentChannelId, channel_id: obj5.threadId } = mediaPostEmbedData);
    obj6.postThread = postThread;
    obj6.messageId = mediaPostEmbedData.message_id;
    obj6.canAccess = canAccess;
    obj6.guildId = mediaPostEmbedData.guild_id;
    let name1;
    if (guild != null) {
      name1 = guild.name;
    }
    if (name1 == null) {
      name1 = mediaPostEmbedData.guild_name;
    }
    obj6.guildName = name1;
    let author_id;
    if (mediaPostEmbedData != null) {
      author_id = mediaPostEmbedData.author_id;
    }
    obj6.authorId = author_id;
    obj6.authorName = name;
    let channelName;
    if (null != parentChannel) {
      channelName = tmp17(4982).computeChannelName(parentChannel, UserStore, RelationshipStore);
      const tmp17Result2 = tmp17(4982);
    }
    obj6.channelName = channelName;
    obj6.avatarUrl = avatarURL;
    obj6.shouldShowBlurredThumbnailImage = has_media_attachment;
    obj6.shouldContainMediaWithBackground = flag;
    obj6.shouldSpoiler = FlagUtils.hasFlag(num2, constants2.IS_SPOILER);
    ({ flags: obj5.flags, content_scan_version: obj5.contentScanVersion } = mediaPostEmbedData);
    return obj6;
  }
};
export const getMediaPostEmbedChannelId = function getMediaPostEmbedChannelId(url) {
  let tryParseChannelPathResult;
  if (null != url) {
    const parseURLSafelyResult = findCodedLinks.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      const result = tmp2(4812).remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        tryParseChannelPathResult = tmp2(4983).tryParseChannelPath(result);
        const tmp2Result2 = tmp2(4983);
      }
      const tmp2Result = tmp2(4812);
    }
  }
  if (null != tryParseChannelPathResult) {
    let channelId = tryParseChannelPathResult.threadId;
    if (channelId == null) {
      channelId = tryParseChannelPathResult.channelId;
    }
    if (channelId === tryParseChannelPathResult.messageId) {
      return channelId;
    }
  }
};
export const getMediaPostEmbedChannelPath = function getMediaPostEmbedChannelPath(url) {
  if (null != url) {
    const parseURLSafelyResult = findCodedLinks.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      const result = tmp(4812).remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        return tmp(4983).tryParseChannelPath(result);
      }
      const tmpResult = tmp(4812);
    }
  }
};
export const canUseMediaPostEmbed = function canUseMediaPostEmbed(guildId, isMediaChannel) {
  const guild = GuildStore.getGuild(guildId);
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

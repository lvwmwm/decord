// Module ID: 4311
// Function ID: 37784
// Name: getMediaPostEmbedChannelPath
// Dependencies: []
// Exports: canUseMediaPostEmbed, getMediaPostEmbedChannelId, getMediaPostEmbedCommonData

// Module 4311 (getMediaPostEmbedChannelPath)
function getMediaPostEmbedChannelPath(url) {
  if (null != url) {
    const parseURLSafelyResult = arg1(dependencyMap[10]).parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      const result = arg1(dependencyMap[10]).remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        return arg1(dependencyMap[11]).tryParseChannelPath(result);
      }
      const obj2 = arg1(dependencyMap[10]);
    }
    const obj = arg1(dependencyMap[10]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ GuildFeatures: closure_6, MessageAttachmentFlags: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/media_channel/MediaPostEmbedUtils.tsx");

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
    const thumbnailImage = arg1(dependencyMap[4]).getThumbnailImage(mediaPostEmbedData.thumbnail);
    if (has_media_attachment) {
      has_media_attachment = mediaPostEmbedData.has_media_attachment;
    }
    const intl = arg1(dependencyMap[5]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[5]).t;
    if (canAccess) {
      let stringResult = string(t.UsZEBI);
    } else {
      stringResult = string(t.ReFzYZ);
    }
    let name;
    if (null != user) {
      let obj = importDefault(dependencyMap[6]);
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
      avatarURL = importDefault(dependencyMap[7]).getGuildIconURL(obj);
      const obj2 = importDefault(dependencyMap[7]);
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
    const obj7 = arg1(dependencyMap[4]);
    const tmp9 = null != avatarURL && selectedGuildId === mediaPostEmbedData.guild_id;
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
    const obj4 = arg1(dependencyMap[8]);
    if (null != title) {
      str = title;
    }
    obj.title = str;
    obj.subtitle = mediaPostEmbedData.description;
    obj.ctaText = stringResult;
    obj.coverImage = thumbnailImage;
    let stringResult1;
    if (has_media_attachment) {
      const intl2 = arg1(dependencyMap[5]).intl;
      stringResult1 = intl2.string(arg1(dependencyMap[5]).t.Yonlia);
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
      channelName = arg1(dependencyMap[9]).computeChannelName(parentChannel, closure_5, closure_4);
      const obj6 = arg1(dependencyMap[9]);
    }
    obj.channelName = channelName;
    obj.avatarUrl = avatarURL;
    obj.shouldShowBlurredThumbnailImage = has_media_attachment;
    obj.shouldContainMediaWithBackground = flag3;
    obj.shouldSpoiler = arg1(dependencyMap[8]).hasFlag(num7, constants2.IS_SPOILER);
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
  const guild = guild.getGuild(guildId);
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

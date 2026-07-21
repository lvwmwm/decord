// Module ID: 12200
// Function ID: 93732
// Name: createMediaPostPreviewEmbedContent
// Dependencies: []
// Exports: default

// Module 12200 (createMediaPostPreviewEmbedContent)
const _module = require(dependencyMap[0]);
({ Image: closure_3, processColor: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const FetchState = require(dependencyMap[6]).FetchState;
const _module1 = require(dependencyMap[18]);
const result = _module1.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = require(dependencyMap[7]);
  const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else if (store3.getEmbedFetchState(mediaPostEmbedChannelId) !== FetchState.FETCHED) {
    return null;
  } else {
    const mediaPostEmbed = store3.getMediaPostEmbed(mediaPostEmbedChannelId);
    let media;
    if (null != mediaPostEmbed) {
      media = mediaPostEmbed.media;
    }
    if (null == media) {
      return null;
    } else {
      const guild = guild.getGuild(media.guild_id);
      const user = user.getUser(media.author_id);
      const channel = store2.getChannel(media.parent_channel_id);
      const channel1 = store2.getChannel(media.channel_id);
      let canViewChannelResult = null != channel;
      const guildId = guildId.getGuildId();
      if (canViewChannelResult) {
        let obj1 = require(dependencyMap[8]);
        canViewChannelResult = obj1.canViewChannel(channel);
      }
      let obj2 = require(dependencyMap[7]);
      obj = { mediaPostEmbedData: media, guild, parentChannel: channel, postThread: channel1, user, selectedGuildId: guildId, canAccess: canViewChannelResult };
      const mediaPostEmbedCommonData = obj2.getMediaPostEmbedCommonData(obj);
      if (null == mediaPostEmbedCommonData) {
        return null;
      } else {
        if (null != mediaPostEmbedCommonData.authorName) {
          if (null != mediaPostEmbedCommonData.channelName) {
            if (null != user) {
              const userAuthorWithProcessedColor = require(dependencyMap[10]).getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
              const intl6 = require(dependencyMap[9]).intl;
              obj = { username: mediaPostEmbedCommonData.authorName };
              obj1 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle, messageChannelId: mediaPostEmbedCommonData.threadId };
              obj.usernameOnClick = importDefault(dependencyMap[11])(obj1);
              obj.channelName = mediaPostEmbedCommonData.channelName;
              let formatToPartsResult = intl6.formatToParts(require(dependencyMap[9]).t.mCytFr, obj);
              const obj14 = require(dependencyMap[10]);
            }
            if (false === mediaPostEmbedCommonData.canAccess) {
              let tmp15 = callback(importDefault(dependencyMap[12]).unsafe_rawColors.TEAL_430);
            } else {
              tmp15 = callback(importDefault(dependencyMap[12]).unsafe_rawColors.BRAND_500);
            }
            let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
            if (isAnimatedImageUrlResult) {
              let obj5 = require(dependencyMap[13]);
              isAnimatedImageUrlResult = obj5.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
            }
            if (tmp22) {
              const _HermesInternal = HermesInternal;
              mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              obj2 = {};
              const merged = Object.assign(mediaPostEmbedCommonData);
              obj2["blurredCoverImage"] = closure_3.resolveAssetSource(importDefault(dependencyMap[14])).uri;
              obj2["footer"] = formatToPartsResult;
              obj2["ctaButtonColor"] = tmp15;
              return obj2;
            } else {
              let value = store.get("obscure_blur_effect_explicit_content_enabled");
              if (!value) {
                value = store.get("obscure_blur_effect_gore_content_enabled");
              }
              if (!value) {
                value = store.get("obscure_blur_effect_self_harm_content_enabled");
              }
              const isPendingScanVersionResult = require(dependencyMap[15]).isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
              let result = value;
              if (value) {
                result = require(dependencyMap[15]).shouldAgeVerifyForExplicitMedia();
                const obj8 = require(dependencyMap[15]);
              }
              let isVerifiedTeenResult = value;
              if (value) {
                isVerifiedTeenResult = require(dependencyMap[16]).isVerifiedTeen();
                const obj9 = require(dependencyMap[16]);
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj3 = {};
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  obj3["footer"] = formatToPartsResult;
                  let str18 = "";
                  let str19 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = require(dependencyMap[9]).intl;
                    str19 = intl4.string(require(dependencyMap[9]).t.F+x38C).toUpperCase();
                    const str20 = intl4.string(require(dependencyMap[9]).t.F+x38C);
                  }
                  obj3["spoiler"] = str19;
                  if (value) {
                    const intl5 = require(dependencyMap[9]).intl;
                    str18 = intl5.string(require(dependencyMap[9]).t.SpxcUR);
                  }
                  obj3["obscure"] = str18;
                  obj3["obscureAwaitingScan"] = isPendingScanVersionResult;
                  obj3["verifyAge"] = result;
                  obj3["obscureHideControls"] = isVerifiedTeenResult;
                  obj3["obscureIsOpaque"] = value;
                  obj3["ctaButtonColor"] = tmp15;
                  obj3["backgroundImage"] = require(dependencyMap[17]).getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage);
                  let obj4 = obj3;
                  const obj12 = require(dependencyMap[17]);
                }
                return obj4;
              }
              obj4 = {};
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              obj4["footer"] = formatToPartsResult;
              let str7 = "";
              let str8 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = require(dependencyMap[9]).intl;
                str8 = intl2.string(require(dependencyMap[9]).t.F+x38C).toUpperCase();
                const str9 = intl2.string(require(dependencyMap[9]).t.F+x38C);
              }
              obj4["spoiler"] = str8;
              if (value) {
                const intl3 = require(dependencyMap[9]).intl;
                str7 = intl3.string(require(dependencyMap[9]).t.SpxcUR);
              }
              obj4["obscure"] = str7;
              obj4["obscureAwaitingScan"] = isPendingScanVersionResult;
              obj4["verifyAge"] = result;
              obj4["obscureHideControls"] = isVerifiedTeenResult;
              obj4["obscureIsOpaque"] = value;
              obj4["ctaButtonColor"] = tmp15;
              const obj7 = require(dependencyMap[15]);
            }
            const tmp22 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
          }
        }
        const intl = require(dependencyMap[9]).intl;
        obj5 = { guildName: mediaPostEmbedCommonData.guildName };
        formatToPartsResult = intl.formatToParts(require(dependencyMap[9]).t.p4VdWJ, obj5);
      }
    }
  }
};

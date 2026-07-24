// Module ID: 12345
// Function ID: 96161
// Name: createMediaPostPreviewEmbedContent
// Dependencies: [27, 4129, 1348, 1838, 3947, 1849, 10470, 4315, 4321, 1212, 7738, 7740, 689, 4317, 12346, 6834, 4347, 4316, 2]
// Exports: default

// Module 12345 (createMediaPostPreviewEmbedContent)
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

let closure_3;
let closure_4;
({ Image: closure_3, processColor: closure_4 } = get_ActivityIndicator);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = require(4315) /* getMediaPostEmbedChannelPath */;
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
      guild = guild.getGuild(media.guild_id);
      user = user.getUser(media.author_id);
      const channel = store2.getChannel(media.parent_channel_id);
      const channel1 = store2.getChannel(media.channel_id);
      let canViewChannelResult = null != channel;
      guildId = guildId.getGuildId();
      if (canViewChannelResult) {
        let obj1 = require(4321) /* canViewChannel */;
        canViewChannelResult = obj1.canViewChannel(channel);
      }
      let obj2 = require(4315) /* getMediaPostEmbedChannelPath */;
      obj = { mediaPostEmbedData: media, guild, parentChannel: channel, postThread: channel1, user, selectedGuildId: guildId, canAccess: canViewChannelResult };
      const mediaPostEmbedCommonData = obj2.getMediaPostEmbedCommonData(obj);
      if (null == mediaPostEmbedCommonData) {
        return null;
      } else {
        if (null != mediaPostEmbedCommonData.authorName) {
          if (null != mediaPostEmbedCommonData.channelName) {
            if (null != user) {
              const userAuthorWithProcessedColor = require(7738) /* getMessageAuthorWithProcessedColor */.getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
              const intl6 = require(1212) /* getSystemLocale */.intl;
              obj = { username: mediaPostEmbedCommonData.authorName };
              obj1 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle, messageChannelId: mediaPostEmbedCommonData.threadId };
              obj.usernameOnClick = importDefault(7740)(obj1);
              obj.channelName = mediaPostEmbedCommonData.channelName;
              let formatToPartsResult = intl6.formatToParts(require(1212) /* getSystemLocale */.t.mCytFr, obj);
              const obj14 = require(7738) /* getMessageAuthorWithProcessedColor */;
            }
            if (false === mediaPostEmbedCommonData.canAccess) {
              let tmp15 = callback(importDefault(689).unsafe_rawColors.TEAL_430);
            } else {
              tmp15 = callback(importDefault(689).unsafe_rawColors.BRAND_500);
            }
            let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
            if (isAnimatedImageUrlResult) {
              let obj5 = require(4317) /* urlMatchesFileExtension */;
              isAnimatedImageUrlResult = obj5.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
            }
            if (tmp22) {
              const _HermesInternal = HermesInternal;
              mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              obj2 = {};
              const merged = Object.assign(mediaPostEmbedCommonData);
              obj2["blurredCoverImage"] = closure_3.resolveAssetSource(importDefault(12346)).uri;
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
              const isPendingScanVersionResult = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
              let result = value;
              if (value) {
                result = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.shouldAgeVerifyForExplicitMedia();
                const obj8 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
              }
              let isVerifiedTeenResult = value;
              if (value) {
                isVerifiedTeenResult = require(4347) /* isReactiveCheckEnabled */.isVerifiedTeen();
                const obj9 = require(4347) /* isReactiveCheckEnabled */;
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj3 = {};
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  obj3["footer"] = formatToPartsResult;
                  let str18 = "";
                  let str19 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = require(1212) /* getSystemLocale */.intl;
                    str19 = intl4.string(require(1212) /* getSystemLocale */.t["F+x38C"]).toUpperCase();
                    const str20 = intl4.string(require(1212) /* getSystemLocale */.t["F+x38C"]);
                  }
                  obj3["spoiler"] = str19;
                  if (value) {
                    const intl5 = require(1212) /* getSystemLocale */.intl;
                    str18 = intl5.string(require(1212) /* getSystemLocale */.t.SpxcUR);
                  }
                  obj3["obscure"] = str18;
                  obj3["obscureAwaitingScan"] = isPendingScanVersionResult;
                  obj3["verifyAge"] = result;
                  obj3["obscureHideControls"] = isVerifiedTeenResult;
                  obj3["obscureIsOpaque"] = value;
                  obj3["ctaButtonColor"] = tmp15;
                  obj3["backgroundImage"] = require(4316) /* MAX_THUMBNAIL_COUNT */.getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage);
                  let obj4 = obj3;
                  const obj12 = require(4316) /* MAX_THUMBNAIL_COUNT */;
                }
                return obj4;
              }
              obj4 = {};
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              obj4["footer"] = formatToPartsResult;
              let str7 = "";
              let str8 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = require(1212) /* getSystemLocale */.intl;
                str8 = intl2.string(require(1212) /* getSystemLocale */.t["F+x38C"]).toUpperCase();
                const str9 = intl2.string(require(1212) /* getSystemLocale */.t["F+x38C"]);
              }
              obj4["spoiler"] = str8;
              if (value) {
                const intl3 = require(1212) /* getSystemLocale */.intl;
                str7 = intl3.string(require(1212) /* getSystemLocale */.t.SpxcUR);
              }
              obj4["obscure"] = str7;
              obj4["obscureAwaitingScan"] = isPendingScanVersionResult;
              obj4["verifyAge"] = result;
              obj4["obscureHideControls"] = isVerifiedTeenResult;
              obj4["obscureIsOpaque"] = value;
              obj4["ctaButtonColor"] = tmp15;
              const obj7 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
            }
            tmp22 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
          }
        }
        const intl = require(1212) /* getSystemLocale */.intl;
        obj5 = { guildName: mediaPostEmbedCommonData.guildName };
        formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t.p4VdWJ, obj5);
      }
    }
  }
};

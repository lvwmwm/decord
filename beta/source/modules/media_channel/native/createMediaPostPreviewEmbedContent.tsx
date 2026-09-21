// Module ID: 13550
// Function ID: 13551
// Name: createMediaPostPreviewEmbedContent
// Dependencies: [17, 4757, 2045, 2067, 4580, 1376, 11558, 4906, 4912, 1119, 8223, 8225, 580, 4908, 13551, 7847, 4970, 4907, 2]
// Exports: default

// Module 13550 (createMediaPostPreviewEmbedContent)
import nativeDefault from "native" /* 580 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 4906 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8225 */;
import MediaPostEmbedStore2 from "MediaPostEmbedStore" /* 11558 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4757 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;
import UserStore from "UserStore" /* 1376 */;
import size from "module_2" /* 2 */;

const MediaPostEmbedStore = MediaPostEmbedStore2;

({ Image: c3, processColor: closure_4 } = get_ActivityIndicator);
const FetchState = MediaPostEmbedStore2.FetchState;
let result = size.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const mediaPostEmbedChannelId = MediaPostEmbedUtils.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else {
    if (MediaPostEmbedStore.getEmbedFetchState(mediaPostEmbedChannelId) !== FetchState.FETCHED) {
      return null;
    } else {
      const mediaPostEmbed = obj15.getMediaPostEmbed(mediaPostEmbedChannelId);
      let media;
      if (mediaPostEmbed != null) {
        media = mediaPostEmbed.media;
      }
      if (null == media) {
        return null;
      } else {
        guild = GuildStore.getGuild(media.guild_id);
        const user = UserStore.getUser(media.author_id);
        const channel = ChannelStore.getChannel(media.parent_channel_id);
        const channel1 = ChannelStore.getChannel(media.channel_id);
        let canViewChannelResult = null != channel;
        const guildId = SelectedGuildStore.getGuildId();
        if (canViewChannelResult) {
          canViewChannelResult = tmp(4912).canViewChannel(channel);
          const tmpResult = tmp(4912);
        }
        const obj2 = { mediaPostEmbedData: media, guild, parentChannel: channel, postThread: channel1, user, selectedGuildId: guildId, canAccess: canViewChannelResult };
        const mediaPostEmbedCommonData = tmp(4906).getMediaPostEmbedCommonData(obj2);
        if (null == mediaPostEmbedCommonData) {
          return null;
        } else {
          if (null != mediaPostEmbedCommonData.authorName) {
            if (null != mediaPostEmbedCommonData.channelName) {
              if (null != user) {
                const userAuthorWithProcessedColor = tmp(8223).getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
                const intl6 = tmp(1119).intl;
                const obj3 = { username: mediaPostEmbedCommonData.authorName, usernameOnClick: null, channelName: null };
                const obj4 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle, messageChannelId: mediaPostEmbedCommonData.threadId };
                obj3.usernameOnClick = formatUsernameOnClickDefault(obj4);
                obj3.channelName = mediaPostEmbedCommonData.channelName;
                let formatToPartsResult = intl6.formatToParts(tmp(1119).t.mCytFr, obj3);
                const tmpResult9 = tmp(8223);
              }
              if (false === mediaPostEmbedCommonData.canAccess) {
                let tmp11 = React4(nativeDefault.unsafe_rawColors.TEAL_430);
                let tmp10 = importDefault;
              } else {
                tmp10 = importDefault;
                tmp11 = React4(nativeDefault.unsafe_rawColors.BRAND_500);
              }
              let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
              if (isAnimatedImageUrlResult) {
                isAnimatedImageUrlResult = tmp(4908).isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
                const tmpResult10 = tmp(4908);
              }
              if (tmp15) {
                const _HermesInternal = HermesInternal;
                mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
              }
              if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
                const obj5 = {};
                const merged = Object.assign(mediaPostEmbedCommonData);
                obj5.blurredCoverImage = React3.resolveAssetSource(tmp10(13551)).uri;
                obj5.footer = formatToPartsResult;
                obj5.ctaButtonColor = tmp11;
                return obj5;
              } else {
                value = DevSettingsStore.get("obscure_blur_effect_explicit_content_enabled");
                if (!value) {
                  value = obj7.get("obscure_blur_effect_gore_content_enabled");
                }
                if (!value) {
                  value = obj7.get("obscure_blur_effect_self_harm_content_enabled");
                }
                const isPendingScanVersionResult = tmp(7847).isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
                let result = value;
                if (value) {
                  result = tmp(7847).shouldAgeVerifyForExplicitMedia();
                  const tmpResult12 = tmp(7847);
                }
                let isVerifiedTeenResult = value;
                if (value) {
                  isVerifiedTeenResult = tmp(4970).isVerifiedTeen();
                  const tmpResult13 = tmp(4970);
                }
                if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                  if (null != mediaPostEmbedCommonData.coverImage) {
                    const obj6 = {};
                    const merged1 = Object.assign(mediaPostEmbedCommonData);
                    obj6.footer = formatToPartsResult;
                    let str9 = "";
                    let str10 = "";
                    if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                      const intl4 = tmp(1119).intl;
                      str10 = intl4.string(tmp(1119).t["F+x38C"]).toUpperCase();
                      const str11 = intl4.string(tmp(1119).t["F+x38C"]);
                    }
                    obj6.spoiler = str10;
                    if (value) {
                      const intl5 = tmp(1119).intl;
                      str9 = intl5.string(tmp(1119).t.SpxcUR);
                    }
                    obj6.obscure = str9;
                    obj6.obscureAwaitingScan = isPendingScanVersionResult;
                    obj6.verifyAge = result;
                    obj6.obscureHideControls = isVerifiedTeenResult;
                    obj6.obscureIsOpaque = value;
                    obj6.ctaButtonColor = tmp11;
                    obj6.backgroundImage = tmp(4907).getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage);
                    let obj8 = obj6;
                    const tmpResult14 = tmp(4907);
                  }
                  return obj8;
                }
                obj8 = {};
                const merged2 = Object.assign(mediaPostEmbedCommonData);
                obj8.footer = formatToPartsResult;
                let str6 = "";
                let str7 = "";
                if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                  const intl2 = tmp(1119).intl;
                  str7 = intl2.string(tmp(1119).t["F+x38C"]).toUpperCase();
                  const str8 = intl2.string(tmp(1119).t["F+x38C"]);
                }
                obj8.spoiler = str7;
                if (value) {
                  const intl3 = tmp(1119).intl;
                  str6 = intl3.string(tmp(1119).t.SpxcUR);
                }
                obj8.obscure = str6;
                obj8.obscureAwaitingScan = isPendingScanVersionResult;
                obj8.verifyAge = result;
                obj8.obscureHideControls = isVerifiedTeenResult;
                obj8.obscureIsOpaque = value;
                obj8.ctaButtonColor = tmp11;
                const tmpResult11 = tmp(7847);
              }
              tmp15 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
            }
          }
          const intl = tmp(1119).intl;
          const obj9 = { guildName: mediaPostEmbedCommonData.guildName };
          formatToPartsResult = intl.formatToParts(tmp(1119).t.p4VdWJ, obj9);
        }
        const tmpResult8 = tmp(4906);
      }
    }
    obj15 = MediaPostEmbedStore;
  }
};

// Module ID: 15145
// Function ID: 15146
// Name: createMediaPostPreviewEmbedContent
// Dependencies: [17, 5627, 4863, 4885, 5045, 1383, 11365, 6049, 5654, 1113, 8418, 8420, 575, 6051, 15146, 8687, 6726, 6050, 2]
// Exports: default

// Module 15145 (createMediaPostPreviewEmbedContent)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import LinkUtils from "LinkUtils" /* 5654 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 6049 */;
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils" /* 6050 */;
import MediaFormatTesters from "MediaFormatTesters" /* 6051 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8418 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8420 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8687 */;
import MediaPostEmbedStore2 from "MediaPostEmbedStore" /* 11365 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5627 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const MediaPostEmbedStore = MediaPostEmbedStore2;

let c3;
let closure_4;
({ Image: c3, processColor: closure_4 } = react_native);
const FetchState = MediaPostEmbedStore2.FetchState;
let result = size.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let obj4;
  let str10;
  let str6;
  let str7;
  let str9;
  let tmpResult14;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const obj = MediaPostEmbedUtils;
  const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else {
    const obj15 = MediaPostEmbedStore;
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
        const guild = GuildStore.getGuild(media.guild_id);
        const user = UserStore.getUser(media.author_id);
        const channel = ChannelStore.getChannel(media.parent_channel_id);
        const channel1 = ChannelStore.getChannel(media.channel_id);
        let canViewChannelResult = null != channel;
        const guildId = SelectedGuildStore.getGuildId();
        if (canViewChannelResult) {
          const tmpResult = LinkUtils;
          canViewChannelResult = tmpResult.canViewChannel(channel);
        }
        const obj2 = { mediaPostEmbedData: media, guild, parentChannel: channel, postThread: channel1, user, selectedGuildId: guildId, canAccess: canViewChannelResult };
        const tmpResult8 = MediaPostEmbedUtils;
        const mediaPostEmbedCommonData = tmpResult8.getMediaPostEmbedCommonData(obj2);
        if (null == mediaPostEmbedCommonData) {
          return null;
        } else {
          if (null != mediaPostEmbedCommonData.authorName) {
            if (null != mediaPostEmbedCommonData.channelName) {
              let formatToPartsResult;
              let tmp11;
              let tmp10;
              if (null != user) {
                const tmpResult9 = useAuthorWithProcessedColor;
                const userAuthorWithProcessedColor = tmpResult9.getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
                const intl6 = tmp(1113).intl;
                const formatToParts = intl6.formatToParts;
                const obj3 = { username: mediaPostEmbedCommonData.authorName, usernameOnClick: formatUsernameOnClickDefault(obj4), channelName: mediaPostEmbedCommonData.channelName };
                const mCytFr = tmp(1113).t.mCytFr;
                obj4 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle, messageChannelId: mediaPostEmbedCommonData.threadId };
                formatToPartsResult = formatToParts(mCytFr, obj3);
              }
              if (false === mediaPostEmbedCommonData.canAccess) {
                tmp11 = React3(nativeDefault.unsafe_rawColors.TEAL_430);
                tmp10 = importDefault;
              } else {
                tmp10 = importDefault;
                tmp11 = React3(nativeDefault.unsafe_rawColors.BRAND_500);
              }
              let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
              if (isAnimatedImageUrlResult) {
                const tmpResult10 = MediaFormatTesters;
                isAnimatedImageUrlResult = tmpResult10.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
              }
              const tmp15 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
              if (tmp15) {
                const _HermesInternal = HermesInternal;
                mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
              }
              if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
                const obj5 = { blurredCoverImage: _false.resolveAssetSource(tmp10(15146)).uri, footer: formatToPartsResult, ctaButtonColor: tmp11 };
                const merged = Object.assign(mediaPostEmbedCommonData);
                return obj5;
              } else {
                const value = DevSettingsStore.get("obscure_blur_effect_explicit_content_enabled") || obj7.get("obscure_blur_effect_gore_content_enabled") || obj7.get("obscure_blur_effect_self_harm_content_enabled");
                const tmpResult11 = ExplicitMediaRedactionUtils;
                const isPendingScanVersionResult = tmpResult11.isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
                let result = value;
                if (result) {
                  const tmpResult12 = ExplicitMediaRedactionUtils;
                  result = tmpResult12.shouldAgeVerifyForExplicitMedia();
                }
                let isVerifiedTeenResult = value;
                if (isVerifiedTeenResult) {
                  const tmpResult13 = AgeVerificationUtils;
                  isVerifiedTeenResult = tmpResult13.isVerifiedTeen();
                }
                if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                  let obj8;
                  if (null != mediaPostEmbedCommonData.coverImage) {
                    const obj6 = { footer: formatToPartsResult, spoiler: str10, obscure: str9, obscureAwaitingScan: isPendingScanVersionResult, verifyAge: result, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: value, ctaButtonColor: tmp11, backgroundImage: tmpResult14.getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage) };
                    const merged1 = Object.assign(mediaPostEmbedCommonData);
                    str9 = "";
                    str10 = "";
                    if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                      const intl4 = tmp(1113).intl;
                      const str11 = intl4.string(intl7.t["F+x38C"]);
                      str10 = str11.toUpperCase();
                    }
                    if (value) {
                      const intl5 = tmp(1113).intl;
                      str9 = intl5.string(tmp(1113).t.SpxcUR);
                    }
                    obj8 = obj6;
                    tmpResult14 = MediaPostThumbnailUtils;
                  }
                  return obj8;
                }
                obj8 = { footer: formatToPartsResult, spoiler: str7, obscure: str6, obscureAwaitingScan: isPendingScanVersionResult, verifyAge: result, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: value, ctaButtonColor: tmp11 };
                const merged2 = Object.assign(mediaPostEmbedCommonData);
                str6 = "";
                str7 = "";
                if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                  const intl2 = tmp(1113).intl;
                  const str8 = intl2.string(intl7.t["F+x38C"]);
                  str7 = str8.toUpperCase();
                }
                if (value) {
                  const intl3 = tmp(1113).intl;
                  str6 = intl3.string(tmp(1113).t.SpxcUR);
                }
              }
            }
          }
          const intl = tmp(1113).intl;
          const obj9 = { guildName: mediaPostEmbedCommonData.guildName };
          formatToPartsResult = intl.formatToParts(tmp(1113).t.p4VdWJ, obj9);
        }
      }
    }
  }
};

// Module ID: 15460
// Function ID: 15461
// Name: createMediaPostPreviewEmbedContent
// Dependencies: [17, 5786, 5019, 5041, 5203, 1385, 11539, 6213, 5810, 1113, 8522, 8524, 575, 6215, 6217, 15461, 8791, 6813, 6214, 2]
// Exports: default

// Module 15460 (createMediaPostPreviewEmbedContent)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import LinkUtils from "LinkUtils" /* 5810 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 6213 */;
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils" /* 6214 */;
import MediaFormatTesters from "MediaFormatTesters" /* 6215 */;
import MediaFormatParamUtils from "MediaFormatParamUtils" /* 6217 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6813 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8522 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8524 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8791 */;
import MediaPostEmbedStore2 from "MediaPostEmbedStore" /* 11539 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5786 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildStore from "GuildStore" /* 5041 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5203 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const MediaPostEmbedStore = MediaPostEmbedStore2;

let c3;
let closure_4;
({ Image: c3, processColor: closure_4 } = react_native);
const FetchState = MediaPostEmbedStore2.FetchState;
let result = size.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let obj4;
  let str5;
  let str6;
  let str8;
  let str9;
  let tmpResult16;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const obj = MediaPostEmbedUtils;
  const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else {
    const obj16 = MediaPostEmbedStore;
    if (MediaPostEmbedStore.getEmbedFetchState(mediaPostEmbedChannelId) !== FetchState.FETCHED) {
      return null;
    } else {
      const mediaPostEmbed = obj16.getMediaPostEmbed(mediaPostEmbedChannelId);
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
        const tmpResult9 = MediaPostEmbedUtils;
        const mediaPostEmbedCommonData = tmpResult9.getMediaPostEmbedCommonData(obj2);
        if (null == mediaPostEmbedCommonData) {
          return null;
        } else {
          if (null != mediaPostEmbedCommonData.authorName) {
            if (null != mediaPostEmbedCommonData.channelName) {
              let formatToPartsResult;
              let tmp11;
              let tmp10;
              if (null != user) {
                const tmpResult10 = useAuthorWithProcessedColor;
                const userAuthorWithProcessedColor = tmpResult10.getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
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
                const tmpResult11 = MediaFormatTesters;
                isAnimatedImageUrlResult = tmpResult11.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
              }
              const tmp15 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
              if (tmp15) {
                const tmpResult12 = MediaFormatParamUtils;
                mediaPostEmbedCommonData.coverImage = tmpResult12.withMediaFormat(mediaPostEmbedCommonData.coverImage, "webp");
              }
              if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
                const obj5 = { blurredCoverImage: _false.resolveAssetSource(tmp10(15461)).uri, footer: formatToPartsResult, ctaButtonColor: tmp11 };
                const merged = Object.assign(mediaPostEmbedCommonData);
                return obj5;
              } else {
                const value = DevSettingsStore.get("obscure_blur_effect_explicit_content_enabled") || obj8.get("obscure_blur_effect_gore_content_enabled") || obj8.get("obscure_blur_effect_self_harm_content_enabled");
                const tmpResult13 = ExplicitMediaRedactionUtils;
                const isPendingScanVersionResult = tmpResult13.isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
                let result = value;
                if (result) {
                  const tmpResult14 = ExplicitMediaRedactionUtils;
                  result = tmpResult14.shouldAgeVerifyForExplicitMedia();
                }
                let isVerifiedTeenResult = value;
                if (isVerifiedTeenResult) {
                  const tmpResult15 = AgeVerificationUtils;
                  isVerifiedTeenResult = tmpResult15.isVerifiedTeen();
                }
                if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                  let obj7;
                  if (null != mediaPostEmbedCommonData.coverImage) {
                    const obj6 = { footer: formatToPartsResult, spoiler: str9, obscure: str8, obscureAwaitingScan: isPendingScanVersionResult, verifyAge: result, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: value, ctaButtonColor: tmp11, backgroundImage: tmpResult16.getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage) };
                    const merged1 = Object.assign(mediaPostEmbedCommonData);
                    str8 = "";
                    str9 = "";
                    if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                      const intl4 = tmp(1113).intl;
                      const str10 = intl4.string(intl7.t["F+x38C"]);
                      str9 = str10.toUpperCase();
                    }
                    if (value) {
                      const intl5 = tmp(1113).intl;
                      str8 = intl5.string(tmp(1113).t.SpxcUR);
                    }
                    obj7 = obj6;
                    tmpResult16 = MediaPostThumbnailUtils;
                  }
                  return obj7;
                }
                obj7 = { footer: formatToPartsResult, spoiler: str6, obscure: str5, obscureAwaitingScan: isPendingScanVersionResult, verifyAge: result, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: value, ctaButtonColor: tmp11 };
                const merged2 = Object.assign(mediaPostEmbedCommonData);
                str5 = "";
                str6 = "";
                if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                  const intl2 = tmp(1113).intl;
                  const str7 = intl2.string(intl7.t["F+x38C"]);
                  str6 = str7.toUpperCase();
                }
                if (value) {
                  const intl3 = tmp(1113).intl;
                  str5 = intl3.string(tmp(1113).t.SpxcUR);
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

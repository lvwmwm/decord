// Module ID: 12816
// Function ID: 12817
// Name: createMediaPostPreviewEmbedContent
// Dependencies: [17, 4835, 2045, 2067, 4655, 1372, 10970, 4984, 4990, 1115, 7402, 7404, 576, 4986, 12817, 7020, 5048, 4985, 2]
// Exports: default

// Module 12816 (createMediaPostPreviewEmbedContent)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 4984 */;
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils" /* 4985 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import LinkUtils from "LinkUtils" /* 4990 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7020 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7402 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7404 */;
import MediaPostEmbedStore2 from "MediaPostEmbedStore" /* 10970 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserStore from "UserStore" /* 1372 */;
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
                const intl6 = tmp(1115).intl;
                const formatToParts = intl6.formatToParts;
                const obj3 = { username: mediaPostEmbedCommonData.authorName, usernameOnClick: formatUsernameOnClickDefault(obj4), channelName: mediaPostEmbedCommonData.channelName };
                const mCytFr = tmp(1115).t.mCytFr;
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
                const obj5 = { blurredCoverImage: _false.resolveAssetSource(tmp10(12817)).uri, footer: formatToPartsResult, ctaButtonColor: tmp11 };
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
                      const intl4 = tmp(1115).intl;
                      const str11 = intl4.string(intl7.t["F+x38C"]);
                      str10 = str11.toUpperCase();
                    }
                    if (value) {
                      const intl5 = tmp(1115).intl;
                      str9 = intl5.string(tmp(1115).t.SpxcUR);
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
                  const intl2 = tmp(1115).intl;
                  const str8 = intl2.string(intl7.t["F+x38C"]);
                  str7 = str8.toUpperCase();
                }
                if (value) {
                  const intl3 = tmp(1115).intl;
                  str6 = intl3.string(tmp(1115).t.SpxcUR);
                }
              }
            }
          }
          const intl = tmp(1115).intl;
          const obj9 = { guildName: mediaPostEmbedCommonData.guildName };
          formatToPartsResult = intl.formatToParts(tmp(1115).t.p4VdWJ, obj9);
        }
      }
    }
  }
};

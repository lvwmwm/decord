// Module ID: 8794
// Function ID: 8795
// Name: MediaSourceUtil
// Dependencies: [19, 4856, 1084, 6035, 1402, 7426, 7432, 1495, 8795, 6717, 8518, 6521, 8309, 6049, 1997, 8630, 8646, 1385, 558, 576, 8796, 1104, 5698, 8790, 5945, 1125, 1444, 8797, 2]
// Exports: downloadMediaAsset, downloadMediaAssetWithContentType, extractMediaFromMessageComponents, extractMediaSourcesFromComponent, extractMediaSourcesFromEmbed, extractMediaSourcesFromMessage, extractThumbnailMediaFromEmbed, flattenSource, getAttachmentUrl, getEmbedMedia, getEmbedUrl, getSelectedMediaSource, getVideoSourceType, getYoutubeClipVideoIdFromURI, getYoutubeVideoIdFromURI, isAnimatedAvifSource, isAnimatedImageSource, isAnimatedWebpSource, isGIFSource, isThumbnailAttachment, isValidImageEmbed, isValidVideoAttachment, isValidVideoEmbed, setMediaSourcePortal, supportOverlayVideoControls

// Module 8794 (MediaSourceUtil)
import react2 from "react" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import intl3 from "intl" /* 1125 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import react_nativeDefault from "react-native" /* 1444 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1495 */;
import Server from "Server" /* 1997 */;
import ToastUtils from "ToastUtils" /* 5698 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5945 */;
import MediaFormatTesters from "MediaFormatTesters" /* 6035 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 6049 */;
import EmbedUtils from "EmbedUtils" /* 6521 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6717 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7426 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7432 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8309 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 8518 */;
import transformMessageComponents from "transformMessageComponents" /* 8630 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8646 */;
import getDisplayFilenameDefault from "getDisplayFilename" /* 8795 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8796 */;
import MediaModalPortal from "MediaModalPortal" /* 8797 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import Constants from "Constants" /* 1084 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
const f102422 = () => {
  if (ConstantsIOS.MediaType.IMAGE === VIDEO) {
    const tmp2Result = ToastUtils;
    tmp2Result.presentImageSaved();
  } else if (ConstantsIOS.MediaType.GIF === VIDEO) {
    const tmp2Result3 = ToastUtils;
    tmp2Result3.presentGifSaved();
  } else if (ConstantsIOS.MediaType.VIDEO === VIDEO) {
    const tmp2Result4 = ToastUtils;
    tmp2Result4.presentVideoSaved();
  }
  const MediaViewerAnalytics = tmp2(8790).MediaViewerAnalytics;
  const result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
};
function isValidImageAttachment(filename) {
  let height;
  let width;
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    filename = filename.filename;
    const obj2 = MediaFormatTesters;
    let tmp = obj2.isImageFile(filename) && null != height;
    const tmp5 = require;
    if (tmp) {
      tmp = height > 0;
    }
    if (tmp) {
      tmp = null != width;
    }
    if (tmp) {
      tmp = width > 0;
    }
    if (tmp) {
      let tmp2 = null != filename;
      if (tmp2) {
        let hasFlagResult = null != filename.flags;
        if (hasFlagResult) {
          const tmp5Result = tmp5(1402);
          hasFlagResult = tmp5Result.hasFlag(filename.flags, hasOwnProperty.IS_THUMBNAIL);
        }
        tmp2 = hasFlagResult;
      }
      tmp = !tmp2;
    }
    return tmp;
  }
}
function extractMediaFromAttachment(found, message2, mediaIndex, guildIdFromSearchContext, mediaViewIndex) {
  let hasFlag3Result;
  let hasFlagResult;
  let height;
  let width;
  if (null != found.width) {
    if (found.width > 0) {
      if (null != found.height) {
        if (found.height > 0) {
          const obj10 = ObscuredMediaUtils;
          const enabledHarmTypesForMessage = obj10.getEnabledHarmTypesForMessage(message2);
          const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: found };
          const isMediaObscuredForHarmTypes = ObscuredMediaUtils.isMediaObscuredForHarmTypes;
          ObscuredMediaUtils;
          const result = isMediaObscuredForHarmTypes(obj2, enabledHarmTypesForMessage);
          const obj12 = MediaFormatTesters;
          const isVideoFileResult = obj12.isVideoFile(found.filename);
          if (null != found.proxy_url) {
            let url;
            if ("" !== found.proxy_url) {
              url = found.proxy_url;
            }
            ({ width, height } = found);
            let str2;
            const getMobileOptimizedSrc = utils_ImageUtilsDefault.getMobileOptimizedSrc;
            if (isVideoFileResult) {
              str2 = "png";
            }
            const mobileOptimizedSrc = getMobileOptimizedSrc(url, width, height, str2);
            if (isVideoFileResult) {
              size = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: guildIdFromSearchContext, channelId: message2.channel_id, videoURI: url, filename: getDisplayFilenameDefault(found), mediaIndex, width: null, height: null, sourceURI: url, contentType: null, description: null, accessoryType: "attachment", spoiler: hasFlag3Result, flags: found.flags, obscure: result, placeholder: null, contentScanVersion: null, mediaViewIndex, attachmentId: found.id, shareURI: url };
              ({ width: obj8.width, height: obj8.height } = found);
              ({ content_type: obj8.contentType, description: obj8.description } = found);
              let num3 = found.flags;
              const hasFlag3 = FlagUtils.hasFlag;
              FlagUtils;
              if (num3 == null) {
                num3 = 0;
              }
              hasFlag3Result = hasFlag3(num3, hasOwnProperty.IS_SPOILER);
              if (!hasFlag3Result) {
                const tmp43Result5 = SpoilerChannelUtils;
                hasFlag3Result = tmp43Result5.isChannelSpoilerGated(ChannelStore.getChannel(message2.channel_id));
              }
              ({ placeholder: obj8.placeholder, content_scan_version: obj8.contentScanVersion } = found);
              return size;
            } else {
              const size1 = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: guildIdFromSearchContext, channelId: message2.channel_id, filename: getDisplayFilenameDefault(found), mediaIndex, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: hasFlagResult, flags: found.flags, obscure: result, placeholder: null, contentScanVersion: null, mediaViewIndex, attachmentId: null, shareURI: null };
              ({ width: obj.width, height: obj.height, url: obj.sourceURI, content_type: obj.contentType, description: obj.description } = found);
              let num = found.flags;
              const hasFlag = FlagUtils.hasFlag;
              FlagUtils;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = hasFlag(num, hasOwnProperty.IS_SPOILER);
              const tmp13 = hasOwnProperty;
              if (!hasFlagResult) {
                const tmp43Result7 = SpoilerChannelUtils;
                hasFlagResult = tmp43Result7.isChannelSpoilerGated(ChannelStore.getChannel(message2.channel_id));
              }
              ({ placeholder: obj.placeholder, content_scan_version: obj.contentScanVersion } = found);
              ({ id: obj.attachmentId, url: obj.shareURI } = found);
              const obj3 = { uri: url };
              const merged = Object.assign(size1);
              const str3 = getDisplayFilenameDefault(found);
              const formatted = str3.toLowerCase();
              formatted.endsWith(".webp");
              const str5 = getDisplayFilenameDefault(found);
              const formatted1 = str5.toLowerCase();
              const endsWithResult1 = formatted1.endsWith(".avif");
              let num2 = found.flags;
              const hasFlag2 = FlagUtils.hasFlag;
              FlagUtils;
              if (num2 == null) {
                num2 = 0;
              }
              if (hasFlag2(num2, tmp13.IS_ANIMATED)) {
                const _URL2 = URL;
                const self3 = this;
                const self4 = this;
                const str10 = new URL(url);
                const searchParams2 = str10.searchParams;
                searchParams2.append("animated", "true");
                if (endsWithResult1) {
                  const searchParams3 = str10.searchParams;
                  searchParams3.append("format", "webp");
                }
                const items = [size1, ];
                const obj4 = { uri: str10.toString() };
                const merged1 = Object.assign(obj3);
                items[1] = obj4;
                return items;
              }
              if (endsWithResult1) {
                const _URL = URL;
                const self = this;
                const self2 = this;
                const str7 = new URL(url);
                const searchParams = str7.searchParams;
                searchParams.append("format", "webp");
                const items1 = [size1, ];
                const obj5 = { uri: str7.toString() };
                const merged2 = Object.assign(obj3);
                items1[1] = obj5;
                return items1;
              } else {
                let tmp22 = obj3;
                if (url !== mobileOptimizedSrc) {
                  const items2 = [size1, obj3];
                  tmp22 = items2;
                }
                return tmp22;
              }
            }
          }
          url = found.url;
        }
      }
    }
  }
}
function extractMediaFromEmbed(image, id, contentMessage, mediaIndex, guildIdFromSearchContext) {
  let contentType;
  let contentType2;
  let contentType3;
  let name1;
  let proxyURL;
  let proxyURL2;
  let proxyURL3;
  let proxyURL4;
  let str63;
  let tmp14Result;
  let tmp34;
  let url;
  let url2;
  let url3;
  let url4;
  let thumbnail = image.image;
  if (thumbnail == null) {
    thumbnail = image.video;
  }
  if (thumbnail == null) {
    thumbnail = image.thumbnail;
  }
  if (null != thumbnail) {
    let content_scan_version;
    let rawTitle;
    let tmp6;
    if (null != image.video) {
      ({ proxyURL, url } = image.video);
      let str1 = url;
      if (null != proxyURL) {
        str1 = url;
        if ("" !== proxyURL) {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const str38 = new URL(proxyURL);
          const str39 = str38.pathname;
          const formatted = str39.toLowerCase();
          const endsWithResult = formatted.endsWith(".avif");
          const str41 = str38.pathname;
          const formatted1 = str41.toLowerCase();
          if (tmp) {
            if (formatted1.endsWith(".webp")) {
              const searchParams2 = str38.searchParams;
              searchParams2.append("animated", "true");
              if (endsWithResult) {
                const searchParams3 = str38.searchParams;
                searchParams3.append("format", "webp");
              }
              str1 = str38.toString();
            } else {
              str1 = proxyURL;
            }
          } else {
            str1 = proxyURL;
            if (endsWithResult) {
              const searchParams = str38.searchParams;
              searchParams.append("format", "webp");
              str1 = str38.toString();
            }
          }
        }
      }
      tmp6 = str1;
    }
    ({ proxyURL: proxyURL2, url: url2 } = thumbnail);
    let str61 = url2;
    const type = image.type;
    if (null != proxyURL2) {
      str61 = url2;
      if ("" !== proxyURL2) {
        const _URL2 = URL;
        const self3 = this;
        const self4 = this;
        const str44 = new URL(proxyURL2);
        const str45 = str44.pathname;
        const formatted2 = str45.toLowerCase();
        const endsWithResult1 = formatted2.endsWith(".avif");
        const str47 = str44.pathname;
        const formatted3 = str47.toLowerCase();
        if (tmp7) {
          if (formatted3.endsWith(".webp")) {
            const searchParams5 = str44.searchParams;
            searchParams5.append("animated", "true");
            if (endsWithResult1) {
              const searchParams6 = str44.searchParams;
              searchParams6.append("format", "webp");
            }
            str61 = str44.toString();
          } else {
            str61 = proxyURL2;
          }
        } else {
          str61 = proxyURL2;
          if (endsWithResult1) {
            const searchParams4 = str44.searchParams;
            searchParams4.append("format", "webp");
            str61 = str44.toString();
          }
        }
      }
    }
    if (null != image.contentScanVersion) {
      content_scan_version = image.contentScanVersion;
    } else if (null != image.content_scan_version) {
      content_scan_version = image.content_scan_version;
    }
    const obj = utils_ImageUtilsDefault;
    const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str61, thumbnail.width, thumbnail.height);
    const obj2 = { contentMessage };
    const hasSpoilerEmbeds = renderMessageMarkupDefault(id, obj2).hasSpoilerEmbeds;
    const obj3 = ObscuredMediaUtils;
    const enabledHarmTypesForMessage = obj3.getEnabledHarmTypesForMessage(id);
    const obj4 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: image };
    const isMediaObscuredForHarmTypes = ObscuredMediaUtils.isMediaObscuredForHarmTypes;
    ObscuredMediaUtils;
    const result = isMediaObscuredForHarmTypes(obj4, enabledHarmTypesForMessage);
    const tmp14 = importDefault;
    if ("title" in image) {
      rawTitle = image.title;
    } else if ("rawTitle" in image) {
      rawTitle = image.rawTitle;
    }
    const obj5 = { rawTitle };
    const isEmbedInline = EmbedUtils.isEmbedInline;
    EmbedUtils;
    const merged = Object.assign(image);
    const isEmbedInlineResult = isEmbedInline(obj5);
    const provider = image.provider;
    let name;
    const getEffectiveVideoProvider = EmbedUtils.getEffectiveVideoProvider;
    EmbedUtils;
    if (provider != null) {
      name = provider.name;
    }
    const video = image.video;
    let url1;
    if (video != null) {
      url1 = video.url;
    }
    const effectiveVideoProvider = getEffectiveVideoProvider(name, url1);
    const tmp17Result4 = renderer_EmbedUtils;
    let isWebviewVideoResult = tmp17Result4.isWebviewVideo(image);
    if (null != tmp6) {
      if (!isWebviewVideoResult) {
        size = { uri: mobileOptimizedSrc, messageId: id.id, guildId: guildIdFromSearchContext, channelId: id.channel_id, mediaIndex, videoURI: tmp6, embedURI: image.url, width: null, height: null, isGIFV: "gifv" === type, sourceURI: thumbnail.url, embedProviderName: name1, accessoryType: "embed", noCarousel: !isEmbedInlineResult, spoiler: hasSpoilerEmbeds, flags: image.flags, contentScanVersion: content_scan_version, contentType, obscure: result, thumbnail: tmp34, shareURI: image.url };
        ({ width: obj7.width, height: obj7.height } = thumbnail);
        const provider2 = image.provider;
        name1 = undefined;
        if (provider2 != null) {
          name1 = provider2.name;
        }
        if ("contentType" in thumbnail) {
          contentType = thumbnail.contentType;
        } else if ("content_type" in thumbnail) {
          const content_type = thumbnail.content_type;
          contentType = content_type;
        }
        tmp34 = undefined;
        if (null != image.thumbnail) {
          const size1 = { width: image.thumbnail.width, height: image.thumbnail.height, uri: image.thumbnail.url };
          tmp34 = size1;
        }
        return size;
      }
    }
    if ("video" !== image.type) {
      const obj6 = { embed: image, media: thumbnail, message: id, embedIndex: mediaIndex, guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, obscure: result, noCarousel: !isEmbedInlineResult };
      return getEmbedImageMediaSources(obj6);
    }
    const items = [];
    if (null != image.thumbnail) {
      ({ proxyURL: proxyURL4, url: url4 } = image.thumbnail);
      let str62 = url4;
      if (null != proxyURL4) {
        str62 = url4;
        if ("" !== proxyURL4) {
          const _URL3 = URL;
          const self5 = this;
          const self6 = this;
          const str50 = new URL(proxyURL4);
          const str51 = str50.pathname;
          const formatted4 = str51.toLowerCase();
          const endsWithResult2 = formatted4.endsWith(".avif");
          const str53 = str50.pathname;
          const formatted5 = str53.toLowerCase();
          if (tmp56) {
            if (formatted5.endsWith(".webp")) {
              const searchParams8 = str50.searchParams;
              searchParams8.append("animated", "true");
              if (endsWithResult2) {
                const searchParams9 = str50.searchParams;
                searchParams9.append("format", "webp");
              }
              str62 = str50.toString();
            } else {
              str62 = proxyURL4;
            }
          } else {
            str62 = proxyURL4;
            if (endsWithResult2) {
              const searchParams7 = str50.searchParams;
              searchParams7.append("format", "webp");
              str62 = str50.toString();
            }
          }
        }
      }
      const size2 = { uri: tmp14Result.getMobileOptimizedSrc(str62, image.thumbnail.width, image.thumbnail.height), guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, flags: image.flags, obscure: result, contentScanVersion: content_scan_version, contentType: contentType2, messageId: id.id, noCarousel: !isEmbedInlineResult, mediaIndex, accessoryType: "embed", channelId: id.channel_id, sourceURI: image.thumbnail.url, width: image.thumbnail.width, height: image.thumbnail.height, shareURI: image.thumbnail.url };
      const thumbnail2 = image.thumbnail;
      const push = items.push;
      tmp14Result = tmp14(1495);
      if ("contentType" in thumbnail2) {
        contentType2 = thumbnail2.contentType;
      } else if ("content_type" in thumbnail2) {
        const content_type2 = thumbnail2.content_type;
        contentType2 = content_type2;
      }
      push(size2);
    }
    if (isWebviewVideoResult) {
      isWebviewVideoResult = null != image.video;
    }
    if (isWebviewVideoResult) {
      const size3 = { uri: mobileOptimizedSrc, guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, flags: image.flags, obscure: result, contentScanVersion: content_scan_version, contentType: contentType3, sourceURI: image.url, messageId: id.id, noCarousel: !isEmbedInlineResult, mediaIndex, accessoryType: "embed", width: image.video.width, height: image.video.height, channelId: id.channel_id, embedURI: str63, embedProviderName: effectiveVideoProvider, disableDownload: true, shareURI: image.url };
      const video2 = image.video;
      const push2 = items.push;
      if ("contentType" in video2) {
        contentType3 = video2.contentType;
      } else if ("content_type" in video2) {
        const content_type3 = video2.content_type;
        contentType3 = content_type3;
      }
      ({ proxyURL: proxyURL3, url: url3 } = image.video);
      str63 = url3;
      if (null != proxyURL3) {
        str63 = url3;
        if ("" !== proxyURL3) {
          const _URL4 = URL;
          const self7 = this;
          const self8 = this;
          const str56 = new URL(proxyURL3);
          const str57 = str56.pathname;
          const formatted6 = str57.toLowerCase();
          const endsWithResult3 = formatted6.endsWith(".avif");
          const str59 = str56.pathname;
          const formatted7 = str59.toLowerCase();
          if (tmp40) {
            if (formatted7.endsWith(".webp")) {
              const searchParams11 = str56.searchParams;
              searchParams11.append("animated", "true");
              if (endsWithResult3) {
                const searchParams12 = str56.searchParams;
                searchParams12.append("format", "webp");
              }
              str63 = str56.toString();
            } else {
              str63 = proxyURL3;
            }
          } else {
            str63 = proxyURL3;
            if (endsWithResult3) {
              const searchParams10 = str56.searchParams;
              searchParams10.append("format", "webp");
              str63 = str56.toString();
            }
          }
        }
      }
      push2(size3);
    }
    if (0 !== items.length) {
      let first;
      if (1 === items.length) {
        first = items[0];
      } else if (2 === items.length) {
        const items1 = [, ];
        [arr2[0], arr2[1]] = items;
        first = items1;
      }
      return first;
    }
  }
}
function getEmbedImageMediaSources(arg0) {
  let contentType;
  let content_scan_version;
  let embed;
  let embedIndex;
  let guildId;
  let media;
  let message;
  let noCarousel;
  let obscure;
  let proxyURL;
  let spoiler;
  let url;
  ({ embed, media, message } = arg0);
  ({ proxyURL, url } = media);
  let str1 = url;
  ({ embedIndex, guildId, spoiler, obscure, noCarousel } = arg0);
  if (null != proxyURL) {
    str1 = url;
    if ("" !== proxyURL) {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const str9 = new URL(proxyURL);
      const str10 = str9.pathname;
      const formatted = str10.toLowerCase();
      const endsWithResult = formatted.endsWith(".avif");
      const str12 = str9.pathname;
      const formatted1 = str12.toLowerCase();
      if (tmp) {
        if (formatted1.endsWith(".webp")) {
          const searchParams2 = str9.searchParams;
          searchParams2.append("animated", "true");
          if (endsWithResult) {
            const searchParams3 = str9.searchParams;
            searchParams3.append("format", "webp");
          }
          str1 = str9.toString();
        } else {
          str1 = proxyURL;
        }
      } else {
        str1 = proxyURL;
        if (endsWithResult) {
          const searchParams = str9.searchParams;
          searchParams.append("format", "webp");
          str1 = str9.toString();
        }
      }
    }
  }
  const obj = utils_ImageUtilsDefault;
  const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str1, media.width, media.height);
  size = { uri: mobileOptimizedSrc, messageId: message.id, guildId, channelId: message.channel_id, mediaIndex: embedIndex, width: media.width, height: media.height, sourceURI: media.url, accessoryType: "embed", noCarousel, spoiler, flags: embed.flags, obscure, contentScanVersion: content_scan_version, contentType, shareURI: media.url };
  if (null != embed.contentScanVersion) {
    content_scan_version = embed.contentScanVersion;
  } else if (null != embed.content_scan_version) {
    content_scan_version = embed.content_scan_version;
  }
  if ("contentType" in media) {
    contentType = media.contentType;
  } else if ("content_type" in media) {
    const content_type = media.content_type;
    contentType = content_type;
  }
  const obj2 = { uri: str1 };
  const merged = Object.assign(size);
  let tmp8 = obj2;
  if (str1 !== mobileOptimizedSrc) {
    const items = [size, obj2];
    tmp8 = items;
  }
  return tmp8;
}
function toMediaSourceFromUnfurledMedia(id, guildId, media, description, spoiler) {
  let num2;
  let proxyUrl2;
  let result;
  let width;
  let width2;
  const obj = transformMessageComponents;
  const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
  if (unfurledMediaItemType === RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER) {
    return null;
  } else {
    const VIDEO = tmp(8646).MediaGalleryItemType.VIDEO;
    ({ proxyUrl: proxyUrl2, width } = media);
    const getMobileOptimizedSrc = utils_ImageUtilsDefault.getMobileOptimizedSrc;
    if (width == null) {
      width = 0;
    }
    let num = media.height;
    if (num == null) {
      num = 0;
    }
    let str;
    if (unfurledMediaItemType === VIDEO) {
      str = "png";
    }
    const mobileOptimizedSrc = getMobileOptimizedSrc(proxyUrl2, width, num, str);
    const contentScanMetadata = media.contentScanMetadata;
    let version;
    if (contentScanMetadata != null) {
      version = contentScanMetadata.version;
    }
    const tmpResult = ObscuredMediaUtils;
    const enabledHarmTypesForMessage = tmpResult.getEnabledHarmTypesForMessage(id);
    const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media };
    const isMediaObscuredForHarmTypes = ObscuredMediaUtils.isMediaObscuredForHarmTypes;
    ObscuredMediaUtils;
    size = { messageId: id.id, guildId, channelId: id.channel_id, uri: mobileOptimizedSrc, sourceURI: null, width: width2, height: num2, contentType: media.contentType, description, spoiler, obscure: result, contentScanVersion: version, accessoryType: "component", mediaIndex: 0, shareURI: media.url };
    ({ url: obj4.sourceURI, width: width2 } = media);
    result = isMediaObscuredForHarmTypes(obj2, enabledHarmTypesForMessage);
    if (width2 == null) {
      width2 = 0;
    }
    num2 = media.height;
    if (num2 == null) {
      num2 = 0;
    }
    const obj3 = {};
    const merged = Object.assign(size);
    const proxyUrl = media.proxyUrl;
    if (unfurledMediaItemType === VIDEO) {
      obj3.videoURI = proxyUrl;
      return obj3;
    } else {
      obj3.uri = proxyUrl;
      let tmp22 = obj3;
      if (media.proxyUrl !== mobileOptimizedSrc) {
        const obj5 = {};
        const merged1 = Object.assign(size);
        const items = [obj5, obj3];
        tmp22 = items;
      }
      return tmp22;
    }
  }
}
function handleDownloadError() {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl3.t.cV3alD), body: intl2.string(intl3.t.r4Zjzv), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
}
({ MessageAttachmentFlags: hasOwnProperty, WEBP_RE_IOS: metroRequire } = Constants);
const re7 = /\.avif$/i;
const VideoSourceType = { PORTAL: 0, [0]: "PORTAL", TIKTOK_IFRAME: 1, [1]: "TIKTOK_IFRAME", WEB_FILE_IFRAME: 2, [2]: "WEB_FILE_IFRAME", DEFAULT: 3, [3]: "DEFAULT" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedMediaSource(index) {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = useStateFromSharedValueDefault(index.index);
  let tmp3 = null;
  if (tmp2 >= 0) {
    tmp3 = null;
    if (tmp2 < index.sources.length) {
      let tmp4 = null;
      if (null != index.sources[tmp2]) {
        const _Array = Array;
        let tmp6 = arr;
        if (Array.isArray(index.sources[tmp2])) {
          tmp6 = arr[arr.length - 1];
        }
        tmp4 = tmp6;
      }
      tmp3 = tmp4;
    }
  }
  if (cResult[0] === tmp2) {
    let tmp7;
    if (cResult[1] === tmp3) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const items = [tmp2, tmp3];
  cResult[0] = tmp2;
  cResult[1] = tmp3;
  cResult[2] = items;
  tmp7 = items;
}) : (function useSelectedMediaSource(index) {
  let closure_0 = index;
  const tmp = useStateFromSharedValueDefault(index.index);
  let closure_1 = tmp;
  const items = [index.sources, tmp];
  const items1 = [
    tmp,
    react.useMemo(() => {
      if (closure_1 >= 0) {
        if (closure_1 < closure_0.sources.length) {
          let tmp2 = null;
          if (null != closure_0.sources[closure_1]) {
            const _Array = Array;
            let tmp4 = arr;
            if (Array.isArray(closure_0.sources[closure_1])) {
              tmp4 = arr[arr.length - 1];
            }
            tmp2 = tmp4;
          }
          return tmp2;
        }
      }
      return null;
    }, items)
  ];
  return items1;
});
function flattenSource(sources, arg1) {
  let tmp = sources;
  if (Array.isArray(sources)) {
    let first;
    const tmp2 = arg1;
    if (tmp2) {
      first = sources[sources.length - 1];
    } else {
      first = sources[0];
    }
    tmp = first;
  }
  return tmp;
}
function isValidVideoAttachment(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isVideoFileResult = null != filename;
    if (isVideoFileResult) {
      const obj = MediaFormatTesters;
      isVideoFileResult = obj.isVideoFile(filename.filename);
    }
    if (isVideoFileResult) {
      isVideoFileResult = null != filename.proxy_url;
    }
    tmp = isVideoFileResult;
  }
  return tmp;
}
function isValidImageEmbed(image) {
  return null != image.image || null != image.thumbnail;
}
function isValidVideoEmbed(video) {
  return null != video.video;
}
function isThumbnailAttachment(flags) {
  let tmp = null != flags;
  if (tmp) {
    let hasFlagResult = null != flags.flags;
    if (hasFlagResult) {
      const obj = FlagUtils;
      hasFlagResult = obj.hasFlag(flags.flags, hasOwnProperty.IS_THUMBNAIL);
    }
    tmp = hasFlagResult;
  }
  return tmp;
}
function getAttachmentUrl(proxy_url) {
  if (null != proxy_url.proxy_url) {
    let url;
    if ("" !== proxy_url.proxy_url) {
      url = proxy_url.proxy_url;
    }
    return url;
  }
  url = proxy_url.url;
}
function getEmbedUrl(embedMedia) {
  const proxyURL = embedMedia.proxyURL;
  const url = embedMedia.url;
  if (null != proxyURL) {
    if ("" !== proxyURL) {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const str2 = new URL(proxyURL);
      const str3 = str2.pathname;
      const formatted = str3.toLowerCase();
      const endsWithResult = formatted.endsWith(".avif");
      const str5 = str2.pathname;
      const formatted1 = str5.toLowerCase();
      if (tmp) {
        const searchParams2 = str2.searchParams;
        searchParams2.append("animated", "true");
        if (endsWithResult) {
          const searchParams3 = str2.searchParams;
          searchParams3.append("format", "webp");
        }
        return str2.toString();
      } else if (endsWithResult) {
        const searchParams = str2.searchParams;
        searchParams.append("format", "webp");
        return str2.toString();
      }
      return proxyURL;
    }
  }
  return url;
}
function getEmbedMedia(embed) {
  let thumbnail = embed.image;
  if (thumbnail == null) {
    thumbnail = embed.video;
  }
  if (thumbnail == null) {
    thumbnail = embed.thumbnail;
  }
  return thumbnail;
}
function downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType) {
  let result;
  let closure_0 = VIDEO;
  if (null != contentType) {
    const obj2 = react_nativeDefault;
    result = obj2.downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType);
  } else {
    const obj = react_nativeDefault;
    result = obj.downloadMediaAsset(mediaUrl, VIDEO);
  }
  return result.then(f102422, handleDownloadError);
}
function isAnimatedWebpSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    const obj = MediaFormatTesters;
    result = obj.urlMatchesFileExtension(sourceURI.sourceURI, metroRequire);
  }
  if (result) {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
}
function isAnimatedAvifSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    const obj = MediaFormatTesters;
    result = obj.urlMatchesFileExtension(sourceURI.sourceURI, re7);
  }
  if (result) {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
}
function isGIFSource(sourceURI) {
  const obj = MediaFormatTesters;
  return obj.urlMatchesFileExtension(sourceURI.sourceURI, ConstantsIOS.GIF_RE_IOS);
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/MediaSourceUtil.tsx");

export { flattenSource };
export { isValidImageAttachment };
export { isValidVideoAttachment };
export { isValidImageEmbed };
export { isValidVideoEmbed };
export { isThumbnailAttachment };
export { getAttachmentUrl };
export { extractMediaFromAttachment };
export { getEmbedUrl };
export { getEmbedMedia };
export { extractMediaFromEmbed };
export const extractThumbnailMediaFromEmbed = function extractThumbnailMediaFromEmbed(thumbnail, message2, message1, embedIndex, guild_id) {
  let isMediaObscuredForHarmTypes;
  let obj2;
  let obj3;
  let obj4;
  thumbnail = thumbnail.thumbnail;
  if (null != thumbnail) {
    const obj = { embed: thumbnail, media: thumbnail, message: message2, embedIndex, guildId: guild_id, spoiler: renderMessageMarkupDefault(message2, obj2).hasSpoilerEmbeds, obscure: isMediaObscuredForHarmTypes(obj3, obj4.getEnabledHarmTypesForMessage(message2)), noCarousel: true };
    obj2 = { contentMessage: message1 };
    obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: thumbnail };
    isMediaObscuredForHarmTypes = ObscuredMediaUtils.isMediaObscuredForHarmTypes;
    ObscuredMediaUtils;
    obj4 = ObscuredMediaUtils;
    return getEmbedImageMediaSources(obj);
  }
};
export const extractMediaFromMessageComponents = function extractMediaFromMessageComponents(getContentMessage, contentMessage, getContentMessage2) {
  if (0 === contentMessage.components.length) {
    return [];
  } else {
    const items1 = [];
    const items2 = [];
    const obj2 = InteractionComponentUtils;
    const flattenComponentsResult = obj2.flattenComponents(contentMessage.components);
    HermesBuiltin.arraySpread(items2, flattenComponentsResult.values(), 0);
    const iter = items2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let type = nextResult.type;
      let tmp7 = require;
      if (Server.ComponentType.MEDIA_GALLERY === type) {
        let items = tmp5.items;
        for (const item10029 of items) {
          let tmp13 = item10029;
          let tmp17 = toMediaSourceFromUnfurledMedia(getContentMessage, getContentMessage, item10029.media, item10029.description, item10029.spoiler);
          if (null != tmp17) {
            let obj = { sources: tmp18, unfurledMediaItem: tmp13.media };
            let arr = items1.push(obj);
          }
          continue;
        }
      } else if (tmp7(1997).ComponentType.THUMBNAIL === type) {
        let tmp36 = toMediaSourceFromUnfurledMedia(getContentMessage, getContentMessage, tmp5.media, tmp5.description, tmp5.spoiler);
        if (null != tmp36) {
          let obj3 = { sources: tmp37, unfurledMediaItem: tmp5.media };
          let arr2 = items1.push(obj3);
        }
      }
      continue;
    }
    return items1;
  }
};
export const extractMediaSourcesFromEmbed = function extractMediaSourcesFromEmbed(message2, message1, images, index, guild_id) {
  let mediaIndex;
  importDefault = images;
  dependencyMap = index;
  const guildId = guild_id;
  let obj = { contentMessage: message1 };
  const hasSpoilerEmbeds = renderMessageMarkupDefault(message2, obj).hasSpoilerEmbeds;
  images = images.images;
  if (images == null) {
    let items = [images.image];
    images = items;
  }
  return images.map(function(width) {
    let content_scan_version;
    let proxyURL;
    let url;
    ({ proxyURL, url } = width);
    let str1 = url;
    if (null != proxyURL) {
      str1 = url;
      if ("" !== proxyURL) {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const str8 = new URL(proxyURL);
        const str9 = str8.pathname;
        const formatted = str9.toLowerCase();
        const endsWithResult = formatted.endsWith(".avif");
        const str11 = str8.pathname;
        const formatted1 = str11.toLowerCase();
        if (tmp) {
          if (formatted1.endsWith(".webp")) {
            const searchParams2 = str8.searchParams;
            searchParams2.append("animated", "true");
            if (endsWithResult) {
              const searchParams3 = str8.searchParams;
              searchParams3.append("format", "webp");
            }
            str1 = str8.toString();
          } else {
            str1 = proxyURL;
          }
        } else {
          str1 = proxyURL;
          if (endsWithResult) {
            const searchParams = str8.searchParams;
            searchParams.append("format", "webp");
            str1 = str8.toString();
          }
        }
      }
    }
    const obj = utils_ImageUtilsDefault;
    const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str1, width.width, width.height);
    if (null != images.contentScanVersion) {
      content_scan_version = tmp8.contentScanVersion;
    } else if (null != images.content_scan_version) {
      content_scan_version = tmp8.content_scan_version;
    }
    const obj2 = ObscuredMediaUtils;
    const enabledHarmTypesForMessage = obj2.getEnabledHarmTypesForMessage(message2);
    const obj3 = ObscuredMediaUtils;
    const obj4 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: images };
    const tmp10 = obj3.getMediaObscuredReasonFromBitmask(obj4, enabledHarmTypesForMessage).length > 0;
    size = { uri: mobileOptimizedSrc, messageId: message2.id, guildId, channelId: message2.channel_id, mediaIndex, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, flags: tmp8.flags, obscure: tmp10, contentScanVersion: content_scan_version, contentType: width.contentType, shareURI: width.url };
    const items = [size, { uri: str1, messageId: message2.id, guildId, channelId: message2.channel_id, mediaIndex, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, contentType: width.contentType, flags: images.flags, obscure: tmp10, contentScanVersion: content_scan_version, shareURI: width.url }];
    return items;
  });
};
export const extractMediaSourcesFromComponent = function extractMediaSourcesFromComponent(message2, components, guild_id, tmp10Result14, componentMediaIndex) {
  let items1;
  _require = message2;
  let closure_1 = guild_id;
  let tmp = _require;
  const obj = require("InteractionComponentUtils");
  const flattenComponentsResult = obj.flattenComponents(components);
  const value = flattenComponentsResult.get(tmp10Result14);
  if (null == value) {
    return null;
  } else {
    const type = value.type;
    if (tmp(1997).ComponentType.MEDIA_GALLERY === type) {
      let num2 = 0;
      if (null != componentMediaIndex) {
        num2 = 0;
        if (componentMediaIndex <= value.items.length) {
          num2 = componentMediaIndex;
        }
      }
      dependencyMap = num2;
      const items = value.items;
      const mapped = items.map((media, index) => {
        let tmp = toMediaSourceFromUnfurledMedia(message2, guild_id, media.media, media.description, media.spoiler);
        if (null == tmp) {
          tmp = null;
          if (index < closure_2) {
            closure_2 = closure_2 - 1;
            tmp = null;
          }
        }
        return tmp;
      });
      const obj2 = { initialIndex: dependencyMap, sources: mapped.filter(tmp(1385).isNotNullish) };
      return obj2;
    } else if (tmp(1997).ComponentType.THUMBNAIL === type) {
      const tmp7 = toMediaSourceFromUnfurledMedia(message2, guild_id, value.media, value.description, value.spoiler);
      let tmp8 = null;
      if (null != tmp7) {
        const obj3 = { initialIndex: 0, sources: items1 };
        items1 = [tmp7];
        tmp8 = obj3;
      }
      return tmp8;
    } else {
      return null;
    }
  }
};
export const extractMediaSourcesFromMessage = function extractMediaSourcesFromMessage(message, message2, guild_id, GRAVITY_VALID_EMBED_TYPES) {
  let num3;
  const items = [];
  let num = 0;
  let num2 = 0;
  if (0 < message2.attachments.length) {
    do {
      let tmp = message2.attachments[num];
      if (isValidImageAttachment(tmp)) {
        let tmp15 = extractMediaFromAttachment(tmp, message, tmp3, guild_id, tmp4);
        if (null != tmp15) {
          let arr = items.push(tmp15);
        }
      } else {
        let tmp5 = null != tmp;
        if (tmp5) {
          let isVideoFileResult = null != tmp;
          if (isVideoFileResult) {
            let obj = MediaFormatTesters;
            isVideoFileResult = obj.isVideoFile(tmp.filename);
          }
          if (isVideoFileResult) {
            isVideoFileResult = null != tmp.proxy_url;
          }
          tmp5 = isVideoFileResult;
        }
      }
      let tmp17 = null != tmp;
      if (tmp17) {
        let hasFlagResult = null != tmp.flags;
        if (hasFlagResult) {
          let obj2 = FlagUtils;
          hasFlagResult = obj2.hasFlag(tmp.flags, hasOwnProperty.IS_THUMBNAIL);
        }
        tmp17 = hasFlagResult;
      }
      let sum = num2;
      if (!tmp17) {
        sum = num2 + 1;
      }
      num = num + 1;
      num2 = sum;
    } while (num < message2.attachments.length);
  }
  for (let num3 = 0; num3 < message2.embeds.length; num3 = num3 + 1) {
    let tmp23 = message2.embeds[num3];
    if (null == GRAVITY_VALID_EMBED_TYPES) {
      let tmp25 = null != tmp23.image || null != tmp23.thumbnail;
      if (tmp25) {
        let tmp32 = extractMediaFromEmbed(tmp23, message, message2, tmp24, guild_id);
        if (null != tmp32) {
          let arr3 = items.push(tmp32);
        }
      }
    }
  }
  return items;
};
export const setMediaSourcePortal = function setMediaSourcePortal(items1, portal) {
  let first = items1;
  if (Array.isArray(items1)) {
    first = items1[0];
  }
  const tmp2 = null == first || first.obscure;
  if (!tmp2) {
    const _Array = Array;
    if (Array.isArray(items1)) {
      items1[0].portal = portal;
    } else {
      items1.portal = portal;
    }
  }
};
export const getSelectedMediaSource = function getSelectedMediaSource(mediaViewerSyncer) {
  const index = mediaViewerSyncer.index;
  const value = index.get();
  if (value >= 0) {
    if (value < mediaViewerSyncer.sources.length) {
      let tmp2 = null;
      if (null != mediaViewerSyncer.sources[value]) {
        const _Array = Array;
        let tmp4 = arr;
        if (Array.isArray(mediaViewerSyncer.sources[value])) {
          tmp4 = arr[arr.length - 1];
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  }
  return null;
};
export const useSelectedMediaSource = tmp3;
export const downloadMediaAsset = function downloadMediaAsset(mediaUrl, VIDEO) {
  let closure_0 = VIDEO;
  const obj = react_nativeDefault;
  const downloadMediaAssetResult = obj.downloadMediaAsset(mediaUrl, VIDEO);
  return downloadMediaAssetResult.then(f102422, handleDownloadError);
};
export { downloadMediaAssetWithContentType };
export const getYoutubeClipVideoIdFromURI = function getYoutubeClipVideoIdFromURI(uri) {
  const match = uri.match(/^https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]*)(\?clip=([A-Za-z0-9_-]+)(&clipt=([A-Za-z0-9_-]+)))?$/);
  if (null != match) {
    if (6 === match.length) {
      let tmp4 = null;
      if (null != match[1]) {
        tmp4 = null;
        if (null != match[3]) {
          tmp4 = null;
          if (null != match[5]) {
            tmp4 = { videoId: match[1], clip: match[3], clipt: match[5] };
            const obj = { videoId: match[1], clip: match[3], clipt: match[5] };
          }
        }
      }
      return tmp4;
    }
  }
  return null;
};
export const getYoutubeVideoIdFromURI = function getYoutubeVideoIdFromURI(uri) {
  const match = uri.match(/^https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]*)(\?start=([0-9]+))?$/);
  let tmp = null;
  if (null != match) {
    tmp = null;
    if (null != match[1]) {
      tmp = null;
      if (11 === match[1].length) {
        if (4 === match.length) {
          let obj;
          if (null != match[3]) {
            const _Number = Number;
            obj = { videoId: match[1], start: Number(match[3]) };
            const obj2 = { videoId: match[1], start: Number(match[3]) };
          }
          tmp = obj;
        }
        obj = { videoId: match[1] };
      }
    }
  }
  return tmp;
};
export { VideoSourceType };
export const getVideoSourceType = function getVideoSourceType(source) {
  let PORTAL;
  let obj;
  if (null != source.videoURI) {
    obj = MediaFormatTesters;
    if (obj.isWebPlayerVideoUrl(source.videoURI)) {
      PORTAL = obj.WEB_FILE_IFRAME;
    }
    return PORTAL;
  }
  if (null != source.portal) {
    const obj2 = MediaModalPortal;
    if (!obj2.isPortalExpired(source.portal)) {
      PORTAL = obj.PORTAL;
    }
  }
  if (null != source.embedURI) {
    let DEFAULT;
    if ("TikTok" === source.embedProviderName) {
      DEFAULT = obj.TIKTOK_IFRAME;
    }
    PORTAL = DEFAULT;
  }
  DEFAULT = obj.DEFAULT;
};
export const supportOverlayVideoControls = function supportOverlayVideoControls(videoURI) {
  let tmp = null != videoURI.videoURI && true !== videoURI.isGIFV;
  if (!tmp) {
    tmp = null != videoURI.embedURI && "TikTok" === videoURI.embedProviderName;
    const tmp2 = null != videoURI.embedURI && "TikTok" === videoURI.embedProviderName;
  }
  return tmp;
};
export { isAnimatedWebpSource };
export { isAnimatedAvifSource };
export { isGIFSource };
export const isAnimatedImageSource = function isAnimatedImageSource(source) {
  const obj = MediaFormatTesters;
  let result = obj.urlMatchesFileExtension(source.sourceURI, ConstantsIOS.GIF_RE_IOS);
  if (!result) {
    let result1 = null != source.sourceURI && null != source.uri;
    if (result1) {
      const tmpResult = MediaFormatTesters;
      result1 = tmpResult.urlMatchesFileExtension(source.sourceURI, metroRequire);
    }
    if (result1) {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(source.uri);
      const searchParams = uRL.searchParams;
      result1 = "true" === searchParams.get("animated");
    }
    result = result1;
  }
  if (!result) {
    let result2 = null != source.sourceURI && null != source.uri;
    if (result2) {
      const tmpResult2 = MediaFormatTesters;
      result2 = tmpResult2.urlMatchesFileExtension(source.sourceURI, re7);
    }
    if (result2) {
      const _URL2 = URL;
      const self3 = this;
      const self4 = this;
      const uRL1 = new URL(source.uri);
      const searchParams2 = uRL1.searchParams;
      result2 = "true" === searchParams2.get("animated");
    }
    result = result2;
  }
  return result;
};

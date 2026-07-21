// Module ID: 8268
// Function ID: 65216
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: downloadMediaAsset, extractMediaFromMessageComponents, extractMediaSourcesFromComponent, extractMediaSourcesFromEmbed, extractMediaSourcesFromMessage, getSelectedMediaSource, getVideoSourceType, getYoutubeClipVideoIdFromURI, getYoutubeVideoIdFromURI, isAnimatedImageSource, setMediaSourcePortal, supportOverlayVideoControls, useSelectedMediaSource

// Module 8268 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function flattenSource(closure_1, arg1) {
  if (!Array.isArray(closure_1)) {
    return closure_1;
  } else if (arg1) {
    let first = closure_1[closure_1.length - 1];
  } else {
    first = closure_1[0];
  }
}
function isValidImageAttachment(filename) {
  let height;
  let width;
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    let tmp3 = arg1(dependencyMap[3]).isImageFile(filename.filename) && null != height;
    if (tmp3) {
      tmp3 = height > 0;
    }
    if (tmp3) {
      tmp3 = null != width;
    }
    if (tmp3) {
      tmp3 = width > 0;
    }
    if (tmp3) {
      tmp3 = !isThumbnailAttachment(filename);
    }
    return tmp3;
  }
}
function isValidVideoAttachment(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isVideoFileResult = null != filename;
    if (isVideoFileResult) {
      isVideoFileResult = arg1(dependencyMap[3]).isVideoFile(filename.filename);
      const obj = arg1(dependencyMap[3]);
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
      hasFlagResult = arg1(dependencyMap[4]).hasFlag(flags.flags, constants.IS_THUMBNAIL);
      const obj = arg1(dependencyMap[4]);
    }
    tmp = hasFlagResult;
  }
  return tmp;
}
function getAttachmentUrl(attachment) {
  if (null != attachment.proxy_url) {
    if ("" !== attachment.proxy_url) {
      let url = attachment.proxy_url;
    }
    return url;
  }
  url = attachment.url;
}
function extractMediaFromAttachment(width, id, index, guild_id) {
  let height;
  if (null != width.width) {
    if (width.width > 0) {
      if (null != width.height) {
        if (width.height > 0) {
          const enabledHarmTypesForMessage = id(dependencyMap[5]).getEnabledHarmTypesForMessage(id);
          const obj11 = id(dependencyMap[5]);
          let obj = { type: id(dependencyMap[6]).ObscuredMediaTypes.Attachment, media: width };
          const result = id(dependencyMap[5]).isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
          const obj12 = id(dependencyMap[5]);
          const isVideoFileResult = id(dependencyMap[3]).isVideoFile(width.filename);
          const tmp50 = getAttachmentUrl(width);
          const obj15 = importDefault(dependencyMap[7]);
          ({ width, height } = width);
          let str;
          if (isVideoFileResult) {
            str = "png";
          }
          const mobileOptimizedSrc = obj15.getMobileOptimizedSrc(tmp50, width, height, str);
          if (isVideoFileResult) {
            obj = { uri: mobileOptimizedSrc, messageId: id.id, guildId: guild_id, channelId: id.channel_id, videoURI: tmp50, filename: importDefault(dependencyMap[8])(width), mediaIndex: index };
            ({ width: obj9.width, height: obj9.height } = width);
            obj.sourceURI = tmp50;
            ({ content_type: obj9.contentType, description: obj9.description } = width);
            obj.accessoryType = "attachment";
            const flags3 = width.flags;
            let num7 = 0;
            if (null != flags3) {
              num7 = flags3;
            }
            obj.spoiler = id(dependencyMap[4]).hasFlag(num7, constants.IS_SPOILER);
            obj.flags = width.flags;
            obj.obscure = result;
            ({ placeholder: obj9.placeholder, content_scan_version: obj9.contentScanVersion } = width);
            obj.mediaViewIndex = arg4;
            obj.attachmentId = width.id;
            return obj;
          } else {
            obj = { uri: mobileOptimizedSrc, messageId: id.id, guildId: guild_id, channelId: id.channel_id, filename: importDefault(dependencyMap[8])(width), mediaIndex: index };
            ({ width: obj.width, height: obj.height, url: obj.sourceURI, content_type: obj.contentType, description: obj.description } = width);
            obj.accessoryType = "attachment";
            let obj1 = id(dependencyMap[4]);
            const flags = width.flags;
            let num3 = 0;
            if (null != flags) {
              num3 = flags;
            }
            obj.spoiler = obj1.hasFlag(num3, constants.IS_SPOILER);
            obj.flags = width.flags;
            obj.obscure = result;
            ({ placeholder: obj.placeholder, content_scan_version: obj.contentScanVersion } = width);
            obj.mediaViewIndex = arg4;
            obj.attachmentId = width.id;
            obj1 = {};
            const merged = Object.assign(obj);
            obj1["uri"] = tmp50;
            const formatted = importDefault(dependencyMap[8])(width).toLowerCase();
            const str4 = importDefault(dependencyMap[8])(width);
            const endsWithResult = formatted.endsWith(".webp");
            const formatted1 = importDefault(dependencyMap[8])(width).toLowerCase();
            const endsWithResult1 = formatted1.endsWith(".avif");
            const str6 = importDefault(dependencyMap[8])(width);
            const flags2 = width.flags;
            let num4 = 0;
            if (null != flags2) {
              num4 = flags2;
            }
            if (obj6.hasFlag(num4, constants.IS_ANIMATED)) {
              const _URL2 = URL;
              const str11 = new URL(tmp50);
              const searchParams2 = str11.searchParams;
              searchParams2.append("animated", "true");
              if (endsWithResult1) {
                const searchParams3 = str11.searchParams;
                searchParams3.append("format", "webp");
              }
              const items = [obj, ];
              const obj2 = {};
              const merged1 = Object.assign(obj1);
              obj2["uri"] = str11.toString();
              items[1] = obj2;
              return items;
            }
            if (endsWithResult1) {
              const _URL = URL;
              const str8 = new URL(tmp50);
              const searchParams = str8.searchParams;
              searchParams.append("format", "webp");
              const items1 = [obj, ];
              const obj3 = {};
              const merged2 = Object.assign(obj1);
              obj3["uri"] = str8.toString();
              items1[1] = obj3;
              return items1;
            } else {
              let tmp20 = obj1;
              if (tmp50 !== mobileOptimizedSrc) {
                const items2 = [obj, obj1];
                tmp20 = items2;
              }
              return tmp20;
            }
            const obj6 = id(dependencyMap[4]);
          }
          const obj14 = id(dependencyMap[3]);
        }
      }
    }
  }
}
function getEmbedUrl(size) {
  const proxyURL = size.proxyURL;
  if (null != proxyURL) {
    if ("" !== proxyURL) {
      const _URL = URL;
      const str2 = new URL(proxyURL);
      const formatted = str2.pathname.toLowerCase();
      const endsWithResult = formatted.endsWith(".avif");
      const formatted1 = str2.pathname.toLowerCase();
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
  return size.url;
}
function getEmbedContentScanVersion(contentScanVersion) {
  if (null != contentScanVersion.contentScanVersion) {
    let content_scan_version = contentScanVersion.contentScanVersion;
  } else if (null != contentScanVersion.content_scan_version) {
    content_scan_version = contentScanVersion.content_scan_version;
  }
  return content_scan_version;
}
function getMediaContentType(size) {
  if ("contentType" in size) {
    let contentType = size.contentType;
  } else if ("content_type" in size) {
    const content_type = size.content_type;
    if (null != content_type) {
      contentType = content_type;
    }
  }
  return contentType;
}
function getEmbedMedia(image) {
  let thumbnail = image.image;
  if (null == thumbnail) {
    thumbnail = image.video;
  }
  if (null == thumbnail) {
    thumbnail = image.thumbnail;
  }
  return thumbnail;
}
function extractMediaFromEmbed(video, id, contentMessage, mediaIndex, guildId) {
  const size = getEmbedMedia(video);
  if (null != size) {
    let tmp2;
    if (null != video.video) {
      tmp2 = getEmbedUrl(video.video);
    }
    const tmp4 = getEmbedUrl(size);
    const tmp6 = getEmbedContentScanVersion(video);
    let obj = importDefault(dependencyMap[7]);
    const mobileOptimizedSrc = obj.getMobileOptimizedSrc(tmp4, size.width, size.height);
    obj = { contentMessage };
    const hasSpoilerEmbeds = importDefault(dependencyMap[9])(id, obj).hasSpoilerEmbeds;
    let obj2 = id(dependencyMap[5]);
    const enabledHarmTypesForMessage = obj2.getEnabledHarmTypesForMessage(id);
    let obj3 = id(dependencyMap[5]);
    obj = { type: id(dependencyMap[6]).ObscuredMediaTypes.Embed, media: video };
    const result = obj3.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
    if ("title" in video) {
      let rawTitle = video.title;
    } else if ("rawTitle" in video) {
      rawTitle = video.rawTitle;
    }
    let obj5 = id(dependencyMap[10]);
    const obj1 = {};
    const merged = Object.assign(video);
    obj1["rawTitle"] = rawTitle;
    const isEmbedInlineResult = obj5.isEmbedInline(obj1);
    let obj7 = id(dependencyMap[10]);
    const provider = video.provider;
    let name;
    if (null != provider) {
      name = provider.name;
    }
    video = video.video;
    let url;
    if (null != video) {
      url = video.url;
    }
    const effectiveVideoProvider = obj7.getEffectiveVideoProvider(name, url);
    const result1 = id(dependencyMap[11]).shouldPlayVideoInline(effectiveVideoProvider);
    let tmp26 = result1;
    if (result1) {
      tmp26 = null != video.video;
    }
    if (null != tmp2) {
      if (!result1) {
        obj2 = { uri: mobileOptimizedSrc, messageId: id.id, guildId, channelId: id.channel_id, mediaIndex, videoURI: tmp2, embedURI: video.url };
        ({ width: obj10.width, height: obj10.height } = size);
        obj2.isGIFV = "gifv" === video.type;
        obj2.sourceURI = size.url;
        const provider2 = video.provider;
        let name1;
        if (null != provider2) {
          name1 = provider2.name;
        }
        obj2.embedProviderName = name1;
        obj2.accessoryType = "embed";
        obj2.noCarousel = !isEmbedInlineResult;
        obj2.spoiler = hasSpoilerEmbeds;
        obj2.flags = video.flags;
        obj2.contentScanVersion = tmp6;
        obj2.contentType = getMediaContentType(size);
        obj2.obscure = result;
        let tmp29;
        if (null != video.thumbnail) {
          obj3 = { width: video.thumbnail.width, height: video.thumbnail.height, uri: video.thumbnail.url };
          tmp29 = obj3;
        }
        obj2.thumbnail = tmp29;
        return obj2;
      }
    }
    if ("video" !== video.type) {
      const obj4 = { uri: mobileOptimizedSrc, messageId: id.id, guildId, channelId: id.channel_id, mediaIndex };
      ({ width: obj13.width, height: obj13.height, url: obj13.sourceURI } = size);
      obj4.accessoryType = "embed";
      obj4.noCarousel = !isEmbedInlineResult;
      obj4.spoiler = hasSpoilerEmbeds;
      obj4.flags = video.flags;
      obj4.obscure = result;
      obj4.contentScanVersion = tmp6;
      obj4.contentType = getMediaContentType(size);
      obj5 = {};
      const merged1 = Object.assign(obj4);
      obj5["uri"] = tmp4;
      let tmp38 = obj5;
      if (tmp4 !== mobileOptimizedSrc) {
        const items = [obj4, obj5];
        tmp38 = items;
      }
      return tmp38;
    }
    const items1 = [];
    if (null != video.thumbnail) {
      const tmp40 = getEmbedUrl(video.thumbnail);
      const obj6 = { uri: importDefault(dependencyMap[7]).getMobileOptimizedSrc(tmp40, video.thumbnail.width, video.thumbnail.height), guildId, spoiler: hasSpoilerEmbeds, flags: video.flags, obscure: result, contentScanVersion: tmp6, contentType: getMediaContentType(video.thumbnail), messageId: id.id, noCarousel: !isEmbedInlineResult, mediaIndex, accessoryType: "embed", channelId: id.channel_id, sourceURI: video.thumbnail.url, width: video.thumbnail.width, height: video.thumbnail.height };
      items1.push(obj6);
      const obj15 = importDefault(dependencyMap[7]);
    }
    if (tmp26) {
      tmp26 = null != video.video;
    }
    if (tmp26) {
      obj7 = { uri: mobileOptimizedSrc, guildId, spoiler: hasSpoilerEmbeds, flags: video.flags, obscure: result, contentScanVersion: tmp6, contentType: getMediaContentType(video.video), sourceURI: video.url, messageId: id.id, noCarousel: !isEmbedInlineResult, mediaIndex, accessoryType: "embed", width: video.video.width, height: video.video.height, channelId: id.channel_id, embedURI: getEmbedUrl(video.video), embedProviderName: effectiveVideoProvider, disableDownload: true };
      items1.push(obj7);
    }
    if (0 !== items1.length) {
      if (1 === items1.length) {
        let first = items1[0];
      } else if (2 === items1.length) {
        const items2 = [, ];
        [arr2[0], arr2[1]] = items1;
        first = items2;
      }
      return first;
    }
    const obj9 = id(dependencyMap[11]);
  }
}
function toMediaSourceFromUnfurledMedia(id, guildId, media, description, spoiler) {
  let proxyUrl2;
  let width;
  let width2;
  let obj = guildId(dependencyMap[14]);
  const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
  if (unfurledMediaItemType === guildId(dependencyMap[15]).MediaGalleryItemType.VISUAL_PLACEHOLDER) {
    return null;
  } else {
    const tmp26 = unfurledMediaItemType === guildId(dependencyMap[15]).MediaGalleryItemType.VIDEO;
    const obj8 = importDefault(dependencyMap[7]);
    ({ proxyUrl: proxyUrl2, width: width2 } = media);
    let num = 0;
    if (null != width2) {
      num = width2;
    }
    const height = media.height;
    let num2 = 0;
    if (null != height) {
      num2 = height;
    }
    let str;
    if (tmp26) {
      str = "png";
    }
    const mobileOptimizedSrc = obj8.getMobileOptimizedSrc(proxyUrl2, num, num2, str);
    const contentScanMetadata = media.contentScanMetadata;
    let version;
    if (null != contentScanMetadata) {
      version = contentScanMetadata.version;
    }
    let obj1 = guildId(dependencyMap[5]);
    const enabledHarmTypesForMessage = obj1.getEnabledHarmTypesForMessage(id);
    let obj2 = guildId(dependencyMap[5]);
    obj = { type: guildId(dependencyMap[6]).ObscuredMediaTypes.GenericMedia, media };
    obj = { messageId: id.id, guildId, channelId: id.channel_id, uri: mobileOptimizedSrc };
    ({ url: obj5.sourceURI, width } = media);
    let num5 = 0;
    const result = obj2.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
    if (null != width) {
      num5 = width;
    }
    obj.width = num5;
    const height2 = media.height;
    let num6 = 0;
    if (null != height2) {
      num6 = height2;
    }
    obj.height = num6;
    obj.contentType = media.contentType;
    obj.description = description;
    obj.spoiler = spoiler;
    obj.obscure = result;
    obj.contentScanVersion = version;
    obj.accessoryType = "component";
    obj.mediaIndex = 0;
    obj1 = {};
    const merged = Object.assign(obj);
    const proxyUrl = media.proxyUrl;
    if (tmp26) {
      obj1["videoURI"] = proxyUrl;
      return obj1;
    } else {
      obj1["uri"] = proxyUrl;
      let tmp19 = obj1;
      if (media.proxyUrl !== mobileOptimizedSrc) {
        obj2 = {};
        const merged1 = Object.assign(obj);
        const items = [obj2, obj1];
        tmp19 = items;
      }
      return tmp19;
    }
  }
}
function handleDownloadError() {
  let obj = importDefault(dependencyMap[21]);
  obj = {};
  const intl = arg1(dependencyMap[22]).intl;
  obj.title = intl.string(arg1(dependencyMap[22]).t.cV3alD);
  const intl2 = arg1(dependencyMap[22]).intl;
  obj.body = intl2.string(arg1(dependencyMap[22]).t.r4Zjzv);
  obj.isDismissable = true;
  obj.show(obj);
}
function downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType) {
  if (null != contentType) {
    const MediaManager2 = NativeModules.MediaManager;
    let result = MediaManager2.downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType);
  } else {
    const MediaManager = NativeModules.MediaManager;
    result = MediaManager.downloadMediaAsset(mediaUrl, VIDEO);
  }
  return result.then(() => {
    if (arg1(closure_2[18]).MediaType.IMAGE === arg1) {
      arg1(closure_2[19]).presentImageSaved();
      const obj3 = arg1(closure_2[19]);
    } else if (arg1(closure_2[18]).MediaType.GIF === tmp) {
      arg1(closure_2[19]).presentGifSaved();
      const obj2 = arg1(closure_2[19]);
    } else if (arg1(closure_2[18]).MediaType.VIDEO === tmp) {
      arg1(closure_2[19]).presentVideoSaved();
      const obj = arg1(closure_2[19]);
    }
    const MediaViewerAnalytics = arg1(closure_2[20]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
  }, handleDownloadError);
}
function isAnimatedWebpSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    result = arg1(dependencyMap[3]).urlMatchesFileExtension(sourceURI.sourceURI, closure_6);
    const obj = arg1(dependencyMap[3]);
  }
  if (result) {
    const _URL = URL;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
}
function isAnimatedAvifSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    result = arg1(dependencyMap[3]).urlMatchesFileExtension(sourceURI.sourceURI, closure_7);
    const obj = arg1(dependencyMap[3]);
  }
  if (result) {
    const _URL = URL;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
}
function isGIFSource(sourceURI) {
  return arg1(dependencyMap[3]).urlMatchesFileExtension(sourceURI.sourceURI, arg1(dependencyMap[18]).GIF_RE_IOS);
}
let closure_3 = importAll(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
({ MessageAttachmentFlags: closure_5, WEBP_RE_IOS: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = /\.avif$/i;
const obj = { PORTAL: 0, [0]: "PORTAL", TIKTOK_IFRAME: 1, [1]: "TIKTOK_IFRAME", WEB_FILE_IFRAME: 2, [2]: "WEB_FILE_IFRAME", DEFAULT: 3, [3]: "DEFAULT" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/media_viewer/native/MediaSourceUtil.tsx");

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
export const extractMediaFromMessageComponents = function extractMediaFromMessageComponents(getContentMessage, contentMessage, getContentMessage) {
  if (0 === contentMessage.components.length) {
    return [];
  } else {
    const items = [];
    const obj2 = contentMessage(dependencyMap[12]);
    const items1 = [];
    HermesBuiltin.arraySpread(contentMessage(dependencyMap[12]).flattenComponents(contentMessage.components).values(), 0);
    let num = 0;
    if (0 < items1.length) {
      do {
        let tmp = items1[num];
        let type = tmp.type;
        let tmp2 = closure_0;
        let tmp3 = closure_2;
        if (closure_0(closure_2[13]).ComponentType.MEDIA_GALLERY === type) {
          let tmp4 = closure_9;
          let tmp5 = closure_9(tmp.items);
          let iter = tmp5();
          let iter2 = iter;
          let tmp6 = iter;
          let tmp7 = tmp5;
          let tmp8 = tmp18;
          let tmp9 = tmp19;
          let tmp10 = tmp20;
          if (!iter.done) {
            do {
              let value = iter2.value;
              let tmp11 = closure_24;
              let tmp12 = getContentMessage;
              let tmp13 = getContentMessage;
              let tmp14 = closure_24(getContentMessage, getContentMessage, value.media, value.description, value.spoiler);
              if (null != tmp14) {
                let obj = { sources: tmp14, unfurledMediaItem: value.media };
                let arr = items.push(obj);
              }
              let iter3 = tmp5();
              iter2 = iter3;
              tmp6 = iter3;
              tmp7 = tmp5;
              tmp8 = value;
              tmp9 = tmp14;
              tmp10 = tmp20;
            } while (!iter3.done);
          }
        } else {
          let tmp26 = closure_0;
          let tmp27 = closure_2;
          tmp6 = tmp16;
          tmp7 = tmp17;
          tmp8 = tmp18;
          tmp9 = tmp19;
          tmp10 = tmp20;
          if (closure_0(closure_2[13]).ComponentType.THUMBNAIL === type) {
            let tmp28 = closure_24;
            let tmp29 = getContentMessage;
            let tmp30 = getContentMessage;
            let tmp31 = closure_24(getContentMessage, getContentMessage, tmp.media, tmp.description, tmp.spoiler);
            tmp6 = tmp16;
            tmp7 = tmp17;
            tmp8 = tmp18;
            tmp9 = tmp19;
            tmp10 = tmp31;
            if (null != tmp31) {
              obj = { sources: tmp31, unfurledMediaItem: tmp.media };
              arr = items.push(obj);
              tmp6 = tmp16;
              tmp7 = tmp17;
              tmp8 = tmp18;
              tmp9 = tmp19;
              tmp10 = tmp31;
            }
          }
        }
        num = num + 1;
        let tmp16 = tmp6;
        let tmp17 = tmp7;
        let tmp18 = tmp8;
        let tmp19 = tmp9;
        let tmp20 = tmp10;
      } while (num < items1.length);
    }
    return items;
  }
};
export const extractMediaSourcesFromEmbed = function extractMediaSourcesFromEmbed(arg0, contentMessage, images, index, guild_id) {
  contentMessage = arg0;
  const importDefault = images;
  const dependencyMap = index;
  let closure_3 = guild_id;
  const NativeModules = importDefault(dependencyMap[9])(arg0, { contentMessage }).hasSpoilerEmbeds;
  images = images.images;
  if (null == images) {
    const items = [images.image];
    images = items;
  }
  return images.map((width) => {
    const tmp = callback(width);
    let obj = arg2(arg3[7]);
    const mobileOptimizedSrc = obj.getMobileOptimizedSrc(tmp, width.width, width.height);
    const tmp3 = callback2(arg2);
    const enabledHarmTypesForMessage = width(arg3[5]).getEnabledHarmTypesForMessage(width);
    const obj2 = width(arg3[5]);
    obj = { type: width(arg3[6]).ObscuredMediaTypes.Embed, media: arg2 };
    const tmp5 = width(arg3[5]).getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesForMessage).length > 0;
    obj = { uri: mobileOptimizedSrc, messageId: width.id, guildId: arg4, channelId: width.channel_id, mediaIndex: arg3, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, flags: arg2.flags, obscure: tmp5, contentScanVersion: tmp3, contentType: width.contentType };
    const items = [obj, { uri: tmp, messageId: width.id, guildId: arg4, channelId: width.channel_id, mediaIndex: arg3, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, contentType: width.contentType, flags: arg2.flags, obscure: tmp5, contentScanVersion: tmp3 }];
    return items;
  });
};
export const extractMediaSourcesFromComponent = function extractMediaSourcesFromComponent(id, components, guild_id, arg3, componentMediaIndex) {
  components = id;
  const importDefault = guild_id;
  let obj = components(dependencyMap[12]);
  const value = obj.flattenComponents(components).get(arg3);
  if (null == value) {
    return null;
  } else {
    const type = value.type;
    if (components(dependencyMap[13]).ComponentType.MEDIA_GALLERY === type) {
      let num2 = 0;
      if (null != componentMediaIndex) {
        num2 = 0;
        if (componentMediaIndex <= value.items.length) {
          num2 = componentMediaIndex;
        }
      }
      const dependencyMap = num2;
      const items = value.items;
      const mapped = items.map((media) => {
        let tmp = callback(media, arg2, media.media, media.description, media.spoiler);
        if (null == tmp) {
          tmp = null;
          if (arg1 < closure_2) {
            closure_2 = closure_2 - 1;
            tmp = null;
          }
        }
        return tmp;
      });
      obj = { initialIndex: dependencyMap, sources: mapped.filter(components(dependencyMap[16]).isNotNullish) };
      return obj;
    } else if (components(dependencyMap[13]).ComponentType.THUMBNAIL === type) {
      const tmp7 = toMediaSourceFromUnfurledMedia(id, guild_id, value.media, value.description, value.spoiler);
      let tmp8 = null;
      if (null != tmp7) {
        obj = { initialIndex: 0 };
        const items1 = [tmp7];
        obj.sources = items1;
        tmp8 = obj;
      }
      return tmp8;
    } else {
      return null;
    }
  }
  const flattenComponentsResult = obj.flattenComponents(components);
};
export const extractMediaSourcesFromMessage = function extractMediaSourcesFromMessage(message, message2, guild_id, GRAVITY_VALID_EMBED_TYPES) {
  const items = [];
  let num = 0;
  let num2 = 0;
  if (0 < message2.attachments.length) {
    do {
      let tmp = message2.attachments[num2];
      let tmp2 = closure_12;
      if (closure_12(tmp)) {
        let tmp4 = closure_18;
        let tmp5 = tmp;
        let tmp6 = message;
        let tmp7 = num2;
        let tmp8 = guild_id;
        let tmp9 = num;
        let tmp10 = closure_18(tmp, message, num2, guild_id, num);
        let tmp11 = tmp10;
        if (null != tmp10) {
          let arr = items.push(tmp10);
          let tmp13 = tmp10;
        }
      } else {
        let tmp3 = closure_13;
      }
      let tmp14 = closure_16;
      let sum = num;
      if (!closure_16(tmp)) {
        sum = num + 1;
      }
      num2 = num2 + 1;
      num = sum;
    } while (num2 < message2.attachments.length);
  }
  let num3 = 0;
  if (0 < message2.embeds.length) {
    do {
      let tmp17 = message2.embeds[num3];
      if (null == GRAVITY_VALID_EMBED_TYPES) {
        let tmp19 = closure_14;
        if (closure_14(tmp17)) {
          let tmp21 = closure_23;
          let tmp22 = tmp17;
          let tmp23 = message;
          let tmp24 = message2;
          let tmp25 = num3;
          let tmp26 = guild_id;
          let tmp27 = closure_23(tmp17, message, message2, num3, guild_id);
          let tmp18 = tmp27;
          if (null != tmp27) {
            arr = items.push(tmp27);
            tmp18 = tmp27;
          }
        } else {
          let tmp20 = closure_15;
          tmp18 = tmp16;
        }
      } else {
        tmp18 = tmp16;
      }
      num3 = num3 + 1;
      let tmp16 = tmp18;
    } while (num3 < message2.embeds.length);
  }
  return items;
};
export const setMediaSourcePortal = function setMediaSourcePortal(closure_1, portal) {
  const tmp = flattenSource(closure_1);
  if (!tmp2) {
    const _Array = Array;
    if (Array.isArray(closure_1)) {
      closure_1[0].portal = portal;
    } else {
      closure_1.portal = portal;
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
        if (Array.isArray(arr)) {
          tmp4 = arr[arr.length - 1];
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  }
  return null;
};
export const useSelectedMediaSource = function useSelectedMediaSource(syncer) {
  const arg1 = syncer;
  const tmp = importDefault(dependencyMap[17])(syncer.index);
  const importDefault = tmp;
  const items = [syncer.sources, tmp];
  const items1 = [
    tmp,
    React.useMemo(() => {
      if (tmp >= 0) {
        if (tmp < arg0.sources.length) {
          let tmp5 = null;
          if (null != arg0.sources[closure_1]) {
            const _Array = Array;
            let tmp7 = arr;
            if (Array.isArray(arr)) {
              tmp7 = arr[arr.length - 1];
            }
            tmp5 = tmp7;
          }
          return tmp5;
        }
      }
      return null;
    }, items)
  ];
  return items1;
};
export const downloadMediaAsset = function downloadMediaAsset(mediaUrl, VIDEO) {
  return downloadMediaAssetWithContentType(mediaUrl, VIDEO);
};
export { downloadMediaAssetWithContentType };
export const getYoutubeClipVideoIdFromURI = function getYoutubeClipVideoIdFromURI(uri) {
  const match = uri.match(/^https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]*)(\?clip=([A-Za-z0-9_-]+)(&clipt=([A-Za-z0-9_-]+)))?$/);
  if (null != match) {
    if (6 === match.length) {
      let tmp4 = null;
      if (null != match[1]) {
        tmp4 = null;
        if (null != tmp2) {
          tmp4 = null;
          if (null != tmp3) {
            const obj = { videoId: tmp, clip: tmp2, clipt: tmp3 };
            tmp4 = obj;
          }
        }
      }
      return tmp4;
    }
  }
  return null;
};
export const getYoutubeVideoIdFromURI = function getYoutubeVideoIdFromURI(uri) {
  let match = uri.match(/^https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]*)(\?start=([0-9]+))?$/);
  let tmp = null;
  if (null != match) {
    let num = 1;
    tmp = null;
    if (null != match[1]) {
      tmp = null;
      if (11 === match[num].length) {
        let num3 = match.length;
        if (4 !== num3) {
          let obj = { videoId: match[num] };
        } else {
          num3 = 3;
        }
        obj = { videoId: match[num] };
        num = Number;
        match = match[num3];
        num3 = Number(match);
        obj.start = num3;
      }
    }
  }
  return tmp;
};
export const VideoSourceType = obj;
export const getVideoSourceType = function getVideoSourceType(source) {
  if (null != source.videoURI) {
    const obj = arg1(dependencyMap[3]);
    if (obj.isWebPlayerVideoUrl(source.videoURI)) {
      let PORTAL = obj.WEB_FILE_IFRAME;
    }
    return PORTAL;
  }
  if (null != source.portal) {
    if (!obj2.isPortalExpired(source.portal)) {
      PORTAL = obj.PORTAL;
    }
    const obj2 = arg1(dependencyMap[23]);
  }
  if (null == source.embedURI) {
    const DEFAULT = obj.DEFAULT;
  }
  const TIKTOK_IFRAME = obj.TIKTOK_IFRAME;
};
export const supportOverlayVideoControls = function supportOverlayVideoControls(videoURI) {
  let tmp = null != videoURI.videoURI;
  if (tmp) {
    tmp = true !== videoURI.isGIFV;
  }
  if (!tmp) {
    let tmp2 = null != videoURI.embedURI;
    if (tmp2) {
      tmp2 = "TikTok" === videoURI.embedProviderName;
    }
    tmp = tmp2;
  }
  return tmp;
};
export { isAnimatedWebpSource };
export { isAnimatedAvifSource };
export { isGIFSource };
export const isAnimatedImageSource = function isAnimatedImageSource(source) {
  let tmp = isGIFSource(source);
  if (!tmp) {
    tmp = isAnimatedWebpSource(source);
  }
  if (!tmp) {
    tmp = isAnimatedAvifSource(source);
  }
  return tmp;
};

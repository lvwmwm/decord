// Module ID: 7323
// Function ID: 7324
// Name: ForumPostMediaUtils
// Dependencies: [19, 6724, 2045, 5056, 1372, 1074, 4986, 2021, 1385, 1366, 1370, 5060, 1979, 5066, 11, 2]
// Exports: getEmbedColor, isValidImageAttachment, isValidVideoAttachment, messageContainsGifOrVideo, shouldShowAddMediaToOriginalPostModal, useFindFirstMediaProperties, useFirstMediaIsEmbed, useForumPostComponentsMedia, useForumPostMediaThumbnail

// Module 7323 (ForumPostMediaUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import UserSettings from "UserSettings" /* 2021 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5060 */;
import react from "react" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6724 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, type;

let c9;
let metroImportAll;
function isMediaAttachment(filename) {
  let height;
  let width;
  let flag = false;
  if (null != filename) {
    ({ height, width } = filename);
    filename = filename.filename;
    const obj = MediaFormatTesters;
    flag = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
    const tmp3 = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
  }
  if (!flag) {
    let tmp4 = null != filename;
    if (tmp4) {
      let isVideoFileResult = null != filename;
      if (isVideoFileResult) {
        const obj2 = MediaFormatTesters;
        isVideoFileResult = obj2.isVideoFile(filename.filename);
      }
      if (isVideoFileResult) {
        isVideoFileResult = null != filename.proxy_url;
      }
      tmp4 = isVideoFileResult;
    }
    flag = tmp4;
  }
  return flag;
}
function getForumPostMedia(attachments, InlineAttachmentMedia) {
  let constants2;
  let setting = InlineAttachmentMedia;
  if (InlineAttachmentMedia === undefined) {
    const tmp2 = require;
    const tmp3 = dependencyMap;
    InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
    setting = InlineAttachmentMedia.getSetting();
  }
  if (setting) {
    let attachments1;
    const tmp4 = attachments;
    let moderatorReport;
    if (attachments != null) {
      const first = attachments.messageSnapshots[0];
      if (first != null) {
        moderatorReport = first.moderatorReport;
      }
    }
    if (null != moderatorReport) {
      attachments = undefined;
      if (attachments != null) {
        const first1 = attachments.messageSnapshots[0];
        if (first1 != null) {
          attachments = first1.message.attachments;
        }
      }
      attachments1 = attachments;
    } else if (attachments != null) {
      attachments1 = attachments.attachments;
    }
    if (null != attachments) {
      let found1;
      if (null != attachments1) {
        const found = attachments1.filter(isMediaAttachment);
        const mapped = found.map((flags, mediaIndex) => {
          let hasFlag;
          let hasFlag2;
          let height;
          let num;
          let num2;
          let proxy_url;
          let tmp12;
          let width;
          ({ proxy_url, flags, width, height } = flags);
          if (null != width) {
            if (null != height) {
              const obj4 = require("MediaFormatTesters");
              const isVideoFileResult = obj4.isVideoFile(tmp3);
              let hasFlagResult = null != flags.flags;
              if (hasFlagResult) {
                const tmp14Result = require("FlagUtils");
                hasFlagResult = tmp14Result.hasFlag(flags.flags, constants.IS_THUMBNAIL);
              }
              let str1 = proxy_url;
              if (proxy_url == null) {
                str1 = tmp;
              }
              if (isVideoFileResult) {
                const obj2 = URLUtilsDefault;
                const str = obj2.toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  str1 = str.toString();
                }
              }
              size = { type: constants2.ATTACHMENT, src: str1, width, height, spoiler: hasFlag(num, constants.IS_SPOILER), flags, contentScanVersion: tmp4, alt: tmp2, isVideo: isVideoFileResult, isThumbnail: hasFlagResult, attachmentId: flags.id, mediaIndex, srcIsAnimated: hasFlag2(num2, tmp12.IS_ANIMATED) };
              num = flags;
              hasFlag = require("FlagUtils").hasFlag;
              require("FlagUtils");
              if (flags == null) {
                num = 0;
              }
              num2 = flags.flags;
              hasFlag2 = require("FlagUtils").hasFlag;
              require("FlagUtils");
              tmp12 = constants;
              if (num2 == null) {
                num2 = 0;
              }
              return size;
            }
          }
          return null;
        });
        let tmp12 = dependencyMap;
        found1 = mapped.filter(GlobalUtils.isNotNullish);
      }
      return found1;
    }
    found1 = [];
  } else {
    return [];
  }
}
function useForumPostEmbeds(embeds, flag) {
  let spoiler;
  _require = flag;
  let tmp = _require;
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  if (null == embeds) {
    return [];
  } else {
    let embeds1;
    const first = embeds.messageSnapshots[0];
    let moderatorReport;
    if (first != null) {
      moderatorReport = first.moderatorReport;
    }
    if (null != moderatorReport) {
      const first1 = embeds.messageSnapshots[0];
      embeds = undefined;
      if (first1 != null) {
        embeds = first1.message.embeds;
      }
      embeds1 = embeds;
    } else {
      embeds1 = embeds.embeds;
    }
    if (setting) {
      if (tmp4) {
        let found;
        if (null != embeds1) {
          const mapped = embeds1.map((image, mediaIndex) => {
            let flags;
            let hasFlag;
            let height;
            let proxyURL;
            let tmp6;
            let url;
            let width;
            let thumbnail = image.image;
            if (thumbnail == null) {
              thumbnail = image.thumbnail;
            }
            const tmp = null == thumbnail && null != image.images;
            if (tmp) {
              thumbnail = image.images[0];
            }
            if (null != thumbnail) {
              if (null != thumbnail.url) {
                let obj;
                ({ proxyURL, url, flags } = thumbnail);
                let isVideoUrlResult = null != proxyURL;
                ({ height, width } = thumbnail);
                if (isVideoUrlResult) {
                  obj = MediaFormatTesters;
                  isVideoUrlResult = obj.isVideoUrl(proxyURL);
                }
                size = { type: obj.EMBED, src: tmp6, height, width, spoiler, flags: null, contentScanVersion: null, isVideo: isVideoUrlResult, mediaIndex, srcIsAnimated: hasFlag(flags, constants.IS_ANIMATED) };
                tmp6 = url;
                if (null != proxyURL) {
                  tmp6 = url;
                  if ("" !== proxyURL) {
                    tmp6 = proxyURL;
                  }
                }
                ({ flags: obj2.flags, contentScanVersion: obj2.contentScanVersion } = image);
                hasFlag = FlagUtils.hasFlag;
                FlagUtils;
                if (flags == null) {
                  flags = 0;
                }
                return size;
              }
            }
          });
          found = mapped.filter(tmp(1370).isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
}
function useForumPostMediaProperties(firstResult, flag) {
  let items1;
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const items = [...getForumPostMedia(firstResult, InlineAttachmentMedia.useSetting()), ...useForumPostEmbeds(firstResult, flag)];
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == firstResult) {
    items1 = [];
  } else {
    const components = firstResult.components;
    if (tmp5) {
      if (null != components) {
        const _Array = Array;
        const tmp2Result = InteractionComponentUtils;
        const flattenComponentsResult = tmp2Result.flattenComponents(components);
        const fromResult = from(flattenComponentsResult.values());
        const flatMapResult = fromResult.flatMap((type) => {
          let height;
          let media;
          let num;
          let spoiler;
          let tmpResult2;
          let version;
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            let tmp4 = null;
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult2.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
              ({ proxyUrl: obj3.src, height } = media);
              if (height == null) {
                height = 0;
              }
              num = media.width;
              if (num == null) {
                num = 0;
              }
              let contentScanMetadata = media.contentScanMetadata;
              version = undefined;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              tmp6 = size;
              tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              let height;
              let media;
              let num;
              let spoiler;
              let tmpResult;
              let version;
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const obj = closure_1_0(closure_1_2[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult.hasFlag(media.flags, closure_1_0(closure_1_2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                num = media.width;
                if (num == null) {
                  num = 0;
                }
                const contentScanMetadata = media.contentScanMetadata;
                version = undefined;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                tmp4 = size;
                tmpResult = closure_1_0(closure_1_2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
        items1 = flatMapResult.filter(tmp2(1370).isNotNullish);
      }
    }
    items1 = [];
  }
  HermesBuiltin.arraySpread(items, items1, tmp4);
  return items;
}
({ MessageAttachmentFlags: metroImportAll, MessageEmbedMediaFlags: c9 } = Constants);
const ForumPostMediaTypes = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/forums/ForumPostMediaUtils.tsx");

export const getEmbedColor = function getEmbedColor(firstResult, flag) {
  if (null != firstResult) {
    if (null != firstResult.embeds[0]) {
      let tmp;
      if (null == firstResult.embeds[0].color) {
        if (!flag) {
          tmp = firstResult.embeds[0].color;
        }
      }
      return tmp;
    }
  }
};
export const isValidImageAttachment = function isValidImageAttachment(filename) {
  let height;
  let width;
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    filename = filename.filename;
    const obj = MediaFormatTesters;
    const tmp3 = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
    return tmp3;
  }
};
export const isValidVideoAttachment = function isValidVideoAttachment(filename) {
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
};
export { isMediaAttachment };
export { ForumPostMediaTypes };
export { getForumPostMedia };
export const useForumPostComponentsMedia = function useForumPostComponentsMedia(components) {
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp3) {
      let found;
      if (null != components) {
        const _Array = Array;
        const tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = tmpResult.flattenComponents(components);
        const fromResult = from(flattenComponentsResult.values());
        const flatMapResult = fromResult.flatMap((type) => {
          let height;
          let media;
          let num;
          let spoiler;
          let tmpResult2;
          let version;
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            let tmp4 = null;
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult2.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
              ({ proxyUrl: obj3.src, height } = media);
              if (height == null) {
                height = 0;
              }
              num = media.width;
              if (num == null) {
                num = 0;
              }
              let contentScanMetadata = media.contentScanMetadata;
              version = undefined;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              tmp6 = size;
              tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              let height;
              let media;
              let num;
              let spoiler;
              let tmpResult;
              let version;
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const obj = closure_1_0(closure_1_2[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult.hasFlag(media.flags, closure_1_0(closure_1_2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                num = media.width;
                if (num == null) {
                  num = 0;
                }
                const contentScanMetadata = media.contentScanMetadata;
                version = undefined;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                tmp4 = size;
                tmpResult = closure_1_0(closure_1_2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
        found = flatMapResult.filter(tmp(1370).isNotNullish);
      }
      return found;
    }
    found = [];
  }
};
export const useForumPostMediaThumbnail = function useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds) {
  let closure_0 = stateFromStores1;
  let flag = hasSpoilerEmbeds;
  if (hasSpoilerEmbeds === undefined) {
    flag = false;
  }
  const tmp = useForumPostMediaProperties(firstMessage, flag);
  let closure_1 = tmp;
  let items = [stateFromStores1, tmp];
  return react.useMemo(() => {
    const obj = closure_0;
    if (null == closure_0) {
      return [];
    } else {
      let arr = closure_1;
      if (obj.isMediaChannel()) {
        const found = arr.find((isThumbnail) => isThumbnail.isThumbnail);
        if (null != found) {
          const items = [found];
          arr = items;
        }
        return arr;
      } else {
        return arr;
      }
    }
  }, items);
};
export { useForumPostMediaProperties };
export const useFindFirstMediaProperties = function useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds) {
  let items;
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const tmp3 = getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
  const tmp4 = useForumPostEmbeds(firstMessage, hasSpoilerEmbeds);
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == firstMessage) {
    items = [];
  } else {
    const components = firstMessage.components;
    if (tmp5) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = tmpResult.flattenComponents(components);
        const fromResult = from(flattenComponentsResult.values());
        const flatMapResult = fromResult.flatMap((type) => {
          let height;
          let media;
          let num;
          let spoiler;
          let tmpResult2;
          let version;
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            let tmp4 = null;
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult2.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
              ({ proxyUrl: obj3.src, height } = media);
              if (height == null) {
                height = 0;
              }
              num = media.width;
              if (num == null) {
                num = 0;
              }
              let contentScanMetadata = media.contentScanMetadata;
              version = undefined;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              tmp6 = size;
              tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              let height;
              let media;
              let num;
              let spoiler;
              let tmpResult;
              let version;
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const obj = closure_1_0(closure_1_2[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult.hasFlag(media.flags, closure_1_0(closure_1_2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                num = media.width;
                if (num == null) {
                  num = 0;
                }
                const contentScanMetadata = media.contentScanMetadata;
                version = undefined;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                tmp4 = size;
                tmpResult = closure_1_0(closure_1_2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
        items = flatMapResult.filter(tmp(1370).isNotNullish);
      }
    }
    items = [];
  }
  let first = tmp3[0];
  if (first == null) {
    first = tmp4[0];
  }
  if (first == null) {
    first = items[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};
export const useFirstMediaIsEmbed = function useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds) {
  let items;
  const tmp = require;
  const tmp2 = dependencyMap;
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const tmp3 = getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
  let tmp4 = useForumPostEmbeds(firstMessage, hasSpoilerEmbeds);
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == firstMessage) {
    items = [];
  } else {
    const components = firstMessage.components;
    if (tmp5) {
      if (null != components) {
        let tmp6 = globalThis;
        const _Array = Array;
        let tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = tmpResult.flattenComponents(components);
        const fromResult = from(flattenComponentsResult.values());
        const flatMapResult = fromResult.flatMap((type) => {
          let height;
          let media;
          let num;
          let spoiler;
          let tmpResult2;
          let version;
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            let tmp4 = null;
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult2.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
              ({ proxyUrl: obj3.src, height } = media);
              if (height == null) {
                height = 0;
              }
              num = media.width;
              if (num == null) {
                num = 0;
              }
              let contentScanMetadata = media.contentScanMetadata;
              version = undefined;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              tmp6 = size;
              tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              let height;
              let media;
              let num;
              let spoiler;
              let tmpResult;
              let version;
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const obj = closure_1_0(closure_1_2[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult.hasFlag(media.flags, closure_1_0(closure_1_2[13]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                num = media.width;
                if (num == null) {
                  num = 0;
                }
                const contentScanMetadata = media.contentScanMetadata;
                version = undefined;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                tmp4 = size;
                tmpResult = closure_1_0(closure_1_2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
        items = flatMapResult.filter(GlobalUtils.isNotNullish);
      }
    }
    items = [];
  }
  return null == tmp3[0] && null == items[0] && null != tmp4[0];
};
export const shouldShowAddMediaToOriginalPostModal = function shouldShowAddMediaToOriginalPostModal(uploads, id) {
  const channel = ChannelStore.getChannel(id);
  if (null == channel) {
    let flag = false;
    return false;
  } else {
    const getMessage = MessageStore.getMessage;
    id = channel.id;
    let obj2 = SnowflakeUtilsDefault;
    const message = getMessage(id, obj2.castChannelIdAsMessageId(channel.id));
    let tmp8 = null != message;
    if (tmp8) {
      let tmp2 = uploads.length > 0 && null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) && channel.isForumPost();
      if (tmp2) {
        let tmp3 = UserStore;
        const ownerId = channel.ownerId;
        const currentUser = UserStore.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        tmp2 = ownerId === id1;
      }
      if (tmp2) {
        tmp2 = 0 === ThreadMessageStore.getCount(channel.id);
      }
      if (tmp2) {
        let tmp7 = 0 === message.attachments.length;
        if (!tmp7) {
          const attachments = message.attachments;
          tmp7 = null == attachments.find((filename) => {
            let height;
            let width;
            let flag = false;
            if (null != filename) {
              ({ height, width } = filename);
              filename = filename.filename;
              const obj = require("MediaFormatTesters");
              flag = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
              const tmp3 = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
            }
            if (!flag) {
              let tmp4 = null != filename;
              if (tmp4) {
                let isVideoFileResult = null != filename;
                if (isVideoFileResult) {
                  const obj2 = require("MediaFormatTesters");
                  isVideoFileResult = obj2.isVideoFile(filename.filename);
                }
                if (isVideoFileResult) {
                  isVideoFileResult = null != filename.proxy_url;
                }
                tmp4 = isVideoFileResult;
              }
              flag = tmp4;
            }
            return flag;
          });
        }
        tmp2 = tmp7;
      }
      tmp8 = tmp2;
    }
    return tmp8;
  }
};
export const messageContainsGifOrVideo = function messageContainsGifOrVideo(media) {
  return media.reduce((containsVideo, isVideo) => {
    let containsGif;
    const obj = { containsVideo: containsVideo.containsVideo || isVideo.isVideo, containsGif };
    containsGif = containsVideo.containsGif;
    if (!containsGif) {
      const obj2 = require("MediaFormatTesters");
      containsGif = obj2.isAnimatedImageUrl(isVideo.src);
    }
    return obj;
  }, { containsVideo: false, containsGif: false });
};

// Module ID: 8372
// Function ID: 66202
// Name: isValidImageAttachment
// Dependencies: [31, 5683, 1348, 4349, 1849, 653, 4317, 3803, 1360, 1443, 1327, 4353, 1881, 4358, 21, 2]
// Exports: getEmbedColor, messageContainsGifOrVideo, shouldShowAddMediaToOriginalPostModal, useFindFirstMediaProperties, useFirstMediaIsEmbed, useForumPostMediaThumbnail

// Module 8372 (isValidImageAttachment)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function isValidImageAttachment(filename) {
  let height;
  let width;
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    let tmp3 = require(4317) /* urlMatchesFileExtension */.isImageFile(filename.filename) && null != height;
    if (tmp3) {
      tmp3 = height > 0;
    }
    if (tmp3) {
      tmp3 = null != width;
    }
    if (tmp3) {
      tmp3 = width > 0;
    }
    return tmp3;
  }
}
function isValidVideoAttachment(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isVideoFileResult = null != filename;
    if (isVideoFileResult) {
      isVideoFileResult = require(4317) /* urlMatchesFileExtension */.isVideoFile(filename.filename);
      const obj = require(4317) /* urlMatchesFileExtension */;
    }
    if (isVideoFileResult) {
      isVideoFileResult = null != filename.proxy_url;
    }
    tmp = isVideoFileResult;
  }
  return tmp;
}
function isMediaAttachment(arg0) {
  let tmp = isValidImageAttachment(arg0);
  if (!tmp) {
    tmp = isValidVideoAttachment(arg0);
  }
  return tmp;
}
function getForumPostMedia(attachments, InlineAttachmentMedia) {
  let setting = InlineAttachmentMedia;
  if (InlineAttachmentMedia === undefined) {
    InlineAttachmentMedia = require(3803) /* explicitContentFromProto */.InlineAttachmentMedia;
    setting = InlineAttachmentMedia.getSetting();
  }
  if (setting) {
    let moderatorReport;
    if (null != attachments) {
      const first = attachments.messageSnapshots[0];
      if (null != first) {
        moderatorReport = first.moderatorReport;
      }
    }
    if (null != moderatorReport) {
      attachments = undefined;
      if (null != attachments) {
        const first1 = attachments.messageSnapshots[0];
        if (null != first1) {
          attachments = first1.message.attachments;
        }
      }
      let attachments1 = attachments;
    } else if (null != attachments) {
      attachments1 = attachments.attachments;
    }
    if (null != attachments) {
      if (null != attachments1) {
        const found = attachments1.filter(isMediaAttachment);
        const mapped = found.map((flags, mediaIndex) => {
          let height;
          let proxy_url;
          let url;
          let width;
          ({ proxy_url, url, flags, width, height } = flags);
          if (null != width) {
            if (null != height) {
              const isVideoFileResult = outer1_0(outer1_2[6]).isVideoFile(tmp2);
              let hasFlagResult = null != flags.flags;
              if (hasFlagResult) {
                let obj = outer1_0(outer1_2[8]);
                hasFlagResult = obj.hasFlag(flags.flags, outer1_8.IS_THUMBNAIL);
              }
              if (null != proxy_url) {
                url = proxy_url;
              }
              if (isVideoFileResult) {
                const str = outer1_1(outer1_2[9]).toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  url = str.toString();
                }
                const obj2 = outer1_1(outer1_2[9]);
              }
              obj = { type: outer1_10.ATTACHMENT, src: url, width, height };
              const obj6 = outer1_0(outer1_2[6]);
              let num4 = 0;
              if (null != flags) {
                num4 = flags;
              }
              obj.spoiler = outer1_0(outer1_2[8]).hasFlag(num4, outer1_8.IS_SPOILER);
              obj.flags = flags;
              obj.contentScanVersion = tmp3;
              obj.alt = tmp;
              obj.isVideo = isVideoFileResult;
              obj.isThumbnail = hasFlagResult;
              obj.attachmentId = flags.id;
              obj.mediaIndex = mediaIndex;
              const obj4 = outer1_0(outer1_2[8]);
              const flags2 = flags.flags;
              let num5 = 0;
              if (null != flags2) {
                num5 = flags2;
              }
              obj.srcIsAnimated = outer1_0(outer1_2[8]).hasFlag(num5, outer1_8.IS_ANIMATED);
              return obj;
            }
          }
          return null;
        });
        let found1 = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
      }
      return found1;
    }
    found1 = [];
  } else {
    return [];
  }
}
function useForumPostMedia(firstMessage) {
  const InlineAttachmentMedia = require(3803) /* explicitContentFromProto */.InlineAttachmentMedia;
  return getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
}
function useForumPostEmbeds(embeds, hasSpoilerEmbeds) {
  const _require = hasSpoilerEmbeds;
  const InlineEmbedMedia = _require(3803).InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = _require(3803).RenderEmbeds;
  if (null == embeds) {
    return [];
  } else {
    const first = embeds.messageSnapshots[0];
    let moderatorReport;
    if (null != first) {
      moderatorReport = first.moderatorReport;
    }
    if (null != moderatorReport) {
      const first1 = embeds.messageSnapshots[0];
      embeds = undefined;
      if (null != first1) {
        embeds = first1.message.embeds;
      }
      let embeds1 = embeds;
    } else {
      embeds1 = embeds.embeds;
    }
    if (setting) {
      if (tmp2) {
        if (null != embeds1) {
          const mapped = embeds1.map((image, mediaIndex) => {
            let flags;
            let height;
            let proxyURL;
            let url;
            let width;
            let thumbnail = image.image;
            if (null == thumbnail) {
              thumbnail = image.thumbnail;
            }
            if (tmp) {
              thumbnail = image.images[0];
            }
            if (null != thumbnail) {
              if (null != thumbnail.url) {
                ({ proxyURL, url, flags } = thumbnail);
                let isVideoUrlResult = null != proxyURL;
                ({ height, width } = thumbnail);
                if (isVideoUrlResult) {
                  let obj = hasSpoilerEmbeds(outer1_2[6]);
                  isVideoUrlResult = obj.isVideoUrl(proxyURL);
                }
                obj = { type: outer1_10.EMBED };
                let tmp6 = url;
                if (null != proxyURL) {
                  tmp6 = url;
                  if ("" !== proxyURL) {
                    tmp6 = proxyURL;
                  }
                }
                obj.src = tmp6;
                obj.height = height;
                obj.width = width;
                obj.spoiler = hasSpoilerEmbeds;
                ({ flags: obj2.flags, contentScanVersion: obj2.contentScanVersion } = image);
                obj.isVideo = isVideoUrlResult;
                obj.mediaIndex = mediaIndex;
                let num4 = 0;
                if (null != flags) {
                  num4 = flags;
                }
                obj.srcIsAnimated = hasSpoilerEmbeds(outer1_2[8]).hasFlag(num4, outer1_9.IS_ANIMATED);
                return obj;
              }
            }
          });
          let found = mapped.filter(_require(1327).isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
}
function useForumPostComponentsMedia(components) {
  const InlineEmbedMedia = require(3803) /* explicitContentFromProto */.InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp) {
      if (null != components) {
        const _Array = Array;
        const obj = require(4353) /* _createForOfIteratorHelperLoose */;
        const flattenComponentsResult = require(4353) /* _createForOfIteratorHelperLoose */.flattenComponents(components);
        const arr = Array.from(require(4353) /* _createForOfIteratorHelperLoose */.flattenComponents(components).values());
        let found = Array.from(require(4353) /* _createForOfIteratorHelperLoose */.flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (outer1_0(outer1_2[12]).ComponentType.THUMBNAIL === type) {
            let spoiler = type.spoiler;
            let tmp6 = null != spoiler;
            if (tmp6) {
              tmp6 = spoiler;
            }
            return outer1_18(type.media, tmp6);
          } else if (outer1_0(outer1_2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((spoiler) => {
              spoiler = spoiler.spoiler;
              let tmp2 = null != spoiler;
              if (tmp2) {
                tmp2 = spoiler;
              }
              return outer2_18(spoiler.media, tmp2);
            });
          } else {
            return null;
          }
        }).filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
        const flatMapResult = Array.from(require(4353) /* _createForOfIteratorHelperLoose */.flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (outer1_0(outer1_2[12]).ComponentType.THUMBNAIL === type) {
            let spoiler = type.spoiler;
            let tmp6 = null != spoiler;
            if (tmp6) {
              tmp6 = spoiler;
            }
            return outer1_18(type.media, tmp6);
          } else if (outer1_0(outer1_2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((spoiler) => {
              spoiler = spoiler.spoiler;
              let tmp2 = null != spoiler;
              if (tmp2) {
                tmp2 = spoiler;
              }
              return outer2_18(spoiler.media, tmp2);
            });
          } else {
            return null;
          }
        });
      }
      return found;
    }
    found = [];
  }
}
function unfurledMediaToForumPostMediaAttachment(width, spoiler) {
  let height;
  let obj = require(4358) /* toContentScanMetadata */;
  const unfurledMediaItemType = obj.getUnfurledMediaItemType(width);
  let tmp2 = null;
  if ("INVALID" !== unfurledMediaItemType) {
    obj = {};
    obj.type = obj.COMPONENT;
    ({ proxyUrl: obj3.src, height } = width);
    let num = 0;
    if (null != height) {
      num = height;
    }
    obj.height = num;
    width = width.width;
    let num2 = 0;
    if (null != width) {
      num2 = width;
    }
    obj.width = num2;
    obj.spoiler = spoiler;
    const contentScanMetadata = width.contentScanMetadata;
    let version;
    if (null != contentScanMetadata) {
      version = contentScanMetadata.version;
    }
    obj.contentScanVersion = version;
    obj.flags = 0;
    obj.srcIsAnimated = require(1360) /* hasFlag */.hasFlag(width.flags, require(4358) /* toContentScanMetadata */.UnfurledMediaItemFlags.IS_ANIMATED);
    obj.isVideo = "VIDEO" === unfurledMediaItemType;
    obj.mediaIndex = 0;
    obj.srcUnfurledMediaItem = width;
    tmp2 = obj;
    const obj2 = require(1360) /* hasFlag */;
  }
  return tmp2;
}
function useForumPostMediaProperties(firstResult, flag) {
  const items = [...useForumPostMedia(firstResult), ...useForumPostEmbeds(firstResult, flag), ...useForumPostComponentsMedia(firstResult)];
  return items;
}
({ MessageAttachmentFlags: closure_8, MessageEmbedMediaFlags: closure_9 } = ME);
let obj = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/ForumPostMediaUtils.tsx");

export const getEmbedColor = function getEmbedColor(firstResult, arg1) {
  if (null != firstResult) {
    if (null != firstResult.embeds[0]) {
      if (null == firstResult.embeds[0].color) {
        if (!arg1) {
          const tmp = str;
        }
      }
      return tmp;
    }
  }
};
export { isValidImageAttachment };
export { isValidVideoAttachment };
export { isMediaAttachment };
export const ForumPostMediaTypes = obj;
export { getForumPostMedia };
export { useForumPostComponentsMedia };
export const useForumPostMediaThumbnail = function useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds) {
  let flag = hasSpoilerEmbeds;
  let closure_0 = stateFromStores1;
  if (hasSpoilerEmbeds === undefined) {
    flag = false;
  }
  let c1;
  const tmp = useForumPostMediaProperties(firstMessage, flag);
  c1 = tmp;
  let items = [stateFromStores1, tmp];
  return React.useMemo(() => {
    if (null == stateFromStores1) {
      return [];
    } else if (stateFromStores1.isMediaChannel()) {
      const found = arr.find((isThumbnail) => isThumbnail.isThumbnail);
      if (null != found) {
        const items = [found];
        let tmp3 = items;
      } else {
        tmp3 = c1;
      }
      return tmp3;
    } else {
      return arr;
    }
  }, items);
};
export { useForumPostMediaProperties };
export const useFindFirstMediaProperties = function useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds) {
  const tmp = useForumPostMedia(firstMessage);
  let first = tmp[0];
  const tmp2 = useForumPostEmbeds(firstMessage, hasSpoilerEmbeds);
  if (null == first) {
    first = tmp2[0];
  }
  if (null == first) {
    first = tmp3[0];
  }
  let tmp5 = null;
  if (null != first) {
    tmp5 = first;
  }
  return tmp5;
};
export const useFirstMediaIsEmbed = function useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds) {
  const tmp = useForumPostMedia(firstMessage);
  const tmp2 = useForumPostEmbeds(firstMessage, hasSpoilerEmbeds);
  return null == tmp[0] && null == useForumPostComponentsMedia(firstMessage)[0] && null != useForumPostEmbeds(firstMessage, hasSpoilerEmbeds)[0];
};
export const shouldShowAddMediaToOriginalPostModal = function shouldShowAddMediaToOriginalPostModal(uploads, id) {
  channel = channel.getChannel(id);
  if (null == channel) {
    return false;
  } else {
    message = message.getMessage(channel.id, importDefault(21).castChannelIdAsMessageId(channel.id));
    let tmp7 = null != message;
    if (tmp7) {
      let tmp = uploads.length > 0 && null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) && channel.isForumPost();
      if (tmp) {
        currentUser = currentUser.getCurrentUser();
        id = undefined;
        if (null != currentUser) {
          id = currentUser.id;
        }
        tmp = channel.ownerId === id;
      }
      if (tmp) {
        tmp = 0 === count.getCount(channel.id);
      }
      if (tmp) {
        let tmp6 = 0 === message.attachments.length;
        if (!tmp6) {
          const attachments = message.attachments;
          tmp6 = null == attachments.find((arg0) => {
            let tmp = outer1_11(arg0);
            if (!tmp) {
              tmp = outer1_12(arg0);
            }
            return tmp;
          });
        }
        tmp = tmp6;
      }
      tmp7 = tmp;
    }
    return tmp7;
  }
};
export const messageContainsGifOrVideo = function messageContainsGifOrVideo(media) {
  return media.reduce((containsVideo, isVideo) => {
    const obj = { containsVideo: tmp };
    let containsGif = containsVideo.containsGif;
    if (!containsGif) {
      containsGif = outer1_0(outer1_2[6]).isAnimatedImageUrl(isVideo.src);
      const obj2 = outer1_0(outer1_2[6]);
    }
    obj.containsGif = containsGif;
    return obj;
  }, { containsVideo: false, containsGif: false });
};

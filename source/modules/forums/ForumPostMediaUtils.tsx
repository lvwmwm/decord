// Module ID: 8320
// Function ID: 65912
// Name: isValidImageAttachment
// Dependencies: []
// Exports: getEmbedColor, messageContainsGifOrVideo, shouldShowAddMediaToOriginalPostModal, useFindFirstMediaProperties, useFirstMediaIsEmbed, useForumPostMediaThumbnail

// Module 8320 (isValidImageAttachment)
function isValidImageAttachment(filename) {
  let height;
  let width;
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    let tmp3 = arg1(dependencyMap[6]).isImageFile(filename.filename) && null != height;
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
      isVideoFileResult = arg1(dependencyMap[6]).isVideoFile(filename.filename);
      const obj = arg1(dependencyMap[6]);
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
    InlineAttachmentMedia = InlineAttachmentMedia(dependencyMap[7]).InlineAttachmentMedia;
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
              const isVideoFileResult = callback(closure_2[6]).isVideoFile(tmp2);
              let hasFlagResult = null != flags.flags;
              if (hasFlagResult) {
                let obj = callback(closure_2[8]);
                hasFlagResult = obj.hasFlag(flags.flags, constants.IS_THUMBNAIL);
              }
              if (null != proxy_url) {
                url = proxy_url;
              }
              if (isVideoFileResult) {
                const str = callback2(closure_2[9]).toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  url = str.toString();
                }
                const obj2 = callback2(closure_2[9]);
              }
              obj = { type: constants2.ATTACHMENT, src: url, width, height };
              const obj6 = callback(closure_2[6]);
              let num4 = 0;
              if (null != flags) {
                num4 = flags;
              }
              obj.spoiler = callback(closure_2[8]).hasFlag(num4, constants.IS_SPOILER);
              obj.flags = flags;
              obj.contentScanVersion = tmp3;
              obj.alt = tmp;
              obj.isVideo = isVideoFileResult;
              obj.isThumbnail = hasFlagResult;
              obj.attachmentId = flags.id;
              obj.mediaIndex = mediaIndex;
              const obj4 = callback(closure_2[8]);
              const flags2 = flags.flags;
              let num5 = 0;
              if (null != flags2) {
                num5 = flags2;
              }
              obj.srcIsAnimated = callback(closure_2[8]).hasFlag(num5, constants.IS_ANIMATED);
              return obj;
            }
          }
          return null;
        });
        let found1 = mapped.filter(InlineAttachmentMedia(dependencyMap[10]).isNotNullish);
      }
      return found1;
    }
    found1 = [];
  } else {
    return [];
  }
}
function useForumPostMedia(firstMessage) {
  const InlineAttachmentMedia = arg1(dependencyMap[7]).InlineAttachmentMedia;
  return getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
}
function useForumPostEmbeds(embeds, hasSpoilerEmbeds) {
  const InlineEmbedMedia = hasSpoilerEmbeds(dependencyMap[7]).InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = hasSpoilerEmbeds(dependencyMap[7]).RenderEmbeds;
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
                  let obj = mediaIndex(closure_2[6]);
                  isVideoUrlResult = obj.isVideoUrl(proxyURL);
                }
                obj = { type: constants2.EMBED };
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
                obj.spoiler = mediaIndex;
                ({ flags: obj2.flags, contentScanVersion: obj2.contentScanVersion } = image);
                obj.isVideo = isVideoUrlResult;
                obj.mediaIndex = mediaIndex;
                let num4 = 0;
                if (null != flags) {
                  num4 = flags;
                }
                obj.srcIsAnimated = mediaIndex(closure_2[8]).hasFlag(num4, constants.IS_ANIMATED);
                return obj;
              }
            }
          });
          let found = mapped.filter(hasSpoilerEmbeds(dependencyMap[10]).isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
}
function useForumPostComponentsMedia(components) {
  const InlineEmbedMedia = arg1(dependencyMap[7]).InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp) {
      if (null != components) {
        const _Array = Array;
        const obj = arg1(dependencyMap[11]);
        const flattenComponentsResult = arg1(dependencyMap[11]).flattenComponents(components);
        const arr = Array.from(arg1(dependencyMap[11]).flattenComponents(components).values());
        let found = Array.from(arg1(dependencyMap[11]).flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (callback(closure_2[12]).ComponentType.THUMBNAIL === type) {
            const spoiler = type.spoiler;
            let tmp6 = null != spoiler;
            if (tmp6) {
              tmp6 = spoiler;
            }
            return closure_18(type.media, tmp6);
          } else if (callback(closure_2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((spoiler) => {
              spoiler = spoiler.spoiler;
              let tmp2 = null != spoiler;
              if (tmp2) {
                tmp2 = spoiler;
              }
              return closure_18(spoiler.media, tmp2);
            });
          } else {
            return null;
          }
        }).filter(arg1(dependencyMap[10]).isNotNullish);
        const flatMapResult = Array.from(arg1(dependencyMap[11]).flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (callback(closure_2[12]).ComponentType.THUMBNAIL === type) {
            const spoiler = type.spoiler;
            let tmp6 = null != spoiler;
            if (tmp6) {
              tmp6 = spoiler;
            }
            return closure_18(type.media, tmp6);
          } else if (callback(closure_2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((spoiler) => {
              spoiler = spoiler.spoiler;
              let tmp2 = null != spoiler;
              if (tmp2) {
                tmp2 = spoiler;
              }
              return closure_18(spoiler.media, tmp2);
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
  let obj = spoiler(dependencyMap[13]);
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
    obj.srcIsAnimated = spoiler(dependencyMap[8]).hasFlag(width.flags, spoiler(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED);
    obj.isVideo = "VIDEO" === unfurledMediaItemType;
    obj.mediaIndex = 0;
    obj.srcUnfurledMediaItem = width;
    tmp2 = obj;
    const obj2 = spoiler(dependencyMap[8]);
  }
  return tmp2;
}
function useForumPostMediaProperties(firstResult, flag) {
  const items = [...closure_15(firstResult), ...closure_16(firstResult, flag), ...closure_17(firstResult)];
  return items;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ MessageAttachmentFlags: closure_8, MessageEmbedMediaFlags: closure_9 } = arg1(dependencyMap[5]));
const obj = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/forums/ForumPostMediaUtils.tsx");

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
  if (hasSpoilerEmbeds === undefined) {
    flag = false;
  }
  let importDefault;
  const tmp = useForumPostMediaProperties(firstMessage, flag);
  importDefault = tmp;
  const items = [stateFromStores1, tmp];
  return React.useMemo(() => {
    if (null == arg1) {
      return [];
    } else if (arg1.isMediaChannel()) {
      const found = arr.find((isThumbnail) => isThumbnail.isThumbnail);
      if (null != found) {
        const items = [found];
        let tmp3 = items;
      } else {
        tmp3 = tmp;
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
  const channel = channel.getChannel(id);
  if (null == channel) {
    return false;
  } else {
    const message = message.getMessage(channel.id, importDefault(dependencyMap[14]).castChannelIdAsMessageId(channel.id));
    let tmp7 = null != message;
    if (tmp7) {
      let tmp = uploads.length > 0 && null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) && channel.isForumPost();
      if (tmp) {
        const currentUser = currentUser.getCurrentUser();
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
            let tmp = callback(arg0);
            if (!tmp) {
              tmp = callback2(arg0);
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
      containsGif = callback(closure_2[6]).isAnimatedImageUrl(isVideo.src);
      const obj2 = callback(closure_2[6]);
    }
    obj.containsGif = containsGif;
    return obj;
  }, { 9223372036854775807: null, 0: null });
};

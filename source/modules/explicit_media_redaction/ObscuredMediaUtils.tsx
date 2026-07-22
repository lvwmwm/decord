// Module ID: 5665
// Function ID: 48659
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getUnscannedMediaIds, isEligibleForScanning, isMediaObscuredForHarmTypes, messageHasObscurableMedia

// Module 5665 (_createForOfIteratorHelperLoose)
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
function getEligibleHarmTypesConfigsForContext() {
  const values = Object.values(arg1(dependencyMap[7]).CONTENT_SCAN_TYPE_REGISTRY);
  return values.filter((isEligible) => {
    let tmp = null == isEligible.isEligible;
    if (!tmp) {
      let isEligibleResult;
      if (null != isEligible.isEligible) {
        isEligibleResult = isEligible.isEligible();
      }
      tmp = isEligibleResult;
    }
    return tmp;
  });
}
function getEnabledHarmTypesForMessage(message) {
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  if (null != channelId) {
    if (null != message) {
      let NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp2);
    }
    return NONE;
  }
  NONE = arg1(dependencyMap[7]).ContentHarmTypeBitMask.NONE;
}
function getEnabledHarmTypesForChannelAndAuthorId(channelId, id) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (id !== currentUser.id) {
      const items = [closure_5, closure_7];
      const tmp6 = getChannelTypeById(channelId, id, items);
      if (null == tmp6) {
        let NONE = id(dependencyMap[7]).ContentHarmTypeBitMask.NONE;
      } else {
        NONE = getEnabledHarmTypesBitmaskForChannelType(tmp6);
      }
      return NONE;
    }
  }
  return id(dependencyMap[7]).ContentHarmTypeBitMask.NONE;
}
function getEnabledHarmTypesBitmaskForChannelType(GUILD) {
  const arg1 = GUILD;
  if (null == GUILD) {
    let NONE = arg1(dependencyMap[7]).ContentHarmTypeBitMask.NONE;
  } else {
    const mapped = arr.map((harmType) => {
      harmType = null;
      if (callback(harmType.getUserSettingsWithDefaults()[closure_0])) {
        harmType = harmType.harmType;
      }
      return harmType;
    });
    NONE = contentHarmTypesToFlags(mapped.filter(arg1(dependencyMap[8]).isNotNullish));
  }
  return NONE;
}
function messageHasObscurableMediaForBitmask(firstMessage, EXPLICIT) {
  if (EXPLICIT !== EXPLICIT(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    if (null != firstMessage) {
      const attachments = firstMessage.attachments;
      let someResult;
      if (null != attachments) {
        someResult = attachments.some((media) => callback({ type: arg1(closure_2[9]).ObscuredMediaTypes.Attachment, media }, arg1).length > 0);
      }
      if (someResult) {
        return true;
      } else {
        const embeds = firstMessage.embeds;
        let someResult1;
        if (null != embeds) {
          someResult1 = embeds.some((media) => callback({ type: arg1(closure_2[9]).ObscuredMediaTypes.Embed, media }, arg1).length > 0);
        }
        if (someResult1) {
          return true;
        } else {
          if ("messageSnapshots" in firstMessage) {
            let messageSnapshots = firstMessage.messageSnapshots;
          } else {
            messageSnapshots = null;
            if ("message_snapshots" in firstMessage) {
              messageSnapshots = firstMessage.message_snapshots;
            }
          }
          if (null != messageSnapshots) {
            if (0 !== messageSnapshots.length) {
              const tmp5 = _createForOfIteratorHelperLoose(messageSnapshots);
              let iter = tmp5();
              if (!iter.done) {
                while (!messageHasObscurableMediaForBitmask(iter.value.message, EXPLICIT)) {
                  let iter2 = tmp5();
                  iter = iter2;
                }
                return true;
              }
              return false;
            }
          }
          return false;
        }
      }
    }
  }
  return false;
}
function findComponentMedia(components) {
  let obj = components;
  if (!Array.isArray(components)) {
    const items = [components];
    obj = items;
  }
  return obj.flatMap((type) => {
    type = type.type;
    if (callback(closure_2[10]).ComponentType.MEDIA_GALLERY === type) {
      const items = type.items;
      return items.map((media) => media.media);
    } else if (callback(closure_2[10]).ComponentType.THUMBNAIL === type) {
      return type.media;
    } else if (callback(closure_2[10]).ComponentType.FILE === type) {
      return type.file;
    } else {
      if (callback(closure_2[10]).ComponentType.SECTION !== type) {
        if (callback(closure_2[10]).ComponentType.ACTION_ROW !== type) {
          if (callback(closure_2[10]).ComponentType.CONTAINER !== type) {
            return [];
          }
        }
      }
      const components = type.components;
      return components.flatMap(closure_17);
    }
  }).map((media) => {
    let toUnfurledMediaItemResult = media;
    if ("proxy_url" in media) {
      toUnfurledMediaItemResult = callback(closure_2[11]).toUnfurledMediaItem(media);
      const obj = callback(closure_2[11]);
    }
    return toUnfurledMediaItemResult;
  });
}
function getMediaObscuredReasonFromBitmask(arg0, enabledContentHarmTypeFlags) {
  enabledContentHarmTypeFlags = arg0;
  if (enabledContentHarmTypeFlags === enabledContentHarmTypeFlags(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      let items = [];
    } else {
      const found = arr.filter((arg0) => callback(arg0, arg0));
      items = found.map((arg0) => arg0(closure_2[7]).CONTENT_SCAN_TYPE_REGISTRY[arg0].obscureReason);
    }
    return items;
  }
}
function isMediaScanPending(type, enabledContentHarmTypeFlags) {
  if (enabledContentHarmTypeFlags === enabledContentHarmTypeFlags(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    return false;
  } else if (store.get("explicit_media_redaction_ignore_pending_scan")) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      return false;
    } else {
      type = type.type;
      if (enabledContentHarmTypeFlags(dependencyMap[9]).ObscuredMediaTypes.Embed === type) {
        return function shouldScanEmbed(media, arr) {
          if (0 !== arr.length) {
            if (null != media) {
              if (0 === arr.filter((arg0) => !callback(arg0, { type: arg0(closure_2[9]).ObscuredMediaTypes.Embed, media: arg0 })).length) {
                return false;
              } else {
                if ("video" in media) {
                  if (null != media.video) {
                    const video = media.video;
                    let width;
                    if (null != video) {
                      width = video.width;
                    }
                    if (0 === width) {
                      const video2 = media.video;
                      let height;
                      if (null != video2) {
                        height = video2.height;
                      }
                      if (0 === height) {
                        return false;
                      }
                    }
                  }
                }
                if ("thumbnail" in media) {
                  if (null != media.thumbnail) {
                    const thumbnail = media.thumbnail;
                    let width1;
                    if (null != thumbnail) {
                      width1 = thumbnail.width;
                    }
                    if (0 === width1) {
                      const thumbnail2 = media.thumbnail;
                      let height1;
                      if (null != thumbnail2) {
                        height1 = thumbnail2.height;
                      }
                      if (0 === height1) {
                        return false;
                      }
                    }
                  }
                }
                if ("image" in media) {
                  if (null != media.image) {
                    const image = media.image;
                    let width2;
                    if (null != image) {
                      width2 = image.width;
                    }
                    if (0 === width2) {
                      const image2 = media.image;
                      let height2;
                      if (null != image2) {
                        height2 = image2.height;
                      }
                      if (0 === height2) {
                        return false;
                      }
                    }
                  }
                }
                if ("images" in media) {
                  const images = media.images;
                  if (null != images) {
                    if (images.some((width) => {
                      let tmp = null != width;
                      if (tmp) {
                        tmp = 0 === width.width;
                      }
                      if (tmp) {
                        tmp = 0 === width.height;
                      }
                      return tmp;
                    })) {
                      return false;
                    }
                  }
                }
                if (null != media.content_scan_version) {
                  let content_scan_version = media.content_scan_version;
                } else if (null != media.contentScanVersion) {
                  content_scan_version = media.contentScanVersion;
                } else {
                  content_scan_version = null;
                  if (null != media.contentScanVersion) {
                    content_scan_version = media.contentScanVersion;
                  }
                }
                return closure_24(content_scan_version, arr);
              }
            }
          }
          return false;
        }(type.media, arr);
      } else if (enabledContentHarmTypeFlags(dependencyMap[9]).ObscuredMediaTypes.Attachment === type) {
        return function shouldScanAttachment(media, arr) {
          let tmp = 0 !== arr.length;
          if (tmp) {
            let tmp3Result = 0 !== arr.filter((arg0) => !callback(arg0, { type: arg0(closure_2[9]).ObscuredMediaTypes.Attachment, media: arg0 })).length;
            if (tmp3Result) {
              let contentScanVersion = media.content_scan_version;
              if (null == contentScanVersion) {
                contentScanVersion = media.contentScanVersion;
              }
              tmp3Result = closure_24(contentScanVersion, arr);
              const tmp3 = closure_24;
            }
            tmp = tmp3Result;
          }
          return tmp;
        }(type.media, arr);
      } else if (enabledContentHarmTypeFlags(dependencyMap[9]).ObscuredMediaTypes.GenericMedia === type) {
        return function shouldScanGenericMedia(media, arr) {
          let tmp = 0 !== arr.length;
          if (tmp) {
            let tmp3Result = 0 !== arr.filter((arg0) => !callback(arg0, { type: arg0(closure_2[9]).ObscuredMediaTypes.GenericMedia, media: arg0 })).length;
            if (tmp3Result) {
              const contentScanMetadata = media.contentScanMetadata;
              let version;
              if (null != contentScanMetadata) {
                version = contentScanMetadata.version;
              }
              tmp3Result = closure_24(version, arr);
              const tmp3 = closure_24;
            }
            tmp = tmp3Result;
          }
          return tmp;
        }(type.media, arr);
      } else {
        return false;
      }
    }
  }
}
function isMediaFlaggedForHarmType(EXPLICIT, type) {
  if (null == EXPLICIT) {
    return false;
  } else {
    const tmp15 = type(dependencyMap[7]).CONTENT_SCAN_TYPE_REGISTRY[EXPLICIT];
    if (null != tmp15.devSettingKey) {
      if (store.get(tmp15.devSettingKey)) {
        return true;
      }
    }
    type = type.type;
    if (type(dependencyMap[9]).ObscuredMediaTypes.Embed === type) {
      const flags2 = type.media.flags;
      let num7 = 0;
      if (null != flags2) {
        num7 = flags2;
      }
      return type(dependencyMap[12]).hasFlag(num7, tmp15.embedFlag);
    } else if (type(dependencyMap[9]).ObscuredMediaTypes.Attachment === type) {
      let flags = type.media.flags;
      let num5 = 0;
      if (null != flags) {
        num5 = flags;
      }
      return type(dependencyMap[12]).hasFlag(num5, tmp15.attachmentFlag);
    } else if (type(dependencyMap[9]).ObscuredMediaTypes.GenericMedia === type) {
      const contentScanMetadata = type.media.contentScanMetadata;
      flags = undefined;
      if (null != contentScanMetadata) {
        flags = contentScanMetadata.flags;
      }
      let num3 = 0;
      if (null != flags) {
        num3 = flags;
      }
      return type(dependencyMap[12]).hasFlag(num3, tmp15.genericMediaFlag);
    } else {
      return false;
    }
  }
}
function contentHarmTypesToFlags(mapped) {
  let iter3;
  const NONE = arg1(dependencyMap[7]).ContentHarmTypeBitMask.NONE;
  const tmp = _createForOfIteratorHelperLoose(mapped);
  const iter = tmp();
  let iter2 = iter;
  let tmp2 = NONE;
  let tmp3 = NONE;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp4 = closure_0;
      let tmp5 = closure_2;
      if (closure_0(closure_2[7]).ContentHarmType.EXPLICIT === value) {
        let tmp13 = closure_0;
        let tmp14 = closure_2;
        let tmp8 = tmp2 | closure_0(closure_2[7]).ContentHarmTypeBitMask.EXPLICIT;
      } else {
        let tmp15 = closure_0;
        let tmp16 = closure_2;
        if (closure_0(closure_2[7]).ContentHarmType.GORE === value) {
          let tmp11 = closure_0;
          let tmp12 = closure_2;
          tmp8 = tmp2 | closure_0(closure_2[7]).ContentHarmTypeBitMask.GORE;
        } else {
          let tmp6 = closure_0;
          let tmp7 = closure_2;
          tmp8 = tmp2;
          if (closure_0(closure_2[7]).ContentHarmType.SELF_HARM === value) {
            let tmp9 = closure_0;
            let tmp10 = closure_2;
            tmp8 = tmp2 | closure_0(closure_2[7]).ContentHarmTypeBitMask.SELF_HARM;
          }
        }
      }
      iter3 = tmp();
      tmp2 = tmp8;
      iter2 = iter3;
      tmp3 = tmp8;
    } while (!iter3.done);
  }
  return tmp3;
}
function getHarmTypeFromBitmask(enabledHarmTypesForMessage) {
  let iter2;
  if (enabledHarmTypesForMessage === arg1(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const items = [];
    const tmp3 = _createForOfIteratorHelperLoose(getEligibleHarmTypesConfigsForContext());
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        if ((enabledHarmTypesForMessage & value.bitmask) > 0) {
          let arr = items.push(value.harmType);
        }
        iter2 = tmp3();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  }
}
function getChannelTypeById(channelId, id, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_9, ];
    items[1] = globalThis.l;
    tmp = items;
  }
  const tmp4 = callback(tmp, 2);
  const first = tmp4[0];
  const channel = first.getChannel(channelId);
  const currentUser = authStore.getCurrentUser();
  let tmp6 = null;
  if (null != currentUser) {
    tmp6 = null;
    if (id !== currentUser.id) {
      tmp6 = null;
      if (null != channel) {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            const GUILD = id(dependencyMap[9]).ContentHarmTypeChannel.GUILD;
          }
        }
        if (null == id) {
          const NON_FRIEND_DM = id(dependencyMap[9]).ContentHarmTypeChannel.NON_FRIEND_DM;
        } else {
          const friendIDs = obj2.getFriendIDs();
        }
        const FRIEND_DM = id(dependencyMap[9]).ContentHarmTypeChannel.FRIEND_DM;
      }
    }
  }
  return tmp6;
}
function shouldScanForContentScanVersion(arg0, arr) {
  if (-1 === arg0) {
    return tmp2;
  } else {
    if (!arr.includes(arr(dependencyMap[7]).ContentHarmType.GORE)) {
      if (!arr.includes(arr(dependencyMap[7]).ContentHarmType.SELF_HARM)) {
        let tmp8 = null == arg0;
      }
    }
    tmp8 = null == arg0 || arg0 < tmp;
    const tmp10 = null == arg0 || arg0 < tmp;
  }
}
function shouldRedactForSettingValue(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [arg1(dependencyMap[13]).ExplicitContentRedaction.BLOCK, arg1(dependencyMap[13]).ExplicitContentRedaction.BLUR];
    hasItem = items.includes(arg0);
  }
  return hasItem;
}
function getChannelIdAndAuthorIdFromMessage(message) {
  if (null == message) {
    return { "Bool(true)": "o", "Bool(true)": "o" };
  } else {
    let channel_id = null;
    if ("channel_id" in message) {
      channel_id = message.channel_id;
    }
    if ("messageReference" in message) {
      const items = [message.messageReference, importDefault(dependencyMap[14])(message)];
      let items2 = items;
    } else if ("message_reference" in message) {
      const items1 = [message.message_reference, ];
      let obj = arg1(dependencyMap[14]);
      items1[1] = obj.isForwardServerMessage(message);
      items2 = items1;
    } else {
      items2 = [];
    }
    const tmp7 = callback(items2, 2);
    const first = tmp7[0];
    if (null != first) {
      if (tmp7[1]) {
        if (null == first.message_id) {
          obj = { channelId: channel_id, authorId: null };
          return obj;
        } else {
          message = message.getMessage(first.channel_id, first.message_id);
          let author_id = null;
          if (null != message) {
            const author2 = message.author;
            let id;
            if (null != author2) {
              id = author2.id;
            }
            author_id = id;
          }
        }
      }
      obj = { channelId: channel_id, authorId: author_id };
      return obj;
    }
    if ("author" in message) {
      const author = message.author;
      let id1;
      if (null != author) {
        id1 = author.id;
      }
      author_id = id1;
    } else {
      author_id = null;
      if ("author_id" in message) {
        author_id = message.author_id;
      }
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/explicit_media_redaction/ObscuredMediaUtils.tsx");
function hasUnscannedMedia(message, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    tmp = getEnabledHarmTypesForMessage(message);
  }
  arg1 = tmp;
  if (tmp === arg1(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const attachments = message.attachments;
    let someResult;
    if (null != attachments) {
      someResult = attachments.some((media) => callback({ type: tmp(closure_2[9]).ObscuredMediaTypes.Attachment, media }, tmp));
    }
    if (someResult) {
      return true;
    } else {
      const embeds = message.embeds;
      let someResult1;
      if (null != embeds) {
        someResult1 = embeds.some((media) => callback({ type: tmp(closure_2[9]).ObscuredMediaTypes.Embed, media }, tmp));
      }
      if (someResult1) {
        return true;
      } else {
        if (null != message.components) {
          if (obj.some((media) => callback({ type: tmp(closure_2[9]).ObscuredMediaTypes.GenericMedia, media }, tmp))) {
            return true;
          }
          const obj = findComponentMedia(message.components);
        }
        if ("messageSnapshots" in message) {
          let messageSnapshots = message.messageSnapshots;
        } else {
          messageSnapshots = null;
          if ("message_snapshots" in message) {
            messageSnapshots = message.message_snapshots;
          }
        }
        if (null != messageSnapshots) {
          if (0 !== messageSnapshots.length) {
            const tmp8 = _createForOfIteratorHelperLoose(messageSnapshots);
            let iter = tmp8();
            if (!iter.done) {
              while (!hasUnscannedMedia(iter.value.message, tmp)) {
                let iter2 = tmp8();
                iter = iter2;
              }
              return true;
            }
            return false;
          }
        }
        return false;
      }
    }
  }
}

export { getEligibleHarmTypesConfigsForContext };
export { getEnabledHarmTypesForMessage };
export { getEnabledHarmTypesForChannelAndAuthorId };
export { getEnabledHarmTypesBitmaskForChannelType };
export const messageHasObscurableMedia = function messageHasObscurableMedia(message) {
  return messageHasObscurableMediaForBitmask(message, getEnabledHarmTypesForMessage(message));
};
export { messageHasObscurableMediaForBitmask };
export { hasUnscannedMedia };
export const isEligibleForScanning = function isEligibleForScanning(components) {
  let tmp = null == components.components;
  if (!tmp) {
    tmp = !findComponentMedia(components.components).some((loadingState) => loadingState.loadingState === callback(closure_2[10]).UnfurledMediaLoadingState.LOADING);
    const obj = findComponentMedia(components.components);
  }
  return tmp;
};
export const getUnscannedMediaIds = function getUnscannedMediaIds(message) {
  const tmp = getEnabledHarmTypesForMessage(message);
  const arg1 = tmp;
  if (tmp === arg1(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    let obj = { attachmentIds: [], embedIds: [] };
    return obj;
  } else {
    const attachments = message.attachments;
    let found;
    if (null != attachments) {
      found = attachments.filter((media) => callback({ type: tmp(closure_2[9]).ObscuredMediaTypes.Attachment, media }, tmp));
    }
    const embeds = message.embeds;
    let found1;
    if (null != embeds) {
      found1 = embeds.filter((media) => callback({ type: tmp(closure_2[9]).ObscuredMediaTypes.Embed, media }, tmp));
    }
    obj = {};
    let found2;
    if (null != found) {
      const mapped = found.map((id) => id.id);
      const _Boolean = Boolean;
      found2 = mapped.filter(Boolean);
    }
    if (null == found2) {
      found2 = [];
    }
    obj.attachmentIds = found2;
    let found3;
    if (null != found1) {
      const mapped1 = found1.map((arg0, arg1) => "embed_" + arg1);
      const _Boolean2 = Boolean;
      found3 = mapped1.filter(Boolean);
    }
    if (null == found3) {
      found3 = [];
    }
    obj.embedIds = found3;
    return obj;
  }
};
export { getMediaObscuredReasonFromBitmask };
export const isMediaObscuredForHarmTypes = function isMediaObscuredForHarmTypes(arg0, enabledHarmTypesForMessage) {
  enabledHarmTypesForMessage = arg0;
  if (enabledHarmTypesForMessage === enabledHarmTypesForMessage(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledHarmTypesForMessage);
    return 0 !== arr.length && arr.filter((arg0) => callback(arg0, arg0)).length > 0;
  }
};
export { isMediaScanPending };
export { isMediaFlaggedForHarmType };
export { contentHarmTypesToFlags };
export { getHarmTypeFromBitmask };
export { getChannelTypeById };
export { shouldRedactForSettingValue };
export { getChannelIdAndAuthorIdFromMessage };

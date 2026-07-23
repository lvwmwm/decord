// Module ID: 5670
// Function ID: 48686
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4129, 1348, 4349, 3767, 1849, 5671, 5673, 1327, 5675, 1881, 4358, 1360, 1282, 5679, 2]
// Exports: getUnscannedMediaIds, isEligibleForScanning, isMediaObscuredForHarmTypes, messageHasObscurableMedia

// Module 5670 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  const values = Object.values(require(5673) /* ContentHarmType */.CONTENT_SCAN_TYPE_REGISTRY);
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
  NONE = require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
}
function getEnabledHarmTypesForChannelAndAuthorId(channelId, id) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (id !== currentUser.id) {
      const items = [closure_5, closure_7];
      const tmp6 = getChannelTypeById(channelId, id, items);
      if (null == tmp6) {
        let NONE = require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
      } else {
        NONE = getEnabledHarmTypesBitmaskForChannelType(tmp6);
      }
      return NONE;
    }
  }
  return require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
}
function getEnabledHarmTypesBitmaskForChannelType(GUILD) {
  const _require = GUILD;
  if (null == GUILD) {
    let NONE = _require(5673).ContentHarmTypeBitMask.NONE;
  } else {
    const mapped = arr.map((harmType) => {
      harmType = null;
      if (outer1_25(harmType.getUserSettingsWithDefaults()[closure_0])) {
        harmType = harmType.harmType;
      }
      return harmType;
    });
    NONE = contentHarmTypesToFlags(mapped.filter(_require(1327).isNotNullish));
  }
  return NONE;
}
function messageHasObscurableMediaForBitmask(firstMessage, EXPLICIT) {
  const _require = EXPLICIT;
  if (EXPLICIT !== _require(5673).ContentHarmTypeBitMask.NONE) {
    if (null != firstMessage) {
      const attachments = firstMessage.attachments;
      let someResult;
      if (null != attachments) {
        someResult = attachments.some((media) => outer1_18({ type: EXPLICIT(outer1_2[9]).ObscuredMediaTypes.Attachment, media }, EXPLICIT).length > 0);
      }
      if (someResult) {
        return true;
      } else {
        const embeds = firstMessage.embeds;
        let someResult1;
        if (null != embeds) {
          someResult1 = embeds.some((media) => outer1_18({ type: EXPLICIT(outer1_2[9]).ObscuredMediaTypes.Embed, media }, EXPLICIT).length > 0);
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
    let items = [components];
    obj = items;
  }
  return obj.flatMap((type) => {
    type = type.type;
    if (outer1_0(outer1_2[10]).ComponentType.MEDIA_GALLERY === type) {
      const items = type.items;
      return items.map((media) => media.media);
    } else if (outer1_0(outer1_2[10]).ComponentType.THUMBNAIL === type) {
      return type.media;
    } else if (outer1_0(outer1_2[10]).ComponentType.FILE === type) {
      return type.file;
    } else {
      if (outer1_0(outer1_2[10]).ComponentType.SECTION !== type) {
        if (outer1_0(outer1_2[10]).ComponentType.ACTION_ROW !== type) {
          if (outer1_0(outer1_2[10]).ComponentType.CONTAINER !== type) {
            return [];
          }
        }
      }
      const components = type.components;
      return components.flatMap(outer1_17);
    }
  }).map((media) => {
    let toUnfurledMediaItemResult = media;
    if ("proxy_url" in media) {
      toUnfurledMediaItemResult = outer1_0(outer1_2[11]).toUnfurledMediaItem(media);
      const obj = outer1_0(outer1_2[11]);
    }
    return toUnfurledMediaItemResult;
  });
}
function getMediaObscuredReasonFromBitmask(arg0, enabledContentHarmTypeFlags) {
  const _require = arg0;
  if (enabledContentHarmTypeFlags === _require(5673).ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      let items = [];
    } else {
      const found = arr.filter((arg0) => outer1_20(arg0, closure_0));
      items = found.map((arg0) => callback(outer1_2[7]).CONTENT_SCAN_TYPE_REGISTRY[arg0].obscureReason);
    }
    return items;
  }
}
function isMediaScanPending(type, enabledContentHarmTypeFlags) {
  if (enabledContentHarmTypeFlags === require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE) {
    return false;
  } else if (store.get("explicit_media_redaction_ignore_pending_scan")) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      return false;
    } else {
      type = type.type;
      if (require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed === type) {
        return (function shouldScanEmbed(media, arr) {
          let closure_0 = media;
          if (0 !== arr.length) {
            if (null != media) {
              if (0 === arr.filter((arg0) => !outer2_20(arg0, { type: outer2_0(outer2_2[9]).ObscuredMediaTypes.Embed, media: closure_0 })).length) {
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
                return outer1_24(content_scan_version, arr);
              }
            }
          }
          return false;
        })(type.media, arr);
      } else if (require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment === type) {
        return (function shouldScanAttachment(media, arr) {
          let closure_0 = media;
          let tmp = 0 !== arr.length;
          if (tmp) {
            let tmp3Result = 0 !== arr.filter((arg0) => !outer2_20(arg0, { type: outer2_0(outer2_2[9]).ObscuredMediaTypes.Attachment, media: closure_0 })).length;
            if (tmp3Result) {
              let contentScanVersion = media.content_scan_version;
              if (null == contentScanVersion) {
                contentScanVersion = media.contentScanVersion;
              }
              tmp3Result = outer1_24(contentScanVersion, arr);
              const tmp3 = outer1_24;
            }
            tmp = tmp3Result;
          }
          return tmp;
        })(type.media, arr);
      } else if (require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia === type) {
        return (function shouldScanGenericMedia(media, arr) {
          let closure_0 = media;
          let tmp = 0 !== arr.length;
          if (tmp) {
            let tmp3Result = 0 !== arr.filter((arg0) => !outer2_20(arg0, { type: outer2_0(outer2_2[9]).ObscuredMediaTypes.GenericMedia, media: closure_0 })).length;
            if (tmp3Result) {
              const contentScanMetadata = media.contentScanMetadata;
              let version;
              if (null != contentScanMetadata) {
                version = contentScanMetadata.version;
              }
              tmp3Result = outer1_24(version, arr);
              const tmp3 = outer1_24;
            }
            tmp = tmp3Result;
          }
          return tmp;
        })(type.media, arr);
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
    const tmp15 = require(5673) /* ContentHarmType */.CONTENT_SCAN_TYPE_REGISTRY[EXPLICIT];
    if (null != tmp15.devSettingKey) {
      if (store.get(tmp15.devSettingKey)) {
        return true;
      }
    }
    type = type.type;
    if (require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed === type) {
      const flags2 = type.media.flags;
      let num7 = 0;
      if (null != flags2) {
        num7 = flags2;
      }
      return require(1360) /* hasFlag */.hasFlag(num7, tmp15.embedFlag);
    } else if (require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment === type) {
      let flags = type.media.flags;
      let num5 = 0;
      if (null != flags) {
        num5 = flags;
      }
      return require(1360) /* hasFlag */.hasFlag(num5, tmp15.attachmentFlag);
    } else if (require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia === type) {
      const contentScanMetadata = type.media.contentScanMetadata;
      flags = undefined;
      if (null != contentScanMetadata) {
        flags = contentScanMetadata.flags;
      }
      let num3 = 0;
      if (null != flags) {
        num3 = flags;
      }
      return require(1360) /* hasFlag */.hasFlag(num3, tmp15.genericMediaFlag);
    } else {
      return false;
    }
  }
}
function contentHarmTypesToFlags(mapped) {
  let iter3;
  const NONE = require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
  const tmp = _createForOfIteratorHelperLoose(mapped);
  const iter = tmp();
  let iter2 = iter;
  let tmp2 = NONE;
  let tmp3 = NONE;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp4 = require;
      let tmp5 = dependencyMap;
      if (require(5673) /* ContentHarmType */.ContentHarmType.EXPLICIT === value) {
        let tmp13 = require;
        let tmp14 = dependencyMap;
        let tmp8 = tmp2 | require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.EXPLICIT;
      } else {
        let tmp15 = require;
        let tmp16 = dependencyMap;
        if (require(5673) /* ContentHarmType */.ContentHarmType.GORE === value) {
          let tmp11 = require;
          let tmp12 = dependencyMap;
          tmp8 = tmp2 | require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.GORE;
        } else {
          let tmp6 = require;
          let tmp7 = dependencyMap;
          tmp8 = tmp2;
          if (require(5673) /* ContentHarmType */.ContentHarmType.SELF_HARM === value) {
            let tmp9 = require;
            let tmp10 = dependencyMap;
            tmp8 = tmp2 | require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.SELF_HARM;
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
  if (enabledHarmTypesForMessage === require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE) {
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
function getChannelTypeById(closure_0, closure_1, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_9, ];
    items[1] = globalThis.l;
    tmp = items;
  }
  const tmp4 = callback(tmp, 2);
  const first = tmp4[0];
  const channel = first.getChannel(closure_0);
  const currentUser = authStore.getCurrentUser();
  let tmp6 = null;
  if (null != currentUser) {
    tmp6 = null;
    if (closure_1 !== currentUser.id) {
      tmp6 = null;
      if (null != channel) {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            const GUILD = require(5675) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD;
          }
        }
        if (null == closure_1) {
          const NON_FRIEND_DM = require(5675) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM;
        } else {
          const friendIDs = obj2.getFriendIDs();
        }
        const FRIEND_DM = require(5675) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM;
      }
    }
  }
  return tmp6;
}
function shouldScanForContentScanVersion(arg0, arr) {
  if (-1 === arg0) {
    return tmp2;
  } else {
    if (!arr.includes(require(5673) /* ContentHarmType */.ContentHarmType.GORE)) {
      if (!arr.includes(require(5673) /* ContentHarmType */.ContentHarmType.SELF_HARM)) {
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
    const items = [require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK, require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR];
    hasItem = items.includes(arg0);
  }
  return hasItem;
}
function getChannelIdAndAuthorIdFromMessage(message) {
  if (null == message) {
    return { channelId: null, authorId: null };
  } else {
    let channel_id = null;
    if ("channel_id" in message) {
      channel_id = message.channel_id;
    }
    if ("messageReference" in message) {
      const items = [message.messageReference, importDefault(5679)(message)];
      let items2 = items;
    } else if ("message_reference" in message) {
      const items1 = [message.message_reference, ];
      let obj = require(5679) /* isForwardMessage */;
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/explicit_media_redaction/ObscuredMediaUtils.tsx");
function hasUnscannedMedia(message, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    tmp = getEnabledHarmTypesForMessage(message);
  }
  const require = tmp;
  if (tmp === require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const attachments = message.attachments;
    let someResult;
    if (null != attachments) {
      someResult = attachments.some((media) => outer1_19({ type: tmp(outer1_2[9]).ObscuredMediaTypes.Attachment, media }, tmp));
    }
    if (someResult) {
      return true;
    } else {
      const embeds = message.embeds;
      let someResult1;
      if (null != embeds) {
        someResult1 = embeds.some((media) => outer1_19({ type: tmp(outer1_2[9]).ObscuredMediaTypes.Embed, media }, tmp));
      }
      if (someResult1) {
        return true;
      } else {
        if (null != message.components) {
          if (obj.some((media) => outer1_19({ type: tmp(outer1_2[9]).ObscuredMediaTypes.GenericMedia, media }, tmp))) {
            return true;
          }
          obj = findComponentMedia(message.components);
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
    tmp = !findComponentMedia(components.components).some((loadingState) => loadingState.loadingState === outer1_0(outer1_2[10]).UnfurledMediaLoadingState.LOADING);
    const obj = findComponentMedia(components.components);
  }
  return tmp;
};
export const getUnscannedMediaIds = function getUnscannedMediaIds(message) {
  const tmp = getEnabledHarmTypesForMessage(message);
  const require = tmp;
  if (tmp === require(5673) /* ContentHarmType */.ContentHarmTypeBitMask.NONE) {
    let obj = { attachmentIds: [], embedIds: [] };
    return obj;
  } else {
    const attachments = message.attachments;
    let found;
    if (null != attachments) {
      found = attachments.filter((media) => outer1_19({ type: tmp(outer1_2[9]).ObscuredMediaTypes.Attachment, media }, tmp));
    }
    const embeds = message.embeds;
    let found1;
    if (null != embeds) {
      found1 = embeds.filter((media) => outer1_19({ type: tmp(outer1_2[9]).ObscuredMediaTypes.Embed, media }, tmp));
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
  const _require = arg0;
  if (enabledHarmTypesForMessage === _require(5673).ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledHarmTypesForMessage);
    return 0 !== arr.length && arr.filter((arg0) => outer1_20(arg0, closure_0)).length > 0;
  }
};
export { isMediaScanPending };
export { isMediaFlaggedForHarmType };
export { contentHarmTypesToFlags };
export { getHarmTypeFromBitmask };
export { getChannelTypeById };
export { shouldRedactForSettingValue };
export { getChannelIdAndAuthorIdFromMessage };

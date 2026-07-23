// Module ID: 9312
// Function ID: 72755
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 9313, 6830, 1348, 1917, 4946, 4349, 4222, 3758, 4142, 1849, 7622, 653, 4317, 4353, 1881, 5675, 7005, 4619, 3747, 3831, 1212, 9314, 9315, 1872, 4099, 4100, 9145, 7007, 7009, 4324, 5492, 4312, 21, 3830, 9439, 14, 22, 477, 1555, 675, 9440, 6691, 4979, 4062, 9444, 9474, 2]
// Exports: canAddNewReactions, clearRows, findMessageIndex, findMessageIndexInRows, getChatRef, getLongPressSelectedMedia, getVoiceChannelIdChangedAuthorIds, getVoiceStateChannelSummaryFromVoiceStates, handleAddOrRemoveReaction, handleCopyLinkForumPost, handleFirstLayout, handleLongPressSticker, handleMediaPlayFinishedAnalytics, handleMessageVisibilityChanged, handleTapNavBar, handleTapTableView, handleToggleFollowForumPost, handleVisibleMessagesChange, isLoadingAtTop, jumpToPresent, loadMoreAfter, loadMoreBefore, scrollToBottom, scrollToMessageIdWithRescroll, scrollToNewMessages, scrollToRelativeOffset, scrollToTop, scrollToTopMessage, shouldJumpToOriginalPost, startOrCancelChannelLatestMessagesLoad, syncMessageDisplay, toObscuredMedia

// Module 9312 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { updateShouldShowJumpToPresentButton as closure_5 } from "getChatInputContainerHeight";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import Changeset from "Changeset";
import ME from "ME";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
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
function getVisibleMessages(arg0) {
  let chatManager;
  let firstVisibleMessagePercentVisible;
  let firstVisibleMessageRowIndex;
  let lastVisibleMessagePercentVisible;
  let lastVisibleMessageRowIndex;
  ({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager } = arg0);
  if (null != firstVisibleMessageRowIndex) {
    if (null != lastVisibleMessageRowIndex) {
      if (firstVisibleMessageRowIndex >= 0) {
        if (lastVisibleMessageRowIndex >= 0) {
          if (null != chatManager._rows) {
            if (null != chatManager._messages) {
              const items = [];
              let diff = firstVisibleMessageRowIndex;
              if (firstVisibleMessageRowIndex >= lastVisibleMessageRowIndex) {
                do {
                  let tmp2 = chatManager._rows[diff];
                  let tmp3 = tmp12;
                  let tmp4 = tmp13;
                  let tmp5 = tmp14;
                  if (null != tmp2) {
                    let tmp15 = constants;
                    tmp3 = tmp12;
                    tmp4 = tmp13;
                    tmp5 = tmp14;
                    if (tmp2.type === constants.MESSAGE) {
                      let message = tmp2.message;
                      let id;
                      if (null != message) {
                        id = message.id;
                      }
                      tmp3 = message;
                      tmp4 = tmp13;
                      tmp5 = tmp14;
                      if (null != id) {
                        if (diff !== firstVisibleMessageRowIndex) {
                          let tmp7 = diff === lastVisibleMessageRowIndex && null != lastVisibleMessagePercentVisible;
                          let num = 1;
                          if (tmp7) {
                            num = lastVisibleMessagePercentVisible;
                          }
                        } else {
                          num = firstVisibleMessagePercentVisible;
                        }
                        let tmp8 = message;
                        message = message.getMessage(tmp, tmp2.message.id);
                        tmp3 = message;
                        tmp4 = num;
                        tmp5 = message;
                        if (null != message) {
                          let obj = { message, percentVisible: num, state: message.state };
                          let arr = items.push(obj);
                          tmp3 = message;
                          tmp4 = num;
                          tmp5 = message;
                        }
                      }
                    }
                  }
                  diff = diff - 1;
                  tmp12 = tmp3;
                  tmp13 = tmp4;
                  tmp14 = tmp5;
                } while (diff >= lastVisibleMessageRowIndex);
              }
              return items;
            }
          }
        }
      }
    }
  }
  return [];
}
function recordTimings(arg0, arr) {
  const mapped = arr.map((id) => id.id);
  let hasFetched = arr.hasFetched;
  if (!hasFetched) {
    hasFetched = arr.ready && !arr.cached;
    const tmp2 = arr.ready && !arr.cached;
  }
  importDefault(14).recordMessageRender(arg0, mapped, hasFetched, arr.hasMoreAfter);
}
function getMessage(toArray) {
  let closure_0 = arg1;
  return importDefault(22).find(toArray.toArray(), (id) => {
    let tmp2 = id.id === closure_0;
    if (!tmp2) {
      tmp2 = tmp === closure_0;
    }
    return tmp2;
  });
}
function _handleTapNavBar() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function maybeRescrollToMessageId(arg0, jumpType) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let updateRowsEnabled;
  const _require = arg0;
  ({ chatRef: importDefault, findMessageIndex: dependencyMap, updateRows: _slicedToArray, updateRowsEnabled } = jumpType);
  let _isNativeReflectConstruct = undefined !== updateRowsEnabled && updateRowsEnabled;
  let INSTANT = jumpType.jumpType;
  if (undefined === INSTANT) {
    INSTANT = _require(4062).JumpType.INSTANT;
  }
  if (null != arg0) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const tmp = callback2(callback);
      if (null != tmp) {
        if (null != ref.current) {
          let flag2 = false;
          if (_isNativeReflectConstruct) {
            let obj = { scrollToMessageId: callback, jumpTargetId: callback, jumpType: INSTANT, focusTargetId: callback, overrideScrollJumpType: callback(outer1_2[45]).JumpType.INSTANT, isRescrolling: true };
            callback3(obj);
            flag2 = true;
          }
          if (!flag2) {
            obj = { animated: INSTANT === callback(outer1_2[45]).JumpType.ANIMATED };
            outer1_1(outer1_2[42]).scrollTo(ref.current, tmp, obj);
            const obj2 = outer1_1(outer1_2[42]);
          }
        }
      }
    }, 50);
  }
}
function parseVoiceStateChannelIdSummary(voiceChannelIdChangedAuthorIds) {
  let iter;
  let tmp3;
  let tmp4;
  const map = new Map();
  if (null != voiceChannelIdChangedAuthorIds) {
    if ("" !== voiceChannelIdChangedAuthorIds) {
      const tmp7 = _createForOfIteratorHelperLoose(voiceChannelIdChangedAuthorIds.split("|"));
      let iter2 = tmp7();
      if (!iter2.done) {
        do {
          let str = iter2.value;
          let tmp = callback;
          let tmp2 = callback(str.split(":"), 2);
          [tmp3, tmp4] = tmp2;
          if (null != tmp3) {
            let str2 = "";
            if (null != tmp4) {
              str2 = tmp4;
            }
            let result = map.set(tmp3, str2);
          }
          iter = tmp7();
          iter2 = iter;
        } while (!iter.done);
      }
      return map;
    }
  }
  return map;
}
({ RowType: closure_15, Changeset: closure_16 } = Changeset);
({ AnalyticEvents: closure_17, MessageEmbedTypes: closure_18, MessageTypes: closure_19, Permissions: closure_20, MAX_MESSAGES_PER_CHANNEL: closure_21 } = ME);
let result = require("getChatInputContainerHeight").fileFinishedImporting("modules/messages/native/MessagesUtils.tsx");

export const getLongPressSelectedMedia = function getLongPressSelectedMedia(message, mediaIndex, mediaType, arg3, componentMediaIndex) {
  let content_type;
  function getEmbedMedia(image, url, contentType) {
    return { sourceType: "embed", source: closure_0, mediaType: image, mediaUrl: url, contentType };
  }
  let obj = message;
  if (message.type === constants5.THREAD_STARTER_MESSAGE) {
    obj = message;
    if (null != message.messageReference) {
      message = messageByReference.getMessageByReference(message.messageReference).message;
      obj = message;
      if (null != message) {
        obj = message;
      }
    }
  }
  if ("attachment" === mediaType) {
    let tmp15 = obj.attachments[mediaIndex];
    if (null == tmp15) {
      const contentMessage = obj.getContentMessage();
      let tmp18;
      if (null != contentMessage) {
        tmp18 = contentMessage.attachments[mediaIndex];
      }
      tmp15 = tmp18;
    }
    let tmp19 = null;
    if (null != tmp15) {
      obj = { sourceType: "attachment", source: tmp15 };
      let str7 = "video";
      if (!obj5.isVideoFile(tmp15.filename)) {
        let str8 = "audio";
        if (!obj6.isAudioFile(tmp15.filename)) {
          let str9 = "file";
          if (obj7.isImageFile(tmp15.filename)) {
            str9 = "image";
          }
          str8 = str9;
          obj7 = require(4317) /* urlMatchesFileExtension */;
        }
        str7 = str8;
        obj6 = require(4317) /* urlMatchesFileExtension */;
      }
      obj.mediaType = str7;
      ({ url: obj4.mediaUrl, content_type } = tmp15);
      let tmp26;
      if (null != content_type) {
        tmp26 = content_type;
      }
      obj.contentType = tmp26;
      tmp19 = obj;
      obj5 = require(4317) /* urlMatchesFileExtension */;
    }
    return tmp19;
  } else if ("embed" === mediaType) {
    require = tmp8;
    if (null == obj.embeds[mediaIndex]) {
      return null;
    } else {
      if (tmp8.type === constants4.IMAGE) {
        if (null != tmp8.url) {
          return getEmbedMedia("image", tmp8.url);
        }
      }
      if (tmp8.type === constants4.GIFV) {
        const video = tmp8.video;
        let url;
        if (null != video) {
          url = video.url;
        }
        if (null != url) {
          if (null != tmp8.video.proxyURL) {
            if ("" !== tmp8.video.proxyURL) {
              url = tmp8.video.proxyURL;
            }
            return getEmbedMedia("video", url, tmp8.video.contentType);
          }
          url = tmp8.video.url;
        }
      }
      if (tmp8.type === constants4.RICH) {
        const image = tmp8.image;
        let url1;
        if (null != image) {
          url1 = image.url;
        }
        if (null != url1) {
          return getEmbedMedia("image", tmp8.image.url, tmp8.image.contentType);
        } else {
          const video2 = tmp8.video;
          let url2;
          if (null != video2) {
            url2 = video2.url;
          }
          if (null != url2) {
            return getEmbedMedia("video", tmp8.video.url, tmp8.video.contentType);
          }
        }
      }
      return null;
    }
  } else if ("component" === mediaType) {
    if (null == arg3) {
      return null;
    } else {
      const obj8 = require(4353) /* _createForOfIteratorHelperLoose */;
      const value = require(4353) /* _createForOfIteratorHelperLoose */.flattenComponents(obj.components).get(arg3);
      if (null == value) {
        return null;
      } else if (value.type === require(1881) /* PermissionOverwriteType */.ComponentType.MEDIA_GALLERY) {
        if (null == componentMediaIndex) {
          return null;
        } else if (null == value.items[componentMediaIndex]) {
          return null;
        } else {
          const media = tmp5.media;
          obj = { sourceType: "component", source: value };
          let str = "image";
          if (obj3.isVideoContentType(media.contentType)) {
            str = "video";
          }
          obj.mediaType = str;
          obj.mediaUrl = media.url;
          return obj;
        }
      } else {
        return null;
      }
      const flattenComponentsResult = require(4353) /* _createForOfIteratorHelperLoose */.flattenComponents(obj.components);
    }
  } else {
    return null;
  }
};
export const toObscuredMedia = function toObscuredMedia(sourceType) {
  if ("attachment" === sourceType.sourceType) {
    let obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: sourceType.source };
    let tmp = obj;
  } else {
    tmp = null;
    if ("embed" === sourceType.sourceType) {
      obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed, media: sourceType.source };
      tmp = obj;
    }
  }
  return tmp;
};
export const handleAddOrRemoveReaction = function handleAddOrRemoveReaction(messageId, channel, reaction, isBurst, MESSAGE) {
  let flag = isBurst;
  if (isBurst === undefined) {
    flag = false;
  }
  if (MESSAGE === undefined) {
    MESSAGE = require(7005) /* checkReactionResponse */.ReactionLocations.MESSAGE;
  }
  const guildId = channel.getGuildId();
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    const id = currentUser.id;
  }
  let canChatInGuildResult = null != guildId;
  if (canChatInGuildResult) {
    canChatInGuildResult = closure_9.canChatInGuild(guildId);
  }
  let result = null != guildId;
  if (result) {
    let openResult = require(4619) /* shouldShowMembershipVerificationGate */;
    result = openResult.shouldShowMembershipVerificationGate(guildId);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = member.getMember(guildId, id);
    }
  }
  let obj1 = require(3747) /* isCommunicationDisabled */;
  const result1 = obj1.isMemberCommunicationDisabled(member);
  if (channel.isArchivedLockedThread()) {
    openResult = { key: "ARCHIVED_POST_REACTIONS_DISABLED_TOAST" };
    const obj14 = importDefault(3831);
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    let t = require(1212) /* getSystemLocale */.t;
    if (isForumPostResult) {
      let stringResult = string(t.EJQrFq);
    } else {
      stringResult = string(t.X2L3Oa);
    }
    openResult.content = stringResult;
    t = dependencyMap;
    openResult.icon = importDefault(9314);
    openResult = obj14.open(openResult);
    isForumPostResult = channel.isForumPost();
  } else if (null != reaction) {
    if (flag) {
      if (true === !reaction.me_burst) {
        if (!obj5.isPremium(currentUser)) {
          return require(9315) /* handleOutOfSuperReactions */.handleOutOfSuperReactions();
        }
        obj5 = require(1872) /* isPremiumAtLeast */;
      }
    }
    if (true !== reaction.me) {
      if (!result) {
        if (channel.isPrivate()) {
          if (!result1) {
            const obj7 = require(7005) /* checkReactionResponse */;
            const obj = { burst: flag };
            obj7.addReaction(channel.id, messageId, reaction.emoji, MESSAGE, obj);
            if (!flag) {
              const result2 = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(importDefault(4100).IMPACT_LIGHT);
              const obj9 = require(4099) /* getAndroidLightImpactEffect */;
            }
          }
        }
      }
      if (result) {
        const guildId1 = channel.getGuildId();
        if (null != guildId1) {
          return require(9145) /* openMemberVerificationModal */.openMemberVerificationModal(guildId1);
        }
      }
    }
    const result3 = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(importDefault(4100).IMPACT_LIGHT);
    const obj10 = require(4099) /* getAndroidLightImpactEffect */;
    obj1 = { channelId: channel.id, messageId, emoji: reaction.emoji, location: MESSAGE };
    let obj2 = { burst: flag };
    obj1.options = obj2;
    require(7005) /* checkReactionResponse */.removeReaction(obj1);
  } else {
    obj2 = require(9315) /* handleOutOfSuperReactions */;
    const obj3 = { burst: flag };
    const result4 = obj2.handleAddNewReactions(channel, messageId, MESSAGE, obj3);
  }
};
export const handleToggleFollowForumPost = function handleToggleFollowForumPost(channel, outer2_21) {
  const result = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(importDefault(4100).IMPACT_LIGHT);
  const obj2 = importDefault(7007);
  if (outer2_21) {
    obj2.leaveThread(channel, "iOS Forum Toolbar");
  } else {
    obj2.joinThread(channel, "iOS Forum Toolbar");
  }
};
export const handleCopyLinkForumPost = function handleCopyLinkForumPost(guildId, id, location) {
  const channel = store.getChannel(id);
  let parent_id;
  if (null != channel) {
    parent_id = channel.parent_id;
  }
  const channel1 = store.getChannel(parent_id);
  let isMediaChannelResult;
  if (null != channel1) {
    isMediaChannelResult = channel1.isMediaChannel();
  }
  let obj = { postId: id, location };
  const result = require(7009) /* trackForumChannelSeenBatch */.trackForumPostLinkCopied(obj);
  if (null != isMediaChannelResult && isMediaChannelResult) {
    obj = { media_post_id: id };
    require(4324) /* _createForOfIteratorHelperLoose */.trackWithMetadata(constants3.MEDIA_POST_SHARE_PROMPT_CLICKED, obj);
    const obj4 = require(4324) /* _createForOfIteratorHelperLoose */;
  }
  const obj2 = require(7009) /* trackForumChannelSeenBatch */;
  const result1 = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(importDefault(4100).IMPACT_LIGHT);
  if (null == channel) {
    const obj9 = require(5492) /* _copy */;
    let result2;
    if (true === tmp5) {
      result2 = importDefault(21).castChannelIdAsMessageId(id);
      const obj11 = importDefault(21);
    }
    obj9.copy(require(4312) /* _createForOfIteratorHelperLoose */.getChannelPermalink(guildId, id, result2));
    const obj10 = require(4312) /* _createForOfIteratorHelperLoose */;
  } else {
    const obj7 = require(5492) /* _copy */;
    obj7.copy(require(4312) /* _createForOfIteratorHelperLoose */.getChannelLinkToCopy(channel, channel1));
    const obj8 = require(4312) /* _createForOfIteratorHelperLoose */;
  }
  const obj6 = require(4099) /* getAndroidLightImpactEffect */;
  require(3830) /* presentAddedFriendToast */.presentLinkCopied();
};
export const findMessageIndex = function findMessageIndex(rows, focusTargetId) {
  if (null != focusTargetId) {
    return require(9439) /* findMessageRowIndex */.findMessageRowIndex(rows, focusTargetId);
  }
};
export { getVisibleMessages };
export const shouldJumpToOriginalPost = function shouldJumpToOriginalPost(hasJumpedToOriginalPost, id) {
  let isForumPostResult = hasJumpedToOriginalPost.isForumPost();
  if (isForumPostResult) {
    isForumPostResult = importDefault(21).castChannelIdAsMessageId(id) === arg2.jumpTargetId;
    const obj = importDefault(21);
  }
  if (isForumPostResult) {
    isForumPostResult = !arg3;
  }
  return isForumPostResult;
};
export const startOrCancelChannelLatestMessagesLoad = function startOrCancelChannelLatestMessagesLoad(hasJumpedToOriginalPost) {
  if (null == hasJumpedToOriginalPost.jumpTargetId) {
    if (null == hasJumpedToOriginalPost.oldestUnreadMessageId) {
      if (!hasJumpedToOriginalPost.shouldJumpToOriginalPost) {
        const tracker = hasJumpedToOriginalPost.tracker;
        const obj = { channelId: hasJumpedToOriginalPost.channelId };
        tracker.start(obj);
      }
    }
  }
  const tracker2 = hasJumpedToOriginalPost.tracker;
  tracker2.cancel();
};
export { recordTimings };
export const findMessageIndexInRows = function findMessageIndexInRows(focusTargetId, rows) {
  if (null != focusTargetId) {
    return require(9439) /* findMessageRowIndex */.findMessageRowIndex(rows, focusTargetId);
  }
};
export { getMessage };
export const isLoadingAtTop = function isLoadingAtTop(arg0, arg1) {
  if (arg1) {
    const tmp3 = _createForOfIteratorHelperLoose(arg0);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      const value = iter2.value;
      while (value.changeType !== constants2.INSERT) {
        let iter3 = tmp3();
        iter2 = iter3;
      }
      return value.index <= 1;
    }
    return false;
  } else {
    return false;
  }
};
export const handleTapTableView = function handleTapTableView(current) {
  let isIOSResult = require(477) /* set */.isIOS();
  if (isIOSResult) {
    isIOSResult = arg1 !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  }
  if (isIOSResult) {
    current = current.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
  }
};
export const handleMediaPlayFinishedAnalytics = function handleMediaPlayFinishedAnalytics(playWallTimeMs) {
  let obj = importDefault(675);
  obj = { play_time_sec: playWallTimeMs.playWallTimeMs / 1000, play_wall_time_ms: playWallTimeMs.playWallTimeMs, first_play_waiting_ms: Math.min(playWallTimeMs.firstPlayWaitingMs, 600000), stall_count: playWallTimeMs.stallCount, stall_ms: playWallTimeMs.stallMs, seek_count: playWallTimeMs.seekCount, seek_waiting_ms: null, media_source: playWallTimeMs.mediaSource };
  let mimeType = null;
  if (null != playWallTimeMs.mimeType) {
    mimeType = null;
    if ("" !== playWallTimeMs.mimeType) {
      mimeType = playWallTimeMs.mimeType;
    }
  }
  obj.mime_type = mimeType;
  obj.file_size = null;
  obj.file_duration_sec = playWallTimeMs.fileDurationSec;
  obj.connection_type = store2.getType();
  obj.effective_connection_speed = store2.getEffectiveConnectionSpeed();
  obj.service_provider = store2.getServiceProvider();
  obj.track(constants3.MEDIA_PLAY_FINISHED, obj);
};
export const scrollToBottom = function scrollToBottom(current) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  arg2({ eventTimestamp: Date.now(), isAtBottom: true });
  const obj = { eventTimestamp: Date.now(), isAtBottom: true };
  if (flag) {
    flag = !arg1;
  }
  importDefault(9440).scrollToBottom(current.current, flag);
};
export const scrollToTop = function scrollToTop(current) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !arg1;
  }
  importDefault(9440).scrollToTop(current.current, flag);
};
export const scrollToRelativeOffset = function scrollToRelativeOffset(current) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (flag) {
    flag = !arg1;
  }
  const result = importDefault(9440).scrollToRelativeOffset(current.current, arg2, flag);
};
export const scrollToTopMessage = function scrollToTopMessage(current, getPreviousRows) {
  const previousRows = getPreviousRows.getPreviousRows();
  if (previousRows.length > 0) {
    importDefault(9440).scrollTo(current.current, previousRows.length - 1);
    const obj = importDefault(9440);
  }
};
export const canAddNewReactions = function canAddNewReactions(isPrivate) {
  let canResult = arg1;
  if (arg1) {
    canResult = closure_12.can(constants6.ADD_REACTIONS, isPrivate);
  }
  if (!canResult) {
    canResult = isPrivate.isPrivate();
  }
  return canResult;
};
export const loadMoreBefore = function loadMoreBefore(channelId, hasMoreBefore) {
  arg2(true);
  if (tmp2) {
    let obj = importDefault(6691);
    obj = { channelId };
    const firstResult = hasMoreBefore.first();
    let id;
    if (null != firstResult) {
      id = firstResult.id;
    }
    obj.before = id;
    obj.limit = closure_21;
    const messages = obj.fetchMessages(obj);
  }
};
export const loadMoreAfter = function loadMoreAfter(channelId, hasMoreAfter) {
  arg2(true);
  if (tmp2) {
    let obj = importDefault(6691);
    obj = { channelId };
    const lastResult = hasMoreAfter.last();
    let id;
    if (null != lastResult) {
      id = lastResult.id;
    }
    obj.after = id;
    obj.limit = closure_21;
    const messages = obj.fetchMessages(obj);
  }
};
export const clearRows = function clearRows(current, clear) {
  const obj = { animated: false, hasHandledScroll: false, isNearBottom: false, isAtBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, pendingUpdatesQueue: [], _loaded: false, animatingStickerMessageId: null };
  arg4(obj);
  clear.clear();
  callback3(arg2, arg3, false);
  importDefault(9440).clearRows(current.current);
};
export const handleFirstLayout = function handleFirstLayout(arg0, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  arg0({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestsVisibleMessagesChangedSource.FIRST_LAYOUT });
};
export const handleMessageVisibilityChanged = function handleMessageVisibilityChanged(arg0, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible) {
  arg0({ firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestsVisibleMessagesChangedSource.VISIBILITY_CHANGED });
};
export const handleLongPressSticker = function handleLongPressSticker(arg0, arg1, arg2) {
  const items = [arg0];
  const set = new Set(items);
  if (null != arg1) {
    set.add(arg1);
  }
  let tmp2 = null;
  if (arg1 !== arg0) {
    tmp2 = arg0;
  }
  arg2({ forceRender: true, updateMessageIds: set });
  return tmp2;
};
export const handleTapNavBar = function handleTapNavBar() {
  return _handleTapNavBar(...arguments);
};
export const jumpToPresent = function jumpToPresent(jumpReturnTargetId, id) {
  if (null == jumpReturnTargetId.jumpReturnTargetId) {
    if (!jumpReturnTargetId.loadingMore) {
      if (jumpReturnTargetId.hasMoreAfter) {
        let obj = { channelId: id.id, limit: closure_21 };
        obj = { present: true };
        obj.jump = obj;
        const messages = importDefault(6691).fetchMessages(obj);
        const obj3 = importDefault(6691);
      } else {
        arg2();
      }
    }
  } else {
    obj = importDefault(6691);
    const obj1 = { channelId: id.id, messageId: jumpReturnTargetId, flash: true };
    obj.jumpToMessage(obj1);
  }
};
export const scrollToNewMessages = function scrollToNewMessages(channel) {
  channel = channel.channel;
  let id = closure_13.ackMessageId(channel.id);
  let obj = importDefault(6691);
  obj = { channelId: channel.id };
  if (null == id) {
    id = channel.id;
  }
  obj.messageId = id;
  obj.offset = 1;
  obj.context = "Mark As Read";
  obj.jumpToMessage(obj);
};
export const syncMessageDisplay = function syncMessageDisplay(messages) {
  let scrollToMessageId;
  let updateRows;
  messages = messages.messages;
  const oldestUnreadMessageId = messages.oldestUnreadMessageId;
  ({ updateRows, scrollToMessageId } = messages);
  if (messages.isMessagesReady) {
    let obj = {};
    ({ jumpTargetId: obj.scrollToMessageId, jumpTargetId: obj.jumpTargetId } = messages);
    obj.jumpType = messages(scrollToMessageId[45]).JumpType.INSTANT;
    obj.focusTargetId = messages.focusTargetId;
    updateRows(obj);
    if (null != messages.jumpTargetId) {
      obj = {};
      ({ jumpTargetId: obj2.scrollToMessageId, jumpTargetId: obj2.jumpTargetId } = messages);
      obj.jumpType = messages(scrollToMessageId[45]).JumpType.INSTANT;
      scrollToMessageId(obj);
    } else if (null != oldestUnreadMessageId) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => scrollToMessageId({ scrollToMessageId: oldestUnreadMessageId, jumpTargetId: messages.jumpTargetId, jumpType: messages(scrollToMessageId[45]).JumpType.INSTANT }), 50);
    }
  } else {
    updateRows({});
  }
  recordTimings(messages.channelId, messages);
};
export function getChatRef(arg0) {
  return arg0;
}
export { maybeRescrollToMessageId };
export const scrollToMessageIdWithRescroll = function scrollToMessageIdWithRescroll(scrollToMessageId) {
  let chatRef;
  let findMessageIndex;
  let updateRows;
  let useReducedMotion;
  scrollToMessageId = scrollToMessageId.scrollToMessageId;
  const jumpTargetId = scrollToMessageId.jumpTargetId;
  let tmp = null;
  if (undefined !== jumpTargetId) {
    tmp = jumpTargetId;
  }
  const importDefault = tmp;
  let ANIMATED = scrollToMessageId.jumpType;
  if (undefined === ANIMATED) {
    ANIMATED = scrollToMessageId(chatRef[45]).JumpType.ANIMATED;
  }
  let TOP = scrollToMessageId.scrollPosition;
  if (undefined === TOP) {
    TOP = scrollToMessageId(chatRef[42]).ChatScrollPosition.TOP;
  }
  const minimizeScrolling = scrollToMessageId.minimizeScrolling;
  const isRescrolling = scrollToMessageId.isRescrolling;
  ({ useReducedMotion, chatRef } = scrollToMessageId);
  ({ findMessageIndex, updateRows } = scrollToMessageId);
  if (!useReducedMotion) {
    useReducedMotion = ANIMATED === scrollToMessageId(chatRef[45]).JumpType.INSTANT;
  }
  let _slicedToArray = tmp10;
  let obj = scrollToMessageId(chatRef[39]);
  if (obj.isIOS()) {
    if (!tmp7) {
      obj = { chatRef, findMessageIndex, updateRows, updateRowsEnabled: true };
      const JumpType = scrollToMessageId(chatRef[45]).JumpType;
      obj.jumpType = tmp10 ? JumpType.ANIMATED : JumpType.INSTANT;
      maybeRescrollToMessageId(scrollToMessageId, obj);
      const tmp11 = maybeRescrollToMessageId;
    }
  }
  const findMessageIndexResult = findMessageIndex(scrollToMessageId);
  if (null != findMessageIndexResult) {
    if (tmp6) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj = tmp(chatRef[42]);
        obj = { animated: _slicedToArray, highlight: tmp === scrollToMessageId };
        obj.scrollIntoView(chatRef.current, _isNativeReflectConstruct, obj);
      }, 5);
    } else {
      obj = { animated: tmp10, highlight: tmp === scrollToMessageId, position: TOP };
      importDefault(chatRef[42]).scrollTo(chatRef.current, findMessageIndexResult, obj);
      const obj3 = importDefault(chatRef[42]);
    }
  }
};
export const handleVisibleMessagesChange = function handleVisibleMessagesChange(arg0) {
  let channel;
  let firstVisibleMessagePercentVisible;
  let firstVisibleMessageRowIndex;
  let guildId;
  let lastVisibleMessagePercentVisible;
  let lastVisibleMessageRowIndex;
  let shouldTrackAnnouncementMessageViews;
  let shouldTrackOfficialMessageViews;
  let shouldTrackRichPresenceInviteEmbedViews;
  let shouldTrackVoiceInviteEmbedViews;
  ({ firstVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessageRowIndex, lastVisibleMessagePercentVisible, shouldTrackAnnouncementMessageViews, shouldTrackOfficialMessageViews, shouldTrackRichPresenceInviteEmbedViews, shouldTrackVoiceInviteEmbedViews, guildId, channel } = arg0);
  if (null != firstVisibleMessageRowIndex) {
    if (null != lastVisibleMessageRowIndex) {
      if (null != firstVisibleMessagePercentVisible) {
        if (null != lastVisibleMessagePercentVisible) {
          let obj = { firstVisibleMessageRowIndex, lastVisibleMessageRowIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, chatManager: tmp2, channelId: tmp3 };
          const arr = getVisibleMessages(obj);
          if (arr.length > 0) {
            obj = { visibleMessages: arr, source: tmp };
            const result = require(9444) /* _manuallyStartConsoleQuest */.questsVisibleMobileMessagesChanged(obj);
            const obj4 = require(9474) /* _createForOfIteratorHelperLoose */;
            const result1 = obj4.handleAnnouncementMessageViewTracking(arr, shouldTrackAnnouncementMessageViews, guildId, channel);
            const obj5 = require(9474) /* _createForOfIteratorHelperLoose */;
            const result2 = obj5.handleOfficialMessageViewTracking(arr, shouldTrackOfficialMessageViews, guildId, channel);
            const obj6 = require(9474) /* _createForOfIteratorHelperLoose */;
            const result3 = obj6.handleRichPresenceInviteEmbedViewTracking(arr, shouldTrackRichPresenceInviteEmbedViews, guildId, channel);
            const obj7 = require(9474) /* _createForOfIteratorHelperLoose */;
            const result4 = obj7.handleVoiceInviteEmbedViewTracking(arr, shouldTrackVoiceInviteEmbedViews, guildId, channel);
            const obj2 = require(9444) /* _manuallyStartConsoleQuest */;
          }
        }
      }
    }
  }
};
export const getVoiceStateChannelSummaryFromVoiceStates = function getVoiceStateChannelSummaryFromVoiceStates(voiceStates) {
  const entries = Object.entries(voiceStates);
  const found = entries.filter((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return false !== tmp.discoverable;
  });
  const mapped = found.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const channelId = tmp2.channelId;
    let str = "";
    if (null != channelId) {
      str = channelId;
    }
    return "" + tmp + ":" + str;
  });
  const sorted = mapped.sort();
  return sorted.join("|");
};
export const getVoiceChannelIdChangedAuthorIds = function getVoiceChannelIdChangedAuthorIds(voiceChannelIdChangedAuthorIds, voiceChannelIdChangedAuthorIds2) {
  let iter2;
  const obj = parseVoiceStateChannelIdSummary(voiceChannelIdChangedAuthorIds);
  const obj2 = parseVoiceStateChannelIdSummary(voiceChannelIdChangedAuthorIds2);
  const set = new Set();
  const items = [...obj.keys(), ...obj2.keys()];
  const tmp2 = _createForOfIteratorHelperLoose(new Set(items));
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      value = obj.get(value);
      if (value !== obj2.get(value)) {
        let addResult = set.add(value);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  return set;
};

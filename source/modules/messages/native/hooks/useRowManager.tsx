// Module ID: 11083
// Function ID: 86177
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11083 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/messages/native/hooks/useRowManager.tsx");

export default function useRowManager(arg0) {
  ({ chatManager: closure_0, rowGenerator: closure_1, animatingStickerMessageIdRef: closure_2, canAddNewReactions: closure_3, channel: closure_4, messages: closure_5, isMessagesReady: closure_6, uploads: closure_7, roleStyle: closure_8, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, gifAutoPlay: closure_16, timestampHourCycle: closure_17, currentUserId: closure_18, renderCommunicationDisabled: closure_19, selectedSummary: closure_20, enableSwipeActions: closure_21, isResourceChannel: closure_22, shouldObscureSpoiler: closure_23, shouldDisableInteractiveComponents: closure_24, unloadableContentEntryMessageIds: closure_25, containerWidth: closure_26, chatRef: closure_27, loadedRef: closure_28, animatedRef: closure_29, hasMoreMessagesAfterForLastUpdateRef: closure_30, updateNativeRows: closure_31, isLoadingAtTop: closure_32, channelLatestMessageLoadingStatsManager: closure_33, channelId: closure_34, isMessagesCached: closure_35, chatUpdatesQueue: closure_36, shouldJumpToOriginalPost: closure_37, findMessageIndex: closure_38, scrollToTopMessage: closure_39, useReducedMotion: closure_40 } = arg0);
  function createRows(arg0) {
    ({ forceRender: closure_0, updateMessageIds: closure_1, ignoreEmbedDescriptionCache: closure_2 } = arg0);
    let measureResult = null;
    if (null != closure_4) {
      measureResult = null;
      if (null != closure_5) {
        measureResult = null;
        if (closure_6) {
          const firstRowGenerator = callback(closure_2[0]).firstRowGenerator;
          measureResult = firstRowGenerator.measure(() => {
            let done;
            closure_0.setup(closure_5);
            let obj = { inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, animatingStickerMessageId: ref.current, constrainedWidth: closure_26, gifAutoPlay: closure_16, timestampHourCycle: closure_17, renderCommunicationDisabled: closure_19, ignoreEmbedDescriptionCache: ref, enableSwipeActions: closure_21, shouldObscureSpoiler: closure_23, shouldDisableInteractiveComponents: closure_24 };
            options.setOptions(obj);
            obj = { channel: closure_4, messages: closure_5, uploads: closure_7, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, currentUserId: closure_18, canAddNewReactions: callback(), selectedSummary: closure_20, chatManager: closure_0, roleStyle: closure_8, forceRender: closure_0, updateMessageIds: options, isResourceChannel: closure_22, unloadableContentEntryMessageIds: closure_25 };
            const tmp4 = callback(options(ref[1])(obj));
            let iter = tmp4();
            if (!iter.done) {
              do {
                let tmp5 = closure_1;
                let tmp6 = closure_0;
                let row = closure_0.createRow(closure_1.generate(iter.value));
                let iter2 = tmp4();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
            return closure_0.createChangeset();
          });
        }
      }
    }
    return measureResult;
  }
  function maybeRescrollToMessageId(arg0) {
    let flag = arg1;
    let INSTANT = arg2;
    let flag2 = arg3;
    if (arg1 === undefined) {
      flag = false;
    }
    if (INSTANT === undefined) {
      INSTANT = arg0(INSTANT[2]).JumpType.INSTANT;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (null != arg0) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const tmp = callback(arg0);
        if (null != tmp) {
          if (null != ref.current) {
            let flag2 = false;
            if (flag) {
              let obj = { scrollToMessageId: arg0, jumpTargetId: arg0, jumpType: INSTANT, focusTargetId: arg0, overrideScrollJumpType: arg0(INSTANT[2]).JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost: flag2 };
              callback2(obj);
              flag2 = true;
            }
            if (!flag2) {
              obj = { animated: INSTANT === arg0(INSTANT[2]).JumpType.ANIMATED };
              flag(INSTANT[3]).scrollTo(ref.current, tmp, obj);
              const obj2 = flag(INSTANT[3]);
            }
          }
        }
      }, 50);
    }
  }
  function scrollToMessageId(scrollToMessageId) {
    scrollToMessageId = scrollToMessageId.scrollToMessageId;
    let jumpTargetId = scrollToMessageId.jumpTargetId;
    if (jumpTargetId === undefined) {
      jumpTargetId = null;
    }
    let ANIMATED = scrollToMessageId.jumpType;
    if (ANIMATED === undefined) {
      ANIMATED = scrollToMessageId(tmp9[2]).JumpType.ANIMATED;
    }
    let TOP = scrollToMessageId.scrollPosition;
    if (TOP === undefined) {
      TOP = scrollToMessageId(tmp9[3]).ChatScrollPosition.TOP;
    }
    let flag = scrollToMessageId.minimizeScrolling;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = scrollToMessageId.isRescrolling;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = scrollToMessageId.hasJumpedToOriginalPost;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let tmp9;
    let tmp18;
    let tmp6 = closure_40;
    if (!closure_40) {
      tmp6 = ANIMATED === scrollToMessageId(tmp9[2]).JumpType.INSTANT;
    }
    tmp9 = !tmp6;
    let obj = scrollToMessageId(tmp9[4]);
    if (obj.isIOS()) {
      if (!flag2) {
        const JumpType = scrollToMessageId(tmp9[2]).JumpType;
        const tmp13 = tmp9 ? JumpType.ANIMATED : JumpType.INSTANT;
        maybeRescrollToMessageId(scrollToMessageId, true, tmp13, flag3);
        const tmp10 = maybeRescrollToMessageId;
      }
    }
    tmp18 = callback5(scrollToMessageId);
    if (null != tmp18) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj = jumpTargetId(tmp9[3]);
          obj = { animated: tmp9, highlight: jumpTargetId === scrollToMessageId };
          obj.scrollIntoView(ref.current, tmp18, obj);
        }, 5);
      } else {
        obj = { animated: tmp9, highlight: jumpTargetId === scrollToMessageId, position: TOP };
        jumpTargetId(tmp9[3]).scrollTo(closure_27.current, tmp18, obj);
        const obj2 = jumpTargetId(tmp9[3]);
      }
    }
  }
  function updateRows() {
    let forceReload;
    let isAnimated;
    let overrideScrollJumpType;
    let updateMessageIds;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.forceRender;
    if (flag === undefined) {
      flag = false;
    }
    ({ updateMessageIds, forceReload } = obj);
    if (updateMessageIds === undefined) {
      const _Set = Set;
      updateMessageIds = new Set();
    }
    let scrollToMessageId = obj.scrollToMessageId;
    if (scrollToMessageId === undefined) {
      scrollToMessageId = null;
    }
    let jumpTargetId = obj.jumpTargetId;
    if (jumpTargetId === undefined) {
      jumpTargetId = null;
    }
    let ANIMATED = obj.jumpType;
    if (ANIMATED === undefined) {
      ANIMATED = previousRows(closure_2[2]).JumpType.ANIMATED;
    }
    let focusTargetId = obj.focusTargetId;
    if (focusTargetId === undefined) {
      focusTargetId = null;
    }
    let flag2 = obj.ignoreEmbedDescriptionCache;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = obj.messagesNewlyLoaded;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = obj.shouldInitialScroll;
    if (flag4 === undefined) {
      flag4 = false;
    }
    let flag5 = obj.minimizeScrolling;
    if (flag5 === undefined) {
      flag5 = false;
    }
    let flag6 = obj.isRescrolling;
    if (flag6 === undefined) {
      flag6 = false;
    }
    ({ overrideScrollJumpType, isAnimated } = obj);
    if (isAnimated === undefined) {
      isAnimated = true;
    }
    let flag7 = obj.hasJumpedToOriginalPost;
    if (flag7 === undefined) {
      flag7 = false;
    }
    if (null != closure_27.current) {
      obj = { forceRender: flag, updateMessageIds, ignoreEmbedDescriptionCache: flag2 };
      const arr = createRows(obj);
      const current2 = closure_28.current;
      if (null != startId) {
        if (startId.startId === scrollToMessageId) {
          const MIDDLE = previousRows(closure_2[3]).ChatScrollPosition.MIDDLE;
        }
      }
      if (null != arr) {
        if (arr.length > 0) {
          obj = { rows: previousRows.getPreviousRows(), scrollToMessageId, jumpTargetId };
          if (null == overrideScrollJumpType) {
            overrideScrollJumpType = closure_5.jumpType;
          }
          obj.jumpType = overrideScrollJumpType;
          obj.shouldInitialScroll = !closure_28.current || flag4;
          obj.animated = ref.current;
          obj.scrollPosition = MIDDLE;
          obj.focusTargetId = focusTargetId;
          closure_28.current = true;
          let obj1 = { rows: arr, hasMoreMessagesAfter: closure_5.hasMoreAfter };
          const tmp26 = callback(closure_2[5]);
          obj1.isLoadingAtTop = callback3(arr, ref2.current);
          obj1.scrollData = callback(closure_2[5])(obj);
          obj1.HACK_iOSForceAnimations = flag3;
          obj1.forceReload = forceReload;
          obj1.isAnimated = isAnimated;
          callback2(obj1);
          if (!current2) {
            const obj2 = { channelId: closure_34, areMessagesCached: closure_35 };
            closure_33.finish(obj2);
          }
          const tmp26Result = callback(closure_2[5])(obj);
        }
        let current = closure_28.current;
        if (current) {
          current = closure_28.current !== current2;
        }
        if (current) {
          current = closure_22;
        }
        if (current) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => callback(), 100);
        }
      }
      if (closure_28.current) {
        if (closure_36.hasUpdates()) {
          closure_36.tryFlush();
        }
      }
      if (!closure_28.current) {
        if (null != arr) {
          if (0 === arr.length) {
            obj1 = callback(closure_2[3]);
            obj1.fadeIn(closure_27.current);
          }
        }
      }
      if (null != scrollToMessageId) {
        if (!callback4(flag7)) {
          const obj3 = { scrollToMessageId, jumpTargetId, jumpType: ANIMATED, scrollPosition: MIDDLE, minimizeScrolling: flag5, isRescrolling: flag6, hasJumpedToOriginalPost: flag7 };
          scrollToMessageId(obj3);
        }
      }
      if (null != focusTargetId) {
        const tmp50 = callback5(focusTargetId);
        if (null != tmp50) {
          callback(closure_2[3]).focus(closure_27.current, tmp50);
          const obj8 = callback(closure_2[3]);
        }
      }
    }
  }
  return { createRows, updateRows, scrollToMessageId, maybeRescrollToMessageId };
};

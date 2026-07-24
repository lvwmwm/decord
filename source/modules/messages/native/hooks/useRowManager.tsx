// Module ID: 11121
// Function ID: 86440
// Name: _createForOfIteratorHelperLoose
// Dependencies: [14, 11122, 4062, 9476, 477, 9475, 2]
// Exports: default

// Module 11121 (_createForOfIteratorHelperLoose)
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
const result = require("GuildThemeSourcePreference").fileFinishedImporting("modules/messages/native/hooks/useRowManager.tsx");

export default function useRowManager(arg0) {
  let _arrayLikeToArray;
  let _createForOfIteratorHelperLoose;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_27;
  let closure_28;
  let closure_29;
  let closure_30;
  let closure_31;
  let closure_32;
  let closure_33;
  let closure_34;
  let closure_35;
  let closure_36;
  let closure_37;
  let closure_38;
  let closure_39;
  let closure_40;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let require;
  ({ chatManager: require, rowGenerator: importDefault, animatingStickerMessageIdRef: dependencyMap, canAddNewReactions: _createForOfIteratorHelperLoose, channel: _arrayLikeToArray, messages: closure_5, isMessagesReady: closure_6, uploads: closure_7, roleStyle: closure_8, oldestUnreadMessageId: closure_9, replyingMessageId: closure_10, inlineAttachmentMedia: closure_11, inlineEmbedMedia: closure_12, renderEmbeds: closure_13, renderReactions: closure_14, animateEmoji: closure_15, gifAutoPlay: closure_16, timestampHourCycle: closure_17, currentUserId: closure_18, renderCommunicationDisabled: closure_19, selectedSummary: closure_20, enableSwipeActions: closure_21, isResourceChannel: closure_22, shouldObscureSpoiler: closure_23, shouldDisableInteractiveComponents: closure_24, unloadableContentEntryMessageIds: closure_25, containerWidth: closure_26, chatRef: closure_27, loadedRef: closure_28, animatedRef: closure_29, hasMoreMessagesAfterForLastUpdateRef: closure_30, updateNativeRows: closure_31, isLoadingAtTop: closure_32, channelLatestMessageLoadingStatsManager: closure_33, channelId: closure_34, isMessagesCached: closure_35, chatUpdatesQueue: closure_36, shouldJumpToOriginalPost: closure_37, findMessageIndex: closure_38, scrollToTopMessage: closure_39, useReducedMotion: closure_40 } = arg0);
  function createRows(arg0) {
    let closure_0;
    let closure_1;
    let closure_2;
    ({ forceRender: closure_0, updateMessageIds: closure_1, ignoreEmbedDescriptionCache: closure_2 } = arg0);
    let measureResult = null;
    if (null != closure_4) {
      measureResult = null;
      if (null != closure_5) {
        measureResult = null;
        if (closure_6) {
          const firstRowGenerator = outer1_1(outer1_2[0]).firstRowGenerator;
          measureResult = firstRowGenerator.measure(() => {
            let done;
            outer1_0.setup(outer1_5);
            let obj = { inlineAttachmentMedia: outer1_11, inlineEmbedMedia: outer1_12, renderEmbeds: outer1_13, renderReactions: outer1_14, animateEmoji: outer1_15, animatingStickerMessageId: outer1_2.current, constrainedWidth: outer1_26, gifAutoPlay: outer1_16, timestampHourCycle: outer1_17, renderCommunicationDisabled: outer1_19, ignoreEmbedDescriptionCache: closure_2, enableSwipeActions: outer1_21, shouldObscureSpoiler: outer1_23, shouldDisableInteractiveComponents: outer1_24 };
            outer1_1.setOptions(obj);
            obj = { channel: outer1_4, messages: outer1_5, uploads: outer1_7, oldestUnreadMessageId: outer1_9, replyingMessageId: outer1_10, currentUserId: outer1_18, canAddNewReactions: outer1_3(), selectedSummary: outer1_20, chatManager: outer1_0, roleStyle: outer1_8, forceRender: closure_0, updateMessageIds: closure_1, isResourceChannel: outer1_22, unloadableContentEntryMessageIds: outer1_25 };
            const tmp4 = outer2_3(outer2_1(outer2_2[1])(obj));
            let iter = tmp4();
            if (!iter.done) {
              do {
                let tmp5 = outer1_1;
                let tmp6 = outer1_0;
                let row = outer1_0.createRow(outer1_1.generate(iter.value));
                let iter2 = tmp4();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
            return outer1_0.createChangeset();
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
    let closure_0 = arg0;
    if (arg1 === undefined) {
      flag = false;
    }
    if (INSTANT === undefined) {
      INSTANT = outer1_0(outer1_2[2]).JumpType.INSTANT;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (null != arg0) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const tmp = outer1_38(closure_0);
        if (null != tmp) {
          if (null != outer1_27.current) {
            let flag2 = false;
            if (flag) {
              let obj = { scrollToMessageId: closure_0, jumpTargetId: closure_0, jumpType: INSTANT, focusTargetId: closure_0, overrideScrollJumpType: outer2_0(outer2_2[2]).JumpType.INSTANT, isRescrolling: true, hasJumpedToOriginalPost: flag2 };
              outer1_44(obj);
              flag2 = true;
            }
            if (!flag2) {
              obj = { animated: INSTANT === outer2_0(outer2_2[2]).JumpType.ANIMATED };
              outer2_1(outer2_2[3]).scrollTo(outer1_27.current, tmp, obj);
              const obj2 = outer2_1(outer2_2[3]);
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
      ANIMATED = outer1_0(outer1_2[2]).JumpType.ANIMATED;
    }
    let TOP = scrollToMessageId.scrollPosition;
    if (TOP === undefined) {
      TOP = outer1_0(outer1_2[3]).ChatScrollPosition.TOP;
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
    let c2;
    let c3;
    let tmp6 = closure_40;
    if (!closure_40) {
      tmp6 = ANIMATED === outer1_0(outer1_2[2]).JumpType.INSTANT;
    }
    c2 = tmp9;
    let obj = outer1_0(outer1_2[4]);
    if (obj.isIOS()) {
      if (!flag2) {
        const JumpType = outer1_0(outer1_2[2]).JumpType;
        const tmp13 = tmp9 ? JumpType.ANIMATED : JumpType.INSTANT;
        maybeRescrollToMessageId(scrollToMessageId, true, tmp13, flag3);
        const tmp10 = maybeRescrollToMessageId;
      }
    }
    const tmp18 = callback4(scrollToMessageId);
    c3 = tmp18;
    if (null != tmp18) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj = outer2_1(outer2_2[3]);
          obj = { animated: c2, highlight: jumpTargetId === scrollToMessageId };
          obj.scrollIntoView(outer1_27.current, c3, obj);
        }, 5);
      } else {
        obj = { animated: tmp9, highlight: jumpTargetId === scrollToMessageId, position: TOP };
        outer1_1(outer1_2[3]).scrollTo(closure_27.current, tmp18, obj);
        const obj2 = outer1_1(outer1_2[3]);
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
      ANIMATED = outer1_0(outer1_2[2]).JumpType.ANIMATED;
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
          const MIDDLE = outer1_0(outer1_2[3]).ChatScrollPosition.MIDDLE;
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
          const tmp26 = outer1_1(outer1_2[5]);
          obj1.isLoadingAtTop = callback2(arr, ref2.current);
          obj1.scrollData = outer1_1(outer1_2[5])(obj);
          obj1.HACK_iOSForceAnimations = flag3;
          obj1.forceReload = forceReload;
          obj1.isAnimated = isAnimated;
          callback(obj1);
          if (!current2) {
            const obj2 = { channelId: closure_34, areMessagesCached: closure_35 };
            closure_33.finish(obj2);
          }
          const tmp26Result = outer1_1(outer1_2[5])(obj);
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
          const timerId = setTimeout(() => outer1_39(), 100);
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
            obj1 = outer1_1(outer1_2[3]);
            obj1.fadeIn(closure_27.current);
          }
        }
      }
      if (null != scrollToMessageId) {
        if (!callback3(flag7)) {
          const obj3 = { scrollToMessageId, jumpTargetId, jumpType: ANIMATED, scrollPosition: MIDDLE, minimizeScrolling: flag5, isRescrolling: flag6, hasJumpedToOriginalPost: flag7 };
          scrollToMessageId(obj3);
        }
      }
      if (null != focusTargetId) {
        const tmp50 = callback4(focusTargetId);
        if (null != tmp50) {
          outer1_1(outer1_2[3]).focus(closure_27.current, tmp50);
          const obj8 = outer1_1(outer1_2[3]);
        }
      }
    }
  }
  return { createRows, updateRows, scrollToMessageId, maybeRescrollToMessageId };
};

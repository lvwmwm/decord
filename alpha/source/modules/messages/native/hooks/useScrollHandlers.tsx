// Module ID: 11569
// Function ID: 11570
// Name: useScrollHandlers
// Dependencies: [19, 9895, 3, 5274, 11553, 1259, 10108, 7817, 10110, 6784, 2]
// Exports: default

// Module 11569 (useScrollHandlers)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 1259 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5274 */;
import IOSAnchoredChatScrollerExperiment from "IOSAnchoredChatScrollerExperiment" /* 7817 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 10108 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 10110 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11553 */;
import react from "react" /* 19 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9895 */;
import size from "module_2" /* 2 */;

let hasMoreAfter, importDefault;

let closure_4;
let hasOwnProperty;
let tmp;
const QuestTypes = tmp(6784);
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
const tmp3 = new LoggerDefault("useScrollHandlers");
let closure_6 = tmp3;
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default function useScrollHandlers(arg0) {
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_4;
  let closure_5;
  let closure_7;
  let closure_8;
  let closure_9;
  let logger;
  let previousRows;
  ({ chatRef: require, chatManager: importDefault, chatUpdatesQueue: dependencyMap, pendingUpdatesQueueRef: react, animatedRef: closure_4, fetchMoreBefore: closure_5, fetchMoreAfter: closure_6, handleVisibleMessagesChange: closure_7, applyNativeRowsUpdate: closure_8, messages: closure_9, channel: closure_10, channelId: closure_11, screenIndex: closure_12, onScroll: closure_13, useReducedMotion: closure_14, isStaff: closure_15, visibleMessagesWindowHandler: closure_16 } = arg0);
  function handleScrollCallbacks(isNearTop) {
    let eventTimestamp;
    let isAtBottom;
    let isNearBottom;
    ({ eventTimestamp, isAtBottom, isNearBottom } = isNearTop);
    if (isNearBottom === undefined) {
      isNearBottom = false;
    }
    let flag = isNearTop.isNearTop;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = isNearTop.dragging;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = isNearTop.decelerating;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = isNearTop.isFirstMessageVisible;
    if (flag4 === undefined) {
      flag4 = false;
    }
    if (null != closure_10) {
      useIsScreenReaderEnabled;
      let tmp6 = !tmp30.loadingMore;
      if (tmp6) {
        if (!flag2) {
          flag2 = flag3;
        }
        if (!flag2) {
          flag2 = tmp5;
        }
        tmp6 = flag2;
      }
      if (tmp6) {
        tmp6 = 0 === react.current.length;
      }
      if (!ref4.current) {
        if (flag) {
          if (closure_9.hasMoreBefore) {
            if (tmp6) {
              closure_4.current = true;
              closure_5();
            }
            const obj = { isFirstMessageVisible: flag4 };
            closure_13(obj);
            dependencyMap.tryFlush();
            return true;
          }
        }
      }
      if (!ref3.current) {
        if (isNearBottom) {
          if (closure_9.hasMoreAfter) {
            if (tmp6) {
              closure_4.current = true;
              logger();
            }
          }
        }
      }
      const current = ref2.current === isAtBottom && ref1.current;
      if (!current) {
        const id = tmp.id;
        let num = 0;
        const updateChannelDimensions = DimensionActionCreatorsDefault.updateChannelDimensions;
        if (isAtBottom) {
          num = 1;
        }
        const result = updateChannelDimensions(id, eventTimestamp, num, 1, 0);
        ref1.current = true;
      }
    }
    return false;
  }
  function handleScroll(isAtBottom) {
    isAtBottom = isAtBottom.isAtBottom;
    let isNearBottom = isAtBottom.isNearBottom;
    const eventTimestamp = isAtBottom.eventTimestamp;
    if (isNearBottom === undefined) {
      isNearBottom = false;
    }
    let isNearTop = isAtBottom.isNearTop;
    if (isNearTop === undefined) {
      isNearTop = false;
    }
    let dragging = isAtBottom.dragging;
    if (dragging === undefined) {
      dragging = false;
    }
    let decelerating = isAtBottom.decelerating;
    if (decelerating === undefined) {
      decelerating = false;
    }
    let shouldShowJumpToPresent = isAtBottom.shouldShowJumpToPresent;
    if (shouldShowJumpToPresent === undefined) {
      shouldShowJumpToPresent = false;
    }
    let isFirstMessageVisible = isAtBottom.isFirstMessageVisible;
    if (isFirstMessageVisible === undefined) {
      isFirstMessageVisible = false;
    }
    if (handleScrollCallbacks({ eventTimestamp, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible })) {
      let tmp = ref2;
      ref2.current = isAtBottom;
      let tmp2 = ref3;
      ref3.current = isNearBottom;
      ref4.current = isNearTop;
      ref6.current = dragging;
      ref5.current = decelerating;
      const obj = react_native;
      obj.batchUpdates(() => {
        hasMoreAfter = shouldShowJumpToPresent;
        const tmp = hasOwnProperty;
        const tmp2 = closure_11;
        if (!shouldShowJumpToPresent) {
          hasMoreAfter = hasMoreAfter.hasMoreAfter;
        }
        tmp(tmp2, closure_12, hasMoreAfter);
        React3(closure_12, isAtBottom);
      });
    }
  }
  const ref = react.useRef(undefined);
  const ref1 = react.useRef(false);
  const ref2 = react.useRef(false);
  const ref3 = react.useRef(false);
  const ref4 = react.useRef(false);
  const ref5 = react.useRef(false);
  const ref6 = react.useRef(false);
  let obj = {
    hasHandledScrollRef: ref1,
    isAtBottomRef: ref2,
    isNearBottomRef: ref3,
    isNearTopRef: ref4,
    deceleratingRef: ref5,
    draggingRef: ref6,
    firstIgnoredScrollEventTimestampRef: ref,
    loadMoreBefore() {
      closure_4.current = true;
      closure_5();
    },
    loadMoreAfter() {
      closure_4.current = true;
      logger();
    },
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const scrollToTop = NativeChatUtilsDefault.scrollToTop;
      const current = require.current;
      NativeChatUtilsDefault;
      if (flag) {
        flag = !closure_14;
      }
      scrollToTop(current, flag);
    },
    scrollToRelativeOffset(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
      const current = require.current;
      NativeChatUtilsDefault;
      if (flag) {
        flag = !closure_14;
      }
      const result = scrollToRelativeOffset(current, arg0, flag);
    },
    scrollToTopMessage() {
      importDefault = importDefault.getPreviousRows();
      if (importDefault.length > 0) {
        const obj = NativeChatUtilsDefault;
        obj.scrollTo(require.current, importDefault.length - 1);
      }
    },
    updateNativeRows(isLoadingAtTop) {
      if (dependencyMap.isBlocking) {
        dependencyMap.add(isLoadingAtTop);
      } else {
        isLoadingAtTop = isLoadingAtTop.isLoadingAtTop;
        const obj2 = IOSAnchoredChatScrollerExperiment;
        if (!obj2.isIOSAnchoredChatScrollerEnabled()) {
          if (isLoadingAtTop) {
            dependencyMap.add(isLoadingAtTop);
          }
        }
        closure_8(isLoadingAtTop);
      }
    },
    handleScrollCallbacks,
    handleScroll,
    handleScrollPosition(arg0) {
      let changesetUpdateId;
      let decelerating;
      let dragging;
      let firstVisibleMessageIndex;
      let firstVisibleMessagePercentVisible;
      let isAtBottom;
      let isFirstMessageVisible;
      let isNearBottom;
      let isNearTop;
      let lastVisibleMessageIndex;
      let lastVisibleMessagePercentVisible;
      let nativeEvent;
      let shouldShowJumpToPresent;
      let timeStamp;
      ({ timeStamp, nativeEvent } = arg0);
      ({ firstVisibleMessageIndex, lastVisibleMessageIndex, changesetUpdateId } = nativeEvent);
      ({ isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible } = nativeEvent);
      const obj = ChatChangesetUpdateTracker;
      const changesetIdForChat = obj.getChangesetIdForChat(require.current);
      if (changesetUpdateId !== changesetIdForChat) {
        if (null == ref.current) {
          ref.current = timeStamp;
        }
        const tmp10 = closure_15;
        if (tmp10) {
          logger.log("STAFF-ACK-LOG: Ignoring outdated scroll event.", closure_11, changesetUpdateId, changesetIdForChat, timeStamp);
        }
      } else {
        const obj2 = { firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.SCROLL };
        closure_7(obj2);
        let current = ref.current;
        const tmp20 = ref;
        if (current == null) {
          current = timeStamp;
        }
        tmp20.current = undefined;
        const obj3 = { eventTimestamp: current, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible };
        handleScroll(obj3);
        const obj4 = { rows: importDefault._rows, firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex };
        closure_16.handleScrollPosition(obj4);
      }
    }
  };
  return obj;
};

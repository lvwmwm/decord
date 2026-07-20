// Module ID: 10846
// Function ID: 84272
// Name: useScrollHandlers
// Dependencies: []
// Exports: default

// Module 10846 (useScrollHandlers)
let closure_3 = importAll(dependencyMap[0]);
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: closure_5 } = arg1(dependencyMap[1]));
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("useScrollHandlers");
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default function useScrollHandlers(arg0) {
  ({ chatRef: closure_0, chatManager: closure_1, chatUpdatesQueue: closure_2, pendingUpdatesQueueRef: closure_3, animatedRef: closure_4, fetchMoreBefore: closure_5, fetchMoreAfter: closure_6, handleVisibleMessagesChange: closure_7, applyNativeRowsUpdate: closure_8, messages: closure_9, channel: closure_10, channelId: closure_11, screenIndex: closure_12, onScroll: closure_13, useReducedMotion: closure_14, isStaff: closure_15, visibleMessagesWindowHandler: closure_16 } = arg0);
  let ref1;
  let ref2;
  let ref3;
  let ref4;
  let ref5;
  let ref6;
  function loadMoreBefore() {
    closure_4.current = true;
    callback();
  }
  function loadMoreAfter() {
    closure_4.current = true;
    lib2();
  }
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
    if (null != id) {
      lib(set[3]);
      let tmp7 = !closure_9.loadingMore;
      if (tmp7) {
        if (!flag2) {
          flag2 = flag3;
        }
        if (!flag2) {
          flag2 = tmp5;
        }
        tmp7 = flag2;
      }
      if (tmp7) {
        tmp7 = 0 === ref.current.length;
      }
      if (!ref4.current) {
        if (flag) {
          if (closure_9.hasMoreBefore) {
            if (tmp7) {
              loadMoreBefore();
            }
            let obj = { isFirstMessageVisible: flag4 };
            callback4(obj);
            set.tryFlush();
            return true;
          }
        }
      }
      if (!ref3.current) {
        if (isNearBottom) {
          if (closure_9.hasMoreAfter) {
            if (tmp7) {
              loadMoreAfter();
            }
          }
        }
      }
      let current = ref2.current === isAtBottom;
      if (current) {
        current = ref1.current;
      }
      if (!current) {
        obj = previousRows(set[4]);
        const id = id.id;
        let num3 = 0;
        if (isAtBottom) {
          num3 = 1;
        }
        const result = obj.updateChannelDimensions(id, eventTimestamp, num3, 1, 0);
        ref1.current = true;
      }
    }
    return false;
  }
  function handleScroll(eventTimestamp) {
    const isAtBottom = eventTimestamp.isAtBottom;
    let flag = eventTimestamp.isNearBottom;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = eventTimestamp.isNearTop;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = eventTimestamp.dragging;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = eventTimestamp.decelerating;
    if (flag4 === undefined) {
      flag4 = false;
    }
    let flag5 = eventTimestamp.shouldShowJumpToPresent;
    if (flag5 === undefined) {
      flag5 = false;
    }
    let flag6 = eventTimestamp.isFirstMessageVisible;
    if (flag6 === undefined) {
      flag6 = false;
    }
    const obj = { eventTimestamp: eventTimestamp.eventTimestamp, isAtBottom, isNearBottom: flag, isNearTop: flag2, dragging: flag3, decelerating: flag4, shouldShowJumpToPresent: flag5, isFirstMessageVisible: flag6 };
    if (handleScrollCallbacks(obj)) {
      ref2.current = isAtBottom;
      ref3.current = flag;
      ref4.current = flag2;
      ref6.current = flag3;
      ref5.current = flag4;
      isAtBottom(closure_2[5]).batchUpdates(() => {
        let hasMoreAfter = flag5;
        if (!flag5) {
          hasMoreAfter = hasMoreAfter.hasMoreAfter;
        }
        closure_5(closure_11, closure_12, hasMoreAfter);
        callback(closure_12, isAtBottom);
      });
      const obj2 = isAtBottom(closure_2[5]);
    }
  }
  const ref = React.useRef(undefined);
  ref1 = React.useRef(false);
  ref2 = React.useRef(false);
  ref3 = React.useRef(false);
  ref4 = React.useRef(false);
  ref5 = React.useRef(false);
  ref6 = React.useRef(false);
  return {
    hasHandledScrollRef: ref1,
    isAtBottomRef: ref2,
    isNearBottomRef: ref3,
    isNearTopRef: ref4,
    deceleratingRef: ref5,
    draggingRef: ref6,
    firstIgnoredScrollEventTimestampRef: ref,
    loadMoreBefore,
    loadMoreAfter,
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        flag = !closure_14;
      }
      previousRows(closure_2[6]).scrollToTop(lib.current, flag);
    },
    scrollToRelativeOffset(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      if (flag) {
        flag = !closure_14;
      }
      const result = previousRows(closure_2[6]).scrollToRelativeOffset(lib.current, arg0, flag);
    },
    scrollToTopMessage() {
      const previousRows = previousRows.getPreviousRows();
      if (previousRows.length > 0) {
        previousRows(closure_2[6]).scrollTo(lib.current, previousRows.length - 1);
        const obj = previousRows(closure_2[6]);
      }
    },
    updateNativeRows(isLoadingAtTop) {
      if (set.isBlocking) {
        set.add(isLoadingAtTop);
      } else if (!isLoadingAtTop.isLoadingAtTop) {
        callback3(isLoadingAtTop);
      } else {
        set.add(isLoadingAtTop);
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
      let obj = lib(closure_2[7]);
      const changesetIdForChat = obj.getChangesetIdForChat(lib.current);
      if (changesetUpdateId !== changesetIdForChat) {
        if (null == ref.current) {
          ref.current = timeStamp;
        }
        if (closure_15) {
          lib2.log("STAFF-ACK-LOG: Ignoring outdated scroll event.", closure_11, changesetUpdateId, changesetIdForChat, timeStamp);
        }
      } else {
        obj = { firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: lib(closure_2[8]).QuestsVisibleMessagesChangedSource.SCROLL };
        callback2(obj);
        const current = ref.current;
        let tmp2 = timeStamp;
        if (null != current) {
          tmp2 = current;
        }
        ref.current = undefined;
        obj = { eventTimestamp: tmp2, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible };
        handleScroll(obj);
        const obj1 = { rows: previousRows._rows, firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex };
        closure_16.handleScrollPosition(obj1);
      }
    }
  };
};

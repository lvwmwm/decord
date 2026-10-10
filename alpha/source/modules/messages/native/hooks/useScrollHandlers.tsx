// Module ID: 10692
// Function ID: 10693
// Name: useScrollHandlers
// Dependencies: [19, 9383, 3, 558, 576, 9599, 5362, 10677, 1272, 9601, 5975, 2]

// Module 10692 (useScrollHandlers)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 1272 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5362 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 9599 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 9601 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10677 */;
import react from "react" /* 19 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9383 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let tmp;
const QuestTypes = tmp(5975);
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
let tmp3 = new LoggerDefault("useScrollHandlers");
let closure_6 = tmp3;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScrollHandlers(chatRef) {
  let chatUpdatesQueue;
  let obj = chatRef(chatUpdatesQueue[4]);
  const cResult = obj.c(49);
  chatRef = chatRef.chatRef;
  const chatManager = chatRef.chatManager;
  chatUpdatesQueue = chatRef.chatUpdatesQueue;
  const pendingUpdatesQueueRef = chatRef.pendingUpdatesQueueRef;
  const animatedRef = chatRef.animatedRef;
  const fetchMoreBefore = chatRef.fetchMoreBefore;
  const fetchMoreAfter = chatRef.fetchMoreAfter;
  const handleVisibleMessagesChange = chatRef.handleVisibleMessagesChange;
  const applyNativeRowsUpdate = chatRef.applyNativeRowsUpdate;
  const messages = chatRef.messages;
  const channel = chatRef.channel;
  const channelId = chatRef.channelId;
  const screenIndex = chatRef.screenIndex;
  const onScroll = chatRef.onScroll;
  const useReducedMotion = chatRef.useReducedMotion;
  const isStaff = chatRef.isStaff;
  const visibleMessagesWindowHandler = chatRef.visibleMessagesWindowHandler;
  const ref = pendingUpdatesQueueRef.useRef(undefined);
  const ref1 = pendingUpdatesQueueRef.useRef(false);
  const ref2 = pendingUpdatesQueueRef.useRef(false);
  const ref3 = pendingUpdatesQueueRef.useRef(false);
  const ref4 = pendingUpdatesQueueRef.useRef(false);
  const ref5 = pendingUpdatesQueueRef.useRef(false);
  const ref6 = pendingUpdatesQueueRef.useRef(false);
  if (cResult[0] === animatedRef) {
    let tmp9;
    if (cResult[1] === fetchMoreBefore) {
      tmp9 = cResult[2];
    }
    let closure_24 = tmp9;
    if (cResult[3] === animatedRef) {
      let tmp10;
      if (cResult[4] === fetchMoreAfter) {
        tmp10 = cResult[5];
      }
      let closure_25 = tmp10;
      if (cResult[6] === chatRef) {
        let tmp11;
        if (cResult[7] === useReducedMotion) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === chatRef) {
          let tmp12;
          if (cResult[10] === useReducedMotion) {
            tmp12 = cResult[11];
          }
          if (cResult[12] === chatManager) {
            let tmp13;
            if (cResult[13] === chatRef) {
              tmp13 = cResult[14];
            }
            if (cResult[15] === applyNativeRowsUpdate) {
              let tmp14;
              if (cResult[16] === chatUpdatesQueue) {
                tmp14 = cResult[17];
              }
              if (cResult[18] === channel) {
                if (cResult[19] === chatUpdatesQueue) {
                  if (cResult[20] === tmp10) {
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === messages) {
                        if (cResult[23] === onScroll) {
                          let tmp15;
                          if (cResult[24] === pendingUpdatesQueueRef) {
                            tmp15 = cResult[25];
                          }
                          let closure_26 = tmp15;
                          if (cResult[26] === channelId) {
                            if (cResult[27] === tmp15) {
                              if (cResult[28] === messages) {
                                let tmp16;
                                if (cResult[29] === screenIndex) {
                                  tmp16 = cResult[30];
                                }
                                let closure_27 = tmp16;
                                if (cResult[31] === channelId) {
                                  if (cResult[32] === chatManager) {
                                    if (cResult[33] === chatRef) {
                                      if (cResult[34] === tmp16) {
                                        if (cResult[35] === handleVisibleMessagesChange) {
                                          if (cResult[36] === isStaff) {
                                            let tmp17;
                                            if (cResult[37] === visibleMessagesWindowHandler) {
                                              tmp17 = cResult[38];
                                            }
                                            if (cResult[39] === tmp16) {
                                              if (cResult[40] === tmp15) {
                                                if (cResult[41] === tmp17) {
                                                  if (cResult[42] === tmp10) {
                                                    if (cResult[43] === tmp9) {
                                                      if (cResult[44] === tmp12) {
                                                        if (cResult[45] === tmp11) {
                                                          if (cResult[46] === tmp13) {
                                                            let tmp18;
                                                            if (cResult[47] === tmp14) {
                                                              tmp18 = cResult[48];
                                                            }
                                                            return tmp18;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            let obj2 = { hasHandledScrollRef: ref1, isAtBottomRef: ref2, isNearBottomRef: ref3, isNearTopRef: ref4, deceleratingRef: ref5, draggingRef: ref6, firstIgnoredScrollEventTimestampRef: ref, loadMoreBefore: tmp9, loadMoreAfter: tmp10, scrollToTop: tmp11, scrollToRelativeOffset: tmp12, scrollToTopMessage: tmp13, updateNativeRows: tmp14, handleScrollCallbacks: tmp15, handleScroll: tmp16, handleScrollPosition: tmp17 };
                                            cResult[39] = tmp16;
                                            cResult[40] = tmp15;
                                            cResult[41] = tmp17;
                                            cResult[42] = tmp10;
                                            cResult[43] = tmp9;
                                            cResult[44] = tmp12;
                                            cResult[45] = tmp11;
                                            cResult[46] = tmp13;
                                            cResult[47] = tmp14;
                                            cResult[48] = obj2;
                                            tmp18 = obj2;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                function handleScrollPosition(arg0) {
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
                                  const changesetIdForChat = obj.getChangesetIdForChat(chatRef.current);
                                  if (changesetUpdateId !== changesetIdForChat) {
                                    if (null == ref.current) {
                                      ref.current = timeStamp;
                                    }
                                    const tmp10 = isStaff;
                                    if (tmp10) {
                                      fetchMoreAfter.log("STAFF-ACK-LOG: Ignoring outdated scroll event.", channelId, changesetUpdateId, changesetIdForChat, timeStamp);
                                    }
                                  } else {
                                    const obj2 = { firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.SCROLL };
                                    handleVisibleMessagesChange(obj2);
                                    let current = ref.current;
                                    const tmp20 = ref;
                                    if (current == null) {
                                      current = timeStamp;
                                    }
                                    tmp20.current = undefined;
                                    const obj3 = { eventTimestamp: current, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible };
                                    closure_27(obj3);
                                    const obj4 = { rows: chatManager._rows, firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex };
                                    visibleMessagesWindowHandler.handleScrollPosition(obj4);
                                  }
                                }
                                cResult[31] = channelId;
                                cResult[32] = chatManager;
                                cResult[33] = chatRef;
                                cResult[34] = tmp16;
                                cResult[35] = handleVisibleMessagesChange;
                                cResult[36] = isStaff;
                                cResult[37] = visibleMessagesWindowHandler;
                                cResult[38] = handleScrollPosition;
                                tmp17 = handleScrollPosition;
                              }
                            }
                          }
                          function handleScroll(isAtBottom) {
                            let decelerating;
                            let dragging;
                            let isFirstMessageVisible;
                            let isNearBottom;
                            let isNearTop;
                            let shouldShowJumpToPresent;
                            let tmp7;
                            isAtBottom = isAtBottom.isAtBottom;
                            ({ isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible } = isAtBottom);
                            let tmp = undefined !== isNearBottom;
                            const eventTimestamp = isAtBottom.eventTimestamp;
                            if (tmp) {
                              tmp = isNearBottom;
                            }
                            let tmp2 = undefined !== isNearTop && isNearTop;
                            let closure_1 = tmp5;
                            const obj = { eventTimestamp, isAtBottom, isNearBottom: tmp, isNearTop: tmp2, dragging: undefined !== dragging && dragging, decelerating: undefined !== decelerating && decelerating, shouldShowJumpToPresent: undefined !== shouldShowJumpToPresent && shouldShowJumpToPresent, isFirstMessageVisible: tmp7 };
                            tmp7 = undefined !== isFirstMessageVisible;
                            const tmp6 = closure_26;
                            if (tmp7) {
                              tmp7 = isFirstMessageVisible;
                            }
                            if (tmp6(obj)) {
                              ref2.current = isAtBottom;
                              ref3.current = tmp;
                              ref4.current = tmp2;
                              ref6.current = undefined !== dragging && dragging;
                              ref5.current = undefined !== decelerating && decelerating;
                              const obj2 = chatRef(chatUpdatesQueue[8]);
                              obj2.batchUpdates(() => {
                                let hasMoreAfter = closure_1;
                                const tmp = hasOwnProperty;
                                const tmp2 = channelId;
                                if (!closure_1) {
                                  hasMoreAfter = messages.hasMoreAfter;
                                }
                                tmp(tmp2, screenIndex, hasMoreAfter);
                                React3(screenIndex, isAtBottom);
                              });
                            }
                          }
                          cResult[26] = channelId;
                          cResult[27] = tmp15;
                          cResult[28] = messages;
                          cResult[29] = screenIndex;
                          cResult[30] = handleScroll;
                          tmp16 = handleScroll;
                        }
                      }
                    }
                  }
                }
              }
              function handleScrollCallbacks(arg0) {
                let decelerating;
                let dragging;
                let eventTimestamp;
                let isAtBottom;
                let isFirstMessageVisible;
                let isNearBottom;
                let isNearTop;
                ({ eventTimestamp, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, isFirstMessageVisible } = arg0);
                let tmp3 = undefined !== dragging && dragging;
                const tmp = undefined !== isNearBottom && isNearBottom;
                const tmp2 = undefined !== isNearTop && isNearTop;
                const tmp4 = undefined !== decelerating && decelerating;
                const tmp5 = undefined !== isFirstMessageVisible && isFirstMessageVisible;
                if (null != channel) {
                  useIsScreenReaderEnabled;
                  let tmp11 = !tmp33.loadingMore;
                  if (tmp11) {
                    if (!tmp3) {
                      tmp3 = tmp4;
                    }
                    if (!tmp3) {
                      tmp3 = tmp10;
                    }
                    tmp11 = tmp3;
                  }
                  if (tmp11) {
                    tmp11 = 0 === pendingUpdatesQueueRef.current.length;
                  }
                  if (!ref4.current) {
                    if (tmp2) {
                      if (messages.hasMoreBefore) {
                        if (tmp11) {
                          closure_24();
                        }
                        const obj = { isFirstMessageVisible: tmp5 };
                        onScroll(obj);
                        chatUpdatesQueue.tryFlush();
                        return true;
                      }
                    }
                  }
                  if (!ref3.current) {
                    if (tmp) {
                      if (messages.hasMoreAfter) {
                        if (tmp11) {
                          closure_25();
                        }
                      }
                    }
                  }
                  const current = ref2.current === isAtBottom && ref1.current;
                  if (!current) {
                    const id = tmp6.id;
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
              cResult[18] = channel;
              cResult[19] = chatUpdatesQueue;
              cResult[20] = tmp10;
              cResult[21] = tmp9;
              cResult[22] = messages;
              cResult[23] = onScroll;
              cResult[24] = pendingUpdatesQueueRef;
              cResult[25] = handleScrollCallbacks;
              tmp15 = handleScrollCallbacks;
            }
            function updateNativeRows(isLoadingAtTop) {
              if (chatUpdatesQueue.isBlocking) {
                chatUpdatesQueue.add(isLoadingAtTop);
              } else if (!isLoadingAtTop.isLoadingAtTop) {
                applyNativeRowsUpdate(isLoadingAtTop);
              } else {
                chatUpdatesQueue.add(isLoadingAtTop);
              }
            }
            cResult[15] = applyNativeRowsUpdate;
            cResult[16] = chatUpdatesQueue;
            cResult[17] = updateNativeRows;
            tmp14 = updateNativeRows;
          }
          function scrollToTopMessage() {
            const previousRows = chatManager.getPreviousRows();
            if (previousRows.length > 0) {
              const obj = NativeChatUtilsDefault;
              obj.scrollTo(chatRef.current, previousRows.length - 1);
            }
          }
          cResult[12] = chatManager;
          cResult[13] = chatRef;
          cResult[14] = scrollToTopMessage;
          tmp13 = scrollToTopMessage;
        }
        function scrollToRelativeOffset(arg0, arg1) {
          let tmp = undefined === arg1 || arg1;
          const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
          const current = chatRef.current;
          NativeChatUtilsDefault;
          if (tmp) {
            tmp = !useReducedMotion;
          }
          const result = scrollToRelativeOffset(current, arg0, tmp);
        }
        cResult[9] = chatRef;
        cResult[10] = useReducedMotion;
        cResult[11] = scrollToRelativeOffset;
        tmp12 = scrollToRelativeOffset;
      }
      function scrollToTop(arg0) {
        let tmp = undefined === arg0 || arg0;
        const scrollToTop = NativeChatUtilsDefault.scrollToTop;
        const current = chatRef.current;
        NativeChatUtilsDefault;
        if (tmp) {
          tmp = !useReducedMotion;
        }
        scrollToTop(current, tmp);
      }
      cResult[6] = chatRef;
      cResult[7] = useReducedMotion;
      cResult[8] = scrollToTop;
      tmp11 = scrollToTop;
    }
    function loadMoreAfter() {
      animatedRef.current = true;
      fetchMoreAfter();
    }
    let num = 3;
    cResult[3] = animatedRef;
    cResult[4] = fetchMoreAfter;
    cResult[5] = loadMoreAfter;
    tmp10 = loadMoreAfter;
  }
  function loadMoreBefore() {
    animatedRef.current = true;
    fetchMoreBefore();
  }
  cResult[0] = animatedRef;
  cResult[1] = fetchMoreBefore;
  cResult[2] = loadMoreBefore;
  tmp9 = loadMoreBefore;
}) : (function useScrollHandlers(arg0) {
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
      } else if (!isLoadingAtTop.isLoadingAtTop) {
        closure_8(isLoadingAtTop);
      } else {
        dependencyMap.add(isLoadingAtTop);
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
});
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default tmp4;

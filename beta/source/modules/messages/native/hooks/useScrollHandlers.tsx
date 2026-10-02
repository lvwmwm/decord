// Module ID: 10903
// Function ID: 10904
// Name: useScrollHandlers
// Dependencies: [19, 8838, 3, 558, 576, 10904, 5907, 9760, 5267, 10483, 1260, 9762, 5760, 7337, 2]

// Module 10903 (useScrollHandlers)
import LoggerDefault from "Logger" /* 3 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5267 */;
import QuestTypes from "QuestTypes" /* 5760 */;
import useInitialValueDefault from "useInitialValue" /* 5907 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7337 */;
import NativeChatUtilsDefault from "NativeChatUtils" /* 9760 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 9762 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10483 */;
import ConversationHeaderDismissTrackerDefault from "ConversationHeaderDismissTracker" /* 10904 */;
import react from "react" /* 19 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8838 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let chatRef, hasMoreAfter, importDefault, ref, ref2, ref3, ref4;

let closure_4;
let hasOwnProperty;
({ updateIsAtBottom: closure_4, updateShouldShowJumpToPresentButton: hasOwnProperty } = useChatBottomManagerUIStore);
let tmp3 = new LoggerDefault("useScrollHandlers");
let closure_6 = tmp3;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((chatRef) => {
  let chatUpdatesQueue;
  let first;
  let tmp17;
  let tmp22;
  let tmp = chatUpdatesQueue;
  let obj = chatRef(chatUpdatesQueue[4]);
  const cResult = obj.c(53);
  chatRef = chatRef.chatRef;
  const chatManager = chatRef.chatManager;
  chatUpdatesQueue = chatRef.chatUpdatesQueue;
  const pendingUpdatesQueueRef = chatRef.pendingUpdatesQueueRef;
  const animatedRef = chatRef.animatedRef;
  const fetchMoreBefore = chatRef.fetchMoreBefore;
  const fetchMoreAfter = chatRef.fetchMoreAfter;
  let closure_7 = chatRef.handleVisibleMessagesChange;
  const applyNativeRowsUpdate = chatRef.applyNativeRowsUpdate;
  const messages = chatRef.messages;
  const channel = chatRef.channel;
  const channelId = chatRef.channelId;
  const screenIndex = chatRef.screenIndex;
  const onScroll = chatRef.onScroll;
  const useReducedMotion = chatRef.useReducedMotion;
  const isStaff = chatRef.isStaff;
  let closure_16 = chatRef.visibleMessagesWindowHandler;
  const selectedConversation = chatRef.selectedConversation;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const tmp = new chatManager(chatUpdatesQueue[5])();
      return tmp;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp4 = chatManager(tmp[6])(first);
  let handleScrollPosition = tmp4;
  ref = pendingUpdatesQueueRef.useRef(undefined);
  const ref1 = pendingUpdatesQueueRef.useRef(false);
  ref2 = pendingUpdatesQueueRef.useRef(false);
  ref3 = pendingUpdatesQueueRef.useRef(false);
  ref4 = pendingUpdatesQueueRef.useRef(false);
  const ref5 = pendingUpdatesQueueRef.useRef(false);
  const ref6 = pendingUpdatesQueueRef.useRef(false);
  if (cResult[1] === animatedRef) {
    let tmp12;
    if (cResult[2] === fetchMoreBefore) {
      tmp12 = cResult[3];
    }
    let closure_26 = tmp12;
    if (cResult[4] === animatedRef) {
      let tmp13;
      if (cResult[5] === fetchMoreAfter) {
        tmp13 = cResult[6];
      }
      let closure_27 = tmp13;
      if (cResult[7] === chatRef) {
        if (cResult[10] === chatRef) {
          if (cResult[13] === chatManager) {
            if (cResult[16] === applyNativeRowsUpdate) {
              if (cResult[19] === channel) {
                if (cResult[20] === chatUpdatesQueue) {
                  if (cResult[21] === tmp13) {
                    if (cResult[22] === tmp12) {
                      if (cResult[23] === messages) {
                        if (cResult[24] === onScroll) {
                          let tmp20;
                          if (cResult[25] === pendingUpdatesQueueRef) {
                            tmp20 = cResult[26];
                          }
                          let closure_28 = tmp20;
                          class Y {
                            constructor(arg0) {
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
                                        closure_26();
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
                                        closure_27();
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
                          }
                          class D {
                            constructor(arg0) {
                              let tmp = undefined === arg0 || arg0;
                              const scrollToTop = NativeChatUtilsDefault.scrollToTop;
                              const current = chatRef.current;
                              NativeChatUtilsDefault;
                              if (tmp) {
                                tmp = !useReducedMotion;
                              }
                              scrollToTop(current, tmp);
                            }
                          }
                          cResult[27] = channelId;
                          cResult[28] = tmp20;
                          cResult[29] = messages;
                          cResult[30] = screenIndex;
                          cResult[31] = tmp22;
                        }
                      }
                    }
                  }
                }
              }
              class Y {
                constructor(arg0) {
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
                            closure_26();
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
                            closure_27();
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
              }
              class D {
                constructor(arg0) {
                  let tmp = undefined === arg0 || arg0;
                  const scrollToTop = NativeChatUtilsDefault.scrollToTop;
                  const current = chatRef.current;
                  NativeChatUtilsDefault;
                  if (tmp) {
                    tmp = !useReducedMotion;
                  }
                  scrollToTop(current, tmp);
                }
              }
              cResult[19] = channel;
              cResult[20] = chatUpdatesQueue;
              cResult[21] = tmp13;
              cResult[22] = tmp12;
              cResult[23] = messages;
              cResult[24] = onScroll;
              cResult[25] = pendingUpdatesQueueRef;
              cResult[26] = Y;
              tmp20 = Y;
            }
            class K {
              constructor(arg0, arg1) {
                let tmp = undefined === arg1 || arg1;
                const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
                const current = chatRef.current;
                NativeChatUtilsDefault;
                if (tmp) {
                  tmp = !useReducedMotion;
                }
                const result = scrollToRelativeOffset(current, arg0, tmp);
              }
            }
            class D {
              constructor(arg0) {
                let tmp = undefined === arg0 || arg0;
                const scrollToTop = NativeChatUtilsDefault.scrollToTop;
                const current = chatRef.current;
                NativeChatUtilsDefault;
                if (tmp) {
                  tmp = !useReducedMotion;
                }
                scrollToTop(current, tmp);
              }
            }
            cResult[16] = applyNativeRowsUpdate;
            cResult[17] = chatUpdatesQueue;
            cResult[18] = tmp19;
          }
          class K {
            constructor(arg0, arg1) {
              let tmp = undefined === arg1 || arg1;
              const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
              const current = chatRef.current;
              NativeChatUtilsDefault;
              if (tmp) {
                tmp = !useReducedMotion;
              }
              const result = scrollToRelativeOffset(current, arg0, tmp);
            }
          }
          class D {
            constructor(arg0) {
              let tmp = undefined === arg0 || arg0;
              const scrollToTop = NativeChatUtilsDefault.scrollToTop;
              const current = chatRef.current;
              NativeChatUtilsDefault;
              if (tmp) {
                tmp = !useReducedMotion;
              }
              scrollToTop(current, tmp);
            }
          }
          cResult[13] = chatManager;
          cResult[14] = chatRef;
          cResult[15] = tmp17;
        }
        class K {
          constructor(arg0, arg1) {
            let tmp = undefined === arg1 || arg1;
            const scrollToRelativeOffset = NativeChatUtilsDefault.scrollToRelativeOffset;
            const current = chatRef.current;
            NativeChatUtilsDefault;
            if (tmp) {
              tmp = !useReducedMotion;
            }
            const result = scrollToRelativeOffset(current, arg0, tmp);
          }
        }
        class D {
          constructor(arg0) {
            let tmp = undefined === arg0 || arg0;
            const scrollToTop = NativeChatUtilsDefault.scrollToTop;
            const current = chatRef.current;
            NativeChatUtilsDefault;
            if (tmp) {
              tmp = !useReducedMotion;
            }
            scrollToTop(current, tmp);
          }
        }
        cResult[10] = chatRef;
        cResult[11] = useReducedMotion;
        cResult[12] = K;
      }
      class D {
        constructor(arg0) {
          let tmp = undefined === arg0 || arg0;
          const scrollToTop = NativeChatUtilsDefault.scrollToTop;
          const current = chatRef.current;
          NativeChatUtilsDefault;
          if (tmp) {
            tmp = !useReducedMotion;
          }
          scrollToTop(current, tmp);
        }
      }
      cResult[7] = chatRef;
      cResult[8] = useReducedMotion;
      cResult[9] = D;
    }
    class H {
      constructor() {
        animatedRef.current = true;
        fetchMoreAfter();
      }
    }
    cResult[4] = animatedRef;
    cResult[5] = fetchMoreAfter;
    cResult[6] = H;
    tmp13 = H;
  }
  const fn2 = function x() {
    animatedRef.current = true;
    fetchMoreBefore();
  };
  cResult[1] = animatedRef;
  cResult[2] = fetchMoreBefore;
  cResult[3] = fn2;
  tmp12 = fn2;
}) : ((arg0) => {
  let closure_10;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_4;
  let closure_5;
  let closure_7;
  let closure_8;
  let closure_9;
  let logger;
  let previousRows;
  let require;
  ({ chatRef: require, chatManager: importDefault, chatUpdatesQueue: dependencyMap, pendingUpdatesQueueRef: react, animatedRef: closure_4, fetchMoreBefore: closure_5, fetchMoreAfter: closure_6, handleVisibleMessagesChange: closure_7, applyNativeRowsUpdate: closure_8, messages: closure_9, channel: closure_10, channelId: closure_11, screenIndex: closure_12, onScroll: closure_13, useReducedMotion: closure_14, isStaff: closure_15, visibleMessagesWindowHandler: closure_16, selectedConversation: closure_17 } = arg0);
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
      const obj = require("react-native");
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
  let handleScrollPosition = useInitialValueDefault(() => {
    const tmp = new ConversationHeaderDismissTrackerDefault();
    return tmp;
  });
  ref = react.useRef(undefined);
  const ref1 = react.useRef(false);
  ref2 = react.useRef(false);
  ref3 = react.useRef(false);
  ref4 = react.useRef(false);
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
      const current = _require.current;
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
      const current = _require.current;
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
        obj.scrollTo(_require.current, importDefault.length - 1);
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
      let id;
      let isAtBottom;
      let isFirstMessageVisible;
      let isNearBottom;
      let isNearTop;
      let lastVisibleMessageIndex;
      let lastVisibleMessagePercentVisible;
      let nativeEvent;
      let shouldShowJumpToPresent;
      let startMessageId;
      let timeStamp;
      ({ timeStamp, nativeEvent } = arg0);
      ({ firstVisibleMessageIndex, lastVisibleMessageIndex, changesetUpdateId } = nativeEvent);
      ({ isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible } = nativeEvent);
      const obj = ChatChangesetUpdateTracker;
      const changesetIdForChat = obj.getChangesetIdForChat(_require.current);
      if (changesetUpdateId !== changesetIdForChat) {
        if (null == ref.current) {
          ref.current = timeStamp;
        }
        const tmp17 = closure_15;
        if (tmp17) {
          logger.log("STAFF-ACK-LOG: Ignoring outdated scroll event.", closure_11, changesetUpdateId, changesetIdForChat, timeStamp);
        }
      } else {
        const obj2 = { firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex, firstVisibleMessagePercentVisible, lastVisibleMessagePercentVisible, source: QuestTypes.QuestsVisibleMessagesChangedSource.SCROLL };
        closure_7(obj2);
        let current = ref.current;
        const tmp27 = ref;
        if (current == null) {
          current = timeStamp;
        }
        tmp27.current = undefined;
        const obj3 = { eventTimestamp: current, isAtBottom, isNearBottom, isNearTop, dragging, decelerating, shouldShowJumpToPresent, isFirstMessageVisible };
        handleScroll(obj3);
        const obj4 = { rows: importDefault._rows, firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex };
        closure_16.handleScrollPosition(obj4);
        const obj5 = { rows: importDefault._rows, conversationId: id, startMessageId, firstVisibleMessageRowIndex: firstVisibleMessageIndex, lastVisibleMessageRowIndex: lastVisibleMessageIndex };
        id = undefined;
        handleScrollPosition = handleScrollPosition.handleScrollPosition;
        if (closure_17 != null) {
          id = tmp10.id;
        }
        if (id == null) {
          id = null;
        }
        startMessageId = undefined;
        if (closure_17 != null) {
          startMessageId = tmp10.startMessageId;
        }
        if (startMessageId == null) {
          startMessageId = null;
        }
        const handleScrollPositionResult1 = handleScrollPosition(obj5);
        if (null != handleScrollPositionResult1) {
          const tmpResult = ConversationsActionCreators;
          const result = tmpResult.clearConversationSelection(closure_11, handleScrollPositionResult1);
        }
      }
    }
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/messages/native/hooks/useScrollHandlers.tsx");

export default tmp4;

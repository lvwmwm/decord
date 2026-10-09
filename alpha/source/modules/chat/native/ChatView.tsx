// Module ID: 10329
// Function ID: 10330
// Name: ChatView
// Dependencies: [19, 17, 5754, 2068, 2064, 5429, 1085, 21, 5091, 587, 558, 576, 4946, 504, 1126, 5931, 5951, 10330, 6176, 10331, 7190, 7007, 9646, 6796, 10333, 10347, 10449, 11584, 12157, 1382, 12334, 12335, 11920, 12339, 12342, 9, 9431, 12345, 1200, 11149, 12347, 12348, 12480, 12494, 10196, 11583, 2]

// Module 10329 (ChatView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import ChatInputUtils from "ChatInputUtils" /* 4946 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7007 */;
import SummaryActionCreators from "SummaryActionCreators" /* 9646 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 10333 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 10347 */;
import MessagesDefault from "Messages" /* 10449 */;
import ChatInputDefault from "ChatInput" /* 11584 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 12157 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 12339 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 12342 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5754 */;
import ChannelStore_mod from "ChannelStore" /* 2064 */;
import MessageStore from "MessageStore" /* 5429 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
const createChannelRecord = ChannelRecord.createChannelRecord;
let ChannelStore = ChannelStore_mod;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { empty: obj2, messages: { flex: 1, overflow: "hidden" }, chat: obj3 };
obj2 = { flex: 1, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatView(chatInputRef) {
  let HACK_fixModalInteraction;
  let alwaysRespectKeyboard;
  let channel;
  let channelId;
  let channelIsLoading;
  let disableGradient;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let items6;
  let tmp21;
  let tmp31;
  let tmp32;
  let tmp59;
  let tmp7;
  let visibleMessagesWindowHandler;
  let tmp = channelId;
  let tmp2 = HACK_fixModalInteraction;
  let obj = channelId(HACK_fixModalInteraction[11]);
  const cResult = obj.c(63);
  ({ alwaysRespectKeyboard, channelId } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  ({ disableGradient, guildId, HACK_fixModalInteraction } = chatInputRef);
  const screenIndex = chatInputRef.screenIndex;
  const secondaryTextFieldRef = chatInputRef.secondaryTextFieldRef;
  const setNoExtractUI = chatInputRef.setNoExtractUI;
  ChannelStore = tmp4;
  let tmp5 = undefined !== disableGradient && disableGradient;
  const tmp6 = visibleMessagesWindowHandler();
  let closure_7 = tmp6;
  if (cResult[0] !== (undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard)) {
    const fn = function u() {
      const tmp = alwaysRespectKeyboard;
      if (!tmp) {
        const obj = ChatInputUtils;
        obj.dismissKeyboard();
      }
    };
    cResult[0] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === (undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard)) {
    let tmp8;
    let tmp11;
    let tmp13;
    if (cResult[3] === channelId) {
      tmp8 = cResult[4];
    }
    let obj2 = screenIndex;
    const effect = screenIndex.useEffect(tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp12 = ChannelStore;
      let items = [ChannelStore];
      cResult[5] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== channelId) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
      cResult[6] = channelId;
      cResult[7] = C;
      tmp13 = C;
    } else {
      class C {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
    }
    const tmpResult = tmp(tmp2[13]);
    const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp13);
    if (cResult[8] === channelId) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
      if (cResult[11] === tmp15) {
        let tmp26;
        let tmp30;
        class C {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
        ({ channelIsLoading, channel } = tmp21);
        const tmpResult5 = tmp(tmp2[15]);
        const isChannelContentGated = tmpResult5.useIsChannelContentGated(channel);
        const useGetSpoilerGatingChannelId = tmp(tmp2[16]).useGetSpoilerGatingChannelId;
        tmp(tmp2[16]);
        if (stateFromStores == null) {
          class C {
            constructor() {
              return ChannelStore.getChannel(channelId);
            }
          }
        }
        const getSpoilerGatingChannelId = useGetSpoilerGatingChannelId(stateFromStores);
        const tmp25 = null != getSpoilerGatingChannelId;
        let closure_9 = obj2.useRef(channelId);
        const ref = obj2.useRef(null);
        const ref2 = obj2.useRef(null);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
          cResult[14] = A;
          tmp26 = A;
        } else {
          class A {
            constructor() {
              const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
        }
        const tmp28 = chatInputRef(tmp2[18])(tmp26);
        visibleMessagesWindowHandler = tmp28;
        const tmp29 = chatInputRef(tmp2[19])(channelId);
        const isResourceChannel = tmp29;
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
          let items1 = [closure_7];
          cResult[15] = items1;
          tmp30 = items1;
        } else {
          class A {
            constructor() {
              const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
        }
        if (cResult[16] === channelId) {
          let tmp34;
          let tmp38;
          let tmp40;
          let tmp43;
          let tmp42;
          let tmp47;
          let tmp46;
          let tmp51;
          let tmp50;
          let tmp55;
          let tmp54;
          class A {
            constructor() {
              const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
              return tmp;
            }
          }
          const tmpResult7 = tmp(tmp2[13]);
          const stateFromStoresObject = tmpResult7.useStateFromStoresObject(tmp30, tmp31, tmp32);
          const shouldRenderPlaceholder = stateFromStoresObject.shouldRenderPlaceholder;
          const shouldRenderBegginingRow = stateFromStoresObject.shouldRenderBegginingRow;
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[20] = tmp35;
            tmp34 = tmp35;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const onScroll = tmp34;
          if (cResult[21] !== chatInputRef) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[21] = chatInputRef;
            cResult[22] = tmp37;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const onPressKey = tmp36;
          const _Symbol5 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[23] = tmp39;
            tmp38 = tmp39;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const scrollToNewMessages = tmp38;
          const _Symbol6 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            cResult[24] = tmp41;
            tmp40 = tmp41;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          const onJumpToPresent = tmp40;
          const _Symbol7 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            let items2 = [];
            cResult[25] = tmp44;
            cResult[26] = items2;
            tmp43 = items2;
            tmp42 = tmp44;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp43 = cResult[26];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp42, tmp43);
          if (cResult[27] !== channelId) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            const items3 = [channelId];
            cResult[27] = channelId;
            cResult[28] = tmp48;
            cResult[29] = items3;
            tmp47 = items3;
            tmp46 = tmp48;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp47 = cResult[29];
          }
          const effect1 = obj2.useEffect(tmp46, tmp47);
          if (cResult[30] !== channel.id) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            const items4 = [channel.id];
            cResult[30] = channel.id;
            cResult[31] = tmp52;
            cResult[32] = items4;
            tmp51 = items4;
            tmp50 = tmp52;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp51 = cResult[32];
          }
          const effect2 = obj2.useEffect(tmp50, tmp51);
          const _Symbol8 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            const items5 = [];
            cResult[33] = tmp56;
            cResult[34] = items5;
            tmp55 = items5;
            tmp54 = tmp56;
          } else {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            tmp55 = cResult[34];
          }
          const effect3 = obj2.useEffect(tmp54, tmp55);
          if (cResult[35] === HACK_fixModalInteraction) {
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
          }
          if (cResult[58] === channelId) {
            let tmp62;
            let tmp66Result;
            class A {
              constructor() {
                const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                return tmp;
              }
            }
            if (cResult[61] !== tmp5) {
              let tmp63;
              class A {
                constructor() {
                  const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
              if (!tmp5) {
                class A {
                  constructor() {
                    const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
                tmp63 = closure_9(chatInputRef(tmp2[44]), { absolute: true });
              }
              cResult[61] = tmp5;
              cResult[62] = tmp63;
              tmp62 = tmp63;
            } else {
              class A {
                constructor() {
                  const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
            }
            let obj3 = { profile: tmp(tmp2[45]).Profiles.ChatView, children: items6 };
            items6 = [tmp59, tmp62, ];
            const tmp27Result = chatInputRef(tmp2[45]);
            const tmp64 = ref;
            const tmpResult8 = tmp(tmp2[36]);
            if (tmpResult8.shouldNSFWGateGuild(guildId)) {
              class A {
                constructor() {
                  const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
              tmp66Result = closure_9(tmp27(tmp2[37]), {});
              const tmp27Result3 = chatInputRef(tmp2[35]);
              tmp27Result3.setInterstitial("NsfwGateChat");
            } else {
              let tmp68;
              class A {
                constructor() {
                  const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                  return tmp;
                }
              }
              if (channelIsLoading) {
                class A {
                  constructor() {
                    const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
                if (!secondaryTextFieldRef.isConnected()) {
                  class A {
                    constructor() {
                      const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                      return tmp;
                    }
                  }
                  tmp66Result = tmp66();
                }
              }
              if (channelIsLoading) {
                class A {
                  constructor() {
                    const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
                let obj4 = { style: tmp6.empty, title: intl2.string(tmp(tmp2[14]).t.ai6Lbr), body: intl3.string(tmp(tmp2[14]).t["LTr+x9"]) };
                const EmptyState = tmp(tmp2[38]).EmptyState;
                intl2 = tmp(tmp2[14]).intl;
                intl3 = tmp(tmp2[14]).intl;
                tmp68 = closure_9(EmptyState, obj4);
                const tmp27Result4 = chatInputRef(tmp2[35]);
                tmp27Result4.setInterstitial("EmptyState");
              } else {
                class A {
                  constructor() {
                    const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
                    return tmp;
                  }
                }
              }
              tmp66Result = tmp68;
            }
            items6[2] = tmp66Result;
            cResult[35] = HACK_fixModalInteraction;
            cResult[36] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
            cResult[37] = channel;
            cResult[38] = channelId;
            cResult[39] = channelIsLoading;
            cResult[40] = chatInputRef;
            cResult[41] = tmp5;
            cResult[42] = guildId;
            cResult[43] = tmp36;
            cResult[44] = tmp29;
            cResult[45] = isChannelContentGated;
            cResult[46] = screenIndex;
            cResult[47] = secondaryTextFieldRef;
            cResult[48] = setNoExtractUI;
            cResult[49] = shouldRenderBegginingRow;
            cResult[50] = shouldRenderPlaceholder;
            cResult[51] = getSpoilerGatingChannelId;
            cResult[52] = tmp25;
            cResult[53] = tmp6.chat;
            cResult[54] = tmp6.empty;
            cResult[55] = tmp6.messages;
            cResult[56] = tmp28;
            cResult[57] = tmp64(tmp27Result, obj3);
            const tmp64Result = tmp64(tmp27Result, obj3);
          }
          let obj5 = { channelId, guildId };
          const tmp61 = closure_9(chatInputRef(tmp2[43]), obj5);
          cResult[58] = channelId;
          cResult[59] = guildId;
          cResult[60] = tmp61;
          tmp59 = tmp61;
        }
        const fn2 = function q() {
          const messages = MessageStore.getMessages(channelId);
          let tmp = 0 === messages.length;
          if (tmp) {
            tmp = messages.loadingMore || !messages.ready;
          }
          const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
          return obj;
        };
        const items7 = [channelId, tmp29];
        cResult[16] = channelId;
        cResult[17] = tmp29;
        cResult[18] = fn2;
        cResult[19] = items7;
        tmp31 = fn2;
        tmp32 = items7;
      }
      let obj6 = { channel: tmp15, channelIsLoading: null == stateFromStores };
      cResult[11] = tmp15;
      cResult[12] = null == stateFromStores;
      cResult[13] = obj6;
      tmp21 = obj6;
    }
    let tmp17 = stateFromStores;
    if (null == stateFromStores) {
      class A {
        constructor() {
          const tmp = new chatInputRef(HACK_fixModalInteraction[17])();
          return tmp;
        }
      }
      let obj7 = { id: channelId, type: channel.GUILD_TEXT, name: intl.string(tmp(tmp2[14]).t.ZTNur7) };
      intl = tmp(tmp2[14]).intl;
      tmp17 = setNoExtractUI(obj7);
    }
    cResult[8] = channelId;
    cResult[9] = stateFromStores;
    cResult[10] = tmp17;
  }
  const items8 = [channelId, tmp4];
  cResult[2] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
  cResult[3] = channelId;
  cResult[4] = items8;
  tmp8 = items8;
}) : (function ChatView(alwaysRespectKeyboard) {
  let HACK_fixModalInteraction;
  let c15;
  let c16;
  let channel;
  let channelIsLoading;
  let guildId;
  let intl;
  let intl2;
  let items10;
  let screenIndex;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let shouldRender;
  let tmp20Result3;
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = alwaysRespectKeyboard.channelId;
  const chatInputRef = alwaysRespectKeyboard.chatInputRef;
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: react, screenIndex: GatewayConnectionStore, secondaryTextFieldRef: createChannelRecord, setNoExtractUI: ChannelStore } = alwaysRespectKeyboard);
  channel = undefined;
  let closure_10;
  let ref;
  let visibleMessagesWindowHandler;
  let isResourceChannel;
  c15 = undefined;
  c16 = undefined;
  let onScroll;
  let onPressKey;
  let scrollToNewMessages;
  let onJumpToPresent;
  let tmp = ref();
  let closure_7 = tmp;
  let obj = react;
  let items = [channelId, flag];
  const effect = react.useEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    }
  }, items);
  const tmp3 = flag;
  let obj2 = flag(chatInputRef[13]);
  let items1 = [ChannelStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = react.useMemo(() => {
    let intl;
    let tmp2 = stateFromStores;
    const tmp = stateFromStores;
    if (null == stateFromStores) {
      const obj = { id: channelId, type: ChannelTypes.GUILD_TEXT, name: intl.string(intl4.t.ZTNur7) };
      intl = intl4.intl;
      tmp2 = createChannelRecord(obj);
    }
    return { channel: tmp2, channelIsLoading: null == tmp };
  }, items2);
  ({ channelIsLoading, channel } = memo);
  let obj3 = flag(chatInputRef[15]);
  const isChannelContentGated = obj3.useIsChannelContentGated(channel);
  let tmp8 = flag(chatInputRef[16]);
  const useGetSpoilerGatingChannelId = tmp8.useGetSpoilerGatingChannelId;
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = useGetSpoilerGatingChannelId(stateFromStores);
  closure_10 = obj.useRef(channelId);
  obj.useRef(null);
  ref = obj.useRef(null);
  let tmp11 = channelId;
  visibleMessagesWindowHandler = channelId(tmp4[18])(() => {
    const tmp = new channelId(chatInputRef[17])();
    return tmp;
  });
  let tmp12 = channelId(tmp4[19])(channelId);
  isResourceChannel = tmp12;
  const items3 = [closure_7];
  const items4 = [channelId, tmp12];
  const tmp3Result = tmp3(chatInputRef[13]);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items3, () => {
    const messages = MessageStore.getMessages(channelId);
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
    }
    const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c15, shouldRenderBegginingRow: c16 } = stateFromStoresObject);
  onScroll = obj.useCallback((arg0) => {
    const current = ref.current;
    if (current != null) {
      current.onChatViewScrolled(arg0);
    }
  }, []);
  const items5 = [chatInputRef];
  onPressKey = obj.useCallback((arg0) => {
    const current = chatInputRef.current;
    if (current != null) {
      current.handlePressKey(tmp);
    }
  }, items5);
  const items6 = [ref];
  scrollToNewMessages = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToNewMessages();
    }
  }, items6);
  const items7 = [ref];
  onJumpToPresent = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.jumpToPresent();
    }
  }, items7);
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = flag(chatInputRef[20]);
    return obj.trackAppUIViewed();
  }, []);
  const items8 = [channelId];
  const effect1 = obj.useEffect(() => {
    const obj = LazyLoadedThreadManagerDefault;
    const thread = obj.loadThread(channelId);
    const obj2 = SummaryActionCreators;
    const summaries = obj2.fetchSummaries(channelId);
  }, items8);
  const items9 = [channel.id];
  const effect2 = obj.useEffect(() => {
    closure_10.current = channel.id;
  }, items9);
  const effect3 = obj.useEffect(() => () => {
    const obj = flag(chatInputRef[23]);
    const result = obj.clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj4 = { profile: tmp3(tmp4[45]).Profiles.ChatView, children: items10 };
  const tmp19 = channelId(chatInputRef[45]);
  items10 = [channel(channelId(tmp4[43]), { channelId, guildId }), , ];
  let tmp20Result = null;
  const tmp18 = closure_10;
  if (!flag2) {
    tmp20Result = tmp20(tmp11(tmp4[44]), { absolute: true });
  }
  items10[1] = tmp20Result;
  const tmp3Result2 = tmp3(chatInputRef[36]);
  if (tmp3Result2.shouldNSFWGateGuild(guildId)) {
    tmp20Result3 = tmp20(tmp11(tmp4[37]), {});
    const tmp11Result = tmp11(chatInputRef[35]);
    tmp11Result.setInterstitial("NsfwGateChat");
  } else {
    let tmp20Result4;
    function renderMessagesWrapper() {
      let items;
      let items1;
      let items2;
      let obj2;
      const obj = { style: closure_7.messages, channelId, stickyHeader: React4(ChatViewStickyHeaderDefault, obj2), children: items1 };
      obj2 = { channel, ref, scrollToNewMessages };
      const obj3 = { alwaysRespectKeyboard: flag, channel, screenIndex: GatewayConnectionStore, chatInputRef, HACK_fixModalInteraction: react, isResourceChannel, onPressKey, onScroll, ref, style: closure_7.chat, visibleMessagesWindowHandler, children: items };
      items = [, ];
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex: GatewayConnectionStore, secondaryTextFieldRef: createChannelRecord, setNoExtractUI: ChannelStore, onJumpToPresent };
      const tmp5 = ChatViewWrapperDefault;
      const tmp9 = MessagesDefault;
      items[0] = React4(ChatInputDefault, obj4);
      const obj5 = { channelId, guildId: channel.getGuildId(), shouldRender };
      const tmp13 = ChatBeginningRowDefault;
      items[1] = React4(tmp13, obj5);
      items1 = [authStore(tmp9, obj3), , , ];
      let tmp7Result = null;
      const obj6 = PlatformUtils;
      const tmp11 = ref;
      const tmp12 = onJumpToPresent;
      const tmp2 = unpackModuleId;
      const tmp8 = channel;
      if (!obj6.isAndroid()) {
        const obj7 = { channelId: tmp8.id, messagesRef: tmp11 };
        tmp7Result = tmp7(tmp3(12334), obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c15) {
        const obj8 = { screenIndex: GatewayConnectionStore };
        tmp7Result3 = tmp7(tmp3(12335), obj8);
      }
      items1[2] = tmp7Result3;
      let tmp7Result4 = null;
      const tmp14Result = PlatformUtils;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex: GatewayConnectionStore, onJumpToPresent: tmp12 };
        tmp7Result4 = tmp7(tmp3(11920), obj9);
      }
      const obj10 = { children: items2 };
      items1[3] = tmp7Result4;
      items2 = [authStore(tmp5, obj), React4(ChannelSafeAreaBottomDefault, { channelId }), React4(VoiceMessageOverlayDefault, { channelId })];
      return authStore(tmp2, obj10);
    }
    if (channelIsLoading) {
      if (!GatewayConnectionStore.isConnected()) {
        tmp20Result3 = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj5 = { style: tmp.empty, title: intl.string(tmp3(tmp4[14]).t.ai6Lbr), body: intl2.string(tmp3(tmp4[14]).t["LTr+x9"]) };
      const EmptyState = tmp3(tmp4[38]).EmptyState;
      intl = tmp3(tmp4[14]).intl;
      intl2 = tmp3(tmp4[14]).intl;
      tmp20Result4 = tmp20(EmptyState, obj5);
      const tmp11Result6 = tmp11(chatInputRef[35]);
      tmp11Result6.setInterstitial("EmptyState");
    } else if (isChannelContentGated) {
      let obj6 = { guildId, channelId };
      tmp20Result4 = tmp20(tmp11(tmp4[39]), obj6);
      const tmp11Result7 = tmp11(chatInputRef[35]);
      tmp11Result7.setInterstitial("GuildNSFW");
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          let obj7 = { guildId, channelId: getSpoilerGatingChannelId };
          tmp20Result4 = tmp20(tmp11(tmp4[40]), obj7, channelId);
          const tmp11Result8 = tmp11(chatInputRef[35]);
          tmp11Result8.setInterstitial("ChannelSpoiler");
        }
      }
      if (channel.isDirectory()) {
        let obj8 = { channel, guildId };
        tmp20Result4 = tmp20(tmp11(tmp4[41]), obj8);
        const tmp11Result9 = tmp11(chatInputRef[35]);
        tmp11Result9.setInterstitial("GuildDirectory");
      } else if (channel.isForumLikeChannel()) {
        let obj9 = { channel };
        tmp20Result4 = tmp20(tmp11(tmp4[42]), obj9);
        const tmp11Result10 = tmp11(chatInputRef[35]);
        tmp11Result10.setInterstitial("ForumChannel");
      } else {
        tmp20Result4 = renderMessagesWrapper();
      }
    }
    tmp20Result3 = tmp20Result4;
  }
  items10[2] = tmp20Result3;
  return tmp18(tmp19, obj4);
}));
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;

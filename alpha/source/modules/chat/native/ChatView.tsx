// Module ID: 10888
// Function ID: 10889
// Name: ChatView
// Dependencies: [19, 17, 6496, 4827, 4823, 6010, 1087, 21, 4971, 587, 558, 576, 5159, 504, 1128, 10889, 10906, 5599, 10907, 7584, 7410, 10070, 7206, 10909, 10922, 11023, 13053, 13384, 1384, 13558, 13559, 13155, 13563, 13566, 9, 1202, 13569, 13704, 13718, 10625, 13052, 2]

// Module 10888 (ChatView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChannelRecord from "ChannelRecord" /* 4827 */;
import ChatInputUtils from "ChatInputUtils" /* 5159 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7410 */;
import SummaryActionCreators from "SummaryActionCreators" /* 10070 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 10909 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 10922 */;
import MessagesDefault from "Messages" /* 11023 */;
import ChatInputDefault from "ChatInput" /* 13053 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 13384 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 13563 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 13566 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6496 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import MessageStore_mod from "MessageStore" /* 6010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
const createChannelRecord = ChannelRecord.createChannelRecord;
let MessageStore = MessageStore_mod;
let ChannelTypes = Constants.ChannelTypes;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { empty: obj2, messages: { flex: 1, overflow: "hidden" }, chat: obj3 };
obj2 = { flex: 1, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CHANNEL_BACKGROUND_DEFAULT, justifyContent: "flex-start", overflow: "hidden", flex: 1 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatView(isActive) {
  let HACK_fixModalInteraction;
  let alwaysRespectKeyboard;
  let channel;
  let channelId;
  let channelIsLoading;
  let chatInputRef;
  let closure_8;
  let disableGradient;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let ref2;
  let tmp29;
  let tmp30;
  let tmp56;
  let tmp7;
  let tmp = channelId;
  let tmp2 = chatInputRef;
  let obj = channelId(chatInputRef[11]);
  const cResult = obj.c(62);
  ({ alwaysRespectKeyboard, channelId } = isActive);
  isActive = isActive.isActive;
  chatInputRef = isActive.chatInputRef;
  ({ disableGradient, guildId, HACK_fixModalInteraction } = isActive);
  const screenIndex = isActive.screenIndex;
  const secondaryTextFieldRef = isActive.secondaryTextFieldRef;
  const setNoExtractUI = isActive.setNoExtractUI;
  MessageStore = tmp4;
  let tmp5 = undefined !== disableGradient && disableGradient;
  const tmp6 = ref2();
  ChannelTypes = tmp6;
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
    let obj2 = HACK_fixModalInteraction;
    const effect = HACK_fixModalInteraction.useEffect(tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp12 = setNoExtractUI;
      let items = [setNoExtractUI];
      cResult[5] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== channelId) {
      const fn2 = function p() {
        return ChannelStore.getChannel(channelId);
      };
      cResult[6] = channelId;
      cResult[7] = fn2;
      tmp13 = fn2;
    } else {
      tmp13 = cResult[7];
    }
    const tmpResult = tmp(tmp2[13]);
    let stateFromStores = tmpResult.useStateFromStores(tmp11, tmp13);
    if (cResult[8] === channelId) {
      let tmp15;
      if (cResult[9] === stateFromStores) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp15) {
        let tmp21;
        let tmp24;
        let tmp28;
        if (cResult[12] === null == stateFromStores) {
          tmp21 = cResult[13];
        }
        ({ channelIsLoading, channel } = tmp21);
        const useChannelContentGate = tmp(tmp2[15]).useChannelContentGate;
        tmp(tmp2[15]);
        if (stateFromStores == null) {
          stateFromStores = null;
        }
        const channelContentGate = useChannelContentGate(guildId, stateFromStores);
        let closure_10 = obj2.useRef(channelId);
        const ref = obj2.useRef(null);
        ref2 = obj2.useRef(null);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[16])();
              return tmp;
            }
          }
          cResult[14] = U;
          tmp24 = U;
        } else {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[16])();
              return tmp;
            }
          }
        }
        const tmp26 = isActive(tmp2[17])(tmp24);
        const visibleMessagesWindowHandler = tmp26;
        const tmp27 = isActive(tmp2[18])(channelId);
        const isResourceChannel = tmp27;
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[16])();
              return tmp;
            }
          }
          let items1 = [MessageStore];
          cResult[15] = items1;
          tmp28 = items1;
        } else {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[16])();
              return tmp;
            }
          }
        }
        if (cResult[16] === channelId) {
          let tmp32;
          let tmp35;
          let tmp37;
          let tmp44;
          let tmp43;
          let tmp48;
          let tmp47;
          let tmp52;
          let tmp51;
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[16])();
              return tmp;
            }
          }
          const tmpResult4 = tmp(tmp2[13]);
          const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp28, tmp29, tmp30);
          const shouldRenderPlaceholder = stateFromStoresObject.shouldRenderPlaceholder;
          const shouldRenderBegginingRow = stateFromStoresObject.shouldRenderBegginingRow;
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            cResult[20] = Y;
            tmp32 = Y;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
          }
          Y = tmp32;
          if (cResult[21] !== chatInputRef) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            cResult[21] = chatInputRef;
            cResult[22] = tmp34;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
          }
          const onPressKey = tmp33;
          const _Symbol5 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            cResult[23] = tmp36;
            tmp35 = tmp36;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
          }
          const scrollToNewMessages = tmp35;
          const _Symbol6 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            cResult[24] = tmp38;
            tmp37 = tmp38;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
          }
          const onJumpToPresent = tmp37;
          const _Symbol7 = Symbol;
          class Z {
            constructor() {
              const messages = MessageStore.getMessages(channelId);
              let tmp = 0 === messages.length;
              if (tmp) {
                tmp = messages.loadingMore || !messages.ready;
              }
              const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
              return obj;
            }
          }
          const layoutEffect = obj2.useLayoutEffect(tmp40, tmp41);
          if (cResult[27] !== channelId) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            let items2 = [channelId];
            cResult[27] = channelId;
            cResult[28] = tmp45;
            cResult[29] = items2;
            tmp44 = items2;
            tmp43 = tmp45;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            tmp44 = cResult[29];
          }
          const effect1 = obj2.useEffect(tmp43, tmp44);
          if (cResult[30] !== channel.id) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            const items3 = [channel.id];
            cResult[30] = channel.id;
            cResult[31] = tmp49;
            cResult[32] = items3;
            tmp48 = items3;
            tmp47 = tmp49;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            tmp48 = cResult[32];
          }
          const effect2 = obj2.useEffect(tmp47, tmp48);
          const _Symbol8 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            const items4 = [];
            cResult[33] = tmp53;
            cResult[34] = items4;
            tmp52 = items4;
            tmp51 = tmp53;
          } else {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            tmp52 = cResult[34];
          }
          const effect3 = obj2.useEffect(tmp51, tmp52);
          if (cResult[35] === HACK_fixModalInteraction) {
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
          }
          if (cResult[57] === channelId) {
            let tmp59;
            let result;
            class Y {
              constructor(arg0) {
                const current = ref2.current;
                if (current != null) {
                  current.onChatViewScrolled(arg0);
                }
              }
            }
            if (cResult[60] !== tmp5) {
              let tmp60;
              class Y {
                constructor(arg0) {
                  const current = ref2.current;
                  if (current != null) {
                    current.onChatViewScrolled(arg0);
                  }
                }
              }
              if (!tmp5) {
                class Y {
                  constructor(arg0) {
                    const current = ref2.current;
                    if (current != null) {
                      current.onChatViewScrolled(arg0);
                    }
                  }
                }
                tmp60 = channel(isActive(tmp2[39]), { absolute: true });
              }
              cResult[60] = tmp5;
              cResult[61] = tmp60;
              tmp59 = tmp60;
            } else {
              class Y {
                constructor(arg0) {
                  const current = ref2.current;
                  if (current != null) {
                    current.onChatViewScrolled(arg0);
                  }
                }
              }
            }
            let obj3 = { profile: tmp(tmp2[40]).Profiles.ChatView, children: items5 };
            items5 = [tmp56, tmp59, ];
            const tmp25Result = isActive(tmp2[40]);
            const tmp61 = closure_10;
            if (null != channelContentGate) {
              class Y {
                constructor(arg0) {
                  const current = ref2.current;
                  if (current != null) {
                    current.onChatViewScrolled(arg0);
                  }
                }
              }
              result = obj11.renderChannelContentGate(channelContentGate);
              const kind = channelContentGate.kind;
              const tmp25Result3 = isActive(tmp2[34]);
              tmp25Result3.setInterstitial(kind);
            } else {
              let tmp64;
              class Y {
                constructor(arg0) {
                  const current = ref2.current;
                  if (current != null) {
                    current.onChatViewScrolled(arg0);
                  }
                }
              }
              if (channelIsLoading) {
                class Y {
                  constructor(arg0) {
                    const current = ref2.current;
                    if (current != null) {
                      current.onChatViewScrolled(arg0);
                    }
                  }
                }
                if (!screenIndex.isConnected()) {
                  class Y {
                    constructor(arg0) {
                      const current = ref2.current;
                      if (current != null) {
                        current.onChatViewScrolled(arg0);
                      }
                    }
                  }
                  result = tmp68();
                }
              }
              if (channelIsLoading) {
                class Y {
                  constructor(arg0) {
                    const current = ref2.current;
                    if (current != null) {
                      current.onChatViewScrolled(arg0);
                    }
                  }
                }
                let obj4 = { style: tmp6.empty, title: intl2.string(tmp(tmp2[14]).t.ai6Lbr), body: intl3.string(tmp(tmp2[14]).t["LTr+x9"]) };
                const EmptyState = tmp(tmp2[35]).EmptyState;
                intl2 = tmp(tmp2[14]).intl;
                intl3 = tmp(tmp2[14]).intl;
                tmp64 = channel(EmptyState, obj4);
                const tmp25Result4 = isActive(tmp2[34]);
                tmp25Result4.setInterstitial("EmptyState");
              } else {
                class Y {
                  constructor(arg0) {
                    const current = ref2.current;
                    if (current != null) {
                      current.onChatViewScrolled(arg0);
                    }
                  }
                }
              }
              result = tmp64;
            }
            items5[2] = result;
            cResult[35] = HACK_fixModalInteraction;
            cResult[36] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
            cResult[37] = channel;
            cResult[38] = channelId;
            cResult[39] = channelIsLoading;
            const tmp61Result = tmp61(tmp25Result, obj3);
            class Z {
              constructor() {
                const messages = MessageStore.getMessages(channelId);
                let tmp = 0 === messages.length;
                if (tmp) {
                  tmp = messages.loadingMore || !messages.ready;
                }
                const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
                return obj;
              }
            }
            cResult[40] = chatInputRef;
            cResult[41] = channelContentGate;
            cResult[42] = tmp5;
            cResult[43] = guildId;
            cResult[44] = tmp33;
            cResult[45] = isActive;
            cResult[46] = tmp27;
            cResult[47] = screenIndex;
            cResult[48] = secondaryTextFieldRef;
            cResult[49] = setNoExtractUI;
            cResult[50] = shouldRenderBegginingRow;
            cResult[51] = shouldRenderPlaceholder;
            cResult[52] = tmp6.chat;
            cResult[53] = tmp6.empty;
            cResult[54] = tmp6.messages;
            cResult[55] = tmp26;
            cResult[56] = tmp61Result;
          }
          let obj5 = { channelId, guildId };
          const tmp58 = channel(isActive(tmp2[38]), obj5);
          cResult[57] = channelId;
          cResult[58] = guildId;
          cResult[59] = tmp58;
          tmp56 = tmp58;
        }
        class Z {
          constructor() {
            const messages = MessageStore.getMessages(channelId);
            let tmp = 0 === messages.length;
            if (tmp) {
              tmp = messages.loadingMore || !messages.ready;
            }
            const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
            return obj;
          }
        }
        const items6 = [channelId, tmp27];
        cResult[16] = channelId;
        cResult[17] = tmp27;
        cResult[18] = Z;
        cResult[19] = items6;
        tmp29 = Z;
        tmp30 = items6;
      }
      let obj6 = { channel: tmp15, channelIsLoading: null == stateFromStores };
      cResult[11] = tmp15;
      cResult[12] = null == stateFromStores;
      cResult[13] = obj6;
      tmp21 = obj6;
    }
    let tmp17 = stateFromStores;
    if (null == stateFromStores) {
      class Y {
        constructor(arg0) {
          const current = ref2.current;
          if (current != null) {
            current.onChatViewScrolled(arg0);
          }
        }
      }
      let obj7 = { id: channelId, type: ChannelTypes.GUILD_TEXT, name: intl.string(tmp(tmp2[14]).t.ZTNur7) };
      intl = tmp(tmp2[14]).intl;
      tmp17 = secondaryTextFieldRef(obj7);
    }
    cResult[8] = channelId;
    cResult[9] = stateFromStores;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  }
  const items7 = [channelId, tmp4];
  cResult[2] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
  cResult[3] = channelId;
  cResult[4] = items7;
  tmp8 = items7;
}) : (function ChatView(alwaysRespectKeyboard) {
  let HACK_fixModalInteraction;
  let c16;
  let c17;
  let channel;
  let channelIsLoading;
  let chatInputRef;
  let guildId;
  let intl;
  let intl2;
  let isActive;
  let items10;
  let result;
  let screenIndex;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let shouldRender;
  let flag = alwaysRespectKeyboard.alwaysRespectKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const channelId = alwaysRespectKeyboard.channelId;
  ({ isActive: dependencyMap, chatInputRef } = alwaysRespectKeyboard);
  let flag2 = alwaysRespectKeyboard.disableGradient;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ guildId, HACK_fixModalInteraction: GatewayConnectionStore, screenIndex: createChannelRecord, secondaryTextFieldRef: ChannelStore, setNoExtractUI: MessageStore } = alwaysRespectKeyboard);
  channel = undefined;
  let closure_11;
  let ref;
  let visibleMessagesWindowHandler;
  let isResourceChannel;
  c16 = undefined;
  c17 = undefined;
  let onScroll;
  let onPressKey;
  let scrollToNewMessages;
  let onJumpToPresent;
  let tmp = ref();
  let closure_8 = tmp;
  let obj = chatInputRef;
  let items = [channelId, flag];
  const effect = chatInputRef.useEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    }
  }, items);
  const tmp3 = flag;
  let obj2 = flag(504);
  let items1 = [ChannelStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let items2 = [stateFromStores, channelId];
  const memo = chatInputRef.useMemo(() => {
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
  const tmp7 = flag(10889);
  const useChannelContentGate = tmp7.useChannelContentGate;
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const channelContentGate = useChannelContentGate(guildId, stateFromStores);
  closure_11 = obj.useRef(channelId);
  obj.useRef(null);
  ref = obj.useRef(null);
  visibleMessagesWindowHandler = channelId(5599)(() => {
    const tmp = new channelId(dependencyMap[16])();
    return tmp;
  });
  let tmp11 = channelId(10907)(channelId);
  isResourceChannel = tmp11;
  const items3 = [MessageStore];
  const items4 = [channelId, tmp11];
  const tmp3Result = tmp3(504);
  const stateFromStoresObject = tmp3Result.useStateFromStoresObject(items3, () => {
    const messages = MessageStore.getMessages(channelId);
    let tmp = 0 === messages.length;
    if (tmp) {
      tmp = messages.loadingMore || !messages.ready;
    }
    const obj = { shouldRenderPlaceholder: tmp, shouldRenderBegginingRow: tmp3 };
    return obj;
  }, items4);
  ({ shouldRenderPlaceholder: c16, shouldRenderBegginingRow: c17 } = stateFromStoresObject);
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
    const obj = flag(dependencyMap[19]);
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
    closure_11.current = channel.id;
  }, items9);
  const effect3 = obj.useEffect(() => () => {
    const obj = flag(dependencyMap[22]);
    const result = obj.clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj3 = { profile: tmp3(13052).Profiles.ChatView, children: items10 };
  const tmp18 = channelId(13052);
  items10 = [stateFromStores(channelId(13718), { channelId, guildId }), , ];
  let tmp19Result = null;
  const tmp17 = channel;
  if (!flag2) {
    tmp19Result = tmp19(tmp10(10625), { absolute: true });
  }
  items10[1] = tmp19Result;
  if (null != channelContentGate) {
    const tmp3Result2 = tmp3(10889);
    result = tmp3Result2.renderChannelContentGate(channelContentGate);
    const kind = channelContentGate.kind;
    const tmp10Result = channelId(9);
    tmp10Result.setInterstitial(kind);
  } else {
    let tmp19Result2;
    function renderMessagesWrapper() {
      let items;
      let items1;
      let items2;
      let obj2;
      const obj = { style: closure_8.messages, channelId, stickyHeader: React4(ChatViewStickyHeaderDefault, obj2), children: items1 };
      obj2 = { channel, ref, scrollToNewMessages };
      const obj3 = { alwaysRespectKeyboard: flag, channel, isActive: dependencyMap, screenIndex: createChannelRecord, chatInputRef, HACK_fixModalInteraction: GatewayConnectionStore, isResourceChannel, onPressKey, onScroll, ref, style: closure_8.chat, visibleMessagesWindowHandler, children: items };
      items = [, ];
      const obj4 = { ref: chatInputRef, channel, isResourceChannel, screenIndex: createChannelRecord, secondaryTextFieldRef: ChannelStore, setNoExtractUI: MessageStore, onJumpToPresent };
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
        tmp7Result = tmp7(tmp3(13558), obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c16) {
        const obj8 = { screenIndex: createChannelRecord };
        tmp7Result3 = tmp7(tmp3(13559), obj8);
      }
      items1[2] = tmp7Result3;
      let tmp7Result4 = null;
      const tmp14Result = PlatformUtils;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex: createChannelRecord, onJumpToPresent: tmp12 };
        tmp7Result4 = tmp7(tmp3(13155), obj9);
      }
      const obj10 = { children: items2 };
      items1[3] = tmp7Result4;
      items2 = [authStore(tmp5, obj), React4(ChannelSafeAreaBottomDefault, { channelId }), React4(VoiceMessageOverlayDefault, { channelId })];
      return authStore(tmp2, obj10);
    }
    if (channelIsLoading) {
      if (!GatewayConnectionStore.isConnected()) {
        result = renderMessagesWrapper();
      }
    }
    if (channelIsLoading) {
      let obj4 = { style: tmp.empty, title: intl.string(tmp3(1128).t.ai6Lbr), body: intl2.string(tmp3(1128).t["LTr+x9"]) };
      const EmptyState = tmp3(1202).EmptyState;
      intl = tmp3(1128).intl;
      intl2 = tmp3(1128).intl;
      tmp19Result2 = tmp19(EmptyState, obj4);
      const tmp10Result4 = channelId(9);
      tmp10Result4.setInterstitial("EmptyState");
    } else if (channel.isDirectory()) {
      let obj5 = { channel, guildId };
      tmp19Result2 = tmp19(tmp10(13569), obj5);
      const tmp10Result5 = channelId(9);
      tmp10Result5.setInterstitial("GuildDirectory");
    } else if (channel.isForumLikeChannel()) {
      let obj6 = { channel };
      tmp19Result2 = tmp19(tmp10(13704), obj6);
      const tmp10Result6 = channelId(9);
      tmp10Result6.setInterstitial("ForumChannel");
    } else {
      tmp19Result2 = renderMessagesWrapper();
    }
    result = tmp19Result2;
  }
  items10[2] = result;
  return tmp17(tmp18, obj3);
}));
let result = size.fileFinishedImporting("modules/chat/native/ChatView.tsx");

export default memoResult;

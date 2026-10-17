// Module ID: 10671
// Function ID: 10672
// Name: ChatView
// Dependencies: [19, 17, 6013, 2072, 2068, 5532, 1087, 21, 5191, 587, 558, 576, 5081, 504, 1128, 6180, 6200, 10672, 6447, 10673, 7463, 7289, 9973, 7077, 10675, 10689, 10791, 12806, 13148, 1384, 13321, 13322, 12908, 13326, 13329, 9, 9760, 13332, 1202, 11560, 13334, 13335, 13470, 13484, 10529, 12805, 2]

// Module 10671 (ChatView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import ChatInputUtils from "ChatInputUtils" /* 5081 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7289 */;
import SummaryActionCreators from "SummaryActionCreators" /* 9973 */;
import ChatViewWrapperDefault from "ChatViewWrapper" /* 10675 */;
import ChatViewStickyHeaderDefault from "ChatViewStickyHeader" /* 10689 */;
import MessagesDefault from "Messages" /* 10791 */;
import ChatInputDefault from "ChatInput" /* 12806 */;
import ChatBeginningRowDefault from "ChatBeginningRow" /* 13148 */;
import ChannelSafeAreaBottomDefault from "ChannelSafeAreaBottom" /* 13326 */;
import VoiceMessageOverlayDefault from "VoiceMessageOverlay" /* 13329 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6013 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import MessageStore from "MessageStore" /* 5532 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
const createChannelRecord = ChannelRecord.createChannelRecord;
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
  let items6;
  let ref2;
  let tmp21;
  let tmp31;
  let tmp32;
  let tmp58;
  let tmp7;
  let tmp = channelId;
  let tmp2 = chatInputRef;
  let obj = channelId(chatInputRef[11]);
  const cResult = obj.c(64);
  ({ alwaysRespectKeyboard, channelId } = isActive);
  isActive = isActive.isActive;
  chatInputRef = isActive.chatInputRef;
  ({ disableGradient, guildId, HACK_fixModalInteraction } = isActive);
  const screenIndex = isActive.screenIndex;
  const secondaryTextFieldRef = isActive.secondaryTextFieldRef;
  const setNoExtractUI = isActive.setNoExtractUI;
  alwaysRespectKeyboard = tmp4;
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
        let closure_10 = obj2.useRef(channelId);
        const ref = obj2.useRef(null);
        ref2 = obj2.useRef(null);
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
          cResult[14] = U;
          tmp26 = U;
        } else {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
        }
        const tmp28 = isActive(tmp2[18])(tmp26);
        const visibleMessagesWindowHandler = tmp28;
        const tmp29 = isActive(tmp2[19])(channelId);
        const isResourceChannel = tmp29;
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
          let items1 = [alwaysRespectKeyboard];
          cResult[15] = items1;
          tmp30 = items1;
        } else {
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[17])();
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
          let tmp54;
          let tmp53;
          class U {
            constructor() {
              const tmp = new isActive(chatInputRef[17])();
              return tmp;
            }
          }
          const tmpResult7 = tmp(tmp2[13]);
          const stateFromStoresObject = tmpResult7.useStateFromStoresObject(tmp30, tmp31, tmp32);
          const shouldRenderPlaceholder = stateFromStoresObject.shouldRenderPlaceholder;
          const shouldRenderBegginingRow = stateFromStoresObject.shouldRenderBegginingRow;
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[20] = tmp35;
            tmp34 = tmp35;
          } else {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const onScroll = tmp34;
          if (cResult[21] !== chatInputRef) {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[21] = chatInputRef;
            cResult[22] = tmp37;
          } else {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const onPressKey = tmp36;
          const _Symbol5 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[23] = tmp39;
            tmp38 = tmp39;
          } else {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const scrollToNewMessages = tmp38;
          const _Symbol6 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            cResult[24] = tmp41;
            tmp40 = tmp41;
          } else {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
          }
          const onJumpToPresent = tmp40;
          const _Symbol7 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            let items2 = [];
            cResult[25] = tmp44;
            cResult[26] = items2;
            tmp43 = items2;
            tmp42 = tmp44;
          } else {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            tmp43 = cResult[26];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp42, tmp43);
          if (cResult[27] !== channelId) {
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
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
            class U {
              constructor() {
                const tmp = new isActive(chatInputRef[17])();
                return tmp;
              }
            }
            tmp47 = cResult[29];
          }
          const effect1 = obj2.useEffect(tmp46, tmp47);
          if (cResult[30] !== channel.id) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
              }
            }
            const items4 = [channel.id];
            cResult[30] = channel.id;
            cResult[31] = Ie;
            cResult[32] = items4;
            tmp51 = items4;
            tmp50 = Ie;
          } else {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
              }
            }
            tmp51 = cResult[32];
          }
          const effect2 = obj2.useEffect(tmp50, tmp51);
          const _Symbol8 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
              }
            }
            const items5 = [];
            cResult[33] = tmp55;
            cResult[34] = items5;
            tmp54 = items5;
            tmp53 = tmp55;
          } else {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
              }
            }
            tmp54 = cResult[34];
          }
          const effect3 = obj2.useEffect(tmp53, tmp54);
          if (cResult[35] === HACK_fixModalInteraction) {
            class Ie {
              constructor() {
                closure_10.current = channel.id;
              }
            }
          }
          if (cResult[59] === channelId) {
            let tmp61;
            let tmp65Result;
            class Ie {
              constructor() {
                closure_10.current = channel.id;
              }
            }
            if (cResult[62] !== tmp5) {
              let tmp62;
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                }
              }
              if (!tmp5) {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                  }
                }
                tmp62 = channel(isActive(tmp2[44]), { absolute: true });
              }
              cResult[62] = tmp5;
              cResult[63] = tmp62;
              tmp61 = tmp62;
            } else {
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                }
              }
            }
            let obj3 = { profile: tmp(tmp2[45]).Profiles.ChatView, children: items6 };
            items6 = [tmp58, tmp61, ];
            const tmp27Result = isActive(tmp2[45]);
            const tmp63 = closure_10;
            const tmpResult8 = tmp(tmp2[36]);
            if (tmpResult8.shouldNSFWGateGuild(guildId)) {
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                }
              }
              tmp65Result = channel(tmp27(tmp2[37]), {});
              const tmp27Result3 = isActive(tmp2[35]);
              tmp27Result3.setInterstitial("NsfwGateChat");
            } else {
              let tmp67;
              class Ie {
                constructor() {
                  closure_10.current = channel.id;
                }
              }
              if (channelIsLoading) {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                  }
                }
                if (!screenIndex.isConnected()) {
                  class Ie {
                    constructor() {
                      closure_10.current = channel.id;
                    }
                  }
                  tmp65Result = tmp65();
                }
              }
              if (channelIsLoading) {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                  }
                }
                let obj4 = { style: tmp6.empty, title: intl2.string(tmp(tmp2[14]).t.ai6Lbr), body: intl3.string(tmp(tmp2[14]).t["LTr+x9"]) };
                const EmptyState = tmp(tmp2[38]).EmptyState;
                intl2 = tmp(tmp2[14]).intl;
                intl3 = tmp(tmp2[14]).intl;
                tmp67 = channel(EmptyState, obj4);
                const tmp27Result4 = isActive(tmp2[35]);
                tmp27Result4.setInterstitial("EmptyState");
              } else {
                class Ie {
                  constructor() {
                    closure_10.current = channel.id;
                  }
                }
              }
              tmp65Result = tmp67;
            }
            items6[2] = tmp65Result;
            cResult[35] = HACK_fixModalInteraction;
            cResult[36] = undefined !== alwaysRespectKeyboard && alwaysRespectKeyboard;
            cResult[37] = channel;
            cResult[38] = channelId;
            cResult[39] = channelIsLoading;
            cResult[40] = chatInputRef;
            cResult[41] = tmp5;
            cResult[42] = guildId;
            cResult[43] = tmp36;
            cResult[44] = isActive;
            cResult[45] = tmp29;
            cResult[46] = isChannelContentGated;
            cResult[47] = screenIndex;
            cResult[48] = secondaryTextFieldRef;
            cResult[49] = setNoExtractUI;
            cResult[50] = shouldRenderBegginingRow;
            cResult[51] = shouldRenderPlaceholder;
            cResult[52] = getSpoilerGatingChannelId;
            cResult[53] = tmp25;
            cResult[54] = tmp6.chat;
            cResult[55] = tmp6.empty;
            cResult[56] = tmp6.messages;
            cResult[57] = tmp28;
            cResult[58] = tmp63(tmp27Result, obj3);
            const tmp63Result = tmp63(tmp27Result, obj3);
          }
          let obj5 = { channelId, guildId };
          const tmp60 = channel(isActive(tmp2[43]), obj5);
          cResult[59] = channelId;
          cResult[60] = guildId;
          cResult[61] = tmp60;
          tmp58 = tmp60;
        }
        const fn2 = function z() {
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
      class Ie {
        constructor() {
          closure_10.current = channel.id;
        }
      }
      let obj7 = { id: channelId, type: ChannelTypes.GUILD_TEXT, name: intl.string(tmp(tmp2[14]).t.ZTNur7) };
      intl = tmp(tmp2[14]).intl;
      tmp17 = secondaryTextFieldRef(obj7);
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
  let obj3 = flag(6180);
  const isChannelContentGated = obj3.useIsChannelContentGated(channel);
  let tmp8 = flag(6200);
  const useGetSpoilerGatingChannelId = tmp8.useGetSpoilerGatingChannelId;
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const getSpoilerGatingChannelId = useGetSpoilerGatingChannelId(stateFromStores);
  closure_11 = obj.useRef(channelId);
  obj.useRef(null);
  ref = obj.useRef(null);
  let tmp11 = channelId;
  visibleMessagesWindowHandler = channelId(6447)(() => {
    const tmp = new channelId(dependencyMap[17])();
    return tmp;
  });
  let tmp12 = channelId(10673)(channelId);
  isResourceChannel = tmp12;
  const items3 = [MessageStore];
  const items4 = [channelId, tmp12];
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
    const obj = flag(dependencyMap[20]);
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
    const obj = flag(dependencyMap[23]);
    const result = obj.clearOldestUnreadMessageId(ref.current);
  }, []);
  let obj4 = { profile: tmp3(12805).Profiles.ChatView, children: items10 };
  const tmp19 = channelId(12805);
  items10 = [stateFromStores(channelId(13484), { channelId, guildId }), , ];
  let tmp20Result = null;
  const tmp18 = channel;
  if (!flag2) {
    tmp20Result = tmp20(tmp11(10529), { absolute: true });
  }
  items10[1] = tmp20Result;
  const tmp3Result2 = tmp3(9760);
  if (tmp3Result2.shouldNSFWGateGuild(guildId)) {
    tmp20Result3 = tmp20(tmp11(13332), {});
    const tmp11Result = tmp11(9);
    tmp11Result.setInterstitial("NsfwGateChat");
  } else {
    let tmp20Result4;
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
        tmp7Result = tmp7(tmp3(13321), obj7);
      }
      items1[1] = tmp7Result;
      let tmp7Result3 = null;
      if (c16) {
        const obj8 = { screenIndex: createChannelRecord };
        tmp7Result3 = tmp7(tmp3(13322), obj8);
      }
      items1[2] = tmp7Result3;
      let tmp7Result4 = null;
      const tmp14Result = PlatformUtils;
      if (tmp14Result.isAndroid()) {
        const obj9 = { channelId, screenIndex: createChannelRecord, onJumpToPresent: tmp12 };
        tmp7Result4 = tmp7(tmp3(12908), obj9);
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
      let obj5 = { style: tmp.empty, title: intl.string(tmp3(1128).t.ai6Lbr), body: intl2.string(tmp3(1128).t["LTr+x9"]) };
      const EmptyState = tmp3(1202).EmptyState;
      intl = tmp3(1128).intl;
      intl2 = tmp3(1128).intl;
      tmp20Result4 = tmp20(EmptyState, obj5);
      const tmp11Result6 = tmp11(9);
      tmp11Result6.setInterstitial("EmptyState");
    } else if (isChannelContentGated) {
      let obj6 = { guildId, channelId };
      tmp20Result4 = tmp20(tmp11(11560), obj6);
      const tmp11Result7 = tmp11(9);
      tmp11Result7.setInterstitial("GuildNSFW");
    } else {
      if (null != getSpoilerGatingChannelId) {
        if (null != getSpoilerGatingChannelId) {
          let obj7 = { guildId, channelId: getSpoilerGatingChannelId };
          tmp20Result4 = tmp20(tmp11(13334), obj7, channelId);
          const tmp11Result8 = tmp11(9);
          tmp11Result8.setInterstitial("ChannelSpoiler");
        }
      }
      if (channel.isDirectory()) {
        let obj8 = { channel, guildId };
        tmp20Result4 = tmp20(tmp11(13335), obj8);
        const tmp11Result9 = tmp11(9);
        tmp11Result9.setInterstitial("GuildDirectory");
      } else if (channel.isForumLikeChannel()) {
        let obj9 = { channel };
        tmp20Result4 = tmp20(tmp11(13470), obj9);
        const tmp11Result10 = tmp11(9);
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

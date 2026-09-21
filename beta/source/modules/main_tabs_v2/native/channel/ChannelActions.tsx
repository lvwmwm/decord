// Module ID: 8124
// Function ID: 8125
// Name: ChannelActions
// Dependencies: [19, 17, 5726, 2049, 2045, 4777, 8125, 1078, 8126, 21, 4758, 558, 568, 8129, 580, 8131, 5321, 8133, 8134, 8151, 504, 7513, 8152, 8153, 7516, 5276, 13560, 4965, 1119, 13566, 7298, 12448, 8147, 1368, 4625, 12447, 12506, 11592, 1114, 4617, 11778, 5293, 11267, 13567, 13564, 4968, 13568, 13570, 2]

// Module 8124 (ChannelActions)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4965 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5321 */;
import PhoneCallIcon from "PhoneCallIcon" /* 8129 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 8131 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 8147 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 11267 */;
import useSearchContext from "useSearchContext" /* 12447 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12448 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12506 */;
import IconActionButtonDefault from "IconActionButton" /* 13564 */;
import ConversationCoachmark from "ConversationCoachmark" /* 13567 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 13570 */;
import noop from "module_19" /* 19 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5726 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

require = fn;
const View = fn(17).View;
const THREADED_CHANNEL_TYPES = fn(2049).THREADED_CHANNEL_TYPES;
let closure_8 = fn(8125).setIsChannelDetailsSearchActive;
const Constants = fn(1078);
({ ChannelTypes: closure_9, ChannelTypesSets: c10, ComponentActions: closure_11 } = Constants);
let closure_12 = fn(8126).SearchEntrypointAnalyticsLocations;
const jsx = fn(21).jsx;
const createElement = fn(19).createElement;
const createStyles = fn(4758);
let closure_15 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
    const tmp7 = jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(PhoneCallIcon.PhoneCallIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 }));
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
    const tmp7 = jsx(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(PhoneHangUpIcon.PhoneHangUpIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 }));
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
    const tmp7 = jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 }));
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" });
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(VoiceNormalIcon.VoiceNormalIcon, { size: "sm" }));
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(items1[12]).c(23);
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  const tmp4 = closure_15();
  screenIndex(items1[17])(channel);
  let obj = channel(items1[12]);
  const canSearchForumPosts = channel(items1[18]).useCanSearchForumPosts(channel);
  let tmp8 = screenIndex(items1[19])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    if (cResult[2] === channel.id) {
      let tmp11 = cResult[3];
    }
    items1 = [];
    const stateFromStores = tmp(tmp2[20]).useStateFromStores(first, tmp11);
    const tmpResult = tmp(tmp2[20]);
    const _Symbol = Symbol;
    const canJoinThreadVoice = tmp(tmp2[21]).useCanJoinThreadVoice(channel);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VoiceStateStore];
      cResult[4] = items2;
      let tmp14 = items2;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== channel.id) {
      class F {
        constructor() {
          return closure_7.isInChannel(channel.id);
        }
      }
      cResult[5] = channel.id;
      cResult[6] = F;
      const tmp16 = F;
    } else {
      class F {
        constructor() {
          return closure_7.isInChannel(channel.id);
        }
      }
    }
    const tmpResult8 = tmp(tmp2[21]);
    const stateFromStores1 = tmp(tmp2[20]).useStateFromStores(tmp14, tmp16);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_7.isInChannel(channel.id);
        }
      }
      const items3 = [VoiceStateStore];
      cResult[7] = items3;
      const tmp18 = items3;
    } else {
      class F {
        constructor() {
          return closure_7.isInChannel(channel.id);
        }
      }
    }
    if (cResult[8] !== channel.id) {
      class H {
        constructor() {
          return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      cResult[8] = channel.id;
      cResult[9] = H;
      const tmp19 = H;
    } else {
      class H {
        constructor() {
          return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
        }
      }
    }
    const tmpResult9 = tmp(tmp2[20]);
    const stateFromStores2 = tmp(tmp2[20]).useStateFromStores(tmp18, tmp19);
    tmp5(tmp2[22])(channel);
    const tmpResult10 = tmp(tmp2[20]);
    const conversationsHeaderButton = tmp(tmp2[23]).useConversationsHeaderButton(channel);
    const tmpResult11 = tmp(tmp2[23]);
    const isGameInvitePostVoiceEnabled = tmp(tmp2[24]).useIsGameInvitePostVoiceEnabled(channel);
    const tmpResult12 = tmp(tmp2[24]);
    const isGameInvitesPost = tmp(tmp2[24]).useIsGameInvitesPost(channel);
    const tmpResult13 = tmp(tmp2[24]);
    if (tmpResult14.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
      class H {
        constructor() {
          return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      return tmp40;
    } else {
      class H {
        constructor() {
          return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      if (constants.GUILD_DIRECTORY === channel.type) {
        class H {
          constructor() {
            return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        tmp29[0] = tmp5(tmp2[29]);
        tmp29[1] = tmp(tmp2[30]).MagnifyingGlassIcon;
        tmp29[2] = function onPress() {
          GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
        };
        const intl2 = tmp(tmp2[28]).intl;
        tmp29[3] = intl2.string(tmp(tmp2[28]).t["5h0QOP"]);
        items1.push(tmp29);
      } else {
        class H {
          constructor() {
            return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        if (canSearchForumPosts) {
          class H {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          tmp27[0] = tmp5(tmp2[29]);
          tmp27[1] = tmp(tmp2[30]).MagnifyingGlassIcon;
          tmp27[2] = function onPress() {
            const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
          };
          const intl = tmp(tmp2[28]).intl;
          tmp27[3] = intl.string(tmp(tmp2[28]).t["5h0QOP"]);
          items1.push(tmp27);
        }
      }
      if (tmp8) {
        class H {
          constructor() {
            return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
          }
        }
      }
      if (!tmp8) {
        class H {
          constructor() {
            return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        const hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
        let tmp32 = !hasItem;
        if (!hasItem) {
          class H {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (tmp32) {
          class H {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
          tmp32 = !GUILD_THREADS_ONLY.has(channel.type);
        }
        if (hasItem) {
          class H {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (hasItem) {
          class H {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (hasItem) {
          class H {
            constructor() {
              return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        tmp8 = !hasItem;
      }
      if (!tmp8) {
        class H {
          constructor() {
            return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        tmp33[0] = tmp5(tmp2[40]);
        tmp33[1] = tmp(tmp2[41]).ThreadIcon;
        tmp33[2] = function onPress() {
          return showThreadBrowserModalDefault(channel);
        };
        const intl3 = tmp(tmp2[28]).intl;
        tmp33[3] = intl3.string(tmp(tmp2[28]).t.B2panI);
        items1.unshift(tmp33);
      }
      const mapped = items1.map((accessibilityLabel, index) => {
        closure_0 = accessibilityLabel;
        if (accessibilityLabel === conversationsHeaderButton) {
          const obj2 = {
            isLast: tmp,
            children(arg0) {
                closure_0 = arg0;
                const obj = { noMargin: true };
                const merged = Object.assign(closure_0);
                obj.onPress = function onPress(arg0) {
                  closure_0();
                  const onPress = closure_0.onPress;
                  if (onPress != null) {
                    onPress(arg0);
                  }
                };
                return closure_1_13(screenIndex(items1[44]), obj);
              }
          };
          let tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
            isLast: tmp,
            children(arg0) {
                closure_0 = arg0;
                const obj = { noMargin: true };
                const merged = Object.assign(closure_0);
                obj.onPress = function onPress(arg0) {
                  closure_0();
                  const onPress = closure_0.onPress;
                  if (onPress != null) {
                    onPress(arg0);
                  }
                };
                return closure_1_13(screenIndex(items1[44]), obj);
              }
          }, accessibilityLabel.accessibilityLabel);
        } else {
          let obj = { noMargin: tmp };
          let merged = Object.assign(accessibilityLabel);
          obj.key = accessibilityLabel.accessibilityLabel;
          tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
        }
        return tmp9;
      });
      if (cResult[20] === tmp4.actionWrapper) {
        class H {
          constructor() {
            return Object.keys(closure_7.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        return tmp36;
      }
      let obj3 = { style: tmp4.actionWrapper, children: mapped };
      const tmp39 = <conversationsHeaderButton style={tmp4.actionWrapper}>{mapped}</conversationsHeaderButton>;
      cResult[20] = tmp4.actionWrapper;
      cResult[21] = mapped;
      cResult[22] = tmp39;
      tmp36 = tmp39;
    }
    tmpResult14 = tmp(tmp2[25]);
  }
  const fn = function c() {
    return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp11 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  const tmp = closure_15();
  const tmp4 = screenIndex(items1[17])(channel);
  const canSearchForumPosts = channel(items1[18]).useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[19])();
  let obj = channel(items1[18]);
  const items = [ActiveThreadsStore];
  items1 = [];
  const stateFromStores = channel(items1[20]).useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[20]);
  const canJoinThreadVoice = channel(items1[21]).useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[21]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = channel(items1[20]).useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj4 = channel(items1[20]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = channel(items1[20]).useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[22])(channel);
  let obj5 = channel(items1[20]);
  const conversationsHeaderButton = channel(items1[23]).useConversationsHeaderButton(channel);
  let obj6 = channel(items1[23]);
  const isGameInvitePostVoiceEnabled = channel(items1[24]).useIsGameInvitePostVoiceEnabled(channel);
  const obj7 = channel(items1[24]);
  const isGameInvitesPost = channel(items1[24]).useIsGameInvitesPost(channel);
  const obj8 = channel(items1[24]);
  if (obj9.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    const obj10 = { channel };
    return jsx(tmp2(tmp3[26]), { channel });
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          let tmp19 = stateFromStores1;
          if (!stateFromStores1) {
            tmp19 = tmp12;
          }
          let obj11 = { source: null, IconComponent: tmp19 ? closure_18 : closure_19, buttonText: null, buttonTextColor: "text-feedback-positive", onPress: null, accessibilityLabel: null };
          let StringResult;
          if (tmp19) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          obj11.buttonText = StringResult;
          if (stateFromStores1) {
            fn = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj11.onPress = fn;
          const intl2 = tmp5(tmp3[28]).intl;
          const string2 = intl2.string;
          let t1 = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            t1 = t1["4ry6yi"];
            let string2Result = string2(t1);
          } else {
            string2Result = string2(t1.My50nf);
          }
          obj11.accessibilityLabel = string2Result;
          obj11 = items1.push(obj11);
        }
      } else {
        if (tmp16) {
          const obj12 = { source: null, IconComponent: stateFromStores1 ? closure_17 : closure_16, onPress: null, accessibilityLabel: null };
          let fn2 = fn;
          if (!stateFromStores1) {
            fn2 = () => PrivateChannelCallUtils.openChannelCallModal(channel);
          }
          obj12.onPress = fn2;
          const intl = tmp5(tmp3[28]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            let stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          obj12.accessibilityLabel = stringResult;
          items1.push(obj12);
        }
        tmp16 = channel.isVocalThread() && tmp12;
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      const obj13 = {
        source: tmp2(tmp3[29]),
        IconComponent: tmp5(tmp3[30]).MagnifyingGlassIcon,
        onPress() {
              GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
            },
        accessibilityLabel: null
      };
      const intl5 = tmp5(tmp3[28]).intl;
      obj13.accessibilityLabel = intl5.string(tmp5(tmp3[28]).t["5h0QOP"]);
      items1.push(obj13);
    } else {
      if (tmp24.GUILD_FORUM !== type) {
        if (tmp24.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const obj14 = {
            source: tmp2(tmp3[29]),
            IconComponent: tmp5(tmp3[30]).MagnifyingGlassIcon,
            onPress() {
                      closure_8(channel.id, true, "initial");
                      if (obj2.isIOS()) {
                        const chatInputRef = tmp2(4625).getChatInputRef(obj.id, screenIndex);
                        if (chatInputRef != null) {
                          chatInputRef.blur();
                        }
                        const tmp2Result = tmp2(4625);
                      }
                      obj2 = PlatformUtils;
                      const guildId = obj.getGuildId();
                      const isThreadResult = channel.isThread();
                      const channelDetailsSearchContext = useSearchContext.getChannelDetailsSearchContext(obj.id, guildId, isThreadResult);
                      const tmp2Result4 = useSearchContext;
                      search_tracking_TrackingDefault.trackSearchOpened({ searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER });
                      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER };
                      if (tmp2Result5.isSwipeToMemberListEnabled()) {
                        const ComponentDispatch = tmp2(1114).ComponentDispatch;
                        const obj4 = { source: "channel-header-search", channelId: obj.id, screenIndex };
                        ComponentDispatch.dispatch(constants3.SHOW_CHANNEL_DETAILS, obj4);
                      } else {
                        const rootNavigationRef = tmp2(4617).getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          if (rootNavigationRef.isReady()) {
                            const obj5 = { channelId: obj.id, search: true, source: "channel-header-search" };
                            rootNavigationRef.navigate("sidebar", obj5);
                          }
                        }
                      }
                    },
            accessibilityLabel: null
          };
          const intl3 = tmp5(tmp3[28]).intl;
          obj14.accessibilityLabel = intl3.string(tmp5(tmp3[28]).t["5h0QOP"]);
          items1.push(obj14);
        }
      }
      if (canSearchForumPosts) {
        const obj15 = {
          source: tmp2(tmp3[29]),
          IconComponent: tmp5(tmp3[30]).MagnifyingGlassIcon,
          onPress() {
                  const result = ForumActionCreatorsDefault.updateForumSearchQuery(channel.id, "");
                },
          accessibilityLabel: null
        };
        const intl4 = tmp5(tmp3[28]).intl;
        obj15.accessibilityLabel = intl4.string(tmp5(tmp3[28]).t["5h0QOP"]);
        items1.push(obj15);
      }
    }
    if (tmp7) {
      tmp7 = 0 !== items1.length;
    }
    if (!tmp7) {
      let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
      let tmp31 = !hasItem;
      if (!hasItem) {
        tmp31 = stateFromStores;
      }
      if (tmp31) {
        const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
        tmp31 = !GUILD_THREADS_ONLY.has(channel.type);
      }
      if (hasItem) {
        hasItem = !tmp4;
      }
      if (hasItem) {
        hasItem = !channel.isForumLikeChannel();
      }
      if (hasItem) {
        hasItem = tmp31;
      }
      tmp7 = !hasItem;
    }
    if (!tmp7) {
      const obj16 = {
        source: tmp2(tmp3[40]),
        IconComponent: tmp5(tmp3[41]).ThreadIcon,
        onPress() {
              return showThreadBrowserModalDefault(channel);
            },
        accessibilityLabel: null
      };
      const intl6 = tmp5(tmp3[28]).intl;
      obj16.accessibilityLabel = intl6.string(tmp5(tmp3[28]).t.B2panI);
      items1.unshift(obj16);
    }
    const obj17 = {
      style: tmp.actionWrapper,
      children: items1.map((accessibilityLabel, index) => {
          closure_0 = accessibilityLabel;
          if (accessibilityLabel === conversationsHeaderButton) {
            const obj2 = {
              isLast: tmp,
              children(arg0) {
                  closure_0 = arg0;
                  const obj = { noMargin: true };
                  const merged = Object.assign(closure_0);
                  obj.onPress = function onPress(arg0) {
                    closure_0();
                    const onPress = closure_0.onPress;
                    if (onPress != null) {
                      onPress(arg0);
                    }
                  };
                  return closure_1_13(screenIndex(items1[44]), obj);
                }
            };
            let tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
              isLast: tmp,
              children(arg0) {
                  closure_0 = arg0;
                  const obj = { noMargin: true };
                  const merged = Object.assign(closure_0);
                  obj.onPress = function onPress(arg0) {
                    closure_0();
                    const onPress = closure_0.onPress;
                    if (onPress != null) {
                      onPress(arg0);
                    }
                  };
                  return closure_1_13(screenIndex(items1[44]), obj);
                }
            }, accessibilityLabel.accessibilityLabel);
          } else {
            let obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj.key = accessibilityLabel.accessibilityLabel;
            tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
          }
          return tmp9;
        })
    };
    return <conversationsHeaderButton style={tmp.actionWrapper}>{items1.map((accessibilityLabel, index) => {
      closure_0 = accessibilityLabel;
      if (accessibilityLabel === conversationsHeaderButton) {
        const obj2 = {
          isLast: tmp,
          children(arg0) {
              closure_0 = arg0;
              const obj = { noMargin: true };
              const merged = Object.assign(closure_0);
              obj.onPress = function onPress(arg0) {
                closure_0();
                const onPress = closure_0.onPress;
                if (onPress != null) {
                  onPress(arg0);
                }
              };
              return closure_1_13(screenIndex(items1[44]), obj);
            }
        };
        let tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
          isLast: tmp,
          children(arg0) {
              closure_0 = arg0;
              const obj = { noMargin: true };
              const merged = Object.assign(closure_0);
              obj.onPress = function onPress(arg0) {
                closure_0();
                const onPress = closure_0.onPress;
                if (onPress != null) {
                  onPress(arg0);
                }
              };
              return closure_1_13(screenIndex(items1[44]), obj);
            }
        }, accessibilityLabel.accessibilityLabel);
      } else {
        let obj = { noMargin: tmp };
        let merged = Object.assign(accessibilityLabel);
        obj.key = accessibilityLabel.accessibilityLabel;
        tmp9 = createElement(IconActionButtonDefault, { noMargin: tmp });
      }
      return tmp9;
    })}</conversationsHeaderButton>;
  }
  obj9 = channel(items1[25]);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(6);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  channelId(4968);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (!tmp9) {
      tmp10 = null;
      if (!channelId.showCreateThread) {
        if (cResult[3] === stateFromStores) {
        }
        const obj2 = { channel: stateFromStores, screenIndex };
        const tmp14 = <closure_20 channel={stateFromStores} screenIndex={screenIndex} />;
        cResult[3] = stateFromStores;
        cResult[4] = screenIndex;
        cResult[5] = tmp14;
      }
    }
  }
  return tmp10;
}) : ((channelId) => {
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(4968);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        const obj2 = { channel: stateFromStores, screenIndex };
        tmp4 = <closure_20 channel={stateFromStores} screenIndex={screenIndex} />;
      }
    }
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let ForumChannelCloseSearchButton = channelId;
  const cResult = channelId(568).c(13);
  channelId = channelId.channelId;
  ({ screenIndex, containerStyle, showCreateThread } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      const channel = ChannelStore.getChannel(channelId);
      let flag;
      if (channel != null) {
        flag = channel.isMultiUserDM();
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = { isMultiUserDM: flag, isDM: null };
      const channel1 = ChannelStore.getChannel(channelId);
      let flag2;
      if (channel1 != null) {
        flag2 = channel1.isDM();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj2.isDM = flag2;
      return obj2;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
  }
  const result = ForumChannelCloseSearchButton(504);
  const stateFromStoresObject = result.useStateFromStoresObject(first, tmp4);
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  const result1 = ForumChannelCloseSearchButton(8134);
  const hasForumSearchQuery = result1.useHasForumSearchQuery(channelId);
  if (cResult[3] === channelId) {
    if (cResult[4] === hasForumSearchQuery) {
      if (cResult[5] === isDM) {
        if (cResult[6] === isMultiUserDM) {
          if (cResult[7] === screenIndex) {
            if (cResult[8] === showCreateThread) {
              if (cResult[10] === containerStyle) {
                if (cResult[11] === tmp7) {
                  let tmp14 = cResult[12];
                }
                return tmp14;
              }
              const obj3 = { style: containerStyle, children: cResult[9] };
              const tmp17 = <View style={containerStyle}>{cResult[9]}</View>;
              cResult[10] = containerStyle;
              cResult[11] = cResult[9];
              cResult[12] = tmp17;
              tmp14 = tmp17;
            }
          }
        }
      }
    }
  }
  if (hasForumSearchQuery) {
    ForumChannelCloseSearchButton = ForumChannelCloseSearchButton(13568).ForumChannelCloseSearchButton;
    const obj = { channelId };
    let tmp10 = <ForumChannelCloseSearchButton channelId={channelId} />;
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj4 = { channelId, screenIndex, showCreateThread };
        tmp10 = <closure_21 channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />;
      }
    }
    const obj5 = { channelId, screenIndex };
    tmp10 = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
  }
  cResult[3] = channelId;
  cResult[4] = hasForumSearchQuery;
  cResult[5] = isDM;
  cResult[6] = isMultiUserDM;
  cResult[7] = screenIndex;
  cResult[8] = showCreateThread;
  cResult[9] = tmp10;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  const items = [ChannelStore];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isMultiUserDM();
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { isMultiUserDM: flag, isDM: null };
    const channel1 = ChannelStore.getChannel(channelId);
    let flag2;
    if (channel1 != null) {
      flag2 = channel1.isDM();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj2.isDM = flag2;
    return obj2;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  const obj = channelId(504);
  const tmp = channelId;
  const obj3 = { style: containerStyle, children: null };
  if (obj2.useHasForumSearchQuery(channelId)) {
    const obj4 = { channelId };
    let tmp4Result = tmp4(tmp(13568).ForumChannelCloseSearchButton, obj4);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj5 = { channelId, screenIndex, showCreateThread };
        tmp4Result = tmp4(closure_21, obj5);
      }
    }
    const obj6 = { channelId, screenIndex };
    tmp4Result = tmp4(PrivateChannelButtonsDefault, obj6);
  }
  obj3.children = tmp4Result;
  return <View style={containerStyle}>{null}</View>;
});

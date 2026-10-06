// Module ID: 7304
// Function ID: 7305
// Name: ChannelActions
// Dependencies: [19, 17, 5820, 2055, 2051, 4856, 7305, 1086, 7306, 21, 4837, 558, 576, 7309, 588, 7311, 5416, 7313, 7314, 7332, 504, 6688, 7333, 7334, 6691, 5371, 12828, 5044, 1127, 12834, 6473, 11676, 7328, 1370, 4703, 11675, 11734, 10872, 1122, 4695, 11021, 5388, 10465, 12835, 12832, 5047, 12836, 12838, 2]

// Module 7304 (ChannelActions)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react3 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import ChatInputUtils from "ChatInputUtils" /* 4703 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5044 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7305 */;
import TrackingConstants from "TrackingConstants" /* 7306 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7328 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10465 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 10872 */;
import useSearchContext from "useSearchContext" /* 11675 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11676 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11734 */;
import IconActionButtonDefault from "IconActionButton" /* 12832 */;
import ConversationCoachmark from "ConversationCoachmark" /* 12835 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 12838 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5820 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import VoiceStateStore from "VoiceStateStore" /* 4856 */;
import Constants from "Constants" /* 1086 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react = react2;
let channelId;

let c10;
let c9;
let tmp;
let unpackModuleId;
const VoiceNormalIcon2 = tmp(5416);
const PhoneCallIcon2 = tmp(7309);
const PhoneHangUpIcon2 = tmp(7311);
const View = react_native.View;
const THREADED_CHANNEL_TYPES = ChannelRecord.THREADED_CHANNEL_TYPES;
let closure_8 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ ChannelTypes: c9, ChannelTypesSets: c10, ComponentActions: unpackModuleId } = Constants);
let closure_12 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const jsx = Fragment.jsx;
const createElement = react2.createElement;
let closure_15 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
    const tmp7 = <PhoneCallIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
  return <PhoneCallIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
    const tmp7 = <PhoneHangUpIcon size="sm" color={nativeDefault.unsafe_rawColors.RED_400} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
  return <PhoneHangUpIcon size="sm" color={nativeDefault.unsafe_rawColors.RED_400} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
    const tmp7 = <VoiceNormalIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  return <VoiceNormalIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" }));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let items1;
  let tmp36;
  let tmp = channel;
  const tmp2 = items1;
  let obj = channel(items1[12]);
  const cResult = obj.c(23);
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  const tmp4 = closure_15();
  const tmp5 = screenIndex;
  screenIndex(items1[17])(channel);
  let obj2 = channel(items1[18]);
  const canSearchForumPosts = obj2.useCanSearchForumPosts(channel);
  let tmp8 = screenIndex(items1[19])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveThreadsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp11;
    let tmp14;
    let tmp16;
    let tmp18;
    let tmp19;
    if (cResult[2] === channel.id) {
      tmp11 = cResult[3];
    }
    items1 = [];
    const tmpResult = tmp(tmp2[20]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
    const _Symbol = Symbol;
    const tmpResult8 = tmp(tmp2[21]);
    const canJoinThreadVoice = tmpResult8.useCanJoinThreadVoice(channel);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VoiceStateStore];
      cResult[4] = items2;
      tmp14 = items2;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== channel.id) {
      class F {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      cResult[5] = channel.id;
      cResult[6] = F;
      tmp16 = F;
    } else {
      class F {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    const tmpResult9 = tmp(tmp2[20]);
    const stateFromStores1 = tmpResult9.useStateFromStores(tmp14, tmp16);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      const items3 = [VoiceStateStore];
      cResult[7] = items3;
      tmp18 = items3;
    } else {
      class F {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    if (cResult[8] !== channel.id) {
      class H {
        constructor() {
          return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      cResult[8] = channel.id;
      cResult[9] = H;
      tmp19 = H;
    } else {
      class H {
        constructor() {
          return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
        }
      }
    }
    const tmpResult10 = tmp(tmp2[20]);
    const stateFromStores2 = tmpResult10.useStateFromStores(tmp18, tmp19);
    tmp5(tmp2[22])(channel);
    const tmpResult11 = tmp(tmp2[23]);
    const conversationsHeaderButton = tmpResult11.useConversationsHeaderButton(channel);
    const tmpResult12 = tmp(tmp2[24]);
    const isGameInvitePostVoiceEnabled = tmpResult12.useIsGameInvitePostVoiceEnabled(channel);
    const tmpResult13 = tmp(tmp2[24]);
    const isGameInvitesPost = tmpResult13.useIsGameInvitesPost(channel);
    const tmpResult14 = tmp(tmp2[25]);
    if (tmpResult14.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
      class H {
        constructor() {
          return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      return tmp40;
    } else {
      class H {
        constructor() {
          return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
        }
      }
      if (constants.GUILD_DIRECTORY === channel.type) {
        class H {
          constructor() {
            return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        const push2 = items1.push;
        tmp29[0] = tmp5(tmp2[29]);
        tmp29[1] = tmp(tmp2[30]).MagnifyingGlassIcon;
        tmp29[2] = function onPress() {
          const obj = GuildDirectorySearchModalActionCreatorsDefault;
          const obj2 = { channel };
          obj.open(obj2);
        };
        const intl2 = tmp(tmp2[28]).intl;
        tmp29[3] = intl2.string(tmp(tmp2[28]).t["5h0QOP"]);
        push2(tmp29);
      } else {
        class H {
          constructor() {
            return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        if (canSearchForumPosts) {
          class H {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const push = items1.push;
          tmp27[0] = tmp5(tmp2[29]);
          tmp27[1] = tmp(tmp2[30]).MagnifyingGlassIcon;
          tmp27[2] = function onPress() {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(channel.id, "");
          };
          const intl = tmp(tmp2[28]).intl;
          tmp27[3] = intl.string(tmp(tmp2[28]).t["5h0QOP"]);
          push(tmp27);
        }
      }
      if (tmp8) {
        class H {
          constructor() {
            return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
          }
        }
      }
      if (!tmp8) {
        class H {
          constructor() {
            return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        const hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
        let tmp32 = !hasItem && stateFromStores;
        if (tmp32) {
          class H {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
          const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
          tmp32 = !GUILD_THREADS_ONLY.has(channel.type);
        }
        if (hasItem) {
          class H {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (hasItem) {
          class H {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        if (hasItem) {
          class H {
            constructor() {
              return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
            }
          }
        }
        tmp8 = !hasItem;
      }
      if (!tmp8) {
        class H {
          constructor() {
            return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        const unshift = items1.unshift;
        tmp33[0] = tmp5(tmp2[40]);
        tmp33[1] = tmp(tmp2[41]).ThreadIcon;
        tmp33[2] = function onPress() {
          return showThreadBrowserModalDefault(channel);
        };
        const intl3 = tmp(tmp2[28]).intl;
        tmp33[3] = intl3.string(tmp(tmp2[28]).t.B2panI);
        unshift(tmp33);
      }
      const actionWrapper = tmp4.actionWrapper;
      const mapped = items1.map((accessibilityLabel, index) => {
        let tmp9;
        let closure_0 = accessibilityLabel;
        let tmp = index === items1.length - 1;
        if (accessibilityLabel === conversationsHeaderButton) {
          tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
            isLast: tmp,
            children(arg0) {
                closure_0 = arg0;
                const obj = {
                  noMargin: true,
                  onPress(arg0) {
                    closure_0();
                    const onPress = closure_0.onPress;
                    if (onPress != null) {
                      onPress(arg0);
                    }
                  }
                };
                const tmp = closure_1_1(closure_1_2[44]);
                const merged = Object.assign(closure_0);
                return closure_1_13(tmp, obj);
              }
          }, accessibilityLabel.accessibilityLabel);
        } else {
          IconActionButtonDefault;
          let merged = Object.assign(accessibilityLabel);
          tmp9 = <tmp5 noMargin={tmp} key={arg0.accessibilityLabel} />;
        }
        return tmp9;
      });
      if (cResult[20] === tmp4.actionWrapper) {
        class H {
          constructor() {
            return Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length;
          }
        }
        return tmp36;
      }
      const tmp39 = <conversationsHeaderButton style={actionWrapper}>{mapped}</conversationsHeaderButton>;
      cResult[20] = tmp4.actionWrapper;
      cResult[21] = mapped;
      cResult[22] = tmp39;
      tmp36 = tmp39;
    }
  }
  const fn = function c() {
    return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp11 = fn;
}) : ((channel) => {
  let StringResult;
  let fn2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let string2Result;
  let stringResult;
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  const tmp2 = screenIndex;
  const tmp3 = items1;
  let tmp = closure_15();
  const tmp5 = channel;
  const tmp4 = screenIndex(items1[17])(channel);
  let obj = channel(items1[18]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[19])();
  let obj2 = channel(items1[20]);
  const items = [ActiveThreadsStore];
  items1 = [];
  const stateFromStores = obj2.useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj3 = channel(items1[21]);
  const canJoinThreadVoice = obj3.useCanJoinThreadVoice(channel);
  let obj4 = channel(items1[20]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj5 = channel(items1[20]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[22])(channel);
  let obj6 = channel(items1[23]);
  const conversationsHeaderButton = obj6.useConversationsHeaderButton(channel);
  const obj7 = channel(items1[24]);
  const isGameInvitePostVoiceEnabled = obj7.useIsGameInvitePostVoiceEnabled(channel);
  const obj8 = channel(items1[24]);
  const isGameInvitesPost = obj8.useIsGameInvitesPost(channel);
  const obj9 = channel(items1[25]);
  if (obj9.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    return jsx(tmp2(tmp3[26]), { channel });
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          const obj11 = { source: null, IconComponent: stateFromStores1 || stateFromStores2 > 0 ? closure_18 : closure_19, buttonText: StringResult, buttonTextColor: "text-feedback-positive", onPress: fn, accessibilityLabel: string2Result };
          StringResult = undefined;
          const push2 = items1.push;
          if (stateFromStores1 || stateFromStores2 > 0) {
            if (stateFromStores2 > 0) {
              const _String = String;
              StringResult = String(stateFromStores2);
            }
          }
          if (stateFromStores1) {
            fn = () => {
              const obj = PrivateChannelCallUtils;
              return obj.openChannelCallModal(channel);
            };
          }
          const intl2 = tmp5(tmp3[28]).intl;
          const string2 = intl2.string;
          const t2 = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            string2Result = string2(t2["4ry6yi"]);
          } else {
            string2Result = string2(t2.My50nf);
          }
          push2(obj11);
        }
      } else {
        const tmp16 = channel.isVocalThread() && stateFromStores2 > 0;
        if (tmp16) {
          const obj12 = { source: null, IconComponent: stateFromStores1 ? closure_17 : closure_16, onPress: fn2, accessibilityLabel: stringResult };
          fn2 = fn;
          const push = items1.push;
          if (!stateFromStores1) {
            fn2 = () => {
              const obj = PrivateChannelCallUtils;
              return obj.openChannelCallModal(channel);
            };
          }
          const intl = tmp5(tmp3[28]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[28]).t;
          if (stateFromStores1) {
            stringResult = string(t["4ry6yi"]);
          } else {
            stringResult = string(t.My50nf);
          }
          push(obj12);
        }
      }
    }
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      const push5 = items1.push;
      const obj13 = {
        source: tmp2(tmp3[29]),
        IconComponent: tmp5(tmp3[30]).MagnifyingGlassIcon,
        onPress() {
              const obj = GuildDirectorySearchModalActionCreatorsDefault;
              const obj2 = { channel };
              obj.open(obj2);
            },
        accessibilityLabel: intl5.string(tmp5(tmp3[28]).t["5h0QOP"])
      };
      intl5 = tmp5(tmp3[28]).intl;
      push5(obj13);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const push3 = items1.push;
          const obj14 = {
            source: tmp2(tmp3[29]),
            IconComponent: tmp5(tmp3[30]).MagnifyingGlassIcon,
            onPress() {
                      closure_8(channel.id, true, "initial");
                      const obj2 = PlatformUtils;
                      if (obj2.isIOS()) {
                        const tmp2Result = ChatInputUtils;
                        const chatInputRef = tmp2Result.getChatInputRef(obj.id, screenIndex);
                        if (chatInputRef != null) {
                          chatInputRef.blur();
                        }
                      }
                      const isThreadResult = channel.isThread();
                      const guildId = obj.getGuildId();
                      const tmp2Result4 = useSearchContext;
                      const channelDetailsSearchContext = tmp2Result4.getChannelDetailsSearchContext(obj.id, guildId, isThreadResult);
                      const obj3 = { searchContext: channelDetailsSearchContext, searchLocation: constants.CHANNEL_HEADER };
                      const obj6 = search_tracking_TrackingDefault;
                      obj6.trackSearchOpened(obj3);
                      const tmp2Result5 = SwipeToMemberListUtils;
                      if (tmp2Result5.isSwipeToMemberListEnabled()) {
                        const ComponentDispatch = tmp2(1122).ComponentDispatch;
                        const obj4 = { source: "channel-header-search", channelId: channel.id, screenIndex };
                        ComponentDispatch.dispatch(unpackModuleId.SHOW_CHANNEL_DETAILS, obj4);
                      } else {
                        const tmp2Result6 = RootNavigationRef;
                        const rootNavigationRef = tmp2Result6.getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          if (rootNavigationRef.isReady()) {
                            const obj5 = { channelId: channel.id, search: true, source: "channel-header-search" };
                            rootNavigationRef.navigate("sidebar", obj5);
                          }
                        }
                      }
                    },
            accessibilityLabel: intl3.string(tmp5(tmp3[28]).t["5h0QOP"])
          };
          intl3 = tmp5(tmp3[28]).intl;
          push3(obj14);
        }
      }
      if (canSearchForumPosts) {
        const push4 = items1.push;
        const obj15 = {
          source: tmp2(tmp3[29]),
          IconComponent: tmp5(tmp3[30]).MagnifyingGlassIcon,
          onPress() {
                  const obj = ForumActionCreatorsDefault;
                  const result = obj.updateForumSearchQuery(channel.id, "");
                },
          accessibilityLabel: intl4.string(tmp5(tmp3[28]).t["5h0QOP"])
        };
        intl4 = tmp5(tmp3[28]).intl;
        push4(obj15);
      }
    }
    if (tmp7) {
      tmp7 = 0 !== items1.length;
    }
    if (!tmp7) {
      let hasItem = THREADED_CHANNEL_TYPES.has(channel.type);
      let tmp31 = !hasItem && stateFromStores;
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
      const unshift = items1.unshift;
      const obj16 = {
        source: tmp2(tmp3[40]),
        IconComponent: tmp5(tmp3[41]).ThreadIcon,
        onPress() {
              return showThreadBrowserModalDefault(channel);
            },
        accessibilityLabel: intl6.string(tmp5(tmp3[28]).t.B2panI)
      };
      intl6 = tmp5(tmp3[28]).intl;
      unshift(obj16);
    }
    return <conversationsHeaderButton style={tmp.actionWrapper}>{items1.map((accessibilityLabel, index) => {
      let tmp9;
      let closure_0 = accessibilityLabel;
      let tmp = index === items1.length - 1;
      if (accessibilityLabel === conversationsHeaderButton) {
        tmp9 = jsx(ConversationCoachmark.ConversationCoachmark, {
          isLast: tmp,
          children(arg0) {
              closure_0 = arg0;
              const obj = {
                noMargin: true,
                onPress(arg0) {
                  closure_0();
                  const onPress = closure_0.onPress;
                  if (onPress != null) {
                    onPress(arg0);
                  }
                }
              };
              const tmp = closure_1_1(closure_1_2[44]);
              const merged = Object.assign(closure_0);
              return closure_1_13(tmp, obj);
            }
        }, accessibilityLabel.accessibilityLabel);
      } else {
        IconActionButtonDefault;
        let merged = Object.assign(accessibilityLabel);
        tmp9 = <tmp5 noMargin={tmp} key={arg0.accessibilityLabel} />;
      }
      return tmp9;
    })}</conversationsHeaderButton>;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp6;
  const obj = channelId(576);
  const cResult = obj.c(6);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const showCreateThread = channelId.showCreateThread;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  channelId(5047);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (!tmp9) {
      tmp10 = null;
      if (!showCreateThread) {
        if (cResult[3] === stateFromStores) {
          let tmp11;
          if (cResult[4] === screenIndex) {
            tmp11 = cResult[5];
          }
          tmp10 = tmp11;
        }
        const tmp14 = <closure_20 channel={stateFromStores} screenIndex={screenIndex} />;
        cResult[3] = stateFromStores;
        cResult[4] = screenIndex;
        cResult[5] = tmp14;
        tmp11 = tmp14;
      }
    }
  }
  return tmp10;
}) : ((channelId) => {
  let screenIndex;
  let showCreateThread;
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(5047);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        tmp4 = <closure_20 channel={stateFromStores} screenIndex={screenIndex} />;
      }
    }
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let containerStyle;
  let first;
  let isDM;
  let isMultiUserDM;
  let screenIndex;
  let showCreateThread;
  let tmp12;
  let tmp6;
  let tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(13);
  channelId = channelId.channelId;
  ({ screenIndex, containerStyle, showCreateThread } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      let flag2;
      const channel = ChannelStore.getChannel(channelId);
      let flag;
      const obj = ChannelStore;
      const tmp = channelId;
      if (channel != null) {
        flag = channel.isMultiUserDM();
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = { isMultiUserDM: flag, isDM: flag2 };
      const channel1 = obj.getChannel(tmp);
      flag2 = undefined;
      if (channel1 != null) {
        flag2 = channel1.isDM();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      return obj2;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  const tmpResult2 = tmp(7314);
  const hasForumSearchQuery = tmpResult2.useHasForumSearchQuery(channelId);
  if (cResult[3] === channelId) {
    if (cResult[4] === hasForumSearchQuery) {
      if (cResult[5] === isDM) {
        if (cResult[6] === isMultiUserDM) {
          if (cResult[7] === screenIndex) {
            let tmp9;
            if (cResult[8] === showCreateThread) {
              tmp9 = cResult[9];
            }
            if (cResult[10] === containerStyle) {
              let tmp16;
              if (cResult[11] === tmp9) {
                tmp16 = cResult[12];
              }
              return tmp16;
            }
            const tmp19 = <View style={containerStyle}>{tmp9}</View>;
            cResult[10] = containerStyle;
            cResult[11] = tmp9;
            cResult[12] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
    }
  }
  if (hasForumSearchQuery) {
    tmp12 = jsx(tmp(12836).ForumChannelCloseSearchButton, { channelId });
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        tmp12 = <closure_21 channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />;
      }
    }
    tmp12 = jsx(PrivateChannelButtonsDefault, { channelId, screenIndex });
  }
  cResult[3] = channelId;
  cResult[4] = hasForumSearchQuery;
  cResult[5] = isDM;
  cResult[6] = isMultiUserDM;
  cResult[7] = screenIndex;
  cResult[8] = showCreateThread;
  cResult[9] = tmp12;
  tmp9 = tmp12;
}) : ((channelId) => {
  let containerStyle;
  let isDM;
  let isMultiUserDM;
  let showCreateThread;
  let tmp4Result;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  let tmp = channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let flag2;
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    const obj = ChannelStore;
    const tmp = channelId;
    if (channel != null) {
      flag = channel.isMultiUserDM();
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { isMultiUserDM: flag, isDM: flag2 };
    const channel1 = obj.getChannel(tmp);
    flag2 = undefined;
    if (channel1 != null) {
      flag2 = channel1.isDM();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    return obj2;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  let obj2 = channelId(7314);
  if (obj2.useHasForumSearchQuery(channelId)) {
    const obj4 = { channelId };
    tmp4Result = tmp4(tmp(12836).ForumChannelCloseSearchButton, obj4);
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
  return <tmp5 style={containerStyle}>{tmp4Result}</tmp5>;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default tmp4;

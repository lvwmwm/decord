// Module ID: 9777
// Function ID: 9778
// Name: ChannelActions
// Dependencies: [19, 17, 6848, 4861, 4857, 5668, 9778, 1084, 9779, 21, 5005, 558, 576, 9781, 1125, 8601, 9782, 9786, 587, 9788, 8631, 9790, 9791, 9797, 504, 7429, 9798, 9799, 7439, 14468, 14470, 7925, 14479, 7206, 13651, 9793, 1381, 5196, 13650, 13710, 11300, 1120, 5188, 11432, 8603, 10952, 14480, 14471, 6721, 14481, 14482, 2]

// Module 9777 (ChannelActions)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import react3 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import ChatInputUtils from "ChatInputUtils" /* 5196 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7925 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9778 */;
import TrackingConstants from "TrackingConstants" /* 9779 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9782 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9793 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10952 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11300 */;
import useSearchContext from "useSearchContext" /* 13650 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13651 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13710 */;
import IconActionButtonDefault from "IconActionButton" /* 14471 */;
import ConversationCoachmark from "ConversationCoachmark" /* 14480 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 14482 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6848 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import VoiceStateStore from "VoiceStateStore" /* 5668 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require;

let c10;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let tmp;
let unpackModuleId;
const VoiceNormalIcon2 = tmp(8631);
const PhoneCallIcon2 = tmp(9786);
const PhoneHangUpIcon2 = tmp(9788);
const View = react_native.View;
({ THREADED_CHANNEL_TYPES: hasOwnProperty, isChannelChatInSidebar: metroRequire } = ChannelRecord);
let closure_9 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ ChannelTypes: c10, ChannelTypesSets: unpackModuleId, ComponentActions: closure_12 } = Constants);
let closure_13 = TrackingConstants.SearchEntrypointAnalyticsLocations;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const createElement = react2.createElement;
let closure_17 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelChatButton(id, arg1) {
  let StringResult;
  let hasUnread;
  let mentionCount;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(5);
  id = null;
  const useChannelChatUnread = require("useChannelChatUnread").useChannelChatUnread;
  require("useChannelChatUnread");
  if (arg1) {
    id = id.id;
  }
  const channelChatUnread = useChannelChatUnread(id);
  ({ hasUnread, mentionCount } = channelChatUnread);
  if (arg1) {
    let tmp9;
    if (!hasUnread) {
      hasUnread = mentionCount > 0;
    }
    if (cResult[0] === id) {
      if (cResult[1] === hasUnread) {
        let tmp7;
        if (cResult[2] === mentionCount) {
          tmp7 = cResult[3];
        }
        return tmp7;
      }
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(require("intl").t.kkKapG);
      cResult[4] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[4];
    }
    const obj2 = {
      IconComponent: require("ChatIcon").ChatIcon,
      onPress() {
          openChannelSecondaryViewChatDefault(id.guild_id, id.id);
        },
      accessibilityLabel: tmp9,
      badge: hasUnread,
      badgePosition: "right",
      buttonText: StringResult
    };
    StringResult = undefined;
    if (hasUnread) {
      if (mentionCount > 0) {
        const _String = String;
        StringResult = String(mentionCount);
      }
    }
    cResult[0] = id;
    cResult[1] = hasUnread;
    cResult[2] = mentionCount;
    cResult[3] = obj2;
    tmp7 = obj2;
  } else {
    return null;
  }
}) : (function useChannelChatButton(id, arg1) {
  let StringResult;
  let hasUnread;
  let intl;
  let mentionCount;
  _require = id;
  id = null;
  const useChannelChatUnread = require("useChannelChatUnread").useChannelChatUnread;
  require("useChannelChatUnread");
  if (arg1) {
    id = id.id;
  }
  const channelChatUnread = useChannelChatUnread(id);
  ({ hasUnread, mentionCount } = channelChatUnread);
  if (arg1) {
    if (!hasUnread) {
      hasUnread = mentionCount > 0;
    }
    const obj = {
      IconComponent: require("ChatIcon").ChatIcon,
      onPress() {
          openChannelSecondaryViewChatDefault(id.guild_id, id.id);
        },
      accessibilityLabel: intl.string(require("intl").t.kkKapG),
      badge: hasUnread,
      badgePosition: "right",
      buttonText: StringResult
    };
    intl = tmp(1125).intl;
    StringResult = undefined;
    if (hasUnread) {
      if (mentionCount > 0) {
        const _String = String;
        StringResult = String(mentionCount);
      }
    }
    return obj;
  } else {
    return null;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinCallIcon() {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
    const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
    const tmp7 = syncedClientThemes(PhoneCallIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function JoinCallIcon() {
  const obj = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
  const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
  return syncedClientThemes(PhoneCallIcon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function EndCallIcon() {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
    const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
    const tmp7 = syncedClientThemes(PhoneHangUpIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function EndCallIcon() {
  const obj = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
  const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
  return syncedClientThemes(PhoneHangUpIcon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function LfgVoiceActiveIcon() {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
    const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
    const tmp7 = syncedClientThemes(VoiceNormalIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LfgVoiceActiveIcon() {
  const obj = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
  const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  return syncedClientThemes(VoiceNormalIcon, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function LfgVoiceInactiveIcon() {
  let first;
  const obj = react3;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = syncedClientThemes(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LfgVoiceInactiveIcon() {
  return syncedClientThemes(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelActionButtons(channel) {
  let first;
  let hasChannelOverflowMenu;
  let items1;
  let items4;
  let tmp = channel;
  const tmp2 = items1;
  let obj = channel(items1[12]);
  const cResult = obj.c(28);
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  const tmp4 = closure_17();
  const tmp6 = screenIndex(items1[21])(channel);
  let obj2 = channel(items1[22]);
  const canSearchForumPosts = obj2.useCanSearchForumPosts(channel);
  let tmp8 = screenIndex(items1[23])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = hasChannelOverflowMenu;
    const items = [hasChannelOverflowMenu];
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
    const tmpResult = tmp(tmp2[24]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
    const _Symbol = Symbol;
    const tmpResult8 = tmp(tmp2[25]);
    const canJoinThreadVoice = tmpResult8.useCanJoinThreadVoice(channel);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [VoiceStateStore];
      cResult[4] = items2;
      tmp14 = items2;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== channel.id) {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      cResult[5] = channel.id;
      cResult[6] = G;
      tmp16 = G;
    } else {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    const tmpResult9 = tmp(tmp2[24]);
    const stateFromStores1 = tmpResult9.useStateFromStores(tmp14, tmp16);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      const items3 = [VoiceStateStore];
      cResult[7] = items3;
      tmp18 = items3;
    } else {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    if (cResult[8] !== channel.id) {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      cResult[8] = channel.id;
      cResult[9] = tmp20;
      tmp19 = tmp20;
    } else {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
    }
    const tmpResult10 = tmp(tmp2[24]);
    const stateFromStores2 = tmpResult10.useStateFromStores(tmp18, tmp19);
    screenIndex(tmp2[26])(channel);
    const tmpResult11 = tmp(tmp2[27]);
    const conversationsHeaderButton = tmpResult11.useConversationsHeaderButton(channel);
    const tmpResult12 = tmp(tmp2[28]);
    const isGameInvitePostVoiceEnabled = tmpResult12.useIsGameInvitePostVoiceEnabled(channel);
    tmp(tmp2[28]);
    if (cResult[10] === channel.type) {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      const tmp31 = closure_18(channel, tmp27);
      const tmp32 = screenIndex(tmp2[29])(channel, tmp27);
      const tmpResult14 = tmp(tmp2[30]);
      hasChannelOverflowMenu = tmpResult14.useHasChannelOverflowMenu(channel, screenIndex);
      if (canJoinThreadVoice) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
      }
      if (constants.GUILD_DIRECTORY === channel.type) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        const push2 = items1.push;
        tmp37[0] = screenIndex(tmp2[32]);
        tmp37[1] = tmp(tmp2[33]).MagnifyingGlassIcon;
        tmp37[2] = function onPress() {
          const obj = GuildDirectorySearchModalActionCreatorsDefault;
          const obj2 = { channel };
          obj.open(obj2);
        };
        const intl2 = tmp(tmp2[14]).intl;
        tmp37[3] = intl2.string(tmp(tmp2[14]).t["5h0QOP"]);
        push2(tmp37);
      } else {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        if (canSearchForumPosts) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
          const push = items1.push;
          tmp35[0] = screenIndex(tmp2[32]);
          tmp35[1] = tmp(tmp2[33]).MagnifyingGlassIcon;
          tmp35[2] = function onPress() {
            const obj = ForumActionCreatorsDefault;
            const result = obj.updateForumSearchQuery(channel.id, "");
          };
          const intl = tmp(tmp2[14]).intl;
          tmp35[3] = intl.string(tmp(tmp2[14]).t["5h0QOP"]);
          push(tmp35);
        }
      }
      if (null != tmp32) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
      }
      if (null != tmp31) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
      }
      if (tmp8) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
      }
      if (!tmp8) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        const hasItem = set.has(channel.type);
        let tmp41 = !hasItem && stateFromStores;
        if (tmp41) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
          const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
          tmp41 = !GUILD_THREADS_ONLY.has(channel.type);
        }
        if (hasItem) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
        }
        if (hasItem) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
        }
        if (hasItem) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
        }
        tmp8 = !hasItem;
      }
      if (!tmp8) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        const unshift = items1.unshift;
        tmp42[0] = screenIndex(tmp2[43]);
        tmp42[1] = tmp(tmp2[44]).ThreadIcon;
        tmp42[2] = function onPress() {
          return showThreadBrowserModalDefault(channel);
        };
        const intl3 = tmp(tmp2[14]).intl;
        tmp42[3] = intl3.string(tmp(tmp2[14]).t.B2panI);
        unshift(tmp42);
      }
      const actionWrapper = tmp4.actionWrapper;
      const mapped = items1.map((accessibilityLabel, index) => {
        let tmp10;
        let closure_0 = accessibilityLabel;
        let tmp = index === items1.length - 1 && !hasChannelOverflowMenu;
        if (accessibilityLabel === conversationsHeaderButton) {
          const obj2 = {
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
                const tmp = closure_1_1(closure_1_2[47]);
                const merged = Object.assign(closure_0);
                return closure_1_14(tmp, obj);
              }
          };
          tmp10 = syncedClientThemes(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
        } else {
          IconActionButtonDefault;
          let merged = Object.assign(accessibilityLabel);
          tmp10 = <tmp6 noMargin={tmp} key={arg0.accessibilityLabel} />;
        }
        return tmp10;
      });
      if (cResult[21] === channel) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        if (cResult[24] === tmp4.actionWrapper) {
          class G {
            constructor() {
              return VoiceStateStore.isInChannel(channel.id);
            }
          }
        }
        let obj3 = { style: actionWrapper, children: items4 };
        items4 = [mapped, tmp45];
        cResult[24] = tmp4.actionWrapper;
        cResult[25] = tmp45;
        cResult[26] = mapped;
        cResult[27] = closure_15(conversationsHeaderButton, obj3);
        const tmp50 = closure_15(conversationsHeaderButton, obj3);
      }
      let tmp46 = hasChannelOverflowMenu;
      if (tmp46) {
        class G {
          constructor() {
            return VoiceStateStore.isInChannel(channel.id);
          }
        }
        let obj4 = { channel };
        tmp46 = closure_14(tmp5(tmp2[30]), obj4);
      }
      cResult[21] = channel;
      cResult[22] = hasChannelOverflowMenu;
      cResult[23] = tmp46;
    }
    let tmp29 = closure_6(channel.type);
    if (tmp29) {
      class G {
        constructor() {
          return VoiceStateStore.isInChannel(channel.id);
        }
      }
      tmp29 = "channel-secondary-view-chat" !== screenIndex;
    }
    cResult[10] = channel.type;
    cResult[11] = screenIndex;
    cResult[12] = tmp29;
  }
  const fn = function l() {
    return ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id);
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp11 = fn;
}) : (function ChannelActionButtons(channel) {
  let StringResult;
  let fn2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let string2Result;
  let stringResult;
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  let hasChannelOverflowMenu;
  const tmp2 = screenIndex;
  const tmp3 = items1;
  let tmp = closure_17();
  const tmp4 = screenIndex(items1[21])(channel);
  let obj = channel(items1[22]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[23])();
  let obj2 = channel(items1[24]);
  const items = [hasChannelOverflowMenu];
  items1 = [];
  const stateFromStores = obj2.useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj3 = channel(items1[25]);
  const canJoinThreadVoice = obj3.useCanJoinThreadVoice(channel);
  let obj4 = channel(items1[24]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj5 = channel(items1[24]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[26])(channel);
  let obj6 = channel(items1[27]);
  const conversationsHeaderButton = obj6.useConversationsHeaderButton(channel);
  const obj7 = channel(items1[28]);
  const isGameInvitePostVoiceEnabled = obj7.useIsGameInvitePostVoiceEnabled(channel);
  const obj8 = channel(items1[28]);
  const isGameInvitesPost = obj8.useIsGameInvitesPost(channel);
  let tmp16 = closure_6(channel.type);
  if (tmp16) {
    tmp16 = "channel-secondary-view-chat" !== screenIndex;
  }
  const tmp17 = closure_18(channel, tmp16);
  const tmp18 = tmp2(tmp3[29])(channel, tmp16);
  const tmp5Result = channel(tmp3[30]);
  hasChannelOverflowMenu = tmp5Result.useHasChannelOverflowMenu(channel, screenIndex);
  if (canJoinThreadVoice) {
    if (isGameInvitesPost) {
      if (isGameInvitePostVoiceEnabled) {
        const obj9 = { IconComponent: stateFromStores1 || stateFromStores2 > 0 ? closure_21 : closure_22, buttonText: StringResult, buttonTextColor: "text-feedback-positive", onPress: fn, accessibilityLabel: string2Result };
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
        const intl2 = tmp5(tmp3[14]).intl;
        const string2 = intl2.string;
        const t2 = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          string2Result = string2(t2["4ry6yi"]);
        } else {
          string2Result = string2(t2.My50nf);
        }
        push2(obj9);
      }
    } else {
      const tmp20 = channel.isVocalThread() && stateFromStores2 > 0;
      if (tmp20) {
        const obj10 = { IconComponent: stateFromStores1 ? closure_20 : closure_19, onPress: fn2, accessibilityLabel: stringResult };
        fn2 = fn;
        const push = items1.push;
        if (!stateFromStores1) {
          fn2 = () => {
            const obj = PrivateChannelCallUtils;
            return obj.openChannelCallModal(channel);
          };
        }
        const intl = tmp5(tmp3[14]).intl;
        const string = intl.string;
        const t = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          stringResult = string(t["4ry6yi"]);
        } else {
          stringResult = string(t.My50nf);
        }
        push(obj10);
      }
    }
  }
  const type = channel.type;
  if (constants.GUILD_DIRECTORY === type) {
    const push5 = items1.push;
    const obj11 = {
      source: tmp2(tmp3[32]),
      IconComponent: channel(tmp3[33]).MagnifyingGlassIcon,
      onPress() {
          const obj = GuildDirectorySearchModalActionCreatorsDefault;
          const obj2 = { channel };
          obj.open(obj2);
        },
      accessibilityLabel: intl5.string(channel(tmp3[14]).t["5h0QOP"])
    };
    intl5 = tmp5(tmp3[14]).intl;
    push5(obj11);
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        if (!tmp16) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const push3 = items1.push;
          const obj12 = {
            source: tmp2(tmp3[32]),
            IconComponent: channel(tmp3[33]).MagnifyingGlassIcon,
            onPress() {
                      closure_9(channel.id, true, "initial");
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
                      if (tmp2Result5.isSwipeToMemberListEnabledForChannel(channel.id)) {
                        const ComponentDispatch = tmp2(1120).ComponentDispatch;
                        const obj4 = { source: "channel-header-search", channelId: channel.id, screenIndex };
                        ComponentDispatch.dispatch(constants.SHOW_CHANNEL_DETAILS, obj4);
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
            accessibilityLabel: intl3.string(channel(tmp3[14]).t["5h0QOP"])
          };
          intl3 = tmp5(tmp3[14]).intl;
          push3(obj12);
        }
      }
    }
    if (canSearchForumPosts) {
      const push4 = items1.push;
      const obj13 = {
        source: tmp2(tmp3[32]),
        IconComponent: channel(tmp3[33]).MagnifyingGlassIcon,
        onPress() {
              const obj = ForumActionCreatorsDefault;
              const result = obj.updateForumSearchQuery(channel.id, "");
            },
        accessibilityLabel: intl4.string(channel(tmp3[14]).t["5h0QOP"])
      };
      intl4 = tmp5(tmp3[14]).intl;
      push4(obj13);
    }
  }
  if (null != tmp18) {
    items1.push(tmp18);
  }
  if (null != tmp17) {
    items1.push(tmp17);
  }
  if (tmp7) {
    tmp7 = 0 !== items1.length;
  }
  if (!tmp7) {
    let hasItem = set.has(channel.type);
    let tmp38 = !hasItem && stateFromStores;
    if (tmp38) {
      const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
      tmp38 = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (hasItem) {
      hasItem = !tmp4;
    }
    if (hasItem) {
      hasItem = !channel.isForumLikeChannel();
    }
    if (hasItem) {
      hasItem = tmp38;
    }
    tmp7 = !hasItem;
  }
  if (!tmp7) {
    const unshift = items1.unshift;
    const obj14 = {
      source: tmp2(tmp3[43]),
      IconComponent: channel(tmp3[44]).ThreadIcon,
      onPress() {
          return showThreadBrowserModalDefault(channel);
        },
      accessibilityLabel: intl6.string(channel(tmp3[14]).t.B2panI)
    };
    intl6 = tmp5(tmp3[14]).intl;
    unshift(obj14);
  }
  const obj15 = { style: tmp.actionWrapper, children: items4 };
  items4 = [
    items1.map((accessibilityLabel, index) => {
      let tmp10;
      let closure_0 = accessibilityLabel;
      let tmp = index === items1.length - 1 && !hasChannelOverflowMenu;
      if (accessibilityLabel === conversationsHeaderButton) {
        const obj2 = {
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
              const tmp = closure_1_1(closure_1_2[47]);
              const merged = Object.assign(closure_0);
              return closure_1_14(tmp, obj);
            }
        };
        tmp10 = syncedClientThemes(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
      } else {
        IconActionButtonDefault;
        let merged = Object.assign(accessibilityLabel);
        tmp10 = <tmp6 noMargin={tmp} key={arg0.accessibilityLabel} />;
      }
      return tmp10;
    }),

  ];
  const tmp41 = closure_15;
  const tmp42 = conversationsHeaderButton;
  if (hasChannelOverflowMenu) {
    const obj16 = { channel };
    hasChannelOverflowMenu = closure_14(tmp2(tmp3[30]), obj16);
  }
  items4[1] = hasChannelOverflowMenu;
  return tmp41(tmp42, obj15);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function WrappedChannelNavButtons(channelId) {
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
    const fn = function t() {
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
  channelId(6721);
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
        const obj2 = { channel: stateFromStores, screenIndex };
        const tmp14 = closure_14(closure_23, obj2);
        cResult[3] = stateFromStores;
        cResult[4] = screenIndex;
        cResult[5] = tmp14;
        tmp11 = tmp14;
      }
    }
  }
  return tmp10;
}) : (function WrappedChannelNavButtons(channelId) {
  let screenIndex;
  let showCreateThread;
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(6721);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        const obj2 = { channel: stateFromStores, screenIndex };
        tmp4 = closure_14(closure_23, obj2);
      }
    }
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelActions(channelId) {
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
    const fn = function s() {
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
  const tmpResult2 = tmp(9791);
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
            let obj2 = { style: containerStyle, children: tmp9 };
            const tmp19 = closure_14(View, obj2);
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
    const obj3 = { channelId };
    tmp12 = closure_14(tmp(14481).ForumChannelCloseSearchButton, obj3);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj4 = { channelId, screenIndex, showCreateThread };
        tmp12 = closure_14(closure_24, obj4);
      }
    }
    const obj5 = { channelId, screenIndex };
    tmp12 = closure_14(PrivateChannelButtonsDefault, obj5);
  }
  cResult[3] = channelId;
  cResult[4] = hasForumSearchQuery;
  cResult[5] = isDM;
  cResult[6] = isMultiUserDM;
  cResult[7] = screenIndex;
  cResult[8] = showCreateThread;
  cResult[9] = tmp12;
  tmp9 = tmp12;
}) : (function ChannelActions(channelId) {
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
  let obj2 = channelId(9791);
  const obj3 = { style: containerStyle, children: tmp4Result };
  const tmp5 = View;
  if (obj2.useHasForumSearchQuery(channelId)) {
    const obj4 = { channelId };
    tmp4Result = tmp4(tmp(14481).ForumChannelCloseSearchButton, obj4);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj5 = { channelId, screenIndex, showCreateThread };
        tmp4Result = tmp4(closure_24, obj5);
      }
    }
    const obj6 = { channelId, screenIndex };
    tmp4Result = tmp4(PrivateChannelButtonsDefault, obj6);
  }
  return closure_14(tmp5, obj3);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default tmp6;

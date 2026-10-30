// Module ID: 9803
// Function ID: 9804
// Name: ChannelActions
// Dependencies: [19, 17, 6855, 4862, 4858, 5674, 9804, 1072, 9805, 21, 5009, 9807, 8635, 9808, 1114, 9812, 575, 9814, 8665, 9816, 9817, 9823, 504, 7437, 9824, 9825, 7447, 14500, 14502, 7931, 14512, 7213, 13798, 9819, 1376, 5202, 13797, 13857, 11503, 1109, 5194, 11633, 8637, 10977, 14513, 14503, 6728, 14514, 14515, 2]
// Exports: default

// Module 9803 (ChannelActions)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7931 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 8665 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9804 */;
import TrackingConstants from "TrackingConstants" /* 9805 */;
import PhoneCallIcon2 from "PhoneCallIcon" /* 9812 */;
import PhoneHangUpIcon2 from "PhoneHangUpIcon" /* 9814 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9819 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10977 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11503 */;
import useSearchContext from "useSearchContext" /* 13797 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13798 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13857 */;
import IconActionButtonDefault from "IconActionButton" /* 14503 */;
import ConversationCoachmark from "ConversationCoachmark" /* 14513 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 14515 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6855 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function JoinCallIcon() {
  const obj = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
  const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
  return authStore3(PhoneCallIcon, obj);
}
function EndCallIcon() {
  const obj = { size: "sm", color: nativeDefault.unsafe_rawColors.RED_400 };
  const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
  return authStore3(PhoneHangUpIcon, obj);
}
function LfgVoiceActiveIcon() {
  const obj = { size: "sm", color: nativeDefault.unsafe_rawColors.GREEN_360 };
  const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  return authStore3(VoiceNormalIcon, obj);
}
function LfgVoiceInactiveIcon() {
  return authStore3(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
}
function ChannelActionButtons(channel) {
  let StringResult;
  let StringResult1;
  let fn2;
  let hasUnread;
  let intl;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items4;
  let mentionCount;
  let string2Result;
  let stringResult;
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  let items1;
  let hasChannelOverflowMenu;
  const tmp2 = screenIndex;
  const tmp3 = items1;
  let tmp = closure_17();
  const tmp4 = screenIndex(items1[19])(channel);
  let obj = channel(items1[20]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[21])();
  let obj2 = channel(items1[22]);
  const items = [hasChannelOverflowMenu];
  items1 = [];
  const stateFromStores = obj2.useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj3 = channel(items1[23]);
  const canJoinThreadVoice = obj3.useCanJoinThreadVoice(channel);
  let obj4 = channel(items1[22]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj5 = channel(items1[22]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[24])(channel);
  let obj6 = channel(items1[25]);
  const conversationsHeaderButton = obj6.useConversationsHeaderButton(channel);
  const obj7 = channel(items1[26]);
  const isGameInvitePostVoiceEnabled = obj7.useIsGameInvitePostVoiceEnabled(channel);
  const obj8 = channel(items1[26]);
  const isGameInvitesPost = obj8.useIsGameInvitesPost(channel);
  let tmp16 = closure_6(channel.type);
  if (tmp16) {
    tmp16 = "channel-secondary-view-chat" !== screenIndex;
  }
  let id = null;
  const useChannelChatUnread = tmp5(tmp3[11]).useChannelChatUnread;
  channel(tmp3[11]);
  if (tmp16) {
    id = channel.id;
  }
  const channelChatUnread = useChannelChatUnread(id);
  ({ hasUnread, mentionCount } = channelChatUnread);
  let tmp20 = null;
  if (tmp16) {
    if (!hasUnread) {
      hasUnread = mentionCount > 0;
    }
    const obj9 = {
      IconComponent: channel(tmp3[12]).ChatIcon,
      onPress() {
          screenIndex(items1[13])(channel.guild_id, channel.id);
        },
      accessibilityLabel: intl.string(channel(tmp3[14]).t.kkKapG),
      badge: hasUnread,
      badgePosition: "right",
      buttonText: StringResult
    };
    intl = tmp5(tmp3[14]).intl;
    StringResult = undefined;
    if (hasUnread) {
      if (mentionCount > 0) {
        const _String = String;
        StringResult = String(mentionCount);
      }
    }
    tmp20 = obj9;
  }
  const tmp23 = tmp2(tmp3[27])(channel, tmp16);
  const tmp5Result2 = channel(tmp3[28]);
  hasChannelOverflowMenu = tmp5Result2.useHasChannelOverflowMenu(channel, screenIndex);
  if (canJoinThreadVoice) {
    if (isGameInvitesPost) {
      if (isGameInvitePostVoiceEnabled) {
        const obj10 = { IconComponent: stateFromStores1 || stateFromStores2 > 0 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon, buttonText: StringResult1, buttonTextColor: "text-feedback-positive", onPress: fn, accessibilityLabel: string2Result };
        StringResult1 = undefined;
        const push2 = items1.push;
        if (stateFromStores1 || stateFromStores2 > 0) {
          if (stateFromStores2 > 0) {
            const _String2 = String;
            StringResult1 = String(stateFromStores2);
          }
        }
        if (stateFromStores1) {
          fn = () => {
            const obj = PrivateChannelCallUtils;
            return obj.openChannelCallModal(channel);
          };
        }
        const intl3 = tmp5(tmp3[14]).intl;
        const string2 = intl3.string;
        const t2 = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          string2Result = string2(t2["4ry6yi"]);
        } else {
          string2Result = string2(t2.My50nf);
        }
        push2(obj10);
      }
    } else {
      const tmp25 = channel.isVocalThread() && stateFromStores2 > 0;
      if (tmp25) {
        const obj11 = { IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon, onPress: fn2, accessibilityLabel: stringResult };
        fn2 = fn;
        const push = items1.push;
        if (!stateFromStores1) {
          fn2 = () => {
            const obj = PrivateChannelCallUtils;
            return obj.openChannelCallModal(channel);
          };
        }
        const intl2 = tmp5(tmp3[14]).intl;
        const string = intl2.string;
        const t = tmp5(tmp3[14]).t;
        if (stateFromStores1) {
          stringResult = string(t["4ry6yi"]);
        } else {
          stringResult = string(t.My50nf);
        }
        push(obj11);
      }
    }
  }
  const type = channel.type;
  if (constants.GUILD_DIRECTORY === type) {
    const push5 = items1.push;
    const obj12 = {
      source: tmp2(tmp3[30]),
      IconComponent: channel(tmp3[31]).MagnifyingGlassIcon,
      onPress() {
          const obj = GuildDirectorySearchModalActionCreatorsDefault;
          const obj2 = { channel };
          obj.open(obj2);
        },
      accessibilityLabel: intl6.string(channel(tmp3[14]).t["5h0QOP"])
    };
    intl6 = tmp5(tmp3[14]).intl;
    push5(obj12);
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        if (!tmp16) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const push3 = items1.push;
          const obj13 = {
            source: tmp2(tmp3[30]),
            IconComponent: channel(tmp3[31]).MagnifyingGlassIcon,
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
                        const ComponentDispatch = tmp2(1109).ComponentDispatch;
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
            accessibilityLabel: intl4.string(channel(tmp3[14]).t["5h0QOP"])
          };
          intl4 = tmp5(tmp3[14]).intl;
          push3(obj13);
        }
      }
    }
    if (canSearchForumPosts) {
      const push4 = items1.push;
      const obj14 = {
        source: tmp2(tmp3[30]),
        IconComponent: channel(tmp3[31]).MagnifyingGlassIcon,
        onPress() {
              const obj = ForumActionCreatorsDefault;
              const result = obj.updateForumSearchQuery(channel.id, "");
            },
        accessibilityLabel: intl5.string(channel(tmp3[14]).t["5h0QOP"])
      };
      intl5 = tmp5(tmp3[14]).intl;
      push4(obj14);
    }
  }
  if (null != tmp23) {
    items1.push(tmp23);
  }
  if (null != tmp20) {
    items1.push(tmp20);
  }
  if (tmp7) {
    tmp7 = 0 !== items1.length;
  }
  if (!tmp7) {
    let hasItem = set.has(channel.type);
    let tmp42 = !hasItem && stateFromStores;
    if (tmp42) {
      const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
      tmp42 = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (hasItem) {
      hasItem = !tmp4;
    }
    if (hasItem) {
      hasItem = !channel.isForumLikeChannel();
    }
    if (hasItem) {
      hasItem = tmp42;
    }
    tmp7 = !hasItem;
  }
  if (!tmp7) {
    const unshift = items1.unshift;
    const obj15 = {
      source: tmp2(tmp3[41]),
      IconComponent: channel(tmp3[42]).ThreadIcon,
      onPress() {
          return showThreadBrowserModalDefault(channel);
        },
      accessibilityLabel: intl7.string(channel(tmp3[14]).t.B2panI)
    };
    intl7 = tmp5(tmp3[14]).intl;
    unshift(obj15);
  }
  const obj16 = { style: tmp.actionWrapper, children: items4 };
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
              const tmp = closure_1_1(closure_1_2[45]);
              const merged = Object.assign(closure_0);
              return closure_1_14(tmp, obj);
            }
        };
        tmp10 = authStore3(ConversationCoachmark.ConversationCoachmark, obj2, accessibilityLabel.accessibilityLabel);
      } else {
        IconActionButtonDefault;
        let merged = Object.assign(accessibilityLabel);
        tmp10 = <tmp6 noMargin={tmp} key={arg0.accessibilityLabel} />;
      }
      return tmp10;
    }),

  ];
  const tmp45 = closure_15;
  const tmp46 = conversationsHeaderButton;
  if (hasChannelOverflowMenu) {
    const obj17 = { channel };
    hasChannelOverflowMenu = closure_14(tmp2(tmp3[28]), obj17);
  }
  items4[1] = hasChannelOverflowMenu;
  return tmp45(tmp46, obj16);
}
function WrappedChannelNavButtons(channelId) {
  let screenIndex;
  let showCreateThread;
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(6728);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        const obj2 = { channel: stateFromStores, screenIndex };
        tmp4 = closure_14(ChannelActionButtons, obj2);
      }
    }
  }
  return tmp4;
}
const View = react_native.View;
({ THREADED_CHANNEL_TYPES: hasOwnProperty, isChannelChatInSidebar: metroRequire } = ChannelRecord);
let closure_9 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ ChannelTypes: c10, ChannelTypesSets: unpackModuleId, ComponentActions: closure_12 } = Constants);
let closure_13 = TrackingConstants.SearchEntrypointAnalyticsLocations;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const createElement = react2.createElement;
let closure_17 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default function ChannelActions(channelId) {
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
  let obj2 = channelId(9817);
  const obj3 = { style: containerStyle, children: tmp4Result };
  const tmp5 = View;
  if (obj2.useHasForumSearchQuery(channelId)) {
    const obj4 = { channelId };
    tmp4Result = tmp4(tmp(14514).ForumChannelCloseSearchButton, obj4);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        const obj5 = { channelId, screenIndex, showCreateThread };
        tmp4Result = tmp4(WrappedChannelNavButtons, obj5);
      }
    }
    const obj6 = { channelId, screenIndex };
    tmp4Result = tmp4(PrivateChannelButtonsDefault, obj6);
  }
  return closure_14(tmp5, obj3);
};

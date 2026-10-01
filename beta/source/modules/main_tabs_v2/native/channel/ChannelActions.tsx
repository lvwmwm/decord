// Module ID: 7300
// Function ID: 7301
// Name: ChannelActions
// Dependencies: [19, 17, 5819, 2049, 2045, 4855, 7301, 1074, 7302, 21, 4836, 7305, 576, 7307, 5415, 7309, 7310, 7328, 504, 6687, 7329, 7330, 6690, 5370, 12826, 5043, 1115, 12832, 6472, 11783, 7324, 1364, 4701, 11782, 11841, 11004, 1110, 4693, 11151, 5387, 10426, 12833, 12830, 5046, 12834, 12836, 2]
// Exports: default

// Module 7300 (ChannelActions)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5415 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7301 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import PhoneCallIcon2 from "PhoneCallIcon" /* 7305 */;
import PhoneHangUpIcon2 from "PhoneHangUpIcon" /* 7307 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7324 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10426 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11004 */;
import useSearchContext from "useSearchContext" /* 11782 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11783 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import IconActionButtonDefault from "IconActionButton" /* 12830 */;
import ConversationCoachmark from "ConversationCoachmark" /* 12833 */;
import PrivateChannelButtonsDefault from "PrivateChannelButtons" /* 12836 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5819 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let unpackModuleId;
function JoinCallIcon() {
  const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
  return <PhoneCallIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
}
function EndCallIcon() {
  const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
  return <PhoneHangUpIcon size="sm" color={nativeDefault.unsafe_rawColors.RED_400} />;
}
function LfgVoiceActiveIcon() {
  const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  return <VoiceNormalIcon size="sm" color={nativeDefault.unsafe_rawColors.GREEN_360} />;
}
function LfgVoiceInactiveIcon() {
  return jsx(VoiceNormalIcon2.VoiceNormalIcon, { size: "sm" });
}
function ChannelActionButtons(channel) {
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
  const tmp4 = screenIndex(items1[15])(channel);
  let obj = channel(items1[16]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp7 = screenIndex(items1[17])();
  let obj2 = channel(items1[18]);
  const items = [ActiveThreadsStore];
  items1 = [];
  const stateFromStores = obj2.useStateFromStores(items, () => ActiveThreadsStore.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj3 = channel(items1[19]);
  const canJoinThreadVoice = obj3.useCanJoinThreadVoice(channel);
  let obj4 = channel(items1[18]);
  const items2 = [VoiceStateStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  let obj5 = channel(items1[18]);
  const items3 = [VoiceStateStore];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)).length);
  let fn = screenIndex(items1[20])(channel);
  let obj6 = channel(items1[21]);
  const conversationsHeaderButton = obj6.useConversationsHeaderButton(channel);
  const obj7 = channel(items1[22]);
  const isGameInvitePostVoiceEnabled = obj7.useIsGameInvitePostVoiceEnabled(channel);
  const obj8 = channel(items1[22]);
  const isGameInvitesPost = obj8.useIsGameInvitesPost(channel);
  const obj9 = channel(items1[23]);
  if (obj9.useIsVibegrationsChannelCandidate(channel, "ChannelActions")) {
    return jsx(tmp2(tmp3[24]), { channel });
  } else {
    if (canJoinThreadVoice) {
      if (isGameInvitesPost) {
        if (isGameInvitePostVoiceEnabled) {
          const obj11 = { source: null, IconComponent: stateFromStores1 || stateFromStores2 > 0 ? LfgVoiceActiveIcon : LfgVoiceInactiveIcon, buttonText: StringResult, buttonTextColor: "text-feedback-positive", onPress: fn, accessibilityLabel: string2Result };
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
          const intl2 = tmp5(tmp3[26]).intl;
          const string2 = intl2.string;
          const t2 = tmp5(tmp3[26]).t;
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
          const obj12 = { source: null, IconComponent: stateFromStores1 ? EndCallIcon : JoinCallIcon, onPress: fn2, accessibilityLabel: stringResult };
          fn2 = fn;
          const push = items1.push;
          if (!stateFromStores1) {
            fn2 = () => {
              const obj = PrivateChannelCallUtils;
              return obj.openChannelCallModal(channel);
            };
          }
          const intl = tmp5(tmp3[26]).intl;
          const string = intl.string;
          const t = tmp5(tmp3[26]).t;
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
        source: tmp2(tmp3[27]),
        IconComponent: tmp5(tmp3[28]).MagnifyingGlassIcon,
        onPress() {
              const obj = GuildDirectorySearchModalActionCreatorsDefault;
              const obj2 = { channel };
              obj.open(obj2);
            },
        accessibilityLabel: intl5.string(tmp5(tmp3[26]).t["5h0QOP"])
      };
      intl5 = tmp5(tmp3[26]).intl;
      push5(obj13);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          const push3 = items1.push;
          const obj14 = {
            source: tmp2(tmp3[27]),
            IconComponent: tmp5(tmp3[28]).MagnifyingGlassIcon,
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
                        const ComponentDispatch = tmp2(1110).ComponentDispatch;
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
            accessibilityLabel: intl3.string(tmp5(tmp3[26]).t["5h0QOP"])
          };
          intl3 = tmp5(tmp3[26]).intl;
          push3(obj14);
        }
      }
      if (canSearchForumPosts) {
        const push4 = items1.push;
        const obj15 = {
          source: tmp2(tmp3[27]),
          IconComponent: tmp5(tmp3[28]).MagnifyingGlassIcon,
          onPress() {
                  const obj = ForumActionCreatorsDefault;
                  const result = obj.updateForumSearchQuery(channel.id, "");
                },
          accessibilityLabel: intl4.string(tmp5(tmp3[26]).t["5h0QOP"])
        };
        intl4 = tmp5(tmp3[26]).intl;
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
        source: tmp2(tmp3[38]),
        IconComponent: tmp5(tmp3[39]).ThreadIcon,
        onPress() {
              return showThreadBrowserModalDefault(channel);
            },
        accessibilityLabel: intl6.string(tmp5(tmp3[26]).t.B2panI)
      };
      intl6 = tmp5(tmp3[26]).intl;
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
              const tmp = closure_1_1(closure_1_2[42]);
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
}
function WrappedChannelNavButtons(channelId) {
  let screenIndex;
  let showCreateThread;
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(5046);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        tmp4 = <ChannelActionButtons channel={stateFromStores} screenIndex={screenIndex} />;
      }
    }
  }
  return tmp4;
}
const View = react_native.View;
const THREADED_CHANNEL_TYPES = ChannelRecord.THREADED_CHANNEL_TYPES;
let closure_8 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
({ ChannelTypes: c9, ChannelTypesSets: c10, ComponentActions: unpackModuleId } = Constants);
let closure_12 = TrackingConstants.SearchEntrypointAnalyticsLocations;
const jsx = Fragment.jsx;
const createElement = react2.createElement;
let closure_15 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
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
  let obj2 = channelId(7310);
  if (obj2.useHasForumSearchQuery(channelId)) {
    const obj4 = { channelId };
    tmp4Result = tmp4(tmp(12834).ForumChannelCloseSearchButton, obj4);
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
  return <tmp5 style={containerStyle}>{tmp4Result}</tmp5>;
};

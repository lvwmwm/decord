// Module ID: 9167
// Function ID: 71689
// Name: JoinCallButton
// Dependencies: [31, 27, 5040, 1352, 1348, 4146, 9168, 653, 9169, 33, 4130, 9123, 689, 9170, 9172, 9173, 9179, 566, 5650, 22, 9180, 9306, 4341, 1212, 10061, 5786, 10062, 9175, 477, 3989, 10107, 10108, 10125, 1207, 3982, 10129, 4631, 10130, 10131, 10132, 4345, 10133, 10135, 2]
// Exports: default

// Module 9167 (JoinCallButton)
import "toAnalyticsSearchFilterType";
import { View } from "withErrorHandling";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { THREADED_CHANNEL_TYPES } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { setIsChannelDetailsSearchActive as closure_8 } from "createChannelState";
import ME from "ME";
import { SearchEntrypointAnalyticsLocations as closure_12 } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "reportDevtoolsEvent";
import { createElement } from "toAnalyticsSearchFilterType";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function JoinCallButton() {
  const obj = { size: "sm", color: importDefault(689).unsafe_rawColors.GREEN_360 };
  return jsx(require(9123) /* PhoneCallIcon */.PhoneCallIcon, { size: "sm", color: importDefault(689).unsafe_rawColors.GREEN_360 });
}
function EndCallButton() {
  const obj = { size: "sm", color: importDefault(689).unsafe_rawColors.RED_400 };
  return jsx(require(9170) /* PhoneHangUpIcon */.PhoneHangUpIcon, { size: "sm", color: importDefault(689).unsafe_rawColors.RED_400 });
}
function ChannelActionButtons(channel) {
  let channelHasThreads;
  let isChannelNSFWGated;
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  const tmp = callback();
  let obj = channel(items1[15]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp4 = screenIndex(items1[16])();
  let obj1 = channel(items1[17]);
  const items = [_isNativeReflectConstruct];
  items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = channel(items1[18]);
  const canJoinThreadVoice = obj2.useCanJoinThreadVoice(channel);
  let obj3 = channel(items1[17]);
  const items2 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => outer1_7.isInChannel(channel.id));
  let obj4 = channel(items1[17]);
  const items3 = [closure_7];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => !screenIndex(items1[19]).isEmpty(outer1_7.getVoiceStatesForChannel(channel.id)));
  let fn = screenIndex(items1[20])(channel);
  let obj5 = channel(items1[21]);
  const conversationsHeaderButton = obj5.useConversationsHeaderButton(channel);
  const tmp2 = screenIndex(items1[14])(channel);
  if (!tmp10) {
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      obj = {
        source: screenIndex(items1[24]),
        IconComponent: channel(items1[25]).MagnifyingGlassIcon,
        onPress() {
              let obj = screenIndex(items1[26]);
              obj = { channel };
              obj.open(obj);
            }
      };
      const intl4 = channel(items1[23]).intl;
      obj.accessibilityLabel = intl4.string(channel(items1[23]).t["5h0QOP"]);
      items1.push(obj);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          obj = {
            source: screenIndex(items1[24]),
            IconComponent: channel(items1[25]).MagnifyingGlassIcon,
            onPress() {
                      outer1_8(channel.id, true, "initial");
                      let obj = channel(items1[28]);
                      if (obj.isIOS()) {
                        let obj1 = channel(items1[29]);
                        const chatInputRef = obj1.getChatInputRef(channel.id, screenIndex);
                        if (null != chatInputRef) {
                          chatInputRef.blur();
                        }
                      }
                      const guildId = channel.getGuildId();
                      const isThreadResult = channel.isThread();
                      const channelDetailsSearchContext = channel(items1[30]).getChannelDetailsSearchContext(channel.id, guildId, isThreadResult);
                      const obj4 = channel(items1[30]);
                      obj = { searchContext: channelDetailsSearchContext, searchLocation: outer1_12.CHANNEL_HEADER };
                      screenIndex(items1[31]).trackSearchOpened(obj);
                      const obj5 = screenIndex(items1[31]);
                      if (obj7.isSwipeToMemberListEnabled()) {
                        const ComponentDispatch = tmp12(tmp13[33]).ComponentDispatch;
                        obj = { source: "channel-header-search", channelId: channel.id, screenIndex };
                        ComponentDispatch.dispatch(outer1_11.SHOW_CHANNEL_DETAILS, obj);
                      } else {
                        const rootNavigationRef = tmp12(tmp13[34]).getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          if (rootNavigationRef.isReady()) {
                            obj1 = { channelId: channel.id, search: true, source: "channel-header-search" };
                            rootNavigationRef.navigate("sidebar", obj1);
                          }
                        }
                      }
                    }
          };
          const intl2 = channel(items1[23]).intl;
          obj.accessibilityLabel = intl2.string(channel(items1[23]).t["5h0QOP"]);
          items1.push(obj);
        }
      }
      if (canSearchForumPosts) {
        obj1 = {
          source: screenIndex(items1[24]),
          IconComponent: channel(items1[25]).MagnifyingGlassIcon,
          onPress() {
                  const result = screenIndex(items1[27]).updateForumSearchQuery(channel.id, "");
                }
        };
        const intl3 = channel(items1[23]).intl;
        obj1.accessibilityLabel = intl3.string(channel(items1[23]).t["5h0QOP"]);
        items1.push(obj1);
      }
    }
    if (tmp4) {
      tmp4 = 0 !== items1.length;
    }
    if (!tmp4) {
      obj2 = { channel, isChannelNSFWGated: tmp2, channelHasThreads: stateFromStores };
      const channel2 = obj2.channel;
      ({ isChannelNSFWGated, channelHasThreads } = obj2);
      let hasItem = THREADED_CHANNEL_TYPES.has(channel2.type);
      let tmp31 = !hasItem && channelHasThreads;
      if (tmp31) {
        const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
        tmp31 = !GUILD_THREADS_ONLY.has(channel2.type);
      }
      if (hasItem) {
        hasItem = !isChannelNSFWGated;
      }
      if (hasItem) {
        hasItem = !channel2.isForumLikeChannel();
      }
      if (hasItem) {
        hasItem = tmp31;
      }
      tmp4 = !hasItem;
    }
    if (!tmp4) {
      obj3 = {
        source: screenIndex(items1[35]),
        IconComponent: channel(items1[36]).ThreadIcon,
        onPress() {
              return screenIndex(items1[37])(channel);
            }
      };
      const intl5 = channel(items1[23]).intl;
      obj3.accessibilityLabel = intl5.string(channel(items1[23]).t.B2panI);
      items1.unshift(obj3);
    }
    obj4 = {
      style: tmp.actionWrapper,
      children: items1.map((accessibilityLabel) => {
          let closure_0 = accessibilityLabel;
          if (accessibilityLabel === conversationsHeaderButton) {
            let obj = {
              isLast: tmp,
              children(arg0) {
                  let closure_0 = arg0;
                  const obj = { noMargin: true };
                  const merged = Object.assign(closure_0);
                  obj["onPress"] = function onPress(arg0) {
                    lib();
                    if (null != lib.onPress) {
                      lib.onPress(arg0);
                    }
                  };
                  return outer2_13(screenIndex(items1[39]), obj);
                }
            };
            let tmp9 = outer1_13(channel(items1[38]).ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
          } else {
            obj = { noMargin: tmp };
            let merged = Object.assign(accessibilityLabel);
            obj["key"] = accessibilityLabel.accessibilityLabel;
            tmp9 = outer1_14(screenIndex(items1[39]), obj);
            const tmp5 = screenIndex(items1[39]);
          }
          return tmp9;
        })
    };
    return <conversationsHeaderButton style={tmp.actionWrapper}>{items1.map((accessibilityLabel) => {
      let closure_0 = accessibilityLabel;
      if (accessibilityLabel === conversationsHeaderButton) {
        let obj = {
          isLast: tmp,
          children(arg0) {
              let closure_0 = arg0;
              const obj = { noMargin: true };
              const merged = Object.assign(closure_0);
              obj["onPress"] = function onPress(arg0) {
                lib();
                if (null != lib.onPress) {
                  lib.onPress(arg0);
                }
              };
              return outer2_13(screenIndex(items1[39]), obj);
            }
        };
        let tmp9 = outer1_13(channel(items1[38]).ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
      } else {
        obj = { noMargin: tmp };
        let merged = Object.assign(accessibilityLabel);
        obj["key"] = accessibilityLabel.accessibilityLabel;
        tmp9 = outer1_14(screenIndex(items1[39]), obj);
        const tmp5 = screenIndex(items1[39]);
      }
      return tmp9;
    })}</conversationsHeaderButton>;
  } else {
    obj5 = { source: null, IconComponent: stateFromStores1 ? EndCallButton : JoinCallButton };
    if (!stateFromStores1) {
      fn = () => channel(items1[22]).openChannelCallModal(channel);
    }
    obj5.onPress = fn;
    const intl = channel(items1[23]).intl;
    const string = intl.string;
    if (stateFromStores1) {
      let stringResult = string(_4ry6yi);
    } else {
      stringResult = string(_4ry6yi.My50nf);
    }
    obj5.accessibilityLabel = stringResult;
    obj5 = items1.push(obj5);
  }
}
function WrappedChannelNavButtons(channelId) {
  let screenIndex;
  let showCreateThread;
  channelId = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = channelId(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  channelId(4345);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        obj = { channel: stateFromStores, screenIndex };
        tmp4 = <ChannelActionButtons channel={stateFromStores} screenIndex={screenIndex} />;
      }
    }
  }
  return tmp4;
}
({ ChannelTypes: closure_9, ChannelTypesSets: closure_10, ComponentActions: closure_11 } = ME);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default function ChannelActions(channelId) {
  let containerStyle;
  let isDM;
  let isMultiUserDM;
  let showCreateThread;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  let obj = channelId(566);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    const channel = outer1_6.getChannel(channelId);
    let isMultiUserDMResult;
    if (null != channel) {
      isMultiUserDMResult = channel.isMultiUserDM();
    }
    obj.isMultiUserDM = null != isMultiUserDMResult && isMultiUserDMResult;
    const channel1 = outer1_6.getChannel(channelId);
    let isDMResult;
    if (null != channel1) {
      isDMResult = channel1.isDM();
    }
    obj.isDM = null != isDMResult && isDMResult;
    return obj;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  let obj1 = channelId(9173);
  obj = { style: containerStyle };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId };
    let tmp6 = jsx(channelId(10133).ForumChannelCloseSearchButton, { channelId });
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        obj1 = { channelId, screenIndex, showCreateThread };
        tmp6 = <WrappedChannelNavButtons channelId={channelId} screenIndex={screenIndex} showCreateThread={showCreateThread} />;
      }
    }
    const obj2 = { channelId, screenIndex };
    tmp6 = jsx(importDefault(10135), { channelId, screenIndex });
  }
  obj.children = tmp6;
  return <View style={containerStyle} />;
};

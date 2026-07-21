// Module ID: 9123
// Function ID: 71415
// Name: JoinCallButton
// Dependencies: []
// Exports: default

// Module 9123 (JoinCallButton)
function JoinCallButton() {
  const obj = { size: "sm", color: importDefault(dependencyMap[12]).unsafe_rawColors.GREEN_360 };
  return jsx(arg1(dependencyMap[11]).PhoneCallIcon, obj);
}
function EndCallButton() {
  const obj = { size: "sm", color: importDefault(dependencyMap[12]).unsafe_rawColors.RED_400 };
  return jsx(arg1(dependencyMap[13]).PhoneHangUpIcon, obj);
}
function ChannelActionButtons(channel) {
  let channelHasThreads;
  let isChannelNSFWGated;
  channel = channel.channel;
  const arg1 = channel;
  const importDefault = channel.screenIndex;
  const tmp = callback();
  let obj = arg1(dependencyMap[15]);
  const canSearchForumPosts = obj.useCanSearchForumPosts(channel);
  let tmp4 = importDefault(dependencyMap[16])();
  let obj1 = arg1(dependencyMap[17]);
  const items = [closure_4];
  const items1 = [];
  const dependencyMap = items1;
  const stateFromStores = obj1.useStateFromStores(items, () => closure_4.hasThreadsForChannel(channel.guild_id, channel.id));
  let obj2 = arg1(dependencyMap[18]);
  const canJoinThreadVoice = obj2.useCanJoinThreadVoice(channel);
  let obj3 = arg1(dependencyMap[17]);
  const items2 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => closure_7.isInChannel(channel.id));
  let obj4 = arg1(dependencyMap[17]);
  const items3 = [closure_7];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => !screenIndex(items1[19]).isEmpty(closure_7.getVoiceStatesForChannel(channel.id)));
  let fn = importDefault(dependencyMap[20])(channel);
  let obj5 = arg1(dependencyMap[21]);
  const conversationsHeaderButton = obj5.useConversationsHeaderButton(channel);
  const View = conversationsHeaderButton;
  const tmp2 = importDefault(dependencyMap[14])(channel);
  if (!tmp10) {
    const type = channel.type;
    if (constants.GUILD_DIRECTORY === type) {
      obj = {
        source: importDefault(dependencyMap[24]),
        IconComponent: arg1(dependencyMap[25]).MagnifyingGlassIcon,
        onPress() {
              let obj = screenIndex(items1[26]);
              obj = { channel };
              obj.open(obj);
            }
      };
      const intl4 = arg1(dependencyMap[23]).intl;
      obj.accessibilityLabel = intl4.string(arg1(dependencyMap[23]).t.5h0QOP);
      items1.push(obj);
    } else {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (null != conversationsHeaderButton) {
            items1.push(conversationsHeaderButton);
          }
          obj = {
            source: importDefault(dependencyMap[24]),
            IconComponent: arg1(dependencyMap[25]).MagnifyingGlassIcon,
            onPress() {
                      callback(channel.id, true, "initial");
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
                      obj = { searchContext: channelDetailsSearchContext, searchLocation: constants2.CHANNEL_HEADER };
                      screenIndex(items1[31]).trackSearchOpened(obj);
                      const obj5 = screenIndex(items1[31]);
                      if (obj7.isSwipeToMemberListEnabled()) {
                        const ComponentDispatch = tmp12(tmp13[33]).ComponentDispatch;
                        obj = { source: "channel-header-search", channelId: channel.id, screenIndex };
                        ComponentDispatch.dispatch(constants.SHOW_CHANNEL_DETAILS, obj);
                      } else {
                        const rootNavigationRef = tmp12(tmp13[34]).getRootNavigationRef();
                        if (null != rootNavigationRef) {
                          if (rootNavigationRef.isReady()) {
                            obj1 = { channelId: channel.id };
                            rootNavigationRef.navigate("sidebar", obj1);
                          }
                        }
                      }
                    }
          };
          const intl2 = arg1(dependencyMap[23]).intl;
          obj.accessibilityLabel = intl2.string(arg1(dependencyMap[23]).t.5h0QOP);
          items1.push(obj);
        }
      }
      if (canSearchForumPosts) {
        obj1 = {
          source: importDefault(dependencyMap[24]),
          IconComponent: arg1(dependencyMap[25]).MagnifyingGlassIcon,
          onPress() {
                  const result = screenIndex(items1[27]).updateForumSearchQuery(channel.id, "");
                }
        };
        const intl3 = arg1(dependencyMap[23]).intl;
        obj1.accessibilityLabel = intl3.string(arg1(dependencyMap[23]).t.5h0QOP);
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
        source: importDefault(dependencyMap[35]),
        IconComponent: arg1(dependencyMap[36]).ThreadIcon,
        onPress() {
              return screenIndex(items1[37])(channel);
            }
      };
      const intl5 = arg1(dependencyMap[23]).intl;
      obj3.accessibilityLabel = intl5.string(arg1(dependencyMap[23]).t.B2panI);
      items1.unshift(obj3);
    }
    obj4 = {
      style: tmp.actionWrapper,
      children: items1.map((accessibilityLabel) => {
          const channel = accessibilityLabel;
          if (accessibilityLabel === conversationsHeaderButton) {
            let obj = {
              isLast: tmp,
              children(arg0) {
                  const obj = { noMargin: true };
                  const merged = Object.assign(arg0);
                  obj["onPress"] = function onPress(arg0) {
                    arg0();
                    if (null != arg0.onPress) {
                      arg0.onPress(arg0);
                    }
                  };
                  return callback2(callback(closure_2[39]), obj);
                }
            };
            let tmp9 = callback2(channel(items1[38]).ConversationCoachmark, obj, accessibilityLabel.accessibilityLabel);
          } else {
            obj = { noMargin: tmp };
            const merged = Object.assign(accessibilityLabel);
            obj["key"] = accessibilityLabel.accessibilityLabel;
            tmp9 = callback3(screenIndex(items1[39]), obj);
            const tmp5 = screenIndex(items1[39]);
          }
          return tmp9;
        })
    };
    return <View {...obj4} />;
  } else {
    obj5 = { source: null, IconComponent: stateFromStores1 ? EndCallButton : JoinCallButton };
    if (!stateFromStores1) {
      fn = () => channel(items1[22]).openChannelCallModal(channel);
    }
    obj5.onPress = fn;
    const intl = arg1(dependencyMap[23]).intl;
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
  const arg1 = channelId.channelId;
  ({ screenIndex, showCreateThread } = channelId);
  let obj = arg1(dependencyMap[17]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  arg1(dependencyMap[40]);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (!tmp3) {
      tmp4 = null;
      if (!showCreateThread) {
        obj = { channel: stateFromStores, screenIndex };
        tmp4 = <ChannelActionButtons {...obj} />;
      }
    }
  }
  return tmp4;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const THREADED_CHANNEL_TYPES = arg1(dependencyMap[3]).THREADED_CHANNEL_TYPES;
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = arg1(dependencyMap[6]).setIsChannelDetailsSearchActive;
({ ChannelTypes: closure_9, ChannelTypesSets: closure_10, ComponentActions: closure_11 } = arg1(dependencyMap[7]));
let closure_12 = arg1(dependencyMap[8]).SearchEntrypointAnalyticsLocations;
const jsx = arg1(dependencyMap[9]).jsx;
const createElement = arg1(dependencyMap[0]).createElement;
const tmp3 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[10]).createStyles({ actionWrapper: {} });
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelActions.tsx");

export default function ChannelActions(channelId) {
  let containerStyle;
  let isDM;
  let isMultiUserDM;
  let showCreateThread;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  ({ containerStyle, showCreateThread } = channelId);
  let obj = arg1(dependencyMap[17]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    const channel = store.getChannel(channelId);
    let isMultiUserDMResult;
    if (null != channel) {
      isMultiUserDMResult = channel.isMultiUserDM();
    }
    obj.isMultiUserDM = null != isMultiUserDMResult && isMultiUserDMResult;
    const channel1 = store.getChannel(channelId);
    let isDMResult;
    if (null != channel1) {
      isDMResult = channel1.isDM();
    }
    obj.isDM = null != isDMResult && isDMResult;
    return obj;
  });
  ({ isMultiUserDM, isDM } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[15]);
  obj = { style: containerStyle };
  if (obj1.useHasForumSearchQuery(channelId)) {
    obj = { channelId };
    let tmp6 = jsx(arg1(dependencyMap[41]).ForumChannelCloseSearchButton, obj);
  } else {
    if (!isDM) {
      if (!isMultiUserDM) {
        obj1 = { channelId, screenIndex, showCreateThread };
        tmp6 = <WrappedChannelNavButtons {...obj1} />;
      }
    }
    const obj2 = { channelId, screenIndex };
    tmp6 = jsx(importDefault(dependencyMap[42]), obj2);
  }
  obj.children = tmp6;
  return <View {...obj} />;
};

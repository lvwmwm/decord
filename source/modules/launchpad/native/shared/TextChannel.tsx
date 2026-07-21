// Module ID: 15542
// Function ID: 118613
// Dependencies: []

// Module 15542
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const getThemedRippleConfig = arg1(dependencyMap[5]).getThemedRippleConfig;
const UnreadSetting = arg1(dependencyMap[6]).UnreadSetting;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles(() => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[9])().container.borderRadius };
  obj.pressable = obj;
  obj = { channels: true, selectedChannelId: "/assets/modules/stage_channels/native/images", selectedVoiceChannelId: 25, height: 24, flexDirection: null, paddingLeft: "b252f7dc065300671ba9347414eb0bad", borderColor: importDefault(dependencyMap[10]).colors.BORDER_MUTED, borderRadius: importDefault(dependencyMap[10]).radii.md };
  obj.selectedBorder = obj;
  obj.rowSelected = { borderRadius: importDefault(dependencyMap[10]).radii.md, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function TextChannel(channel) {
  let isMentionLowImportance;
  let isSubscriptionGated;
  let mentionCount;
  let needSubscriptionToAccess;
  let newChannel;
  let optInEnabled;
  let resolvedUnreadSetting;
  let selected;
  let showGuildBadgeIcon;
  let unread;
  channel = channel.channel;
  const arg1 = channel;
  let flag = channel.muted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.navigationReplace;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ selected, showGuildBadgeIcon } = channel);
  if (selected === undefined) {
    selected = false;
  }
  let importDefault;
  let dependencyMap;
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  let obj = arg1(dependencyMap[11]);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp3 = callback2(flag, unread);
  let obj1 = arg1(dependencyMap[12]);
  let obj2 = arg1(dependencyMap[13]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => newThreadCount.getNewThreadCount(channel.guild_id, channel.id));
  let obj3 = arg1(dependencyMap[13]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => channel.getChannel(channel.parent_id));
  const tmp6 = importDefault(dependencyMap[14])(stateFromStores1);
  if (null != tmp6) {
    const tmp7 = tmp6;
  }
  let obj4 = arg1(dependencyMap[15]);
  const unreadThreadsCountForParent = obj4.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  obj = {};
  let tmp10 = unread;
  if (unread) {
    tmp10 = !flag;
  }
  obj.unread = tmp10;
  const tmp9Result = importDefault(dependencyMap[16])(channel, obj);
  let obj6 = arg1(dependencyMap[17]);
  const isChannelSpoilerGated = obj6.useIsChannelSpoilerGated(channel);
  let obj7 = arg1(dependencyMap[18]);
  const fontScale = obj7.useFontScale();
  let obj8 = arg1(dependencyMap[13]);
  const items2 = [closure_6];
  const stateFromStores2 = obj8.useStateFromStores(items2, () => locale.locale);
  const tmp15 = importDefault(dependencyMap[19])();
  const tmp9 = importDefault(dependencyMap[16]);
  ({ isSubscriptionGated, needSubscriptionToAccess } = importDefault(dependencyMap[20])(channel.id));
  const arr4 = importDefault(dependencyMap[21])(channel);
  importDefault = arr4;
  if (null != tmp9Result) {
    if (!isChannelSpoilerGated) {
      obj = { channel, message: tmp9Result, color: "text-muted", muted: flag, layout: arg1(dependencyMap[23]).ChannelListLayoutTypes.COMPACT };
      let result = callback(arg1(dependencyMap[22]).ChannelRowPreview, obj);
    }
    dependencyMap = tmp24;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = arg1(dependencyMap[25]).useIsActivitiesInTextEnabled(channel.id);
    const memo = importAllResult.useMemo(() => {
      let tmp = null;
      if (tmp24) {
        const obj = { embeddedApps: arr4 };
        tmp = callback(arr4(tmp24[26]), obj);
      }
      return tmp;
    }, items3);
    const obj13 = arg1(dependencyMap[25]);
    obj1 = {};
    const items4 = [tmp3.pressable, ];
    let rowSelected;
    if (selected) {
      rowSelected = tmp3.rowSelected;
    }
    items4[1] = rowSelected;
    obj1.style = items4;
    obj1.underlayColor = tmp15;
    obj2 = { color: tmp15 };
    obj1.androidRippleConfig = getThemedRippleConfig(obj2);
    const tmp28 = importDefault(dependencyMap[27]);
    const tmp29 = closure_11;
    const merged = Object.assign(arg1(dependencyMap[29]).useTextChannelPressEvents(channel, flag2));
    const obj16 = arg1(dependencyMap[29]);
    obj3 = { channel, unread, mentionCount };
    const merged1 = Object.assign(arg1(dependencyMap[30]).getChannelAccessibilityProps(obj3));
    if (selected) {
      obj4 = { style: tmp3.selectedBorder, pointerEvents: "none" };
      selected = callback(View, obj4);
    }
    const items5 = [selected, ];
    const obj5 = { channel, channelCategoryName: tmp7, subtitle: result, hasActiveThreads: obj1.useHasActiveThreads(channel).hasActiveThreads };
    const obj17 = arg1(dependencyMap[30]);
    obj6 = { unread, resolvedUnreadSetting, muted: flag };
    obj5.unreadBadge = callback(importDefault(dependencyMap[31]), obj6);
    obj7 = {};
    const tmp42 = importDefault(dependencyMap[30]);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    obj7.newChannel = newChannel;
    obj7.mentionCount = mentionCount;
    obj7.isMentionLowImportance = isMentionLowImportance;
    let tmp45;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
            tmp45 = unreadThreadsCountForParent;
          }
        }
      }
    }
    obj7.postsWithUnreadsCount = tmp45;
    let tmp47;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          tmp47 = stateFromStores;
        }
      }
    }
    obj7.newPostCount = tmp47;
    obj7.locale = stateFromStores2;
    obj5.mentionBadge = importDefault(dependencyMap[32])(obj7);
    obj5.unread = unread;
    obj5.resolvedUnreadSetting = resolvedUnreadSetting;
    obj5.mentionCount = mentionCount;
    obj5.muted = flag;
    obj5.channelName = importDefault(dependencyMap[14])(channel);
    obj5.fontScale = fontScale;
    obj5.isSubscriptionGated = isSubscriptionGated;
    obj5.needSubscriptionToAccess = needSubscriptionToAccess;
    obj5.showGuildBadgeIcon = showGuildBadgeIcon;
    let tmp50 = null;
    if (isActivitiesInTextEnabled) {
      tmp50 = memo;
    }
    obj5.end = tmp50;
    items5[1] = tmp42(obj5);
    obj1["children"] = items5;
    return tmp28(tmp29(arg1(dependencyMap[28]).PressableHighlight, obj1));
  }
  const tmp16 = importDefault(dependencyMap[20])(channel.id);
  obj8 = { subtitle: channel.subtitle, muted: flag, channelId: channel.id, guildId: channel.guild_id };
  result = arg1(dependencyMap[24]).renderChannelSubtitle(obj8);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;

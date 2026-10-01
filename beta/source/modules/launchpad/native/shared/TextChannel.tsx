// Module ID: 16810
// Function ID: 16811
// Name: shared/TextChannel
// Dependencies: [19, 17, 5818, 2112, 2045, 1181, 5018, 21, 4836, 16479, 576, 15980, 6687, 504, 4989, 7310, 14864, 6747, 5288, 16811, 5314, 11541, 9568, 7304, 16813, 8789, 15864, 16807, 5435, 16814, 16478, 16808, 16809, 2]

// Module 16810 (shared/TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import FormConstants from "FormConstants" /* 1181 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 15864 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16479 */;
import react from "react" /* 19 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5818 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let unpackModuleId;
const View = react_native.View;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  let rect;
  const obj = { pressable: { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 }, selectedBorder: rect, rowSelected: { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED } };
  ({ flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 });
  rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md };
  ({ borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  return obj;
});
const memoResult = react.memo(function TextChannel(channel) {
  let closure_2;
  let isMentionLowImportance;
  let isSubscriptionGated;
  let items5;
  let locale;
  let mentionCount;
  let needSubscriptionToAccess;
  let newChannel;
  let obj11;
  let obj12;
  let obj7;
  let optInEnabled;
  let resolvedUnreadSetting;
  let selected;
  let showGuildBadgeIcon;
  let tmp38;
  let tmp40;
  let tmp41;
  let tmp8Result6;
  let unread;
  channel = channel.channel;
  let flag = channel.muted;
  const subtitle = channel.subtitle;
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
  let arr4;
  dependencyMap = undefined;
  const id = channel.id;
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  const guild_id = channel.guild_id;
  let obj = channel(15980);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = closure_12(flag, unread);
  const obj2 = channel(6687);
  const hasActiveThreads = obj2.useHasActiveThreads(channel).hasActiveThreads;
  const items = [ActiveJoinedThreadsStore];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items, () => ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id));
  const items1 = [ChannelStore];
  const obj4 = channel(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const tmp9 = arr4(4989)(stateFromStores1);
  const tmp2Result = channel(7310);
  const unreadThreadsCountForParent = tmp2Result.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  const tmp8Result = arr4(14864);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = tmp8Result(channel, { unread: tmp12 });
  const tmp2Result8 = channel(6747);
  const isChannelSpoilerGated = tmp2Result8.useIsChannelSpoilerGated(channel);
  const tmp2Result9 = channel(5288);
  const fontScale = tmp2Result9.useFontScale();
  const items2 = [LocaleStore];
  const tmp2Result10 = channel(504);
  const stateFromStores2 = tmp2Result10.useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(16811)();
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(5314)(channel.id));
  arr4(5314)(channel.id);
  arr4 = tmp8(11541)(channel);
  if (null != tmp8ResultResult) {
    let result;
    if (!isChannelSpoilerGated) {
      const obj5 = { channel, message: tmp8ResultResult, color: "text-muted", muted: flag, layout: channel(7304).ChannelListLayoutTypes.COMPACT };
      const ChannelRowPreview = tmp2(9568).ChannelRowPreview;
      result = closure_10(ChannelRowPreview, obj5);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const tmp2Result11 = channel(8789);
    const isActivitiesInTextEnabled = tmp2Result11.useIsActivitiesInTextEnabled(channel.id);
    const memo = react.useMemo(() => {
      let tmp = null;
      if (closure_2) {
        const obj = { embeddedApps: arr4 };
        tmp = authStore(ChannelItemEmbeddedActivitiesDefault, obj);
      }
      return tmp;
    }, items3);
    const items4 = [tmp5.pressable, ];
    let rowSelected;
    const tmp8Result4 = arr4(16807);
    const PressableHighlight = tmp2(5435).PressableHighlight;
    const tmp26 = closure_11;
    if (selected) {
      rowSelected = tmp5.rowSelected;
    }
    items4[1] = rowSelected;
    const obj6 = { style: items4, underlayColor: tmp17, androidRippleConfig: getThemedRippleConfig(obj7), children: items5 };
    obj7 = { color: tmp17 };
    const tmp2Result12 = channel(16814);
    const merged = Object.assign(tmp2Result12.useTextChannelPressEvents(channel, flag2));
    const obj8 = { channel, unread, mentionCount };
    const tmp2Result13 = channel(16478);
    const merged1 = Object.assign(tmp2Result13.getChannelAccessibilityProps(obj8));
    if (selected) {
      const obj9 = { style: tmp5.selectedBorder, pointerEvents: "none" };
      selected = closure_10(View, obj9);
    }
    items5 = [selected, ];
    const obj10 = { channel, channelCategoryName: tmp9, subtitle: result, hasActiveThreads, unreadBadge: closure_10(arr4(16808), obj11), mentionBadge: tmp8Result6(obj12), unread, resolvedUnreadSetting, mentionCount, muted: flag, channelName: arr4(4989)(channel), fontScale, isSubscriptionGated, needSubscriptionToAccess, showGuildBadgeIcon, end: tmp41 };
    obj11 = { unread, resolvedUnreadSetting, muted: flag };
    const tmp8Result5 = arr4(16478);
    tmp8Result6 = arr4(16809);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    obj12 = { newChannel, mentionCount, isMentionLowImportance, postsWithUnreadsCount: tmp38, newPostCount: tmp40, locale: stateFromStores2 };
    tmp38 = undefined;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
            tmp38 = unreadThreadsCountForParent;
          }
        }
      }
    }
    tmp40 = undefined;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          tmp40 = stateFromStores;
        }
      }
    }
    tmp41 = null;
    if (isActivitiesInTextEnabled) {
      tmp41 = memo;
    }
    items5[1] = tmp8Result5(obj10);
    return tmp8Result4(tmp26(PressableHighlight, obj6));
  }
  const tmp2Result14 = channel(16813);
  result = tmp2Result14.renderChannelSubtitle({ subtitle, muted: flag, channelId: id, guildId: guild_id });
});
let result = size.fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;

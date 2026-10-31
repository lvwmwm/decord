// Module ID: 19077
// Function ID: 19078
// Name: shared/TextChannel
// Dependencies: [19, 17, 6841, 2062, 4863, 1191, 6776, 21, 5014, 18720, 575, 18403, 7443, 504, 5652, 9838, 17297, 6753, 5642, 19078, 6045, 12247, 11039, 5692, 19080, 8961, 18281, 19074, 6980, 19081, 18719, 19075, 19076, 2]

// Module 19077 (shared/TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FormConstants from "FormConstants" /* 1191 */;
import ReadStateConstants from "ReadStateConstants" /* 6776 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 18281 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 18720 */;
import react from "react" /* 19 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6841 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj = channel(18403);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = closure_12(flag, unread);
  const obj2 = channel(7443);
  const hasActiveThreads = obj2.useHasActiveThreads(channel).hasActiveThreads;
  const items = [ActiveJoinedThreadsStore];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items, () => ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id));
  const items1 = [ChannelStore];
  const obj4 = channel(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const tmp9 = arr4(5652)(stateFromStores1);
  const tmp2Result = channel(9838);
  const unreadThreadsCountForParent = tmp2Result.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  const tmp8Result = arr4(17297);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = tmp8Result(channel, { unread: tmp12 });
  const tmp2Result8 = channel(6753);
  const isChannelSpoilerGated = tmp2Result8.useIsChannelSpoilerGated(channel);
  const tmp2Result9 = channel(5642);
  const fontScale = tmp2Result9.useFontScale();
  const items2 = [LocaleStore];
  const tmp2Result10 = channel(504);
  const stateFromStores2 = tmp2Result10.useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(19078)();
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(6045)(channel.id));
  arr4(6045)(channel.id);
  arr4 = tmp8(12247)(channel);
  if (null != tmp8ResultResult) {
    let result;
    if (!isChannelSpoilerGated) {
      const obj5 = { channel, message: tmp8ResultResult, color: "text-muted", muted: flag, layout: channel(5692).ChannelListLayoutTypes.COMPACT };
      const ChannelRowPreview = tmp2(11039).ChannelRowPreview;
      result = closure_10(ChannelRowPreview, obj5);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const tmp2Result11 = channel(8961);
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
    const tmp8Result4 = arr4(19074);
    const PressableHighlight = tmp2(6980).PressableHighlight;
    const tmp26 = closure_11;
    if (selected) {
      rowSelected = tmp5.rowSelected;
    }
    items4[1] = rowSelected;
    const obj6 = { style: items4, underlayColor: tmp17, androidRippleConfig: getThemedRippleConfig(obj7), children: items5 };
    obj7 = { color: tmp17 };
    const tmp2Result12 = channel(19081);
    const merged = Object.assign(tmp2Result12.useTextChannelPressEvents(channel, flag2));
    const obj8 = { channel, unread, mentionCount };
    const tmp2Result13 = channel(18719);
    const merged1 = Object.assign(tmp2Result13.getChannelAccessibilityProps(obj8));
    if (selected) {
      const obj9 = { style: tmp5.selectedBorder, pointerEvents: "none" };
      selected = closure_10(View, obj9);
    }
    items5 = [selected, ];
    const obj10 = { channel, channelCategoryName: tmp9, subtitle: result, hasActiveThreads, unreadBadge: closure_10(arr4(19075), obj11), mentionBadge: tmp8Result6(obj12), unread, resolvedUnreadSetting, mentionCount, muted: flag, channelName: arr4(5652)(channel), fontScale, isSubscriptionGated, needSubscriptionToAccess, showGuildBadgeIcon, end: tmp41 };
    obj11 = { unread, resolvedUnreadSetting, muted: flag };
    const tmp8Result5 = arr4(18719);
    tmp8Result6 = arr4(19076);
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
  const tmp2Result14 = channel(19080);
  result = tmp2Result14.renderChannelSubtitle({ subtitle, muted: flag, channelId: id, guildId: guild_id });
});
let result = size.fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;

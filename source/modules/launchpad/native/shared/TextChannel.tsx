// Module ID: 15737
// Function ID: 121367
// Dependencies: [31, 27, 5040, 1922, 1348, 1277, 4327, 33, 4131, 15729, 689, 14931, 5996, 566, 4321, 9065, 14268, 7668, 4550, 15738, 4575, 11171, 10220, 3809, 15740, 7952, 15124, 15730, 4661, 15741, 15742, 15733, 15736, 2]

// Module 15737
import importAllResult from "module_15733";
import { View } from "items";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { getThemedRippleConfig } from "semanticColor";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { flex: 1, borderRadius: importDefault(15729)().container.borderRadius, marginBottom: 1 };
  obj.pressable = obj;
  obj = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED, borderRadius: importDefault(689).radii.md };
  obj.selectedBorder = obj;
  obj.rowSelected = { borderRadius: importDefault(689).radii.md, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED };
  return obj;
});
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
  let arr4;
  let dependencyMap;
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  let obj = channel(14931);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp3 = callback2(flag, unread);
  let obj1 = channel(5996);
  let obj2 = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_5.getNewThreadCount(channel.guild_id, channel.id));
  let obj3 = channel(566);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_7.getChannel(channel.parent_id));
  const tmp6 = arr4(4321)(stateFromStores1);
  if (null != tmp6) {
    const tmp7 = tmp6;
  }
  let obj4 = channel(9065);
  const unreadThreadsCountForParent = obj4.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  obj = {};
  let tmp10 = unread;
  if (unread) {
    tmp10 = !flag;
  }
  obj.unread = tmp10;
  const tmp9Result = arr4(14268)(channel, obj);
  let obj6 = channel(7668);
  const isChannelSpoilerGated = obj6.useIsChannelSpoilerGated(channel);
  let obj7 = channel(4550);
  const fontScale = obj7.useFontScale();
  let obj8 = channel(566);
  const items2 = [closure_6];
  const stateFromStores2 = obj8.useStateFromStores(items2, () => outer1_6.locale);
  const tmp15 = arr4(15738)();
  const tmp9 = arr4(14268);
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(4575)(channel.id));
  arr4 = arr4(11171)(channel);
  if (null != tmp9Result) {
    if (!isChannelSpoilerGated) {
      obj = { channel, message: tmp9Result, color: "text-muted", muted: flag, layout: channel(3809).ChannelListLayoutTypes.COMPACT };
      let result = callback(channel(10220).ChannelRowPreview, obj);
    }
    dependencyMap = tmp24;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = channel(7952).useIsActivitiesInTextEnabled(channel.id);
    const memo = importAllResult.useMemo(() => {
      let tmp = null;
      if (_undefined) {
        const obj = { embeddedApps: arr4 };
        tmp = outer1_10(arr4(_undefined[26]), obj);
      }
      return tmp;
    }, items3);
    const obj13 = channel(7952);
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
    const tmp28 = arr4(15730);
    const tmp29 = closure_11;
    const merged = Object.assign(channel(15741).useTextChannelPressEvents(channel, flag2));
    const obj16 = channel(15741);
    obj3 = { channel, unread, mentionCount };
    const merged1 = Object.assign(channel(15742).getChannelAccessibilityProps(obj3));
    if (selected) {
      obj4 = { style: tmp3.selectedBorder, pointerEvents: "none" };
      selected = callback(View, obj4);
    }
    const items5 = [selected, ];
    const obj5 = { channel, channelCategoryName: tmp7, subtitle: result, hasActiveThreads: obj1.useHasActiveThreads(channel).hasActiveThreads };
    const obj17 = channel(15742);
    obj6 = { unread, resolvedUnreadSetting, muted: flag };
    obj5.unreadBadge = callback(arr4(15733), obj6);
    obj7 = {};
    const tmp42 = arr4(15742);
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
    obj5.mentionBadge = arr4(15736)(obj7);
    obj5.unread = unread;
    obj5.resolvedUnreadSetting = resolvedUnreadSetting;
    obj5.mentionCount = mentionCount;
    obj5.muted = flag;
    obj5.channelName = arr4(4321)(channel);
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
    return tmp28(tmp29(channel(4661).PressableHighlight, obj1));
  }
  const tmp16 = arr4(4575)(channel.id);
  obj8 = { subtitle: channel.subtitle, muted: flag, channelId: channel.id, guildId: channel.guild_id };
  result = channel(15740).renderChannelSubtitle(obj8);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;

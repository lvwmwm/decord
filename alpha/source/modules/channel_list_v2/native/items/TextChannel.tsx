// Module ID: 17656
// Function ID: 17657
// Name: TextChannel
// Dependencies: [19, 17, 4822, 4875, 4823, 4903, 6771, 6704, 12060, 21, 4971, 587, 17556, 8546, 8502, 13274, 558, 576, 5993, 504, 7411, 17657, 5707, 1126, 10691, 17555, 8882, 13863, 5604, 9018, 5234, 13275, 17658, 17659, 8913, 6886, 2]

// Module 17656 (TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import RoutingSourcesDefault from "RoutingSources" /* 1126 */;
import transitionToChannel2 from "transitionToChannel" /* 5707 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5993 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7411 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10691 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 17657 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import GatedChannelStore from "GatedChannelStore" /* 4875 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6704 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 12060 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const View = react_native.View;
({ CHANNEL_MARGIN_VERTICAL: unpackModuleId, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj4;
  let rect;
  const obj = { container: { position: "relative", marginVertical: unpackModuleId, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 }, selected: { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED }, selectedBorder: rect, row: { padding: 8, flexDirection: "row", alignItems: "center" }, rowWithSubtitle: { flexGrow: 1, paddingVertical: 6 }, channelLabel: { flexDirection: "column", flex: 1 }, channelLabelText: obj4 };
  ({ position: "relative", marginVertical: unpackModuleId, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED });
  rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS };
  obj4 = { textAlign: "left", flex: 1, lineHeight, opacity: num };
  num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  return obj;
});
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function TextChannel(channel) {
  let first;
  let hasUnread;
  let id;
  let isSubscriptionGated;
  let isSuggestedSection;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  const tmp2 = id;
  let obj = channel(id[17]);
  const cResult = obj.c(67);
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const isRulesChannel = channel.isRulesChannel;
  let tmp4 = closure_15(muted, selected);
  id = channel.id;
  const guild_id = channel.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    let tmp12;
    let tmp13;
    if (cResult[2] === id) {
      tmp12 = cResult[3];
      tmp13 = cResult[4];
    }
    const tmpResult = channel(tmp2[19]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp12, tmp13);
    ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
    if (cResult[5] === id) {
      if (cResult[8] === id) {
        let BookCheckIcon;
        let channelIcon;
        if (cResult[11] !== id) {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          cResult[11] = id;
          cResult[12] = O;
        } else {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
        }
        let obj2 = { muted, selected, unread: hasUnread && !muted, resolvedUnreadSetting, mentionCount: null, locked: false, channel };
        const tmp18 = hasUnread && !muted;
        const tmpResult5 = channel(tmp2[25]);
        class R {
          constructor() {
            const obj = ChannelActionCreatorsDefault;
            obj.preload(guild_id, id);
            const obj2 = preloadChannelAppFrame;
            const result = obj2.preloadChannelAppFrame(id);
          }
        }
        const channelMode = tmpResult5.getChannelMode(obj2);
        const tmpResult6 = channel(tmp2[26]);
        const isActivitiesInTextEnabled = tmpResult6.useIsActivitiesInTextEnabled(id);
        const tmp23 = null != isSuggestedSection(tmp2[27])(channel).runningLabel;
        if (isRulesChannel) {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
        } else {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
          const tmpResult7 = channel(tmp2[14]);
          BookCheckIcon = tmpResult7.getChannelIconComponent(channel, { isRulesChannel: false });
        }
        const obj3 = { mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon, isChannelLive: tmp23 };
        const tmpResult8 = channel(tmp2[15]);
        tmpResult8.BaseChannelIcon(obj3);
        isSuggestedSection(tmp2[28])(channel);
        class C {
          constructor() {
            let isSubscriptionGated;
            let needSubscriptionToAccess;
            let num;
            const obj = useChannelRoleSubscriptionStatus;
            const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
            const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
            ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
            num = 0;
            if (null != channel) {
              num = 0;
              if (null != channel.id) {
                num = 0;
                if ("" !== channel.id) {
                  const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp2.id);
                  let num2;
                  if (embeddedActivitiesForChannel != null) {
                    num2 = embeddedActivitiesForChannel.length;
                  }
                  if (num2 == null) {
                    num2 = 0;
                  }
                  num = num2;
                }
              }
            }
            return obj2;
          }
        }
        if (isActivitiesInTextEnabled) {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
        }
        if (cResult[13] === channel) {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
        }
        const obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: tmp27, isSubscriptionGated, needSubscriptionToAccess };
        cResult[13] = channel;
        cResult[14] = hasUnread;
        cResult[15] = isSubscriptionGated;
        cResult[16] = mentionCount;
        cResult[17] = needSubscriptionToAccess;
        cResult[18] = tmp27;
        cResult[19] = isSuggestedSection(tmp2[29])(obj4);
        const tmp29 = isSuggestedSection(tmp2[29])(obj4);
      }
      const fn = function k() {
        let tmp4;
        const transitionToChannel = transitionToChannel2.transitionToChannel;
        transitionToChannel2;
        const tmp3 = id;
        if (isSuggestedSection) {
          tmp4 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
          const obj = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
        }
        transitionToChannel(tmp3, tmp4);
      };
      cResult[8] = id;
      cResult[9] = isSuggestedSection;
      cResult[10] = fn;
      class R {
        constructor() {
          const obj = ChannelActionCreatorsDefault;
          obj.preload(guild_id, id);
          const obj2 = preloadChannelAppFrame;
          const result = obj2.preloadChannelAppFrame(id);
        }
      }
    }
    class R {
      constructor() {
        const obj = ChannelActionCreatorsDefault;
        obj.preload(guild_id, id);
        const obj2 = preloadChannelAppFrame;
        const result = obj2.preloadChannelAppFrame(id);
      }
    }
    let num2 = 5;
    cResult[5] = id;
    cResult[6] = guild_id;
    cResult[7] = R;
  }
  class C {
    constructor() {
      let isSubscriptionGated;
      let needSubscriptionToAccess;
      let num;
      const obj = useChannelRoleSubscriptionStatus;
      const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
      const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
      ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
      num = 0;
      if (null != channel) {
        num = 0;
        if (null != channel.id) {
          num = 0;
          if ("" !== channel.id) {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp2.id);
            let num2;
            if (embeddedActivitiesForChannel != null) {
              num2 = embeddedActivitiesForChannel.length;
            }
            if (num2 == null) {
              num2 = 0;
            }
            num = num2;
          }
        }
      }
      return obj2;
    }
  }
  const items1 = [channel, id];
  cResult[1] = channel;
  cResult[2] = id;
  cResult[3] = C;
  cResult[4] = items1;
  tmp13 = items1;
  tmp12 = C;
}) : (function TextChannel(channel) {
  let BookCheckIcon;
  let channelIcon;
  let combined;
  let hasUnread;
  let isSubscriptionGated;
  let isSuggestedSection;
  let items10;
  let items6;
  let items7;
  let items9;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let num;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let tmp2Result14;
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const isRulesChannel = channel.isRulesChannel;
  const tmp = closure_15(muted, selected);
  const id = channel.id;
  const guild_id = channel.guild_id;
  const tmp2 = channel;
  let tmp3 = id;
  let obj = channel(id[19]);
  const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isSubscriptionGated;
    let needSubscriptionToAccess;
    let num;
    const obj = useChannelRoleSubscriptionStatus;
    const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
    const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
    ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
    num = 0;
    if (null != channel) {
      num = 0;
      if (null != channel.id) {
        num = 0;
        if ("" !== channel.id) {
          const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp2.id);
          let num2;
          if (embeddedActivitiesForChannel != null) {
            num2 = embeddedActivitiesForChannel.length;
          }
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
      }
    }
    return obj2;
  }, items1);
  ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
  const items2 = [id, guild_id];
  const embeddedActivitiesCount = stateFromStoresObject.embeddedActivitiesCount;
  const items3 = [id, isSuggestedSection];
  const callback = guild_id.useCallback(() => {
    const obj = ChannelActionCreatorsDefault;
    obj.preload(guild_id, id);
    const obj2 = preloadChannelAppFrame;
    const result = obj2.preloadChannelAppFrame(id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let tmp4;
    const transitionToChannel = transitionToChannel2.transitionToChannel;
    transitionToChannel2;
    const tmp3 = id;
    if (isSuggestedSection) {
      tmp4 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
      const obj = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
    }
    transitionToChannel(tmp3, tmp4);
  }, items3);
  let tmp8 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp8 = !muted;
  }
  const tmp2Result = tmp2(tmp3[25]);
  const channelMode = tmp2Result.getChannelMode({ muted, selected, unread: tmp8, resolvedUnreadSetting, mentionCount, locked: false, channel });
  const tmp2Result8 = tmp2(tmp3[26]);
  const isActivitiesInTextEnabled = tmp2Result8.useIsActivitiesInTextEnabled(id);
  const runningLabel = isSuggestedSection(tmp3[27])(channel).runningLabel;
  const tmp12 = null != runningLabel;
  if (isRulesChannel) {
    channelIcon = tmp11(tmp3[12]);
    BookCheckIcon = tmp2(tmp3[13]).BookCheckIcon;
  } else {
    const tmp2Result9 = tmp2(tmp3[14]);
    channelIcon = tmp2Result9.getChannelIcon(channel, { isRulesChannel: false });
    const tmp2Result10 = tmp2(tmp3[14]);
    BookCheckIcon = tmp2Result10.getChannelIconComponent(channel, { isRulesChannel: false });
  }
  const tmp2Result11 = tmp2(tmp3[15]);
  let obj2 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
  num = 0;
  const BaseChannelIconResult = tmp2Result11.BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon, isChannelLive: tmp12 });
  const tmp15 = isSuggestedSection(tmp3[28])(channel);
  const tmp11Result3 = isSuggestedSection(tmp3[29]);
  if (isActivitiesInTextEnabled) {
    num = embeddedActivitiesCount;
  }
  const tmp11Result1Result = tmp11Result3(obj2);
  const obj3 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText, children: tmp15 };
  const Text = tmp2(tmp3[30]).Text;
  const tmp2Result12 = tmp2(tmp3[15]);
  const merged = Object.assign(tmp2Result12.useChannelNameTextProps(channelMode));
  const tmp20 = closure_13(Text, obj3);
  const items5 = [, ];
  const tmp11Result4 = isSuggestedSection(tmp3[35]);
  items5[0] = closure_13(isSuggestedSection(tmp3[31]), { unread: tmp8, resolvedUnreadSetting });
  const obj4 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: items6, accessible: true, accessibilityRole: "button", accessibilityLabel: combined, accessibilityState: { selected }, children: items7 };
  items6 = [tmp.container, ];
  const AnimatedPressableHighlight = tmp2(tmp3[34]).AnimatedPressableHighlight;
  items6[1] = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED && tmp.selected;
  combined = tmp11Result1Result;
  channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED && tmp.selected;
  if (null != runningLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp11Result1Result + ", " + runningLabel;
  }
  let tmp18Result = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED;
  if (tmp18Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp18Result = tmp18(View, obj5);
  }
  items7 = [tmp18Result, ];
  const items8 = [tmp.row, ];
  const obj6 = { style: items8, children: items9 };
  const tmp29 = null != subtitle && tmp.rowWithSubtitle;
  items8[1] = tmp29;
  items9 = [BaseChannelIconResult, , ];
  let tmp21Result = tmp20;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: items10 };
    items10 = [tmp20, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1, children: tmp2Result14.getChannelSubtitleData(subtitle).subtitle };
    const Text2 = tmp2(tmp3[30]).Text;
    const tmp2Result13 = tmp2(tmp3[15]);
    const merged1 = Object.assign(tmp2Result13.getChannelSubtitleTextProps(channelMode));
    tmp2Result14 = tmp2(tmp3[32]);
    items10[1] = closure_13(Text2, obj8);
    tmp21Result = tmp21(tmp28, obj7);
  }
  const obj9 = { children: items5 };
  items9[1] = tmp21Result;
  items9[2] = closure_13(isSuggestedSection(tmp3[33]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  items7[1] = closure_14(View, obj6);
  items5[1] = closure_14(AnimatedPressableHighlight, obj4);
  return closure_14(tmp11Result4, obj9);
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;

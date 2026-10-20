// Module ID: 17403
// Function ID: 17404
// Name: TextChannel
// Dependencies: [19, 17, 4799, 4852, 4800, 4880, 6722, 6655, 11934, 21, 4945, 587, 17307, 8495, 8451, 13089, 558, 576, 5951, 504, 7360, 13684, 5669, 1126, 10620, 17306, 8814, 5565, 5195, 13090, 8951, 17404, 17405, 8845, 6837, 2]

// Module 17403 (TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import RoutingSourcesDefault from "RoutingSources" /* 1126 */;
import transitionToChannel2 from "transitionToChannel" /* 5669 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5951 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7360 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10620 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13684 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4799 */;
import GatedChannelStore from "GatedChannelStore" /* 4852 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import PermissionStore from "PermissionStore" /* 4880 */;
import ReadStateStore from "ReadStateStore" /* 6722 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6655 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11934 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
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
        let channelIcon;
        let BookCheckIcon;
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
        const tmpResult6 = channel(tmp2[25]);
        class R {
          constructor() {
            const obj = ChannelActionCreatorsDefault;
            obj.preload(guild_id, id);
            const obj2 = preloadChannelAppFrame;
            const result = obj2.preloadChannelAppFrame(id);
          }
        }
        const channelMode = tmpResult6.getChannelMode(obj2);
        const tmpResult7 = channel(tmp2[26]);
        const isActivitiesInTextEnabled = tmpResult7.useIsActivitiesInTextEnabled(id);
        if (isRulesChannel) {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          channelIcon = isSuggestedSection(tmp2[12]);
          BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
        } else {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
          const tmpResult8 = channel(tmp2[14]);
          BookCheckIcon = tmpResult8.getChannelIconComponent(channel, { isRulesChannel: false });
        }
        const obj3 = { mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon };
        const tmpResult9 = channel(tmp2[15]);
        tmpResult9.BaseChannelIcon(obj3);
        const tmp24 = isSuggestedSection(tmp2[27])(channel);
        const channelLabelText = tmp4.channelLabelText;
        const tmpResult10 = channel(tmp2[15]);
        const channelNameTextProps = tmpResult10.useChannelNameTextProps(channelMode);
        if (cResult[13] === tmp24) {
          class O {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
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
        const obj4 = { experimental_useNativeText: true, lineClamp: 1, style: channelLabelText, children: tmp24 };
        const Text = tmp(tmp2[28]).Text;
        const merged = Object.assign(channelNameTextProps);
        cResult[13] = tmp24;
        cResult[14] = tmp4.channelLabelText;
        cResult[15] = channelNameTextProps;
        cResult[16] = closure_13(Text, obj4);
        const tmp30 = closure_13(Text, obj4);
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
  let obj4;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let tmp14Result;
  let tmp15;
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
  if (isRulesChannel) {
    channelIcon = isSuggestedSection(tmp3[12]);
    BookCheckIcon = tmp2(tmp3[13]).BookCheckIcon;
  } else {
    const tmp2Result9 = tmp2(tmp3[14]);
    channelIcon = tmp2Result9.getChannelIcon(channel, { isRulesChannel: false });
    const tmp2Result10 = tmp2(tmp3[14]);
    BookCheckIcon = tmp2Result10.getChannelIconComponent(channel, { isRulesChannel: false });
  }
  const tmp2Result11 = tmp2(tmp3[15]);
  let obj2 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText, children: tmp15 };
  const BaseChannelIconResult = tmp2Result11.BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  tmp15 = isSuggestedSection(tmp3[27])(channel);
  const Text = tmp2(tmp3[28]).Text;
  const tmp2Result12 = tmp2(tmp3[15]);
  const merged = Object.assign(tmp2Result12.useChannelNameTextProps(channelMode));
  const tmp18 = closure_13(Text, obj2);
  const items5 = [, ];
  const tmp20 = isSuggestedSection(tmp3[34]);
  items5[0] = closure_13(isSuggestedSection(tmp3[29]), { unread: tmp8, resolvedUnreadSetting });
  const obj3 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: items6, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp14Result(obj4), accessibilityState: { selected }, children: items7 };
  items6 = [tmp.container, ];
  const AnimatedPressableHighlight = tmp2(tmp3[33]).AnimatedPressableHighlight;
  items6[1] = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED && tmp.selected;
  obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
  num = 0;
  channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED && tmp.selected;
  tmp14Result = isSuggestedSection(tmp3[30]);
  if (isActivitiesInTextEnabled) {
    num = embeddedActivitiesCount;
  }
  let tmp16Result = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED;
  if (tmp16Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp16Result = tmp16(View, obj5);
  }
  items7 = [tmp16Result, ];
  const items8 = [tmp.row, ];
  const obj6 = { style: items8, children: items9 };
  const tmp26 = null != subtitle && tmp.rowWithSubtitle;
  items8[1] = tmp26;
  items9 = [BaseChannelIconResult, , ];
  let tmp19Result = tmp18;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: items10 };
    items10 = [tmp18, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1, children: tmp2Result14.getChannelSubtitleData(subtitle).subtitle };
    const Text2 = tmp2(tmp3[28]).Text;
    const tmp2Result13 = tmp2(tmp3[15]);
    const merged1 = Object.assign(tmp2Result13.getChannelSubtitleTextProps(channelMode));
    tmp2Result14 = tmp2(tmp3[31]);
    items10[1] = closure_13(Text2, obj8);
    tmp19Result = tmp19(tmp25, obj7);
  }
  const obj9 = { children: items5 };
  items9[1] = tmp19Result;
  items9[2] = closure_13(isSuggestedSection(tmp3[32]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  items7[1] = closure_14(View, obj6);
  items5[1] = closure_14(AnimatedPressableHighlight, obj3);
  return closure_14(tmp20, obj9);
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;

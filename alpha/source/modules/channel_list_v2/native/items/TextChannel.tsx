// Module ID: 17932
// Function ID: 17933
// Name: TextChannel
// Dependencies: [19, 17, 4855, 4908, 4856, 4936, 6806, 6739, 11992, 21, 5004, 587, 17832, 8583, 8539, 13507, 558, 576, 6029, 504, 7448, 17933, 5743, 1123, 10726, 17831, 8916, 14097, 17934, 14003, 5640, 9051, 5270, 13508, 17936, 17937, 8947, 6922, 2]

// Module 17932 (TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import RoutingSourcesDefault from "RoutingSources" /* 1123 */;
import transitionToChannel2 from "transitionToChannel" /* 5743 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 6029 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7448 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10726 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 17933 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4855 */;
import GatedChannelStore from "GatedChannelStore" /* 4908 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import ReadStateStore from "ReadStateStore" /* 6806 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6739 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11992 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1, preloadResult, str, tmp5, transitionToChannelResult;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const View = react_native.View;
({ CHANNEL_MARGIN_VERTICAL: unpackModuleId, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj5;
  let rect;
  const obj = { container: { position: "relative", marginVertical: unpackModuleId, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 }, selected: { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED }, selectedBorder: rect, row: { padding: 8, flexDirection: "row", alignItems: "center" }, rowWithSubtitle: { flexGrow: 1, paddingVertical: 6 }, appSoundIcon: { marginStart: nativeDefault.space.PX_4 }, channelLabel: { flexDirection: "column", flex: 1 }, channelLabelText: obj5 };
  ({ position: "relative", marginVertical: unpackModuleId, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED });
  rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS };
  obj5 = { textAlign: "left", flex: 1, lineHeight, opacity: num };
  num = 1;
  ({ marginStart: nativeDefault.space.PX_4 });
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
  let runningLabel;
  let selected;
  let subtitle;
  let userMuted;
  const tmp2 = id;
  let obj = channel(id[17]);
  const cResult = obj.c(72);
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
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          class B {
            constructor() {
              tmp = closure_2;
              tmp2 = closure_0(closure_2[22]);
              tmp4 = undefined;
              transitionToChannel = tmp2.transitionToChannel;
              tmp3 = id;
              if (isSuggestedSection) {
                obj = { source: null };
                tmp5 = closure_1;
                obj.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
                tmp4 = obj;
              }
              transitionToChannelResult = transitionToChannel(tmp3, tmp4);
              return;
            }
          }
          cResult[12] = F;
        } else {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        class B {
          constructor() {
            tmp = closure_2;
            tmp2 = closure_0(closure_2[22]);
            tmp4 = undefined;
            transitionToChannel = tmp2.transitionToChannel;
            tmp3 = id;
            if (isSuggestedSection) {
              obj = { source: null };
              tmp5 = closure_1;
              obj.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
              tmp4 = obj;
            }
            transitionToChannelResult = transitionToChannel(tmp3, tmp4);
            return;
          }
        }
        let obj2 = { muted, selected, unread: tmp18, resolvedUnreadSetting, mentionCount: null, locked: false, channel };
        const tmpResult4 = channel(tmp2[25]);
        class G {
          constructor() {
            obj = closure_1(closure_2[20]);
            preloadResult = obj.preload(guild_id, id);
            obj2 = closure_0(closure_2[21]);
            result = obj2.preloadChannelAppFrame(id);
            return;
          }
        }
        const channelMode = tmpResult4.getChannelMode(obj2);
        const tmpResult5 = channel(tmp2[26]);
        const isActivitiesInTextEnabled = tmpResult5.useIsActivitiesInTextEnabled(id);
        ({ runningLabel, userMuted } = isSuggestedSection(tmp2[27])(channel));
        isSuggestedSection(tmp2[27])(channel);
        if (userMuted) {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        } else {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          if (tmp23) {
            class F {
              constructor() {
                obj = closure_0(closure_2[24]);
                result = obj.openChannelLongPressActionSheet(id);
                return;
              }
            }
          }
        }
        if (isRulesChannel) {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
        } else {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
          class B {
            constructor() {
              tmp = closure_2;
              tmp2 = closure_0(closure_2[22]);
              tmp4 = undefined;
              transitionToChannel = tmp2.transitionToChannel;
              tmp3 = id;
              if (isSuggestedSection) {
                obj = { source: null };
                tmp5 = closure_1;
                obj.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
                tmp4 = obj;
              }
              transitionToChannelResult = transitionToChannel(tmp3, tmp4);
              return;
            }
          }
          BookCheckIcon = obj7.getChannelIconComponent(channel, { isRulesChannel: false });
        }
        const obj3 = { mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon, isChannelLive: null };
        const tmpResult6 = channel(tmp2[15]);
        class C {
          constructor() {
            obj = closure_0(closure_2[18]);
            channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_7, closure_6, closure_8);
            obj1 = { hasUnread: closure_9.hasUnread(id), mentionCount: closure_9.getMentionCount(id), resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
            ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
            tmp2 = channel;
            num = 0;
            if (null != channel) {
              num = 0;
              if (null != tmp2.id) {
                str = "";
                num = 0;
                if ("" !== tmp2.id) {
                  tmp3 = closure_5;
                  embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp2.id);
                  num2 = undefined;
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
            obj1.embeddedActivitiesCount = num;
            obj1.isSubscriptionGated = isSubscriptionGated;
            obj1.needSubscriptionToAccess = needSubscriptionToAccess;
            return obj1;
          }
        }
        tmpResult6.BaseChannelIcon(obj3);
        isSuggestedSection(tmp2[30])(channel);
        if (isActivitiesInTextEnabled) {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        if (cResult[13] === channel) {
          class F {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        const obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: 0, isSubscriptionGated, needSubscriptionToAccess };
        cResult[13] = channel;
        cResult[14] = hasUnread;
        cResult[15] = isSubscriptionGated;
        cResult[16] = mentionCount;
        cResult[17] = needSubscriptionToAccess;
        cResult[18] = 0;
        cResult[19] = isSuggestedSection(tmp2[31])(obj4);
        const tmp30 = isSuggestedSection(tmp2[31])(obj4);
      }
      class B {
        constructor() {
          tmp = closure_2;
          tmp2 = closure_0(closure_2[22]);
          tmp4 = undefined;
          transitionToChannel = tmp2.transitionToChannel;
          tmp3 = id;
          if (isSuggestedSection) {
            obj = { source: null };
            tmp5 = closure_1;
            obj.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
            tmp4 = obj;
          }
          transitionToChannelResult = transitionToChannel(tmp3, tmp4);
          return;
        }
      }
      cResult[8] = id;
      cResult[9] = isSuggestedSection;
      cResult[10] = B;
      class G {
        constructor() {
          obj = closure_1(closure_2[20]);
          preloadResult = obj.preload(guild_id, id);
          obj2 = closure_0(closure_2[21]);
          result = obj2.preloadChannelAppFrame(id);
          return;
        }
      }
    }
    class G {
      constructor() {
        obj = closure_1(closure_2[20]);
        preloadResult = obj.preload(guild_id, id);
        obj2 = closure_0(closure_2[21]);
        result = obj2.preloadChannelAppFrame(id);
        return;
      }
    }
    let num2 = 5;
    cResult[5] = id;
    cResult[6] = guild_id;
    cResult[7] = G;
  }
  class C {
    constructor() {
      obj = closure_0(closure_2[18]);
      channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_7, closure_6, closure_8);
      obj1 = { hasUnread: closure_9.hasUnread(id), mentionCount: closure_9.getMentionCount(id), resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
      ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
      tmp2 = channel;
      num = 0;
      if (null != channel) {
        num = 0;
        if (null != tmp2.id) {
          str = "";
          num = 0;
          if ("" !== tmp2.id) {
            tmp3 = closure_5;
            embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp2.id);
            num2 = undefined;
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
      obj1.embeddedActivitiesCount = num;
      obj1.isSubscriptionGated = isSubscriptionGated;
      obj1.needSubscriptionToAccess = needSubscriptionToAccess;
      return obj1;
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
  let WaveformSlashIcon;
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
  let runningLabel;
  let selected;
  let subtitle;
  let tmp2Result14;
  let userMuted;
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
  ({ runningLabel, userMuted } = isSuggestedSection(tmp3[27])(channel));
  isSuggestedSection(tmp3[27])(channel);
  if (userMuted) {
    WaveformSlashIcon = tmp2(tmp3[28]).WaveformSlashIcon;
  } else {
    WaveformSlashIcon = null;
    if (tmp13) {
      WaveformSlashIcon = tmp2(tmp3[29]).WaveformIcon;
    }
  }
  const tmp15 = null != runningLabel;
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
  const BaseChannelIconResult = tmp2Result11.BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon, isChannelLive: tmp15 });
  const tmp18 = isSuggestedSection(tmp3[30])(channel);
  const tmp11Result3 = isSuggestedSection(tmp3[31]);
  if (isActivitiesInTextEnabled) {
    num = embeddedActivitiesCount;
  }
  const tmp11Result1Result = tmp11Result3(obj2);
  const obj3 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText, children: tmp18 };
  const Text = tmp2(tmp3[32]).Text;
  const tmp2Result12 = tmp2(tmp3[15]);
  const merged = Object.assign(tmp2Result12.useChannelNameTextProps(channelMode));
  const tmp23 = closure_13(Text, obj3);
  const items5 = [, ];
  const tmp11Result4 = isSuggestedSection(tmp3[37]);
  items5[0] = closure_13(isSuggestedSection(tmp3[33]), { unread: tmp8, resolvedUnreadSetting });
  const obj4 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: items6, accessible: true, accessibilityRole: "button", accessibilityLabel: combined, accessibilityState: { selected }, children: items7 };
  items6 = [tmp.container, ];
  const AnimatedPressableHighlight = tmp2(tmp3[36]).AnimatedPressableHighlight;
  items6[1] = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED && tmp.selected;
  combined = tmp11Result1Result;
  channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED && tmp.selected;
  if (null != runningLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp11Result1Result + ", " + runningLabel;
  }
  let tmp21Result = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED;
  if (tmp21Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp21Result = tmp21(View, obj5);
  }
  items7 = [tmp21Result, ];
  const items8 = [tmp.row, ];
  const obj6 = { style: items8, children: items9 };
  const tmp32 = null != subtitle && tmp.rowWithSubtitle;
  items8[1] = tmp32;
  items9 = [BaseChannelIconResult, , , ];
  let tmp24Result = tmp23;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: items10 };
    items10 = [tmp23, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1, children: tmp2Result14.getChannelSubtitleData(subtitle).subtitle };
    const Text2 = tmp2(tmp3[32]).Text;
    const tmp2Result13 = tmp2(tmp3[15]);
    const merged1 = Object.assign(tmp2Result13.getChannelSubtitleTextProps(channelMode));
    tmp2Result14 = tmp2(tmp3[34]);
    items10[1] = closure_13(Text2, obj8);
    tmp24Result = tmp24(tmp31, obj7);
  }
  items9[1] = tmp24Result;
  let tmp21Result2 = null;
  if (null != WaveformSlashIcon) {
    const colors = tmp11(tmp3[11]).colors;
    const obj9 = { size: "xs", color: userMuted ? colors.ICON_MUTED : colors.STATUS_POSITIVE, style: tmp.appSoundIcon };
    tmp21Result2 = tmp21(WaveformSlashIcon, obj9);
  }
  const obj10 = { children: items5 };
  items9[2] = tmp21Result2;
  items9[3] = closure_13(isSuggestedSection(tmp3[35]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  items7[1] = closure_14(View, obj6);
  items5[1] = closure_14(AnimatedPressableHighlight, obj4);
  return closure_14(tmp11Result4, obj10);
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;

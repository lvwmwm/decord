// Module ID: 17244
// Function ID: 17245
// Name: TextChannel
// Dependencies: [19, 17, 2064, 2117, 2065, 4806, 6251, 6182, 11797, 21, 5151, 587, 17147, 8420, 8376, 12932, 558, 576, 5473, 504, 7234, 17245, 5162, 1124, 10516, 17146, 8731, 5481, 5147, 12933, 8868, 17246, 17247, 8762, 17252, 6382, 2]

// Module 17244 (TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import RoutingSourcesDefault from "RoutingSources" /* 1124 */;
import transitionToChannel2 from "transitionToChannel" /* 5162 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5473 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7234 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10516 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 17245 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import GatedChannelStore from "GatedChannelStore" /* 2117 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4806 */;
import ReadStateStore from "ReadStateStore" /* 6251 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6182 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11797 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5151 */;
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
  const cResult = obj.c(71);
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const isRulesChannel = channel.isRulesChannel;
  let tmp4 = closure_15(muted, selected);
  id = channel.id;
  const guild_id = channel.guild_id;
  guild_id.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    let tmp13;
    let tmp14;
    if (cResult[2] === id) {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    const tmpResult = channel(tmp2[19]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp13, tmp14);
    ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
    if (cResult[5] === id) {
      if (cResult[8] === id) {
        let channelIcon;
        let channelIconComponent;
        if (cResult[11] !== id) {
          class V {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          class O {
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
          cResult[12] = V;
        } else {
          class V {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        class O {
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
        let obj2 = { muted, selected, unread: tmp19, resolvedUnreadSetting, mentionCount: null, locked: false, channel };
        const tmpResult5 = channel(tmp2[25]);
        class P {
          constructor() {
            obj = closure_1(closure_2[20]);
            preloadResult = obj.preload(guild_id, id);
            obj2 = closure_0(closure_2[21]);
            result = obj2.preloadChannelAppFrame(id);
            return;
          }
        }
        const channelMode = tmpResult5.getChannelMode(obj2);
        const tmpResult6 = channel(tmp2[26]);
        const isActivitiesInTextEnabled = tmpResult6.useIsActivitiesInTextEnabled(id);
        if (isRulesChannel) {
          class V {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          channelIcon = isSuggestedSection(tmp2[12]);
          class O {
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
        } else {
          class V {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
          class O {
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
          channelIconComponent = obj7.getChannelIconComponent(channel, { isRulesChannel: false });
        }
        const obj3 = { mode: channelMode, source: channelIcon, IconComponent: channelIconComponent };
        const tmpResult7 = channel(tmp2[15]);
        tmpResult7.BaseChannelIcon(obj3);
        const tmp26 = isSuggestedSection(tmp2[27])(channel);
        const channelLabelText = tmp4.channelLabelText;
        const tmpResult8 = channel(tmp2[15]);
        const channelNameTextProps = tmpResult8.useChannelNameTextProps(channelMode);
        if (cResult[13] === tmp26) {
          class V {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        const obj4 = { experimental_useNativeText: true, lineClamp: 1, style: channelLabelText, children: tmp26 };
        class S {
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
        const Text = tmp(tmp2[28]).Text;
        const merged = Object.assign(channelNameTextProps);
        cResult[13] = tmp26;
        cResult[14] = tmp4.channelLabelText;
        cResult[15] = channelNameTextProps;
        cResult[16] = closure_13(Text, obj4);
        const tmp32 = closure_13(Text, obj4);
      }
      class O {
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
      cResult[10] = O;
      class P {
        constructor() {
          obj = closure_1(closure_2[20]);
          preloadResult = obj.preload(guild_id, id);
          obj2 = closure_0(closure_2[21]);
          result = obj2.preloadChannelAppFrame(id);
          return;
        }
      }
    }
    class P {
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
    cResult[7] = P;
  }
  class S {
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
  cResult[3] = S;
  cResult[4] = items1;
  tmp14 = items1;
  tmp13 = S;
}) : (function TextChannel(channel) {
  let BookCheckIcon;
  let channelIcon;
  let hasUnread;
  let isSubscriptionGated;
  let isSuggestedSection;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let num;
  let obj4;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let tmp15Result;
  let tmp16;
  let tmp3Result14;
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const isRulesChannel = channel.isRulesChannel;
  const tmp = closure_15(muted, selected);
  const id = channel.id;
  const guild_id = channel.guild_id;
  const ref = guild_id.useRef(null);
  let tmp3 = channel;
  let tmp4 = id;
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
  let tmp9 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp9 = !muted;
  }
  const tmp3Result = tmp3(tmp4[25]);
  const channelMode = tmp3Result.getChannelMode({ muted, selected, unread: tmp9, resolvedUnreadSetting, mentionCount, locked: false, channel });
  const tmp3Result8 = tmp3(tmp4[26]);
  const isActivitiesInTextEnabled = tmp3Result8.useIsActivitiesInTextEnabled(id);
  if (isRulesChannel) {
    channelIcon = isSuggestedSection(tmp4[12]);
    BookCheckIcon = tmp3(tmp4[13]).BookCheckIcon;
  } else {
    const tmp3Result9 = tmp3(tmp4[14]);
    channelIcon = tmp3Result9.getChannelIcon(channel, { isRulesChannel: false });
    const tmp3Result10 = tmp3(tmp4[14]);
    BookCheckIcon = tmp3Result10.getChannelIconComponent(channel, { isRulesChannel: false });
  }
  const tmp3Result11 = tmp3(tmp4[15]);
  let obj2 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText, children: tmp16 };
  const BaseChannelIconResult = tmp3Result11.BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  tmp16 = isSuggestedSection(tmp4[27])(channel);
  const Text = tmp3(tmp4[28]).Text;
  const tmp3Result12 = tmp3(tmp4[15]);
  const merged = Object.assign(tmp3Result12.useChannelNameTextProps(channelMode));
  const tmp19 = closure_13(Text, obj2);
  const children = [, , ];
  const tmp21 = isSuggestedSection(tmp4[35]);
  children[0] = closure_13(isSuggestedSection(tmp4[29]), { unread: tmp9, resolvedUnreadSetting });
  const obj3 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: items6, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp15Result(obj4), accessibilityState: { selected }, children: items7 };
  items6 = [tmp.container, ];
  const AnimatedPressableHighlight = tmp3(tmp4[33]).AnimatedPressableHighlight;
  items6[1] = channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED && tmp.selected;
  obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
  num = 0;
  channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED && tmp.selected;
  tmp15Result = isSuggestedSection(tmp4[30]);
  if (isActivitiesInTextEnabled) {
    num = embeddedActivitiesCount;
  }
  let tmp17Result = channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED;
  if (tmp17Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp17Result = tmp17(View, obj5);
  }
  items7 = [tmp17Result, ];
  const obj6 = { ref, style: items8, children: items9 };
  items8 = [tmp.row, null != subtitle && tmp.rowWithSubtitle];
  items9 = [BaseChannelIconResult, , ];
  let tmp20Result = tmp19;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: items10 };
    items10 = [tmp19, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1, children: tmp3Result14.getChannelSubtitleData(subtitle).subtitle };
    const Text2 = tmp3(tmp4[28]).Text;
    const tmp3Result13 = tmp3(tmp4[15]);
    const merged1 = Object.assign(tmp3Result13.getChannelSubtitleTextProps(channelMode));
    tmp3Result14 = tmp3(tmp4[31]);
    items10[1] = closure_13(Text2, obj8);
    tmp20Result = tmp20(tmp26, obj7);
  }
  items9[1] = tmp20Result;
  items9[2] = closure_13(isSuggestedSection(tmp4[32]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  items7[1] = closure_14(View, obj6);
  children[1] = closure_14(AnimatedPressableHighlight, obj3);
  if (selected) {
    const obj9 = { targetRef: ref, channelType: channel.type };
    selected = tmp17(tmp15(tmp4[34]), obj9);
  }
  children[2] = selected;
  return closure_14(tmp21, { children });
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;

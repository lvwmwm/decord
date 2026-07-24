// Module ID: 15095
// Function ID: 114914
// Dependencies: [31, 27, 1347, 1908, 1348, 3758, 4142, 4325, 10289, 33, 4130, 689, 15017, 4633, 4593, 11452, 1324, 566, 4574, 4140, 4138, 1210, 9137, 15016, 8005, 4320, 4126, 5515, 10333, 8416, 8494, 15096, 15097, 2]

// Module 15095
import importAllResult from "getChannelSubtitleData";
import { View } from "set";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import hairlineWidth from "hairlineWidth";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = hairlineWidth);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { position: "relative", marginVertical: closure_11, marginHorizontal: 8, borderRadius: importDefault(689).modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 };
  obj.container = obj;
  obj = { backgroundColor: importDefault(689).colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.selected = obj;
  const obj1 = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1 };
  let BORDER_MUTED;
  if (!flag) {
    BORDER_MUTED = importDefault(689).colors.BORDER_MUTED;
  }
  obj1.borderColor = BORDER_MUTED;
  obj1.borderRadius = importDefault(689).modules.mobile.CHANNEL_ITEM_RADIUS;
  obj.selectedBorder = obj1;
  obj.row = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj.rowWithSubtitle = { flexGrow: 1, paddingVertical: 6 };
  obj.channelLabel = { flexDirection: "column", flex: 1 };
  const obj2 = { textAlign: "left", flex: 1, lineHeight: closure_12 };
  let num2 = 1;
  if (arg0) {
    num2 = 1;
    if (!arg1) {
      num2 = 0.5;
    }
  }
  obj2.opacity = num2;
  obj.channelLabelText = obj2;
  return obj;
});
const memoResult = importAllResult.memo((channel) => {
  let hasUnread;
  let isSubscriptionGated;
  let isSuggestedSection;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const tmp = callback3(muted, selected, isSuggestedSection(id[16])("TextChannel"));
  id = channel.id;
  const guild_id = channel.guild_id;
  let obj = channel(id[17]);
  const items = [closure_7, _isNativeReflectConstruct, closure_8, closure_9, closure_10, closure_5];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isSubscriptionGated;
    let needSubscriptionToAccess;
    let obj = channel(id[18]);
    const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, outer1_7, outer1_6, outer1_8);
    obj = { hasUnread: outer1_9.hasUnread(id), mentionCount: outer1_9.getMentionCount(id), resolvedUnreadSetting: outer1_10.resolveUnreadSetting(channel) };
    ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
    let num = 0;
    if (null != channel) {
      num = 0;
      if (null != channel.id) {
        num = 0;
        if ("" !== channel.id) {
          const embeddedActivitiesForChannel = outer1_5.getEmbeddedActivitiesForChannel(channel.id);
          let length;
          if (null != embeddedActivitiesForChannel) {
            length = embeddedActivitiesForChannel.length;
          }
          num = 0;
          if (null != length) {
            num = length;
          }
        }
      }
    }
    obj.embeddedActivitiesCount = num;
    obj.isSubscriptionGated = isSubscriptionGated;
    obj.needSubscriptionToAccess = needSubscriptionToAccess;
    return obj;
  }, items1);
  ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
  const items2 = [id, guild_id];
  const items3 = [id, isSuggestedSection];
  const callback = guild_id.useCallback(() => {
    isSuggestedSection(id[19]).preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let obj = channel(id[20]);
    let tmp2;
    if (isSuggestedSection) {
      obj = { source: isSuggestedSection(id[21]).CHANNEL_LIST_SUGGESTED_SECTION };
      tmp2 = obj;
    }
    obj.transitionToChannel(id, tmp2);
  }, items3);
  let tmp6 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const result = channel(id[22]).openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp6 = !muted;
  }
  let obj1 = channel(id[23]);
  obj = { muted, selected, unread: tmp6, resolvedUnreadSetting, mentionCount, locked: false, channel };
  const channelMode = obj1.getChannelMode(obj);
  let obj3 = channel(id[24]);
  const isActivitiesInTextEnabled = obj3.useIsActivitiesInTextEnabled(id);
  obj = { channel, isRulesChannel: channel.isRulesChannel };
  const channel2 = obj.channel;
  if (obj.isRulesChannel) {
    let tmp14 = isSuggestedSection(id[12]);
    let BookCheckIcon = channel(id[13]).BookCheckIcon;
  } else {
    let obj5 = channel(id[14]);
    obj1 = { isRulesChannel: false };
    const channelIcon = obj5.getChannelIcon(channel2, obj1);
    let obj7 = channel(id[14]);
    const obj2 = { isRulesChannel: false };
    BookCheckIcon = obj7.getChannelIconComponent(channel2, obj2);
    tmp14 = channelIcon;
  }
  let obj9 = channel(id[15]);
  obj3 = { mode: channelMode, source: tmp14, IconComponent: BookCheckIcon };
  const BaseChannelIconResult = obj9.BaseChannelIcon(obj3);
  const obj4 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText };
  const tmp19 = isSuggestedSection(id[25])(channel);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj4["children"] = tmp19;
  const tmp21 = callback(channel(id[26]).Text, obj4);
  obj5 = {};
  const tmp7Result = channel(id[15]);
  const obj6 = { unread: tmp6, resolvedUnreadSetting };
  const items5 = [callback(isSuggestedSection(id[28]), obj6), ];
  obj7 = { onPressIn: callback, onPress: callback1, onLongPress: callback2 };
  const items6 = [tmp.container, ];
  const tmp23 = isSuggestedSection(id[27]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  obj7.style = items6;
  obj7.accessible = true;
  obj7.accessibilityRole = "button";
  const obj8 = { channel, unread: hasUnread, mentionCount };
  let num4 = 0;
  const tmp24 = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  if (isActivitiesInTextEnabled) {
    num4 = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj8.embeddedActivitiesCount = num4;
  obj8.isSubscriptionGated = isSubscriptionGated;
  obj8.needSubscriptionToAccess = needSubscriptionToAccess;
  obj7.accessibilityLabel = isSuggestedSection(id[30])(obj8);
  obj7.accessibilityState = { selected };
  let tmp26 = channelMode === channel(id[15]).ChannelModes.SELECTED;
  if (tmp26) {
    obj9 = { style: tmp.selectedBorder };
    tmp26 = callback(View, obj9);
  }
  const items7 = [tmp26, ];
  const obj10 = {};
  const items8 = [tmp.row, ];
  let rowWithSubtitle = null != subtitle;
  if (rowWithSubtitle) {
    rowWithSubtitle = tmp.rowWithSubtitle;
  }
  items8[1] = rowWithSubtitle;
  obj10.style = items8;
  const items9 = [BaseChannelIconResult, , ];
  let tmp31 = tmp21;
  if (null != subtitle) {
    const obj11 = { style: tmp.channelLabel };
    const items10 = [tmp21, ];
    const obj12 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(channel(id[15]).getChannelSubtitleTextProps(channelMode));
    const obj22 = channel(id[15]);
    obj12["children"] = channel(id[31]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = callback(channel(id[26]).Text, obj12);
    obj11.children = items10;
    tmp31 = callback2(View, obj11);
    const obj23 = channel(id[31]);
  }
  items9[1] = tmp31;
  items9[2] = callback(isSuggestedSection(id[32]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  obj10.children = items9;
  items7[1] = callback2(View, obj10);
  obj7.children = items7;
  items5[1] = callback2(channel(id[29]).AnimatedPressableHighlight, obj7);
  obj5.children = items5;
  return callback2(tmp23, obj5);
});
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;

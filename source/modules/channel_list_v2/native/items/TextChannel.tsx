// Module ID: 14932
// Function ID: 112425
// Dependencies: []

// Module 14932
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
let closure_15 = arg1(dependencyMap[10]).createStyles((arg0, arg1) => {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { marginVertical: closure_11, borderRadius: importDefault(dependencyMap[11]).modules.mobile.CHANNEL_ITEM_RADIUS };
  obj.container = obj;
  obj = { backgroundColor: importDefault(dependencyMap[11]).colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.selected = obj;
  const obj1 = { borderWidth: 1 };
  let BORDER_MUTED;
  if (!flag) {
    BORDER_MUTED = importDefault(dependencyMap[11]).colors.BORDER_MUTED;
  }
  obj1.borderColor = BORDER_MUTED;
  obj1.borderRadius = importDefault(dependencyMap[11]).modules.mobile.CHANNEL_ITEM_RADIUS;
  obj.selectedBorder = obj1;
  obj.row = {};
  obj.rowWithSubtitle = {};
  obj.channelLabel = { 1649697713: "onAnimationFinishCapture", 106012843: "onAnimationFinish" };
  const obj2 = { slategray: null, EPHEMERAL_MESSAGES: null, lineHeight: closure_12 };
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
const obj2 = arg1(dependencyMap[10]);
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
  const arg1 = channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const importDefault = isSuggestedSection;
  const tmp = callback3(muted, selected, importDefault(dependencyMap[16])("TextChannel"));
  const id = channel.id;
  const dependencyMap = id;
  const guild_id = channel.guild_id;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_7, closure_6, closure_8, closure_9, closure_10, closure_5];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isSubscriptionGated;
    let needSubscriptionToAccess;
    let obj = channel(id[18]);
    const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_7, closure_6, closure_8);
    obj = { hasUnread: closure_9.hasUnread(id), mentionCount: closure_9.getMentionCount(id), resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel) };
    ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
    let num = 0;
    if (null != channel) {
      num = 0;
      if (null != channel.id) {
        num = 0;
        if ("" !== channel.id) {
          const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channel.id);
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
  const callback = importAllResult.useCallback(() => {
    isSuggestedSection(id[19]).preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = importAllResult.useCallback(() => {
    let obj = channel(id[20]);
    let tmp2;
    if (isSuggestedSection) {
      obj = { source: isSuggestedSection(id[21]).CHANNEL_LIST_SUGGESTED_SECTION };
      tmp2 = obj;
    }
    obj.transitionToChannel(id, tmp2);
  }, items3);
  let tmp6 = hasUnread;
  const callback2 = importAllResult.useCallback(() => {
    const result = channel(id[22]).openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp6 = !muted;
  }
  let obj1 = arg1(dependencyMap[23]);
  obj = { muted, selected, unread: tmp6, resolvedUnreadSetting, mentionCount, locked: false, channel };
  const channelMode = obj1.getChannelMode(obj);
  let obj3 = arg1(dependencyMap[24]);
  const isActivitiesInTextEnabled = obj3.useIsActivitiesInTextEnabled(id);
  obj = { channel, isRulesChannel: channel.isRulesChannel };
  const channel2 = obj.channel;
  if (obj.isRulesChannel) {
    let tmp14 = importDefault(dependencyMap[12]);
    let BookCheckIcon = arg1(dependencyMap[13]).BookCheckIcon;
  } else {
    let obj5 = arg1(dependencyMap[14]);
    obj1 = { isRulesChannel: false };
    const channelIcon = obj5.getChannelIcon(channel2, obj1);
    let obj7 = arg1(dependencyMap[14]);
    const obj2 = { isRulesChannel: false };
    BookCheckIcon = obj7.getChannelIconComponent(channel2, obj2);
    tmp14 = channelIcon;
  }
  let obj9 = arg1(dependencyMap[15]);
  obj3 = { mode: channelMode, source: tmp14, IconComponent: BookCheckIcon };
  const BaseChannelIconResult = obj9.BaseChannelIcon(obj3);
  const obj4 = { height: null, width: null, style: tmp.channelLabelText };
  const tmp19 = importDefault(dependencyMap[25])(channel);
  const merged = Object.assign(arg1(dependencyMap[15]).useChannelNameTextProps(channelMode));
  obj4["children"] = tmp19;
  const tmp21 = callback(arg1(dependencyMap[26]).Text, obj4);
  obj5 = {};
  const tmp7Result = arg1(dependencyMap[15]);
  const obj6 = { unread: tmp6, resolvedUnreadSetting };
  const items5 = [callback(importDefault(dependencyMap[28]), obj6), ];
  obj7 = { onPressIn: callback, onPress: callback1, onLongPress: callback2 };
  const items6 = [tmp.container, ];
  const tmp23 = importDefault(dependencyMap[27]);
  items6[1] = channelMode === arg1(dependencyMap[15]).ChannelModes.SELECTED && tmp.selected;
  obj7.style = items6;
  obj7.accessible = true;
  obj7.accessibilityRole = "button";
  const obj8 = { channel, unread: hasUnread, mentionCount };
  let num4 = 0;
  const tmp24 = channelMode === arg1(dependencyMap[15]).ChannelModes.SELECTED && tmp.selected;
  if (isActivitiesInTextEnabled) {
    num4 = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj8.embeddedActivitiesCount = num4;
  obj8.isSubscriptionGated = isSubscriptionGated;
  obj8.needSubscriptionToAccess = needSubscriptionToAccess;
  obj7.accessibilityLabel = importDefault(dependencyMap[30])(obj8);
  obj7.accessibilityState = { selected };
  let tmp26 = channelMode === arg1(dependencyMap[15]).ChannelModes.SELECTED;
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
    const obj12 = { height: null, width: null };
    const merged1 = Object.assign(arg1(dependencyMap[15]).getChannelSubtitleTextProps(channelMode));
    const obj22 = arg1(dependencyMap[15]);
    obj12["children"] = arg1(dependencyMap[31]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = callback(arg1(dependencyMap[26]).Text, obj12);
    obj11.children = items10;
    tmp31 = callback2(View, obj11);
    const obj23 = arg1(dependencyMap[31]);
  }
  items9[1] = tmp31;
  items9[2] = callback(importDefault(dependencyMap[32]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  obj10.children = items9;
  items7[1] = callback2(View, obj10);
  obj7.children = items7;
  items5[1] = callback2(arg1(dependencyMap[29]).AnimatedPressableHighlight, obj7);
  obj5.children = items5;
  return callback2(tmp23, obj5);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;

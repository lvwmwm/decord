// Module ID: 15230
// Function ID: 115003
// Name: ChannelContentComponent
// Dependencies: []
// Exports: renderChannelContent

// Module 15230 (ChannelContentComponent)
function ChannelContentComponent(arg0) {
  let channel;
  let connected;
  let isSubscriptionGated;
  let lastMessageTimestampString;
  let layout;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, lastMessageTimestampString, channel, layout, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  let tmp3 = null != channel;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (tmp3) {
    if (!locked) {
      locked = importDefault(dependencyMap[8])(channel);
    }
    tmp3 = locked;
  }
  if (null != channel) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = validElement.isValidElement(subtitle);
  let tmp8 = null != lastMessageTimestampString;
  let tmp9 = tmp8;
  if (tmp8) {
    tmp9 = null == mentionBadge;
  }
  obj = { style: tmp.channelContent };
  obj = { style: tmp.channelContainer };
  const obj1 = {};
  const items = [tmp.leftBox, ];
  const obj2 = {};
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  obj2.justifyContent = str;
  items[1] = obj2;
  obj1.style = items;
  const obj3 = {};
  const obj4 = {};
  let num2 = 0;
  if (tmp9) {
    num2 = 30;
  }
  obj4.paddingRight = num2;
  obj3.style = obj4;
  const obj5 = { title: name, muted, unread };
  if (null == resolvedUnreadSetting) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj5.resolvedUnreadSetting = resolvedUnreadSetting;
  obj5.connected = connected;
  obj5.layout = layout;
  const items1 = [callback(importDefault(dependencyMap[9]), obj5), ];
  let tmp22Result = tmp3;
  if (!tmp3) {
    tmp22Result = isNSFWResult;
  }
  if (tmp22Result) {
    const obj6 = {};
    const items2 = [tmp.channelTraits, ];
    const obj7 = {};
    let num4 = 1;
    if (tmp3) {
      num4 = 1;
      if (isNSFWResult) {
        num4 = 2;
      }
    }
    obj7.maxWidth = 14 * num4;
    items2[1] = obj7;
    obj6.style = items2;
    if (tmp3) {
      const obj8 = { style: tmp.channelTraitIcon };
      tmp3 = callback(arg1(dependencyMap[10]).LockIcon, obj8);
    }
    const items3 = [tmp3, , ];
    if (isNSFWResult) {
      const obj9 = { style: tmp.channelTraitIcon };
      isNSFWResult = callback(arg1(dependencyMap[11]).WarningIcon, obj9);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj10 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = callback(importDefault(dependencyMap[12]), obj10);
    }
    items3[2] = isSubscriptionGated;
    obj6.children = items3;
    tmp22Result = closure_7(View, obj6);
    const tmp22 = closure_7;
    const tmp23 = View;
  }
  items1[1] = tmp22Result;
  obj3.children = items1;
  const items4 = [closure_7(View, obj3), ];
  let tmp34Result = null;
  if (isValidElementResult) {
    const obj11 = {};
    const obj12 = {};
    let num9 = 0;
    if (null != mentionCount) {
      num9 = mentionCount;
    }
    let num10 = 0;
    if (num9 > 0) {
      num10 = 20;
    }
    obj12.paddingRight = num10;
    const items5 = [obj12, ];
    const obj13 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
    items5[1] = obj13;
    obj11.style = items5;
    obj11.children = subtitle;
    tmp34Result = callback(View, obj11);
    const tmp34 = callback;
    const tmp35 = View;
  }
  items4[1] = tmp34Result;
  obj1.children = items4;
  const items6 = [closure_7(View, obj1), ];
  const obj14 = { style: tmp9 ? tmp.rightContentAbsolute : tmp.rightBox };
  let tmp38 = tmp8;
  if (tmp8) {
    const obj15 = {};
    const obj16 = { marginLeft: "auto" };
    obj15.style = obj16;
    obj15.children = lastMessageTimestampString;
    tmp38 = callback(arg1(dependencyMap[13]).Text, obj15);
  }
  const items7 = [tmp38, , ];
  const obj17 = {};
  const items8 = [{ "Bool(false)": "/assets/design/components/Illustration/native/redesign/generated/images", "Bool(false)": 160 }, ];
  if (tmp8) {
    const obj18 = { marginTop: 5 };
    tmp8 = obj18;
  }
  items8[1] = tmp8;
  obj17.style = items8;
  obj17.children = mentionBadge;
  items7[1] = callback(View, obj17);
  if (tmp9) {
    const obj19 = {};
    const obj20 = { flex: 1 };
    obj19.style = obj20;
    tmp9 = callback(View, obj19);
  }
  items7[2] = tmp9;
  obj14.children = items7;
  items6[1] = closure_7(View, obj14);
  obj.children = items6;
  obj.children = closure_7(View, obj);
  return callback(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1 };
const tmp2 = arg1(dependencyMap[4]);
let num = -1;
if (obj4.isIOS()) {
  num = 2;
}
obj.marginTop = num;
obj.channelContent = obj;
obj.channelContainer = { d: null, useMemo: null, keys: null, hasDiversityParent: null };
obj.leftBox = {};
obj.rightBox = { "Null": "<string:1459617792>", "Null": "<string:1275068417>" };
obj.rightContentAbsolute = { <string:3250345558>: 3375103, <string:553825121>: -8192, <string:1935339265>: 4320799 };
obj.channelTraits = { ty: 8, c: null, o: "\u270A\u{1F3FF}" };
const obj1 = { opacity: arg1(dependencyMap[2]).SUBTITLE_OPACITY_NORMAL, marginRight: 4 };
const obj4 = arg1(dependencyMap[6]);
let num2 = 0;
if (obj6.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
obj.channelTraitIcon = obj1;
let closure_8 = obj.createStyles(obj);
const obj6 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx");

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContentComponent, {});
};

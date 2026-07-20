// Module ID: 15529
// Function ID: 118542
// Name: ChannelContent
// Dependencies: []
// Exports: default

// Module 15529 (ChannelContent)
function ChannelContent(arg0) {
  let channel;
  let channelCategoryName;
  let connected;
  let isSubscriptionGated;
  let lastMessageTimestampString;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = callback2();
  let tmp3 = null != channel;
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
  let obj = { style: tmp.channelContent };
  obj = { style: tmp.channelContainer };
  obj = {};
  const items = [tmp.leftBox, ];
  const obj1 = {};
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  obj1.justifyContent = str;
  items[1] = obj1;
  obj.style = items;
  const obj2 = {};
  const obj3 = {};
  let num2 = 0;
  if (tmp9) {
    num2 = 30;
  }
  obj3.paddingRight = num2;
  obj2.style = obj3;
  const obj4 = { title: name, muted, unread };
  const tmp10 = callback;
  const tmp11 = View;
  const tmp12 = closure_8;
  const tmp13 = View;
  const tmp14 = closure_8;
  const tmp15 = View;
  const tmp16 = closure_8;
  const tmp17 = View;
  const tmp18 = callback;
  const tmp2 = importDefault(dependencyMap[7])();
  if (null == resolvedUnreadSetting) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj4.resolvedUnreadSetting = resolvedUnreadSetting;
  obj4.connected = connected;
  const items1 = [tmp18(importDefault(dependencyMap[9]), obj4), , ];
  let tmp21 = null;
  if (null != channelCategoryName) {
    const obj5 = {};
    const obj6 = { marginRight: 4 };
    obj5.style = obj6;
    obj5.children = channelCategoryName;
    tmp21 = callback(arg1(dependencyMap[10]).Text, obj5);
  }
  items1[1] = tmp21;
  let tmp26Result = tmp3;
  if (!tmp3) {
    tmp26Result = isNSFWResult;
  }
  if (tmp26Result) {
    const obj7 = {};
    const items2 = [tmp.channelTraits, ];
    const obj8 = {};
    let num6 = 1;
    if (tmp3) {
      num6 = 1;
      if (isNSFWResult) {
        num6 = 2;
      }
    }
    obj8.maxWidth = 14 * num6;
    items2[1] = obj8;
    obj7.style = items2;
    if (tmp3) {
      const obj9 = { flexDirection: "from", alignItems: null, style: tmp.channelTraitIcon };
      tmp3 = callback(arg1(dependencyMap[11]).LockIcon, obj9);
    }
    const items3 = [tmp3, , ];
    if (isNSFWResult) {
      const obj10 = { flexDirection: "from", alignItems: null, style: tmp.channelTraitIcon };
      isNSFWResult = callback(arg1(dependencyMap[12]).WarningIcon, obj10);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj11 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = callback(importDefault(dependencyMap[13]), obj11);
    }
    items3[2] = isSubscriptionGated;
    obj7.children = items3;
    tmp26Result = closure_8(View, obj7);
    const tmp26 = closure_8;
    const tmp27 = View;
  }
  items1[2] = tmp26Result;
  obj2.children = items1;
  const items4 = [tmp16(tmp17, obj2), ];
  let tmp38Result = null;
  if (isValidElementResult) {
    const obj12 = {};
    const obj13 = {};
    let num11 = 0;
    if (null != mentionCount) {
      num11 = mentionCount;
    }
    let num12 = 0;
    if (num11 > 0) {
      num12 = 20;
    }
    obj13.paddingRight = num12;
    const items5 = [obj13, ];
    const obj14 = { marginTop: tmp2.messagePreview.margin.marginTop };
    items5[1] = obj14;
    obj12.style = items5;
    obj12.children = subtitle;
    tmp38Result = callback(View, obj12);
    const tmp38 = callback;
    const tmp39 = View;
  }
  items4[1] = tmp38Result;
  obj.children = items4;
  const items6 = [tmp14(tmp15, obj), ];
  const obj15 = { style: tmp9 ? tmp.rightContentAbsolute : tmp.rightBox };
  let tmp43Result = tmp8;
  if (tmp8) {
    const obj16 = {};
    const obj17 = { marginLeft: "auto" };
    let num14 = 1;
    if (!muted) {
      num14 = SUBTITLE_OPACITY_NORMAL;
    }
    obj17.opacity = num14;
    obj16.style = obj17;
    obj16.children = lastMessageTimestampString;
    tmp43Result = callback(arg1(dependencyMap[10]).Text, obj16);
    const tmp43 = callback;
  }
  const items7 = [tmp43Result, , ];
  const obj18 = {};
  const items8 = [{ 9223372036854775807: "/assets/design/components/Illustration/native/redesign/generated/images", 0: 160 }, ];
  if (tmp8) {
    const obj19 = { marginTop: 5 };
    tmp8 = obj19;
  }
  items8[1] = tmp8;
  obj18.style = items8;
  obj18.children = mentionBadge;
  items7[1] = callback(View, obj18);
  if (tmp9) {
    const obj20 = {};
    const obj21 = { flex: 1 };
    obj20.style = obj21;
    tmp9 = callback(View, obj20);
  }
  items7[2] = tmp9;
  obj15.children = items7;
  items6[1] = closure_8(View, obj15);
  obj.children = items6;
  obj.children = tmp12(tmp13, obj);
  return tmp10(tmp11, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const SUBTITLE_OPACITY_NORMAL = arg1(dependencyMap[2]).SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
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
obj.channelContainer = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
obj.leftBox = {};
obj.rightBox = {};
obj.rightContentAbsolute = { ignoreDuration: true, limits: true, initialScrollStart: true };
obj.channelTraits = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" };
const obj1 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4 };
const obj4 = arg1(dependencyMap[6]);
let num2 = 0;
if (obj6.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
obj.channelTraitIcon = obj1;
let closure_9 = obj.createStyles(obj);
const obj6 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContent, {});
};

// Module ID: 16482
// Function ID: 16483
// Name: renderChannelContent
// Dependencies: [19, 17, 9577, 5018, 21, 4836, 1364, 16479, 5373, 16483, 4832, 5409, 8048, 15750, 2]
// Exports: default

// Module 16482 (renderChannelContent)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import LockIcon from "LockIcon" /* 5409 */;
import WarningIcon from "WarningIcon" /* 8048 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16479 */;
import ChannelTitleDefault from "ChannelTitle" /* 16483 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let num2;
let obj2;
function ChannelContent(arg0) {
  let channel;
  let channelCategoryName;
  let connected;
  let isSubscriptionGated;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let lastMessageTimestampString;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let obj18;
  let obj3;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_9();
  let tmp9Result5 = null != channel;
  const tmp4 = getLayoutStylesDefault();
  if (tmp9Result5) {
    if (!locked) {
      locked = tmp2(5373)(channel);
    }
    tmp9Result5 = locked;
  }
  let isNSFWResult;
  if (channel != null) {
    isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = react.isValidElement(subtitle);
  let obj = null != lastMessageTimestampString;
  let tmp9Result8 = obj && null == mentionBadge;
  const obj2 = { style: tmp.channelContent, children: metroImportAll(View, obj3) };
  const items = [tmp.leftBox, ];
  let str = "center";
  obj3 = { style: tmp.channelContainer, children: items6 };
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj4 = { style: items, children: items4 };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp9Result8) {
    num = 30;
  }
  const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: items1 };
  const obj6 = { title: name, muted, unread, resolvedUnreadSetting, connected };
  const tmp2Result = ChannelTitleDefault;
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  items1 = [metroImportDefault(tmp2Result, obj6), , ];
  let tmp9Result = null;
  if (null != channelCategoryName) {
    const obj7 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
    tmp9Result = tmp9(Text_Text.Text, obj7);
  }
  items1[1] = tmp9Result;
  let tmp11Result = tmp9Result5 || isNSFWResult;
  if (tmp11Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp9Result5) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj8 = { style: items2, children: items3 };
    const obj9 = { maxWidth: 14 * num3 };
    items2[1] = obj9;
    if (tmp9Result5) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp9Result5 = tmp9(LockIcon.LockIcon, obj10);
    }
    items3 = [tmp9Result5, , ];
    if (isNSFWResult) {
      const obj11 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = tmp9(WarningIcon.WarningIcon, obj11);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj12 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = tmp9(tmp2(15750), obj12);
    }
    items3[2] = isSubscriptionGated;
    tmp11Result = tmp11(tmp10, obj8);
  }
  items1[2] = tmp11Result;
  items4 = [metroImportAll(View, obj5), ];
  let tmp9Result6 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj13 = { style: items5, children: subtitle };
    items5 = [{ paddingRight: num5 }, ];
    const obj14 = { paddingRight: num5 };
    const obj15 = { marginTop: tmp4.messagePreview.margin.marginTop };
    items5[1] = obj15;
    tmp9Result6 = tmp9(tmp10, obj13);
  }
  items4[1] = tmp9Result6;
  items6 = [metroImportAll(View, obj4), ];
  let tmp9Result7 = obj;
  const obj16 = { style: tmp9Result8 ? tmp.rightContentAbsolute : tmp.rightBox, children: items7 };
  if (tmp9Result7) {
    let num6 = 1;
    const Text = Text_Text.Text;
    if (!muted) {
      num6 = SUBTITLE_OPACITY_NORMAL;
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", style: obj18, maxFontSizeMultiplier: 1.75, children: lastMessageTimestampString };
    obj18 = { marginLeft: "auto", opacity: num6 };
    tmp9Result7 = tmp9(Text, obj17);
  }
  items7 = [tmp9Result7, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj) {
    obj = { marginTop: 5 };
  }
  items8[1] = obj;
  items7[1] = metroImportDefault(View, { style: items8, children: mentionBadge });
  if (tmp9Result8) {
    const obj19 = { style: { flex: 1 } };
    tmp9Result8 = tmp9(tmp10, obj19);
  }
  items7[2] = tmp9Result8;
  items6[1] = metroImportAll(View, obj16);
  return metroImportDefault(View, obj2);
}
const View = react_native.View;
const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: obj2 };
obj2 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: num2 };
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroImportDefault(ChannelContent, obj);
};

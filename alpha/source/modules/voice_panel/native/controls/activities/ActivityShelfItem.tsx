// Module ID: 17718
// Function ID: 17719
// Name: ActivityShelfItem
// Dependencies: [19, 1074, 1181, 21, 4829, 576, 4678, 12483, 12399, 5894, 17716, 1879, 9659, 7853, 9824, 9213, 5427, 4535, 17715, 12428, 1177, 17719, 17717, 4981, 13126, 4825, 12488, 1115, 2]
// Exports: default

// Module 17718 (ActivityShelfItem)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1879 */;
import native2 from "native" /* 4535 */;
import Text_Text from "Text/Text" /* 4825 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4981 */;
import Pressables from "Pressables" /* 5427 */;
import NativeViewDefault from "NativeView" /* 5894 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7853 */;
import TestModeUtils from "TestModeUtils" /* 9213 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9659 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9824 */;
import useActivityShelfItem from "useActivityShelfItem" /* 12399 */;
import useLaunchingActivityButtonStateDefault from "useLaunchingActivityButtonState" /* 12483 */;
import _modDef13126 from "module_13126" /* 13126 */;
import ActivityShelfItemBackgroundDefault from "ActivityShelfItemBackground" /* 17715 */;
import ActivityShelfItemSummaryDefault from "ActivityShelfItemSummary" /* 17716 */;
import useActivityUsersDefault from "useActivityUsers" /* 17717 */;
import noop from "module_19" /* 19 */;

const useActivityShelfItemDefault = useActivityShelfItem;

require = fn;
function ActivityActionOverlay(arg0) {
  ({ action, context } = arg0);
  ({ applicationId, activityItem, launchingComponentId } = arg0);
  ({ id, name } = activityItem.application);
  if (useActivityShelfItem.ActivityAction.JOIN !== action) {
    if (tmp4(12399).ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let tmp8 = action === tmp4(12399).ActivityAction.LEAVE;
  if (tmp8) {
    const obj = { style: tmp3.ongoingActivityJoinedContainer };
    tmp8 = timestampProducer(tmp(5894), obj);
  }
  const items = [tmp8, ];
  let id1;
  const tmp10 = timestampProducer;
  tmp3 = closure_9();
  const tmp6 = React6;
  const tmp7 = React5;
  if ("channel" === context.type) {
    id1 = context.channel.id;
  }
  const obj2 = { children: null };
  items[1] = tmp10(ActivityShelfItemSummaryDefault, { channelId: id1, applicationId: id, applicationName: name, submitting: useLaunchingActivityButtonStateDefault({ applicationId, context, launchingComponentId }).submitting });
  obj2.children = items;
  return tmp6(tmp7, obj2);
}
function ParticipantsText(arg0) {
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = closure_9();
  const arr = useActivityUsersDefault(activityItem.application.id, channelId);
  let first;
  if (arr != null) {
    first = arr[0];
  }
  const name = NicknameUtilsDefault.getName(guildId, channelId, first);
  const obj2 = { style: null, children: null };
  const items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  obj2.style = items;
  const tmp6 = React6;
  const tmp2Result = NativeViewDefault;
  const tmp8 = timestampProducer;
  const items1 = [timestampProducer(native.Icon, { source: _modDef13126, size: native.Icon.Sizes.EXTRA_SMALL, color: "white" }), ];
  const obj4 = { lineClamp: 1, style: tmp.participantsText, variant: "text-xxs/medium", color: "text-overlay-light", children: null };
  if (action === useActivityShelfItem.ActivityAction.START) {
    let num2 = activityItem.application.maxParticipants;
    if (num2 == null) {
      num2 = 0;
    }
    let itemSubtitleForMaxPlayersShort = tmp9(12488).getItemSubtitleForMaxPlayersShort(num2);
    const tmp9Result = tmp9(12488);
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = tmp9(1115).intl;
      const obj5 = { count: arr.length - 1, username: name };
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(tmp9(1115).t.cpe6CK, obj5);
    }
  }
  obj4.children = itemSubtitleForMaxPlayersShort;
  items1[1] = tmp8(Text_Text.Text, obj4);
  obj2.children = items1;
  return tmp6(tmp2Result, obj2);
}
const ThemeTypes = fn(1074).ThemeTypes;
const ANDROID_FOREGROUND_RIPPLE = fn(1181).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" }, imageOuterContainer: { justifyContent: "center", alignItems: "center" }, ongoingActivityJoinedContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1 }, overlayBubble: null, participantsContainer: null, participantsText: null, developerIconContainer: null, developerIconColor: null };
let obj4 = { backgroundColor: null, borderRadius: null };
const ColorUtils = fn(4678);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.5);
obj4.borderRadius = nativeDefault.radii.round;
obj2.overlayBubble = obj4;
obj2.participantsContainer = { paddingHorizontal: 8, position: "absolute", left: 8, bottom: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 20 };
obj2.participantsText = { marginLeft: 4, lineHeight: 20 };
let size = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
obj2.developerIconContainer = size;
let obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" };
obj2.developerIconColor = { color: nativeDefault.colors.WHITE };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default function ActivityShelfItem(arg0) {
  ({ itemDimensions, activityItem, context, disableBadges } = arg0);
  ({ guildId, locationObject, onActivityItemSelected } = arg0);
  if (disableBadges === undefined) {
    disableBadges = false;
  }
  const tmp = closure_9();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * getDevicePixelRatioDefault();
  const id = noop.useId();
  const obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: EmbeddedActivitiesNativeManagerDefault, backgroundResolution: result, assetNames: ["embedded_cover"], launchingComponentId: id, commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI };
  ({ activityAction, imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = useActivityShelfItemDefault(obj));
  let tmp10 = useEmbeddedActivityBackgroundDefault({ applicationId: activityItem.application.id, size: result, names: ["embedded_background"] });
  let tmp11 = !disableBadges;
  if (!disableBadges) {
    const items = [tmp8(12399).ActivityAction.LEAVE, tmp8(12399).ActivityAction.JOIN];
    tmp11 = !items.includes(activityAction);
  }
  const obj2 = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  const tmp7Result = useActivityShelfItemDefault(obj);
  const isTestModeForApplication = TestModeUtils.useIsTestModeForApplication(activityItem.application.id);
  const obj3 = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === useActivityShelfItem.ActivityAction.LEAVE, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, style: null, children: null };
  const items1 = [tmp.container, { width, height }];
  obj3.style = items1;
  const obj4 = { theme: ThemeTypes.DARK, children: null };
  const obj5 = { style: tmp.imageOuterContainer, children: null };
  const tmp8Result = TestModeUtils;
  const obj6 = { accessibilityLabel: activityItem.application.name, imageBackground: null, aspectRatio: null };
  const tmp3Result = NativeViewDefault;
  if (activityAction === useActivityShelfItem.ActivityAction.START) {
    tmp10 = imageBackground;
  }
  obj6.imageBackground = tmp10;
  obj6.aspectRatio = width / height;
  const items2 = [timestampProducer(ActivityShelfItemBackgroundDefault, obj6), timestampProducer(ActivityActionOverlay, { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id })];
  obj5.children = items2;
  const items3 = [React6(tmp3Result, obj5), , ];
  let tmp15Result = null;
  if (tmp11) {
    const obj8 = { labelType };
    tmp15Result = tmp15(tmp3(12428), obj8);
  }
  items3[1] = tmp15Result;
  let tmp15Result3 = null;
  if (tmp11) {
    tmp15Result3 = null;
    if (isTestModeForApplication) {
      const obj9 = { style: tmp.developerIconContainer, children: null };
      const obj10 = { size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16, source: tmp3(17719), color: tmp.developerIconColor.color };
      obj9.children = tmp15(tmp8(1177).Icon, obj10);
      tmp15Result3 = tmp15(tmp3(5894), obj9);
      const tmp3Result4 = tmp3(5894);
    }
  }
  items3[2] = tmp15Result3;
  obj4.children = items3;
  const items4 = [React6(native2.ThemeContextProvider, obj4), ];
  let tmp15Result4 = activityAction === tmp8(12399).ActivityAction.START;
  if (tmp15Result4) {
    const obj11 = { action: activityAction, channelId: null, guildId: null, activityItem: null };
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    obj11.channelId = id1;
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    obj11.guildId = guildId1;
    obj11.activityItem = activityItem;
    tmp15Result4 = tmp15(ParticipantsText, obj11);
  }
  items4[1] = tmp15Result4;
  obj3.children = items4;
  return React6(Pressables.PressableOpacity, obj3);
};

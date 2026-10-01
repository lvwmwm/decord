// Module ID: 16974
// Function ID: 16975
// Name: ActivityShelfItem
// Dependencies: [19, 1074, 1181, 21, 4836, 576, 4683, 11623, 11539, 5901, 16972, 1880, 8765, 6943, 8933, 8319, 5435, 4540, 16971, 11568, 1177, 16975, 16973, 4988, 12294, 4832, 11628, 1115, 2]
// Exports: default

// Module 16974 (ActivityShelfItem)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import FormConstants from "FormConstants" /* 1181 */;
import react_nativeDefault from "react-native" /* 1880 */;
import Text_Text from "Text/Text" /* 4832 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6943 */;
import TestModeUtils from "TestModeUtils" /* 8319 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 8933 */;
import useActivityShelfItem from "useActivityShelfItem" /* 11539 */;
import useLaunchingActivityButtonStateDefault from "useLaunchingActivityButtonState" /* 11623 */;
import getItemSubtitleForMaxPlayers from "getItemSubtitleForMaxPlayers" /* 11628 */;
import AssetRegistryDefault from "AssetRegistry" /* 12294 */;
import ActivityShelfItemBackgroundDefault from "ActivityShelfItemBackground" /* 16971 */;
import ActivityShelfItemSummaryDefault from "ActivityShelfItemSummary" /* 16972 */;
import useActivityUsersDefault from "useActivityUsers" /* 16973 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16975 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size_mod from "module_2" /* 2 */;

const useActivityShelfItemDefault = useActivityShelfItem;

let ColorUtils;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
function ActivityActionOverlay(arg0) {
  let action;
  let activityItem;
  let applicationId;
  let context;
  let id;
  let launchingComponentId;
  let name;
  ({ action, context } = arg0);
  ({ applicationId, activityItem, launchingComponentId } = arg0);
  const submitting = useLaunchingActivityButtonStateDefault({ applicationId, context, launchingComponentId }).submitting;
  const application = activityItem.application;
  ({ id, name } = application);
  const tmp3 = closure_9();
  if (useActivityShelfItem.ActivityAction.JOIN !== action) {
    if (useActivityShelfItem.ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let tmp8 = action === tmp4(11539).ActivityAction.LEAVE;
  const tmp6 = metroImportAll;
  const tmp7 = metroImportDefault;
  if (tmp8) {
    const obj = { style: tmp3.ongoingActivityJoinedContainer };
    tmp8 = metroRequire(tmp(5901), obj);
  }
  const items = [tmp8, ];
  let id1;
  const tmp10 = metroRequire;
  const tmpResult = ActivityShelfItemSummaryDefault;
  if ("channel" === context.type) {
    id1 = context.channel.id;
  }
  const obj2 = { children: items };
  items[1] = tmp10(tmpResult, { channelId: id1, applicationId: id, applicationName: name, submitting });
  return tmp6(tmp7, obj2);
}
function ParticipantsText(arg0) {
  let action;
  let activityItem;
  let channelId;
  let guildId;
  let itemSubtitleForMaxPlayersShort;
  let items;
  let items1;
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = closure_9();
  const arr = useActivityUsersDefault(activityItem.application.id, channelId);
  let first;
  const getName = NicknameUtilsDefault.getName;
  NicknameUtilsDefault;
  if (arr != null) {
    first = arr[0];
  }
  const name = getName(guildId, channelId, first);
  const obj = { style: items, children: items1 };
  items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: "white" };
  const tmp2Result = NativeViewDefault;
  const Icon = native.Icon;
  items1 = [metroRequire(Icon, obj2), ];
  const obj3 = { lineClamp: 1, style: tmp.participantsText, variant: "text-xxs/medium", color: "text-overlay-light", children: itemSubtitleForMaxPlayersShort };
  const Text = Text_Text.Text;
  const tmp7 = metroImportAll;
  const tmp9 = metroRequire;
  if (action === useActivityShelfItem.ActivityAction.START) {
    let num2 = activityItem.application.maxParticipants;
    const getItemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayers.getItemSubtitleForMaxPlayersShort;
    getItemSubtitleForMaxPlayers;
    if (num2 == null) {
      num2 = 0;
    }
    itemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayersShort(num2);
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = tmp10(1115).intl;
      const obj4 = { count: arr.length - 1, username: name };
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(tmp10(1115).t.cpe6CK, obj4);
    }
  }
  items1[1] = tmp9(Text, obj3);
  return tmp7(tmp2Result, obj);
}
const ThemeTypes = Constants.ThemeTypes;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, imageOuterContainer: { justifyContent: "center", alignItems: "center" }, ongoingActivityJoinedContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1 }, overlayBubble: obj3, participantsContainer: { paddingHorizontal: 8, position: "absolute", left: 8, bottom: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 20 }, participantsText: { marginLeft: 4, lineHeight: 20 }, developerIconContainer: size, developerIconColor: obj4 };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.5), borderRadius: nativeDefault.radii.round };
ColorUtils = ColorUtils_mod;
size = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
obj4 = { color: nativeDefault.colors.WHITE };
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default function ActivityShelfItem(arg0) {
  let Icon;
  let activityAction;
  let activityItem;
  let context;
  let disableBadges;
  let guildId;
  let guildId1;
  let height;
  let id1;
  let imageBackground;
  let itemDimensions;
  let items1;
  let items2;
  let items3;
  let items4;
  let labelType;
  let locationObject;
  let obj10;
  let onActivityItemSelected;
  let onActivityItemSelected2;
  let width;
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
  const result = width * react_nativeDefault();
  const id = react.useId();
  const obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: EmbeddedActivitiesNativeManagerDefault, backgroundResolution: result, assetNames: ["embedded_cover"], launchingComponentId: id, commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI };
  const tmp7 = useActivityShelfItemDefault;
  ({ activityAction, imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = tmp7(obj));
  const obj2 = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  tmp7(obj);
  let tmp10 = useEmbeddedActivityBackgroundDefault(obj2);
  let tmp11 = !disableBadges;
  if (tmp11) {
    const items = [useActivityShelfItem.ActivityAction.LEAVE, useActivityShelfItem.ActivityAction.JOIN];
    tmp11 = !items.includes(activityAction);
  }
  const tmp8Result = TestModeUtils;
  const isTestModeForApplication = tmp8Result.useIsTestModeForApplication(activityItem.application.id);
  const obj3 = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === useActivityShelfItem.ActivityAction.LEAVE, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, style: items1, children: items4 };
  const PressableOpacity = tmp8(5435).PressableOpacity;
  items1 = [tmp.container, { width, height }];
  const obj4 = { theme: ThemeTypes.DARK, children: items3 };
  const ThemeContextProvider = tmp8(4540).ThemeContextProvider;
  const obj5 = { style: tmp.imageOuterContainer, children: items2 };
  const obj6 = { accessibilityLabel: activityItem.application.name, imageBackground: tmp10, aspectRatio: width / height };
  const tmp3Result = NativeViewDefault;
  const tmp3Result3 = ActivityShelfItemBackgroundDefault;
  if (activityAction === useActivityShelfItem.ActivityAction.START) {
    tmp10 = imageBackground;
  }
  items2 = [metroRequire(tmp3Result3, obj6), ];
  const obj7 = { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id };
  items2[1] = metroRequire(ActivityActionOverlay, obj7);
  items3 = [metroImportAll(tmp3Result, obj5), , ];
  let tmp15Result = null;
  if (tmp11) {
    const obj8 = { labelType };
    tmp15Result = tmp15(tmp3(11568), obj8);
  }
  items3[1] = tmp15Result;
  let tmp15Result3 = null;
  if (tmp11) {
    tmp15Result3 = null;
    if (isTestModeForApplication) {
      const obj9 = { style: tmp.developerIconContainer, children: metroRequire(Icon, obj10) };
      obj10 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault2, color: tmp.developerIconColor.color };
      const tmp3Result4 = NativeViewDefault;
      Icon = tmp8(1177).Icon;
      tmp15Result3 = tmp15(tmp3Result4, obj9);
    }
  }
  items3[2] = tmp15Result3;
  items4 = [metroImportAll(ThemeContextProvider, obj4), ];
  let tmp15Result4 = activityAction === tmp8(11539).ActivityAction.START;
  if (tmp15Result4) {
    const obj11 = { action: activityAction, channelId: id1, guildId: guildId1, activityItem };
    id1 = undefined;
    const tmp21 = ParticipantsText;
    if (channel != null) {
      id1 = channel.id;
    }
    guildId1 = undefined;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    tmp15Result4 = tmp15(tmp21, obj11);
  }
  items4[1] = tmp15Result4;
  return metroImportAll(PressableOpacity, obj3);
};

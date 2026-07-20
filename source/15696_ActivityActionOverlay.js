// Module ID: 15696
// Function ID: 119981
// Name: ActivityActionOverlay
// Dependencies: []
// Exports: default

// Module 15696 (ActivityActionOverlay)
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
  ({ id, name } = activityItem.application);
  if (arg1(dependencyMap[7]).ActivityAction.JOIN !== action) {
    if (arg1(dependencyMap[7]).ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let obj = {};
  let tmp7 = action === arg1(dependencyMap[7]).ActivityAction.LEAVE;
  if (tmp7) {
    obj = { style: tmp.ongoingActivityJoinedContainer };
    tmp7 = callback(importDefault(dependencyMap[8]), obj);
  }
  const items = [tmp7, ];
  obj = {};
  id = undefined;
  const tmp = callback2();
  const tmp11 = callback;
  const tmp5 = closure_7;
  const tmp6 = closure_6;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  obj.channelId = id;
  obj.applicationId = id;
  obj.applicationName = name;
  obj.submitting = importDefault(dependencyMap[6])({ applicationId, context, launchingComponentId }).submitting;
  items[1] = tmp11(importDefault(dependencyMap[9]), obj);
  obj.children = items;
  return tmp5(tmp6, obj);
}
function ParticipantsText(arg0) {
  let action;
  let activityItem;
  let channelId;
  let guildId;
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = callback2();
  const arr = importDefault(dependencyMap[21])(activityItem.application.id, channelId);
  let obj = importDefault(dependencyMap[22]);
  let first;
  if (null != arr) {
    first = arr[0];
  }
  const name = obj.getName(guildId, channelId, first);
  obj = { style: items };
  const items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  obj = { source: importDefault(dependencyMap[23]), size: arg1(dependencyMap[19]).Icon.Sizes.EXTRA_SMALL, color: "white" };
  const items1 = [callback(arg1(dependencyMap[19]).Icon, obj), ];
  const obj1 = { borderRadius: 0, flex: -1889785551, Promise: -1406601790, marginTop: 94527, style: tmp.participantsText };
  if (action === arg1(dependencyMap[7]).ActivityAction.START) {
    const maxParticipants = activityItem.application.maxParticipants;
    let num4 = 0;
    if (null != maxParticipants) {
      num4 = maxParticipants;
    }
    let itemSubtitleForMaxPlayersShort = arg1(dependencyMap[25]).getItemSubtitleForMaxPlayersShort(num4);
    const obj6 = arg1(dependencyMap[25]);
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = arg1(dependencyMap[26]).intl;
      const obj2 = { count: arr.length - 1, username: name };
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(arg1(dependencyMap[26]).t.cpe6CK, obj2);
    }
  }
  obj1.children = itemSubtitleForMaxPlayersShort;
  items1[1] = callback(arg1(dependencyMap[24]).Text, obj1);
  obj.children = items1;
  return closure_7(importDefault(dependencyMap[8]), obj);
}
let closure_3 = importAll(dependencyMap[0]);
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[1]).ANDROID_FOREGROUND_RIPPLE;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { mode: true, allowMultiSelection: true, allowVirtualFiles: true, width: true, resizeMode: true, paddingRight: true, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.container = obj;
obj.imageOuterContainer = {};
obj.ongoingActivityJoinedContainer = { <string:3429215422>: null, <string:2700849388>: "hidden", <string:1682858321>: "center", <string:1649667276>: "text-sm/semibold", <string:1689042513>: null };
const obj1 = {};
const tmp2 = arg1(dependencyMap[2]);
obj1.backgroundColor = arg1(dependencyMap[5]).hexWithOpacity(importDefault(dependencyMap[4]).unsafe_rawColors.BLACK, 0.5);
obj1.borderRadius = importDefault(dependencyMap[4]).radii.round;
obj.overlayBubble = obj1;
obj.participantsContainer = {};
obj.participantsText = { "Bool(true)": false, "Bool(true)": false };
const obj5 = arg1(dependencyMap[5]);
obj.developerIconContainer = { borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG };
const obj2 = { borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG };
obj.developerIconColor = { color: importDefault(dependencyMap[4]).colors.WHITE };
let closure_8 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[4]).colors.WHITE };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default function ActivityShelfItem(arg0) {
  let activityItem;
  let context;
  let disableBadges;
  let guildId;
  let height;
  let imageBackground;
  let itemDimensions;
  let labelType;
  let locationObject;
  let onActivityItemSelected;
  let onActivityItemSelected2;
  let width;
  ({ itemDimensions, activityItem, context, disableBadges } = arg0);
  ({ guildId, locationObject, onActivityItemSelected } = arg0);
  if (disableBadges === undefined) {
    disableBadges = false;
  }
  const tmp = callback2();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * importDefault(dependencyMap[10])();
  const id = closure_3.useId();
  let obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: importDefault(dependencyMap[11]), backgroundResolution: result, assetNames: ["PREMIUM_STANDARD"], launchingComponentId: id, commandOrigin: arg1(dependencyMap[12]).CommandOrigin.VOICE_UI };
  const tmp5Result = importDefault(dependencyMap[7])(obj);
  const activityAction = tmp5Result.activityAction;
  ({ imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = tmp5Result);
  obj = { applicationId: activityItem.application.id, size: result, names: [240518194] };
  let tmp7 = importDefault(dependencyMap[13])(obj);
  let tmp8 = !disableBadges;
  if (tmp8) {
    const items = [arg1(dependencyMap[7]).ActivityAction.LEAVE, arg1(dependencyMap[7]).ActivityAction.JOIN];
    tmp8 = !items.includes(activityAction);
  }
  let obj2 = arg1(dependencyMap[14]);
  const isTestModeForApplication = obj2.useIsTestModeForApplication(activityItem.application.id);
  obj = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === arg1(dependencyMap[7]).ActivityAction.LEAVE, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE };
  const items1 = [tmp.container, { width, height }];
  obj.style = items1;
  const obj1 = { theme: "dark" };
  obj2 = { style: tmp.imageOuterContainer };
  const tmp12 = closure_7;
  const tmp13 = closure_7;
  const tmp14 = closure_7;
  const tmp5 = importDefault(dependencyMap[7]);
  const obj3 = { accessibilityLabel: activityItem.application.name };
  const tmp15 = importDefault(dependencyMap[8]);
  const tmp16 = callback;
  if (activityAction === arg1(dependencyMap[7]).ActivityAction.START) {
    tmp7 = imageBackground;
  }
  obj3.imageBackground = tmp7;
  obj3.aspectRatio = width / height;
  const items2 = [tmp16(importDefault(dependencyMap[17]), obj3), callback(ActivityActionOverlay, { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id })];
  obj2.children = items2;
  const items3 = [tmp14(tmp15, obj2), , ];
  let tmp18 = null;
  if (tmp8) {
    const obj5 = { labelType };
    tmp18 = callback(importDefault(dependencyMap[18]), obj5);
  }
  items3[1] = tmp18;
  let tmp22 = null;
  if (tmp8) {
    tmp22 = null;
    if (isTestModeForApplication) {
      const obj6 = { style: tmp.developerIconContainer };
      const obj7 = { size: arg1(dependencyMap[19]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[20]), color: tmp.developerIconColor.color };
      obj6.children = callback(arg1(dependencyMap[19]).Icon, obj7);
      tmp22 = callback(importDefault(dependencyMap[8]), obj6);
      const tmp26 = importDefault(dependencyMap[8]);
    }
  }
  items3[2] = tmp22;
  obj1.children = items3;
  const items4 = [tmp13(arg1(dependencyMap[16]).ThemeContextProvider, obj1), ];
  let tmp30Result = activityAction === arg1(dependencyMap[7]).ActivityAction.START;
  if (tmp30Result) {
    const obj8 = { action: activityAction };
    let id1;
    if (null != channel) {
      id1 = channel.id;
    }
    obj8.channelId = id1;
    guildId = undefined;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let tmp34;
    if (null != guildId) {
      tmp34 = guildId;
    }
    obj8.guildId = tmp34;
    obj8.activityItem = activityItem;
    tmp30Result = callback(ParticipantsText, obj8);
    const tmp30 = callback;
    const tmp31 = ParticipantsText;
  }
  items4[1] = tmp30Result;
  obj.children = items4;
  return tmp12(arg1(dependencyMap[15]).PressableOpacity, obj);
};

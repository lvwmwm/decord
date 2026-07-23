// Module ID: 15832
// Function ID: 122265
// Name: ActivityActionOverlay
// Dependencies: [31, 1277, 33, 4130, 689, 3974, 11264, 11177, 5517, 15830, 1825, 10525, 6755, 10614, 7369, 4660, 3842, 15829, 11205, 1273, 15833, 15831, 4319, 11808, 4126, 11269, 1212, 2]
// Exports: default

// Module 15832 (ActivityActionOverlay)
import result from "result";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
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
  if (require(11177) /* getStaffReleasePhase */.ActivityAction.JOIN !== action) {
    if (require(11177) /* getStaffReleasePhase */.ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let obj = {};
  let tmp7 = action === require(11177) /* getStaffReleasePhase */.ActivityAction.LEAVE;
  if (tmp7) {
    obj = { style: tmp.ongoingActivityJoinedContainer };
    tmp7 = callback(importDefault(5517), obj);
  }
  const items = [tmp7, ];
  obj = {};
  id = undefined;
  tmp = _createForOfIteratorHelperLoose();
  const tmp11 = callback;
  const tmp5 = closure_7;
  const tmp6 = closure_6;
  if ("channel" === context.type) {
    id = context.channel.id;
  }
  obj.channelId = id;
  obj.applicationId = id;
  obj.applicationName = name;
  obj.submitting = importDefault(11264)({ applicationId, context, launchingComponentId }).submitting;
  items[1] = tmp11(importDefault(15830), obj);
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
  const tmp = _createForOfIteratorHelperLoose();
  const arr = importDefault(15831)(activityItem.application.id, channelId);
  let obj = importDefault(4319);
  let first;
  if (null != arr) {
    first = arr[0];
  }
  const name = obj.getName(guildId, channelId, first);
  obj = { style: items };
  items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  obj = { source: importDefault(11808), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: "white" };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), ];
  const obj1 = { lineClamp: 1, style: tmp.participantsText, variant: "text-xxs/medium", color: "text-overlay-light" };
  if (action === require(11177) /* getStaffReleasePhase */.ActivityAction.START) {
    const maxParticipants = activityItem.application.maxParticipants;
    let num4 = 0;
    if (null != maxParticipants) {
      num4 = maxParticipants;
    }
    let itemSubtitleForMaxPlayersShort = require(11269) /* getItemSubtitleForMaxPlayers */.getItemSubtitleForMaxPlayersShort(num4);
    const obj6 = require(11269) /* getItemSubtitleForMaxPlayers */;
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj2 = { count: arr.length - 1, username: name };
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.cpe6CK, obj2);
    }
  }
  obj1.children = itemSubtitleForMaxPlayersShort;
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return closure_7(importDefault(5517), obj);
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.imageOuterContainer = { justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.ongoingActivityJoinedContainer = { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1 };
let obj1 = {};
obj1.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.5);
obj1.borderRadius = require("_createForOfIteratorHelperLoose").radii.round;
_createForOfIteratorHelperLoose.overlayBubble = obj1;
_createForOfIteratorHelperLoose.participantsContainer = { paddingHorizontal: 8, position: "absolute", left: 8, bottom: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 20 };
_createForOfIteratorHelperLoose.participantsText = { marginLeft: 4, lineHeight: 20 };
let obj2 = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.developerIconContainer = obj2;
_createForOfIteratorHelperLoose.developerIconColor = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
let result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

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
  const tmp = _createForOfIteratorHelperLoose();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * importDefault(1825)();
  const id = result.useId();
  let obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: importDefault(10525), backgroundResolution: result, assetNames: ["embedded_cover"], launchingComponentId: id, commandOrigin: require(6755) /* ApplicationCommandSectionType */.CommandOrigin.VOICE_UI };
  const tmp5Result = importDefault(11177)(obj);
  const activityAction = tmp5Result.activityAction;
  ({ imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = tmp5Result);
  obj = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  let tmp7 = importDefault(10614)(obj);
  let tmp8 = !disableBadges;
  if (tmp8) {
    const items = [require(11177) /* getStaffReleasePhase */.ActivityAction.LEAVE, require(11177) /* getStaffReleasePhase */.ActivityAction.JOIN];
    tmp8 = !items.includes(activityAction);
  }
  let obj2 = require(7369) /* isTestModeForApplication */;
  const isTestModeForApplication = obj2.useIsTestModeForApplication(activityItem.application.id);
  obj = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === require(11177) /* getStaffReleasePhase */.ActivityAction.LEAVE, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE };
  const items1 = [tmp.container, { width, height }];
  obj.style = items1;
  const obj1 = { theme: "dark" };
  obj2 = { style: tmp.imageOuterContainer };
  const tmp12 = closure_7;
  const tmp13 = closure_7;
  const tmp14 = closure_7;
  const tmp5 = importDefault(11177);
  const obj3 = { accessibilityLabel: activityItem.application.name };
  const tmp15 = importDefault(5517);
  const tmp16 = callback;
  if (activityAction === require(11177) /* getStaffReleasePhase */.ActivityAction.START) {
    tmp7 = imageBackground;
  }
  obj3.imageBackground = tmp7;
  obj3.aspectRatio = width / height;
  const items2 = [tmp16(importDefault(15829), obj3), callback(ActivityActionOverlay, { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id })];
  obj2.children = items2;
  const items3 = [tmp14(tmp15, obj2), , ];
  let tmp18 = null;
  if (tmp8) {
    const obj5 = { labelType };
    tmp18 = callback(importDefault(11205), obj5);
  }
  items3[1] = tmp18;
  let tmp22 = null;
  if (tmp8) {
    tmp22 = null;
    if (isTestModeForApplication) {
      const obj6 = { style: tmp.developerIconContainer };
      const obj7 = { size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, source: importDefault(15833), color: tmp.developerIconColor.color };
      obj6.children = callback(require(1273) /* Button */.Icon, obj7);
      tmp22 = callback(importDefault(5517), obj6);
      const tmp26 = importDefault(5517);
    }
  }
  items3[2] = tmp22;
  obj1.children = items3;
  const items4 = [tmp13(require(3842) /* ManaContext */.ThemeContextProvider, obj1), ];
  let tmp30Result = activityAction === require(11177) /* getStaffReleasePhase */.ActivityAction.START;
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
  return tmp12(require(4660) /* PressableBase */.PressableOpacity, obj);
};

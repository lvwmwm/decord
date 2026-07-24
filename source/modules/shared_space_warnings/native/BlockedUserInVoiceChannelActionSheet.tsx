// Module ID: 12716
// Function ID: 98916
// Name: BlockedUserInVoiceChannelActionSheet
// Dependencies: [31, 27, 1348, 3767, 1849, 12710, 12713, 653, 33, 4130, 689, 566, 1212, 5498, 10442, 4126, 5501, 5165, 1273, 10997, 10764, 4543, 4098, 4944, 675, 2]
// Exports: default

// Module 12716 (BlockedUserInVoiceChannelActionSheet)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { setDismissalTimeForUser } from "useSharedSpacesWarningStore";
import GdmWarningMedium from "GdmWarningMedium";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_3;
let closure_4;
let closure_9;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ BlockWarningEngagements: closure_9, VoiceChannelWarningSurfaces: closure_10 } = GdmWarningMedium);
({ Fragment: closure_12, jsxs: closure_13, jsx: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerImage = { alignSelf: "center", width: 73, height: 86 };
_createForOfIteratorHelperLoose.headerText = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.centerText = { textAlign: "center", alignSelf: "center" };
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonGroup = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, gap: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, gap: 8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx");

export default function BlockedUserInVoiceChannelActionSheet(arg0) {
  let blockedUserId;
  let require;
  ({ channelId: require, blockedUserId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(stateFromStores[11]);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.isBlocked(blockedUserId));
  let obj1 = require(stateFromStores[11]);
  let items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.getChannel(closure_0));
  user = user.getUser(blockedUserId);
  obj = {};
  const intl = require(stateFromStores[12]).intl;
  const string = intl.string;
  const t = require(stateFromStores[12]).t;
  if (stateFromStores) {
    let items2 = [string(t.cpgfFk), "\n", ];
    const intl3 = tmp7(tmp8[12]).intl;
    items2[2] = intl3.string(tmp7(tmp8[12]).t.UKQ4Cn);
    obj.children = items2;
    let tmp9 = obj;
  } else {
    const items3 = [string(t.xj3j47), "\n", ];
    const intl2 = tmp7(tmp8[12]).intl;
    items3[2] = intl2.string(tmp7(tmp8[12]).t.wWueRW);
    obj.children = items3;
    tmp9 = obj;
  }
  obj = { startExpanded: true };
  obj1 = { style: tmp.container };
  let obj2 = { source: blockedUserId(stateFromStores[14]), style: tmp.headerImage };
  const items4 = [callback2(closure_3, obj2), , , ];
  const obj3 = { style: tmp.headerText };
  const obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText };
  const intl4 = require(stateFromStores[12]).intl;
  obj4.children = intl4.string(require(stateFromStores[12]).t["1/gpFh"]);
  const items5 = [callback2(require(stateFromStores[15]).Text, obj4), ];
  const tmp13 = closure_4;
  const tmp5 = callback;
  const tmp5Result = callback(closure_12, tmp9);
  const tmp6 = closure_12;
  items5[1] = callback2(require(stateFromStores[15]).Text, { variant: "text-md/medium", style: tmp.centerText, children: callback(closure_12, tmp9) });
  obj3.children = items5;
  items4[1] = callback(closure_4, obj3);
  const obj6 = { hasIcons: true };
  const obj7 = {};
  if (null != user) {
    const obj8 = { size: require(stateFromStores[18]).AvatarSizes.SMALL, user };
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    obj8.guildId = guild_id;
    let tmp18Result = callback2(require(stateFromStores[18]).Avatar, obj8);
    const tmp18 = callback2;
  } else {
    tmp18Result = callback2(require(stateFromStores[19]).UserIcon, {});
  }
  obj7.icon = tmp18Result;
  const intl5 = require(stateFromStores[12]).intl;
  const obj9 = {};
  let username;
  if (null != user) {
    username = user.username;
  }
  obj9.userName = username;
  obj7.label = intl5.formatToPlainString(require(stateFromStores[12]).t.w0YvUo, obj9);
  const items6 = [callback2(require(stateFromStores[17]).TableRow, obj7), ];
  const obj10 = { icon: callback2(require(stateFromStores[20]).MicrophoneIcon, {}) };
  const intl6 = require(stateFromStores[12]).intl;
  obj10.label = intl6.string(require(stateFromStores[12]).t["+4O9nX"]);
  items6[1] = callback2(require(stateFromStores[17]).TableRow, obj10);
  obj6.children = items6;
  items4[2] = callback(require(stateFromStores[16]).TableRowGroup, obj6);
  const obj11 = { style: tmp.buttonGroup };
  const obj12 = {
    size: "lg",
    onPress() {
      let obj = blockedUserId(stateFromStores[22]);
      obj.hideActionSheet();
      blockedUserId(stateFromStores[23]).disconnect();
      const obj2 = blockedUserId(stateFromStores[23]);
      obj = { action: outer1_9.CLICK_TO_LEAVE, channel_id: closure_0 };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj.ignored_user_ids = items2;
      obj.warning_surface = outer1_10.POST_JOIN_SHEET;
      blockedUserId(stateFromStores[24]).track(outer1_11.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    }
  };
  const intl7 = require(stateFromStores[12]).intl;
  obj12.text = intl7.string(require(stateFromStores[12]).t["Y56/oK"]);
  const items7 = [callback2(require(stateFromStores[21]).Button, obj12), ];
  const obj13 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      let obj = blockedUserId(stateFromStores[22]);
      obj.hideActionSheet();
      outer1_8(blockedUserId);
      obj = { action: outer1_9.CLICK_TO_STAY, channel_id: closure_0 };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj.ignored_user_ids = items2;
      obj.warning_surface = outer1_10.POST_JOIN_SHEET;
      blockedUserId(stateFromStores[24]).track(outer1_11.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    }
  };
  const intl8 = require(stateFromStores[12]).intl;
  obj13.text = intl8.string(require(stateFromStores[12]).t.bCcJST);
  items7[1] = callback2(require(stateFromStores[21]).Button, obj13);
  obj11.children = items7;
  items4[3] = callback(closure_4, obj11);
  obj1.children = items4;
  obj.children = callback(tmp13, obj1);
  return callback2(require(stateFromStores[13]).ActionSheet, obj);
};

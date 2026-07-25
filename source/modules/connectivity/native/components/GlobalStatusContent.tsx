// Module ID: 10629
// Function ID: 82817
// Name: ConnectivityGlobalStatusContent
// Dependencies: [31, 27, 1348, 1838, 4203, 4146, 10625, 653, 33, 4131, 689, 8861, 566, 10329, 10623, 3977, 4067, 4664, 3982, 10444, 477, 1557, 6622, 10630, 2]
// Exports: default

// Module 10629 (ConnectivityGlobalStatusContent)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { RTCConnectionStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
let require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.bgNeutral = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bg = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
let obj2 = { paddingHorizontal: 16, minHeight: require("RTC_PANEL_HEIGHT").RTC_PANEL_HEIGHT, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.container = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  let guild;
  let remotePlatform;
  let rtcConnectionState;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(8861)();
  const require = tmp2;
  let obj = require(566) /* initialize */;
  const items = [closure_6, closure_5, _isNativeReflectConstruct, closure_7];
  const items1 = [tmp2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channelId;
    if (null != tmp2) {
      channelId = tmp2.channelId;
    }
    if (null == channelId) {
      channelId = outer1_6.getChannelId();
    }
    const channel = outer1_4.getChannel(channelId);
    if (null != tmp2) {
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      let guildId1 = guildId;
    } else {
      guildId1 = outer1_6.getGuildId();
    }
    let sessionId;
    const guild = outer1_5.getGuild(guildId1);
    if (null != tmp2) {
      sessionId = tmp2.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    const sessionById = outer1_7.getSessionById(str);
    let os;
    if (null != sessionById) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel };
    if (null != tmp2) {
      let RTC_CONNECTED = outer1_8.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = outer1_6.getState();
    }
    obj.rtcConnectionState = RTC_CONNECTED;
    obj.remotePlatform = os;
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (null != channel) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  if (null != channel) {
    id = channel.id;
  }
  let tmp5Result = importDefault(10329)(id);
  const tmp5 = importDefault(10329);
  let obj1 = require(3977) /* AccessibilityAnnouncer */;
  let tmp11 = tmp9;
  const tmp8 = importDefault(10623)();
  if (isGuildStageVoiceResult) {
    if (!tmp5Result) {
      tmp5Result = tmp8;
    }
    tmp11 = tmp5Result;
  }
  let obj2 = require(4664) /* getIsScreenLandscape */;
  let isScreenLandscape = obj2.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = require(3982) /* _createForOfIteratorHelperLoose */.isModalOpen(importDefault(10444));
    const obj4 = require(3982) /* _createForOfIteratorHelperLoose */;
  }
  if (isScreenLandscape) {
    isScreenLandscape = require(477) /* set */.isAndroid();
    const obj5 = require(477) /* set */;
  }
  obj = {};
  const items2 = [tmp11 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  obj = {};
  let num4 = 0;
  if (!isScreenLandscape) {
    num4 = importDefault(1557)().top;
  }
  obj.paddingTop = num4;
  items2[2] = obj;
  obj.style = items2;
  if (isScreenLandscape) {
    obj1 = { hidden: true };
    isScreenLandscape = callback(importDefault(6622), obj1);
  }
  const items3 = [isScreenLandscape, ];
  let tmp23 = null;
  if (isGuildStageVoiceResult) {
    obj2 = { channel, guild, hasRTCConnectivity: tmp9, isDarkTheme: isThemeDarkResult, rtcConnectionState, remotePlatform };
    tmp23 = callback(importDefault(10630), obj2);
  }
  items3[1] = tmp23;
  obj.children = items3;
  return closure_10(View, obj);
};

// Module ID: 10692
// Function ID: 10693
// Name: ConnectivityGlobalStatusContent
// Dependencies: [19, 17, 1372, 1862, 4261, 4204, 10688, 676, 21, 4189, 712, 8929, 589, 10394, 10686, 4035, 4125, 4720, 4040, 10507, 500, 1581, 6679, 10693, 2]
// Exports: default

// Module 10692 (ConnectivityGlobalStatusContent)
import "ChannelCallCameraPreview";
import { View } from "getIsScreenLandscape";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createRTCConnection from "createRTCConnection";
import handleUpdate from "handleUpdate";
import { RTCConnectionStates } from "ME";
import jsxProd from "useSafeAreaInsets";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { bgNeutral: null, bg: null, container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360 };
createCacheKey[2] = { paddingHorizontal: 16, minHeight: require("RTC_PANEL_HEIGHT").RTC_PANEL_HEIGHT, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360 };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  let guild;
  let remotePlatform;
  let rtcConnectionState;
  const tmp = createCacheKey();
  const tmp4 = importDefault(8929)();
  const require = tmp4;
  let obj = require(589) /* initialize */;
  const items = [createRTCConnection, createGuildRecordFromRust, ensureGuildLoaded, handleUpdate];
  const items1 = [tmp4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channelId;
    if (closure_0 != null) {
      channelId = tmp2.channelId;
    }
    if (channelId == null) {
      channelId = outer1_6.getChannelId();
    }
    const channel = outer1_4.getChannel(channelId);
    if (null != closure_0) {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let guildId1 = guildId;
    } else {
      guildId1 = outer1_6.getGuildId();
    }
    let str;
    const guild = outer1_5.getGuild(guildId1);
    if (closure_0 != null) {
      str = tmp2.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = outer1_7.getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel, rtcConnectionState: null, remotePlatform: null };
    if (null != closure_0) {
      let RTC_CONNECTED = outer1_8.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = outer1_6.getState();
    }
    obj[2] = RTC_CONNECTED;
    obj[3] = os;
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (channel != null) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let tmp2ResultResult = importDefault(10394)(id);
  const tmp2Result = importDefault(10394);
  let tmp5Result = tmp5(4035);
  let tmp14 = tmp12;
  const tmp11 = importDefault(10686)();
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  tmp5Result = tmp5(4720);
  let isScreenLandscape = tmp5Result.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(4040).isModalOpen(tmp2(10507));
    const tmp5Result1 = tmp5(4040);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(500).isAndroid();
    const tmp5Result2 = tmp5(500);
  }
  const items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  let num = 0;
  if (!isScreenLandscape) {
    num = tmp2(1581)().top;
  }
  obj = { style: items2, children: null };
  items2[2] = { paddingTop: num };
  if (isScreenLandscape) {
    isScreenLandscape = callback(tmp2(6679), { hidden: true });
  }
  const items3 = [isScreenLandscape, ];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    obj = { channel: null, guild: null, hasRTCConnectivity: null, isDarkTheme: null, rtcConnectionState: null, remotePlatform: null };
    obj[0] = channel;
    obj[1] = guild;
    obj[2] = tmp12;
    obj[3] = isThemeDarkResult;
    obj[4] = rtcConnectionState;
    obj[5] = remotePlatform;
    tmp19 = callback(tmp2(10693), obj);
  }
  items3[1] = tmp19;
  obj[1] = items3;
  return closure_10(View, obj);
};

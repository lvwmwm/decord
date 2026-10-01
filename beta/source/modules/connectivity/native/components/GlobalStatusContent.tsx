// Module ID: 8967
// Function ID: 8968
// Name: GlobalStatusContent
// Dependencies: [19, 17, 2045, 2067, 4859, 4854, 8961, 1074, 21, 4836, 576, 8962, 504, 8861, 8959, 4685, 4767, 5438, 4692, 8835, 1364, 1613, 8839, 8968, 2]
// Exports: default

// Module 8967 (GlobalStatusContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConnectivityConstants from "ConnectivityConstants" /* 8961 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 8962 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let obj2;
let obj3;
let tmp2;
let unpackModuleId;
const useSafeAreaInsetsDefault = tmp2(1613);
const useThemeDefault = tmp2(4767);
const ChannelCallModalDefault = tmp2(8835);
const StatusBarDefault = tmp2(8839);
const useCanSpeakInChannelDefault = tmp2(8861);
const useIsInvitedToSpeakDefault = tmp2(8959);
const GlobalStageChannelStatusDefault = tmp2(8968);
const View = react_native.View;
const RTC_PANEL_HEIGHT = ConnectivityConstants.RTC_PANEL_HEIGHT;
const RTCConnectionStates = Constants.RTCConnectionStates;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { bgNeutral: obj2, bg: obj3, container: { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  let closure_0;
  let guild;
  let items2;
  let items3;
  let remotePlatform;
  let rtcConnectionState;
  const tmp = closure_12();
  const tmp2 = importDefault;
  const tmp4 = useVoiceStateForRemoteSessionDefault();
  _require = tmp4;
  let obj = require("get initialized");
  const items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
  const items1 = [tmp4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let RTC_CONNECTED;
    let guildId1;
    let channelId;
    const getChannel = ChannelStore.getChannel;
    if (closure_0 != null) {
      channelId = tmp2.channelId;
    }
    if (channelId == null) {
      channelId = RTCConnectionStore.getChannelId();
    }
    const channel = getChannel(channelId);
    if (null != closure_0) {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      guildId1 = guildId;
    } else {
      guildId1 = RTCConnectionStore.getGuildId();
    }
    let str;
    const guild = GuildStore.getGuild(guildId1);
    const getSessionById = SessionsStore.getSessionById;
    if (closure_0 != null) {
      str = tmp2.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel, rtcConnectionState: RTC_CONNECTED, remotePlatform: os };
    if (null != closure_0) {
      RTC_CONNECTED = RTCConnectionStates.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = RTCConnectionStore.getState();
    }
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (channel != null) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  const tmp2Result = useCanSpeakInChannelDefault;
  if (channel != null) {
    id = channel.id;
  }
  let tmp2ResultResult = tmp2Result(id);
  let tmp14 = tmp12;
  const tmp11 = useIsInvitedToSpeakDefault();
  const tmp5Result = require("shared");
  const isThemeDarkResult = tmp5Result.isThemeDark(useThemeDefault());
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  const tmp5Result4 = require("useIsScreenLandscape");
  let isScreenLandscape = tmp5Result4.useIsScreenLandscape();
  if (isScreenLandscape) {
    const tmp5Result5 = require("NavigationRouteUtils");
    isScreenLandscape = tmp5Result5.isModalOpen(ChannelCallModalDefault);
  }
  if (isScreenLandscape) {
    const tmp5Result6 = require("PlatformUtils");
    isScreenLandscape = tmp5Result6.isAndroid();
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = useSafeAreaInsetsDefault().top;
  }
  const obj2 = { style: items2, children: items3 };
  items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  const obj3 = { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num };
  items2[2] = obj3;
  const tmp16 = closure_11;
  const tmp17 = View;
  if (isScreenLandscape) {
    isScreenLandscape = closure_10(StatusBarDefault, { hidden: true });
  }
  items3 = [isScreenLandscape, ];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    const obj4 = { channel, guild, hasRTCConnectivity: null != channel, isDarkTheme: isThemeDarkResult, rtcConnectionState, remotePlatform };
    tmp19 = closure_10(GlobalStageChannelStatusDefault, obj4);
  }
  items3[1] = tmp19;
  return tmp16(tmp17, obj2);
};

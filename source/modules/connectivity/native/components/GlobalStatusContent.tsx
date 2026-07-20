// Module ID: 10619
// Function ID: 82841
// Name: ConnectivityGlobalStatusContent
// Dependencies: []
// Exports: default

// Module 10619 (ConnectivityGlobalStatusContent)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const RTCConnectionStates = arg1(dependencyMap[7]).RTCConnectionStates;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.bgNeutral = obj;
const tmp3 = arg1(dependencyMap[8]);
obj.bg = { backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360 };
const obj2 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, minHeight: arg1(dependencyMap[6]).RTC_PANEL_HEIGHT };
obj.container = obj2;
let closure_11 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  let guild;
  let remotePlatform;
  let rtcConnectionState;
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[11])();
  const arg1 = tmp2;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6, closure_5, closure_4, closure_7];
  const items1 = [tmp2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channelId;
    if (null != tmp2) {
      channelId = tmp2.channelId;
    }
    if (null == channelId) {
      channelId = store.getChannelId();
    }
    const channel = channel.getChannel(channelId);
    if (null != tmp2) {
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      let guildId1 = guildId;
    } else {
      guildId1 = store.getGuildId();
    }
    let sessionId;
    const guild = guild.getGuild(guildId1);
    if (null != tmp2) {
      sessionId = tmp2.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    const sessionById = sessionById.getSessionById(str);
    let os;
    if (null != sessionById) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel };
    if (null != tmp2) {
      let RTC_CONNECTED = constants.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = store.getState();
    }
    obj.rtcConnectionState = RTC_CONNECTED;
    obj.remotePlatform = os;
    return obj;
  }, items1);
  const channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (null != channel) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  if (null != channel) {
    id = channel.id;
  }
  let tmp5Result = importDefault(dependencyMap[13])(id);
  const tmp5 = importDefault(dependencyMap[13]);
  let obj1 = arg1(dependencyMap[15]);
  let tmp11 = tmp9;
  const tmp8 = importDefault(dependencyMap[14])();
  if (isGuildStageVoiceResult) {
    if (!tmp5Result) {
      tmp5Result = tmp8;
    }
    tmp11 = tmp5Result;
  }
  let obj2 = arg1(dependencyMap[17]);
  let isScreenLandscape = obj2.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = arg1(dependencyMap[18]).isModalOpen(importDefault(dependencyMap[19]));
    const obj4 = arg1(dependencyMap[18]);
  }
  if (isScreenLandscape) {
    isScreenLandscape = arg1(dependencyMap[20]).isAndroid();
    const obj5 = arg1(dependencyMap[20]);
  }
  obj = {};
  const items2 = [tmp11 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  obj = {};
  let num4 = 0;
  if (!isScreenLandscape) {
    num4 = importDefault(dependencyMap[21])().top;
  }
  obj.paddingTop = num4;
  items2[2] = obj;
  obj.style = items2;
  if (isScreenLandscape) {
    obj1 = { hidden: true };
    isScreenLandscape = callback(importDefault(dependencyMap[22]), obj1);
  }
  const items3 = [isScreenLandscape, ];
  let tmp23 = null;
  if (isGuildStageVoiceResult) {
    obj2 = { channel, guild, hasRTCConnectivity: tmp9, isDarkTheme: isThemeDarkResult, rtcConnectionState, remotePlatform };
    tmp23 = callback(importDefault(dependencyMap[23]), obj2);
  }
  items3[1] = tmp23;
  obj.children = items3;
  return closure_10(View, obj);
};

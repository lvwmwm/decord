// Module ID: 15764
// Function ID: 120543
// Name: voiceSettings
// Dependencies: []
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 15764 (voiceSettings)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ UserSettingsSections: closure_4, AnalyticsPages: closure_5, InstantInviteSources: closure_6, RPC_APPLICATION_LOGGING_CATEGORY: closure_7 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.NiTd0e);
  obj.icon = importDefault(dependencyMap[5]);
  obj.onPress = function onPress() {
    let obj = callback(closure_2[6]);
    obj = { screen: constants.VOICE };
    obj.openUserSettings(obj);
    callback2(closure_2[7]).hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.hoZYAA);
  obj.switchValue = !arg1;
  obj.onPress = function onPress() {
    const result = arg1(closure_2[8]).toggleVoiceParticipantsHidden(arg0.id, !arg1);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = importDefault(dependencyMap[9]);
  obj = {
    importer() {
      return arg0(paths[11])(paths[10], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["type"] = closure_0;
          obj["onConfirm"] = closure_1;
          return callback(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.MH8ESU);
  obj.switchValue = !arg0;
  obj.onPress = function onPress() {
    arg1();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  const arg1 = stream;
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.KHGhHf);
  obj.icon = importDefault(dependencyMap[12]);
  obj.onPress = function onPress() {
    let obj = arg0(paths[13]);
    const encodeStreamKeyResult = obj.encodeStreamKey(arg0);
    let videoStats = store.getVideoStats(encodeStreamKeyResult);
    if (null == videoStats) {
      videoStats = {};
    }
    obj = { media_session_id: store.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: store.getRtcConnectionId(encodeStreamKeyResult), stream_region: store.getRegion(encodeStreamKeyResult), max_viewers: store.getMaxViewers(encodeStreamKeyResult) };
    const merged = Object.assign(videoStats);
    const obj4 = callback(paths[7]);
    obj = { stream: arg0, analyticsData: obj };
    obj4.openLazy(arg0(paths[11])(paths[14], paths.paths), "StreamReportProblem" + arg0.ownerId, obj);
  };
  return obj;
};
export const invite = function invite(isPrivate) {
  const arg1 = isPrivate;
  const importDefault = arg1;
  const dependencyMap = arg2;
  function onPress() {
    let obj = arg0(arg2[15]);
    obj = { source: constants2.VOICE_CHANNEL };
    return obj.showInstantInviteActionSheet(arg0, obj);
  }
  if (null != arg1) {
    onPress = function onPress() {
      let obj = arg0(arg2[15]);
      obj = { source: constants2.STREAM, stream: arg1 };
      return obj.showInstantInviteActionSheet(arg0, obj);
    };
  } else if (null != arg2) {
    onPress = function onPress() {
      let obj = arg0(arg2[15]);
      obj = { source: constants2.ACTIVITY_INVITE, targetApplicationId: arg2 };
      return obj.showInstantInviteActionSheet(arg0, obj);
    };
  }
  if (isPrivate.isPrivate()) {
    onPress = function onPress() {
      return arg0(arg2[16]).navigateToNewGroupDM(arg0.id, constants.CHANNEL_CALL);
    };
  }
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.VINpSK);
  obj.icon = importDefault(dependencyMap[17]);
  obj.onPress = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  const arg1 = arg0;
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.X8bCMe);
  obj.icon = importDefault(dependencyMap[18]);
  obj.onPress = function onPress() {
    arg0();
    callback(closure_2[7]).hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  const obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.iQzQs3);
  obj.icon = importDefault(dependencyMap[18]);
  obj.onPress = function onPress() {
    let obj = callback(closure_2[19]);
    const items = [closure_7];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE" };
      const intl = callback(closure_2[4]).intl;
      obj.content = intl.string(callback(closure_2[4]).t.i+9VWy);
      callback2(closure_2[20]).open(obj);
      const obj4 = callback2(closure_2[20]);
    } else {
      obj = { message: json };
      callback(closure_2[21]).showShareActionSheet(obj, "Activity Logs");
      const obj2 = callback(closure_2[21]);
    }
  };
  return obj;
};

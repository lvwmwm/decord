// Module ID: 15936
// Function ID: 123081
// Name: voiceSettings
// Dependencies: [31, 4216, 653, 33, 1212, 15937, 5796, 4098, 4323, 4471, 15934, 1934, 15938, 4194, 15939, 8526, 3981, 10760, 7687, 12, 3831, 8376, 2]
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 15936 (voiceSettings)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ UserSettingsSections: closure_4, AnalyticsPages: closure_5, InstantInviteSources: closure_6, RPC_APPLICATION_LOGGING_CATEGORY: closure_7 } = ME);
let result = require("ME").fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.NiTd0e);
  obj.icon = importDefault(15937);
  obj.onPress = function onPress() {
    let obj = outer1_0(outer1_2[6]);
    obj = { screen: outer1_4.VOICE };
    obj.openUserSettings(obj);
    outer1_1(outer1_2[7]).hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.hoZYAA);
  obj.switchValue = !arg1;
  obj.onPress = function onPress() {
    const result = callback(outer1_2[8]).toggleVoiceParticipantsHidden(id.id, !callback);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let obj = importDefault(4471);
  obj = {
    importer() {
      return callback(outer1_2[11])(outer1_2[10], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["type"] = outer2_0;
          obj["onConfirm"] = outer2_1;
          return outer3_8(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  const _require = arg1;
  const obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.MH8ESU);
  obj.switchValue = !arg0;
  obj.onPress = function onPress() {
    callback();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  const _require = stream;
  let obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.KHGhHf);
  obj.icon = importDefault(15938);
  obj.onPress = function onPress() {
    let obj = stream(outer1_2[13]);
    const encodeStreamKeyResult = obj.encodeStreamKey(stream);
    let videoStats = outer1_3.getVideoStats(encodeStreamKeyResult);
    if (null == videoStats) {
      videoStats = {};
    }
    obj = { media_session_id: outer1_3.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: outer1_3.getRtcConnectionId(encodeStreamKeyResult), stream_region: outer1_3.getRegion(encodeStreamKeyResult), max_viewers: outer1_3.getMaxViewers(encodeStreamKeyResult) };
    const merged = Object.assign(videoStats);
    const obj4 = outer1_1(outer1_2[7]);
    obj = { stream, analyticsData: obj };
    obj4.openLazy(stream(outer1_2[11])(outer1_2[14], outer1_2.paths), "StreamReportProblem" + stream.ownerId, obj);
  };
  return obj;
};
export const invite = function invite(isPrivate) {
  const _require = isPrivate;
  const importDefault = arg1;
  const dependencyMap = arg2;
  function onPress() {
    let obj = isPrivate(8526);
    obj = { source: outer1_6.VOICE_CHANNEL };
    return obj.showInstantInviteActionSheet(isPrivate, obj);
  }
  if (null != arg1) {
    onPress = function onPress() {
      let obj = isPrivate(8526);
      obj = { source: outer1_6.STREAM, stream: closure_1 };
      return obj.showInstantInviteActionSheet(isPrivate, obj);
    };
  } else if (null != arg2) {
    onPress = function onPress() {
      let obj = isPrivate(8526);
      obj = { source: outer1_6.ACTIVITY_INVITE, targetApplicationId: dependencyMap };
      return obj.showInstantInviteActionSheet(isPrivate, obj);
    };
  }
  if (isPrivate.isPrivate()) {
    onPress = function onPress() {
      return isPrivate(3981).navigateToNewGroupDM(isPrivate.id, outer1_5.CHANNEL_CALL);
    };
  }
  let obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.VINpSK);
  obj.icon = importDefault(10760);
  obj.onPress = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  const _require = arg0;
  const obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.X8bCMe);
  obj.icon = importDefault(7687);
  obj.onPress = function onPress() {
    callback();
    outer1_1(outer1_2[7]).hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  let obj = {};
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.iQzQs3);
  obj.icon = importDefault(7687);
  obj.onPress = function onPress() {
    let obj = outer1_0(outer1_2[19]);
    const items = [outer1_7];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE" };
      const intl = outer1_0(outer1_2[4]).intl;
      obj.content = intl.string(outer1_0(outer1_2[4]).t["i+9VWy"]);
      outer1_1(outer1_2[20]).open(obj);
      const obj4 = outer1_1(outer1_2[20]);
    } else {
      obj = { message: json };
      outer1_0(outer1_2[21]).showShareActionSheet(obj, "Activity Logs");
      const obj2 = outer1_0(outer1_2[21]);
    }
  };
  return obj;
};

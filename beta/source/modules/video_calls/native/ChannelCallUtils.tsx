// Module ID: 17638
// Function ID: 17639
// Name: ChannelCallUtils
// Dependencies: [19, 4797, 1078, 21, 1119, 17639, 7626, 4725, 4959, 5111, 17636, 1984, 17640, 4810, 17641, 10055, 11710, 10255, 13219, 7, 4458, 8637, 2]
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 17638 (ChannelCallUtils)
import util from "util" /* 1119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4810 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4959 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5111 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10055 */;
import _modDef10255 from "module_10255" /* 10255 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11710 */;
import _modDef13219 from "module_13219" /* 13219 */;
import _modDef17639 from "module_17639" /* 17639 */;
import _modDef17640 from "module_17640" /* 17640 */;
import noop from "module_19" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4797 */;

const require = globalThis.__r;

const asyncRequireImpl = tmp(1984);
require = fn;
const Constants = fn(1078);
({ UserSettingsSections: closure_4, AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire, RPC_APPLICATION_LOGGING_CATEGORY: closure_7 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = { label: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.NiTd0e);
  obj.icon = _modDef17639;
  obj.onPress = function onPress() {
    require("openUserSettings").openUserSettings({ screen: constants.VOICE });
    const obj = require("openUserSettings");
    const obj2 = { screen: constants.VOICE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.hoZYAA);
  obj.switchValue = !arg1;
  obj.onPress = function onPress() {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(id.id, !closure_1);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(17636, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.type = type;
          obj.onConfirm = onConfirm;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  closure_0 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.MH8ESU);
  obj.switchValue = !arg0;
  obj.onPress = function onPress() {
    closure_0();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  _require = stream;
  let obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.KHGhHf);
  obj.icon = _modDef17640;
  obj.onPress = function onPress() {
    const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(stream);
    let videoStats = StreamRTCConnectionStore.getVideoStats(encodeStreamKeyResult);
    if (videoStats == null) {
      videoStats = {};
    }
    const tmp2 = dependencyMap;
    const merged = Object.assign(videoStats);
    const obj3 = { media_session_id: StreamRTCConnectionStore.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: StreamRTCConnectionStore.getRtcConnectionId(encodeStreamKeyResult), stream_region: StreamRTCConnectionStore.getRegion(encodeStreamKeyResult), max_viewers: StreamRTCConnectionStore.getMaxViewers(encodeStreamKeyResult) };
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.openLazy(asyncRequireImpl(17641, tmp2.paths), "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj3 });
  };
  return obj;
};
export const invite = function invite(dependencyMap, stream, targetApplicationId) {
  _require = dependencyMap;
  importDefault = stream;
  dependencyMap = targetApplicationId;
  if (null != stream) {
    function onPress() {
      return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(closure_0, { source: constants2.STREAM, stream });
    }
  } else {
    onPress = function onPress() {
      return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(closure_0, { source: constants2.VOICE_CHANNEL });
    };
    if (null != targetApplicationId) {
      onPress = function onPress() {
        return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(closure_0, { source: constants2.ACTIVITY_INVITE, targetApplicationId });
      };
    }
  }
  if (dependencyMap.isPrivate()) {
    onPress = function onPress() {
      return openGroupDMAddMembersDefault(dependencyMap.id, constants.CHANNEL_CALL);
    };
  }
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.VINpSK);
  obj.icon = _modDef10255;
  obj.onPress = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  _require = arg0;
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.X8bCMe);
  obj.icon = _modDef13219;
  obj.onPress = function onPress() {
    closure_0();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  const obj = { label: null, icon: null, onPress: null };
  let intl = util.intl;
  obj.label = intl.string(util.t.iQzQs3);
  obj.icon = _modDef13219;
  obj.onPress = function onPress() {
    const items = [closure_1_7];
    const json = require("LogAggregator").stringify(items);
    if ("" === json) {
      const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = tmp(tmp2[4]).intl;
      obj2.content = intl.string(tmp(tmp2[4]).t["i+9VWy"]);
      require("ToastActionCreators").open(obj2);
      const obj4 = require("ToastActionCreators");
    } else {
      const obj3 = { message: json };
      tmp(tmp2[21]).showShareActionSheet(obj3, "Activity Logs");
      const tmpResult = tmp(tmp2[21]);
    }
  };
  return obj;
};

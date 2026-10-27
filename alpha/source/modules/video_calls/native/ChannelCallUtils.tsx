// Module ID: 18691
// Function ID: 18692
// Name: ChannelCallUtils
// Dependencies: [19, 7815, 1084, 21, 1125, 18692, 7491, 5211, 5711, 5910, 18689, 1999, 18693, 6646, 18694, 9050, 11295, 11644, 14636, 7, 5664, 8851, 2]
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 18691 (ChannelCallUtils)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1125 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5711 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5910 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6646 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9050 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11295 */;
import AssetRegistryDefault from "AssetRegistry" /* 11644 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14636 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 18692 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 18693 */;
import react from "react" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7815 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const asyncRequire = tmp(1999);
({ UserSettingsSections: closure_4, AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire, RPC_APPLICATION_LOGGING_CATEGORY: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let intl;
  let obj = {
    label: intl.string(intl2.t.dsXapM),
    icon: AssetRegistryDefault3,
    onPress() {
      const obj = require("openUserSettings");
      const obj2 = { screen: constants.VOICE };
      obj.openUserSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  };
  intl = intl2.intl;
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  let id;
  let intl;
  _require = arg0;
  let closure_1 = arg1;
  let obj = {
    label: intl.string(require("intl").t.hoZYAA),
    switchValue: !arg1,
    onPress() {
      const obj = ChannelRTCActionCreatorsDefault;
      const result = obj.toggleVoiceParticipantsHidden(id.id, !closure_1);
    }
  };
  intl = require("intl").intl;
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  importDefault = arg1;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let onConfirm;
      let type;
      const promise = asyncRequire(18689, dependencyMap.paths);
      return promise.then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 type={type} onConfirm={onConfirm} />;
        };
      });
    },
    isDismissable: false
  };
  obj.openLazy(obj2);
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  let intl;
  let closure_0 = arg1;
  const obj = {
    label: intl.string(intl2.t.MH8ESU),
    switchValue: !arg0,
    onPress() {
      closure_0();
    }
  };
  intl = intl2.intl;
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  let intl;
  _require = stream;
  let obj = {
    label: intl.string(require("intl").t.KHGhHf),
    icon: AssetRegistryDefault4,
    onPress() {
      const obj = StreamKeyUtils;
      const encodeStreamKeyResult = obj.encodeStreamKey(stream);
      let videoStats = StreamRTCConnectionStore.getVideoStats(encodeStreamKeyResult);
      const tmp2 = dependencyMap;
      if (videoStats == null) {
        videoStats = {};
      }
      const obj3 = { media_session_id: StreamRTCConnectionStore.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: StreamRTCConnectionStore.getRtcConnectionId(encodeStreamKeyResult), stream_region: StreamRTCConnectionStore.getRegion(encodeStreamKeyResult), max_viewers: StreamRTCConnectionStore.getMaxViewers(encodeStreamKeyResult) };
      const merged = Object.assign(videoStats);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp7 = asyncRequire(18694, tmp2.paths);
      openLazy(tmp7, "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj3 });
    }
  };
  intl = require("intl").intl;
  return obj;
};
export const invite = function invite(dependencyMap, stream, targetApplicationId) {
  let intl;
  let onPress;
  _require = dependencyMap;
  importDefault = stream;
  dependencyMap = targetApplicationId;
  if (null != stream) {
    onPress = function onPress() {
      const obj = instant_invite_InstantInviteUtils;
      const obj2 = { source: metroRequire.STREAM, stream };
      return obj.showInstantInviteActionSheet(dependencyMap, obj2);
    };
  } else {
    onPress = function onPress() {
      const obj = instant_invite_InstantInviteUtils;
      const obj2 = { source: metroRequire.VOICE_CHANNEL };
      return obj.showInstantInviteActionSheet(dependencyMap, obj2);
    };
    if (null != targetApplicationId) {
      onPress = function onPress() {
        const obj = instant_invite_InstantInviteUtils;
        const obj2 = { source: metroRequire.ACTIVITY_INVITE, targetApplicationId };
        return obj.showInstantInviteActionSheet(dependencyMap, obj2);
      };
    }
  }
  if (dependencyMap.isPrivate()) {
    onPress = function onPress() {
      return openGroupDMAddMembersDefault(dependencyMap.id, hasOwnProperty.CHANNEL_CALL);
    };
  }
  let obj = { label: intl.string(require("intl").t.VINpSK), icon: AssetRegistryDefault, onPress };
  intl = require("intl").intl;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  let closure_0;
  let intl;
  _require = arg0;
  let obj = {
    label: intl.string(require("intl").t.X8bCMe),
    icon: AssetRegistryDefault2,
    onPress() {
      closure_0();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  intl = require("intl").intl;
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  let intl;
  let obj = {
    label: intl.string(intl2.t.iQzQs3),
    icon: AssetRegistryDefault2,
    onPress() {
      let intl;
      const items = [closure_1_7];
      const obj = require("LogAggregator");
      const json = obj.stringify(items);
      if ("" === json) {
        const obj2 = { text: intl.string(require("intl").t["i+9VWy"]) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp(tmp2[4]).intl;
        open("EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", obj2);
      } else {
        const obj3 = { message: json };
        const tmpResult = require("showShareActionSheet");
        tmpResult.showShareActionSheet(obj3, "Activity Logs");
      }
    }
  };
  intl = intl2.intl;
  return obj;
};

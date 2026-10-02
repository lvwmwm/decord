// Module ID: 16997
// Function ID: 16998
// Name: ChannelCallUtils
// Dependencies: [19, 4876, 1086, 21, 1127, 16998, 6801, 4801, 5038, 5205, 16995, 1987, 16999, 4889, 17000, 9253, 10953, 9457, 12481, 7, 4531, 7813, 2]
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 16997 (ChannelCallUtils)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1127 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4889 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5038 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5205 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9253 */;
import AssetRegistryDefault from "AssetRegistry" /* 9457 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 10953 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12481 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 16998 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16999 */;
import react from "react" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4876 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const asyncRequire = tmp(1987);
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
      const promise = asyncRequire(16995, dependencyMap.paths);
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
      const tmp7 = asyncRequire(17000, tmp2.paths);
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
        const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: intl.string(require("intl").t["i+9VWy"]) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp(tmp2[4]).intl;
        open(obj2);
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

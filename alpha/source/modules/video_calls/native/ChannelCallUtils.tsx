// Module ID: 19335
// Function ID: 19336
// Name: ChannelCallUtils
// Dependencies: [19, 7885, 1072, 21, 1113, 19336, 7563, 5258, 5759, 5959, 19333, 1994, 19337, 6717, 19338, 9118, 11625, 11967, 8350, 7, 5712, 8931, 2]
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 19335 (ChannelCallUtils)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5759 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6717 */;
import AssetRegistryDefault from "AssetRegistry" /* 8350 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11625 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11967 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 19336 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19337 */;
import react from "react" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7885 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const asyncRequire = tmp(1994);
({ UserSettingsSections: closure_4, AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire, RPC_APPLICATION_LOGGING_CATEGORY: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export function voiceSettings() {
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
}
export function videoParticipantsHidden(arg0, arg1) {
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
}
export function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  importDefault = arg1;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let onConfirm;
      let type;
      const promise = asyncRequire(19333, dependencyMap.paths);
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
}
export function selfVideoHidden(arg0, arg1) {
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
}
export function reportStreamIssue(stream) {
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
      const tmp7 = asyncRequire(19338, tmp2.paths);
      openLazy(tmp7, "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj3 });
    }
  };
  intl = require("intl").intl;
  return obj;
}
export function invite(dependencyMap, stream, targetApplicationId) {
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
  let obj = { label: intl.string(require("intl").t.VINpSK), icon: AssetRegistryDefault2, onPress };
  intl = require("intl").intl;
  return obj;
}
export function rtcDebugPanel(arg0) {
  let closure_0;
  let intl;
  _require = arg0;
  let obj = {
    label: intl.string(require("intl").t.X8bCMe),
    icon: AssetRegistryDefault,
    onPress() {
      closure_0();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  intl = require("intl").intl;
  return obj;
}
export function shareActivityLogs() {
  let intl;
  let obj = {
    label: intl.string(intl2.t.iQzQs3),
    icon: AssetRegistryDefault,
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
}

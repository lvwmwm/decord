// Module ID: 4342
// Function ID: 38323
// Name: getVoiceChannelKeyByChannelId
// Dependencies: [5, 31, 3824, 4343, 1348, 3768, 1907, 1850, 653, 1197, 4345, 33, 4346, 4324, 10626, 1207, 4338, 10444, 1935, 5582, 5587, 4099, 12756, 4945, 4472, 1212, 4676, 3990, 12791, 4473, 8849, 3982, 6654, 2]
// Exports: handleJoinCall, handleRedesignGroupDMCall, handleRedesignJoinCall, handleStartCall, hideVoiceChannelActionSheet, isVoiceChannelModalKey, maybeShowAgeGateModal, navigateToVoiceChannel, openVoiceChannelActionSheet

// Module 4342 (getVoiceChannelKeyByChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { AgeGateSource } from "result";
import { NativePermissionTypes } from "NativePermissionStatus";
import { jsx } from "set";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function getVoiceChannelKeyByChannelId(id) {
  return "" + c17 + "-" + id;
}
function getVoiceChannelKey(id) {
  return getVoiceChannelKeyByChannelId(id);
}
function openChannelCallModal(channel) {
  let obj = require(4346) /* shouldAgeVerifyForAgeGate */;
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const result = importDefault(4324).rebuildRTCActiveChannels();
    const obj2 = importDefault(4324);
    if (obj3.isVoicePanelEnabled(channel)) {
      state = state.getState();
      state.openChannel(channel.id);
      const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
      obj = { channelId: channel.id };
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_OPEN, obj);
    } else {
      obj = { channel };
      const obj4 = importDefault(4338);
      obj4.pushLazy(require(1935) /* maybeLoadBundle */(10444, dependencyMap.paths), obj, getVoiceChannelKey(channel.id));
      const tmp8 = require(1935) /* maybeLoadBundle */(10444, dependencyMap.paths);
    }
    obj3 = require(10626) /* isVoicePanelEnabled */;
  }
}
function dismissVoiceChannelScreens(channel, onExited) {
  const tmp = getVoiceChannelKey(channel.id);
  importDefault(4338).popWithKey(tmp, onExited);
  if (key.getKey() === tmp) {
    importDefault(4099).hideActionSheet();
    const obj2 = importDefault(4099);
  }
}
function monkeyPatchCall() {
  return new Promise((arg0) => {
    const channel = outer1_7.getChannel(outer1_9.getVoiceChannelId());
    if (null != channel) {
      outer1_21(channel);
    }
    const voiceChannel = outer1_1(outer1_2[23]).selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
}
function showGuardCallAlert(arg0) {
  const _require = arg0;
  let obj = importDefault(4472);
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t["91WuJ9"]);
  const intl2 = _require(1212).intl;
  obj.body = intl2.string(_require(1212).t["Rs+Vk1"]);
  const intl3 = _require(1212).intl;
  obj.cancelText = intl3.string(_require(1212).t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    return callback();
  };
  obj.onCancel = closure_13;
  obj.show(obj);
}
function guardPrivateCallForChannel(id, arg1) {
  let closure_0 = arg1;
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null != channel) {
    if (channel.type !== constants.GUILD_VOICE) {
      if (null != id) {
        if (id.id !== channel.id) {
          showGuardCallAlert(callback(async () => {
            yield outer2_22();
            outer1_0();
          }));
        }
      }
    }
  }
  arg1();
}
function openGuildVoiceModal(channel, newestAnalyticsLocation) {
  const tmp = getVoiceChannelKey(channel.id);
  if (!obj.isModalOpen(tmp)) {
    openChannelCallModal(channel);
  }
}
({ ChannelTypes: closure_11, ComponentActions: closure_12, NOOP: closure_13 } = ME);
let c17 = "voice-channel";
let result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

export { getVoiceChannelKeyByChannelId };
export { getVoiceChannelKey };
export const isVoiceChannelModalKey = function isVoiceChannelModalKey(openModalKey) {
  return openModalKey.startsWith(c17);
};
export { openChannelCallModal };
export const maybeShowAgeGateModal = function maybeShowAgeGateModal(channelId) {
  if (obj.shouldShowAgeGateForChannelId(channelId)) {
    require(5582) /* runAfterInteractions */.runAfterInteractions(() => {
      outer1_0(outer1_2[20]).openAgeGateModal(outer1_14.NSFW_VOICE_CHANNEL);
    }, 150);
    const obj2 = require(5582) /* runAfterInteractions */;
  }
};
export const openVoiceChannelActionSheet = function openVoiceChannelActionSheet(outer1_0) {
  let obj = importDefault(4099);
  obj = { channel: outer1_0 };
  obj.openLazy(require(1935) /* maybeLoadBundle */(12756, dependencyMap.paths), getVoiceChannelKey(outer1_0.id), obj);
};
export const hideVoiceChannelActionSheet = function hideVoiceChannelActionSheet(id) {
  importDefault(4099).hideActionSheet(getVoiceChannelKey(id.id));
};
export { dismissVoiceChannelScreens };
export { monkeyPatchCall };
export { showGuardCallAlert };
export { guardPrivateCallForChannel };
export const handleJoinCall = function handleJoinCall(channel, flag) {
  let closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  async function _onConfirm() {
    if (outer2_1) {
      const obj = flag(_onConfirm[26]);
    }
    callback(_onConfirm[27]).dismissKeyboard();
    const obj2 = callback(_onConfirm[27]);
    const voiceChannel = flag(_onConfirm[23]).selectVoiceChannel(outer2_0.id, outer2_1);
  }
  guardPrivateCallForChannel(channel, function onConfirm() {
    return _onConfirm(...arguments);
  });
};
export const handleStartCall = function handleStartCall(channel, flag) {
  let closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  async function _onConfirm2() {
    if (outer2_1) {
      const obj = flag(_onConfirm2[26]);
    }
    callback(_onConfirm2[27]).dismissKeyboard();
    let isFriendResult = outer2_0.type !== outer3_11.DM;
    if (!isFriendResult) {
      isFriendResult = outer3_8.isFriend(outer2_0.getRecipientId());
    }
    let recipientId = null;
    if (!isFriendResult) {
      recipientId = outer2_0.getRecipientId();
    }
    const obj2 = callback(_onConfirm2[27]);
    if (isFriendResult) {
      isFriendResult = !outer2_0.isManaged();
    }
    flag(_onConfirm2[30]).call(outer2_0.id, outer2_1, isFriendResult, recipientId);
  }
  if (!(function guardAgainstCallingProvisionalAccount(isDM) {
    if (isDM.isDM()) {
      const user = outer1_10.getUser(isDM.getRecipientId());
      if (null != user) {
        if (user.isProvisional) {
          const lazyResult = outer1_4.lazy(() => callback(_onConfirm2[18])(_onConfirm2[28], _onConfirm2.paths));
          channel(_onConfirm2[29]).openAlert("ProvisionalAccountNocallAllowed", outer1_16(lazyResult, {}));
          return true;
        }
      }
    }
    return false;
  })(channel)) {
    guardPrivateCallForChannel(channel, function onConfirm() {
      return _onConfirm2(...arguments);
    });
  }
};
export const handleRedesignGroupDMCall = function handleRedesignGroupDMCall(id) {
  let flag = arg1;
  let closure_0 = id;
  if (arg1 === undefined) {
    flag = false;
  }
  async function _onConfirm3() {
    if (outer2_1) {
      const obj = flag(_onConfirm3[26]);
    }
    callback(_onConfirm3[27]).dismissKeyboard();
    const obj2 = callback(_onConfirm3[27]);
    flag(_onConfirm3[30]).call(outer2_0.id, outer2_1, true);
  }
  guardPrivateCallForChannel(id, function onConfirm() {
    return _onConfirm3(...arguments);
  });
};
export const handleRedesignJoinCall = function handleRedesignJoinCall(id) {
  let flag = arg1;
  let closure_0 = id;
  if (arg1 === undefined) {
    flag = false;
  }
  async function _onConfirm4() {
    if (outer2_1) {
      const obj = flag(_onConfirm4[26]);
    }
    callback(_onConfirm4[27]).dismissKeyboard();
    const obj2 = callback(_onConfirm4[27]);
    const voiceChannel = flag(_onConfirm4[23]).selectVoiceChannel(outer2_0.id, outer2_1);
  }
  guardPrivateCallForChannel(id, function onConfirm() {
    return _onConfirm4(...arguments);
  });
};
export { openGuildVoiceModal };
export const navigateToVoiceChannel = function navigateToVoiceChannel(channel, LiveActivity) {
  if (channel.isPrivate()) {
    openChannelCallModal(channel);
  } else if (channel.isGuildStageVoice()) {
    require(6654) /* openStageChannel */.openStageChannel(channel);
    const obj = require(6654) /* openStageChannel */;
  } else {
    openGuildVoiceModal(channel);
  }
};

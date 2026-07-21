// Module ID: 4337
// Function ID: 38271
// Name: getVoiceChannelKeyByChannelId
// Dependencies: []
// Exports: handleJoinCall, handleRedesignGroupDMCall, handleRedesignJoinCall, handleStartCall, hideVoiceChannelActionSheet, isVoiceChannelModalKey, maybeShowAgeGateModal, navigateToVoiceChannel, openVoiceChannelActionSheet

// Module 4337 (getVoiceChannelKeyByChannelId)
function getVoiceChannelKeyByChannelId(id) {
  return "" + closure_17 + "-" + id;
}
function getVoiceChannelKey(id) {
  return getVoiceChannelKeyByChannelId(id);
}
function openChannelCallModal(channel) {
  let obj = arg1(dependencyMap[12]);
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const result = importDefault(dependencyMap[13]).rebuildRTCActiveChannels();
    const obj2 = importDefault(dependencyMap[13]);
    if (obj3.isVoicePanelEnabled(channel)) {
      const state = state.getState();
      state.openChannel(channel.id);
      const ComponentDispatch = arg1(dependencyMap[15]).ComponentDispatch;
      obj = { channelId: channel.id };
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_OPEN, obj);
    } else {
      obj = { channel };
      const obj4 = importDefault(dependencyMap[16]);
      obj4.pushLazy(arg1(dependencyMap[18])(dependencyMap[17], dependencyMap.paths), obj, getVoiceChannelKey(channel.id));
      const tmp8 = arg1(dependencyMap[18])(dependencyMap[17], dependencyMap.paths);
    }
    const obj3 = arg1(dependencyMap[14]);
  }
}
function dismissVoiceChannelScreens(channel, onExited) {
  const tmp = getVoiceChannelKey(channel.id);
  importDefault(dependencyMap[16]).popWithKey(tmp, onExited);
  if (key.getKey() === tmp) {
    importDefault(dependencyMap[21]).hideActionSheet();
    const obj2 = importDefault(dependencyMap[21]);
  }
}
function monkeyPatchCall() {
  return new Promise((arg0) => {
    const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      callback2(channel);
    }
    const voiceChannel = callback(closure_2[23]).selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
}
function showGuardCallAlert(arg0) {
  const arg1 = arg0;
  let obj = importDefault(dependencyMap[24]);
  obj = {};
  const intl = arg1(dependencyMap[25]).intl;
  obj.title = intl.string(arg1(dependencyMap[25]).t.91WuJ9);
  const intl2 = arg1(dependencyMap[25]).intl;
  obj.body = intl2.string(arg1(dependencyMap[25]).t.Rs+Vk1);
  const intl3 = arg1(dependencyMap[25]).intl;
  obj.cancelText = intl3.string(arg1(dependencyMap[25]).t.ETE/oC);
  obj.onConfirm = function onConfirm() {
    return arg0();
  };
  obj.onCancel = closure_13;
  obj.show(obj);
}
function guardPrivateCallForChannel(id, arg1) {
  const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null != channel) {
    if (channel.type !== constants.GUILD_VOICE) {
      if (null != id) {
        if (id.id !== channel.id) {
          showGuardCallAlert(callback(async () => {
            yield closure_22();
            callback();
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ ChannelTypes: closure_11, ComponentActions: closure_12, NOOP: closure_13 } = arg1(dependencyMap[8]));
const AgeGateSource = arg1(dependencyMap[9]).AgeGateSource;
const NativePermissionTypes = arg1(dependencyMap[10]).NativePermissionTypes;
const jsx = arg1(dependencyMap[11]).jsx;
let closure_17 = "voice-channel";
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

export { getVoiceChannelKeyByChannelId };
export { getVoiceChannelKey };
export const isVoiceChannelModalKey = function isVoiceChannelModalKey(openModalKey) {
  return openModalKey.startsWith(closure_17);
};
export { openChannelCallModal };
export const maybeShowAgeGateModal = function maybeShowAgeGateModal(channelId) {
  if (obj.shouldShowAgeGateForChannelId(channelId)) {
    arg1(dependencyMap[19]).runAfterInteractions(() => {
      callback(closure_2[20]).openAgeGateModal(constants.NSFW_VOICE_CHANNEL);
    }, 150);
    const obj2 = arg1(dependencyMap[19]);
  }
};
export const openVoiceChannelActionSheet = function openVoiceChannelActionSheet(closure_0) {
  let obj = importDefault(dependencyMap[21]);
  obj = { channel: closure_0 };
  obj.openLazy(arg1(dependencyMap[18])(dependencyMap[22], dependencyMap.paths), getVoiceChannelKey(closure_0.id), obj);
};
export const hideVoiceChannelActionSheet = function hideVoiceChannelActionSheet(id) {
  importDefault(dependencyMap[21]).hideActionSheet(getVoiceChannelKey(id.id));
};
export { dismissVoiceChannelScreens };
export { monkeyPatchCall };
export { showGuardCallAlert };
export { guardPrivateCallForChannel };
export const handleJoinCall = function handleJoinCall(channel, flag) {
  flag = channel;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  async function _onConfirm() {
    if (callback) {
      const obj = callback(closure_2[26]);
    }
    lib(closure_2[27]).dismissKeyboard();
    const obj2 = lib(closure_2[27]);
    const voiceChannel = callback(closure_2[23]).selectVoiceChannel(lib.id, callback);
  }
  guardPrivateCallForChannel(channel, function onConfirm() {
    return _onConfirm(...arguments);
  });
};
export const handleStartCall = function handleStartCall(channel, flag) {
  flag = channel;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  async function _onConfirm2() {
    if (callback) {
      const obj = callback(closure_2[26]);
    }
    store(closure_2[27]).dismissKeyboard();
    let isFriendResult = store.type !== constants.DM;
    if (!isFriendResult) {
      isFriendResult = friend.isFriend(store.getRecipientId());
    }
    let recipientId = null;
    if (!isFriendResult) {
      recipientId = store.getRecipientId();
    }
    const obj2 = store(closure_2[27]);
    if (isFriendResult) {
      isFriendResult = !store.isManaged();
    }
    callback(closure_2[30]).call(store.id, callback, isFriendResult, recipientId);
  }
  if (!function guardAgainstCallingProvisionalAccount(isDM) {
    if (isDM.isDM()) {
      const user = user.getUser(isDM.getRecipientId());
      if (null != user) {
        if (user.isProvisional) {
          const lazyResult = React.lazy(() => callback(paths[18])(paths[28], paths.paths));
          isDM(_onConfirm2[29]).openAlert("ProvisionalAccountNocallAllowed", callback2(lazyResult, {}));
          return true;
        }
      }
    }
    return false;
  }(channel)) {
    guardPrivateCallForChannel(channel, function onConfirm() {
      return _onConfirm2(...arguments);
    });
  }
};
export const handleRedesignGroupDMCall = function handleRedesignGroupDMCall(id) {
  let flag = arg1;
  const arg1 = id;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  async function _onConfirm3() {
    if (callback) {
      const obj = callback(closure_2[26]);
    }
    lib(closure_2[27]).dismissKeyboard();
    const obj2 = lib(closure_2[27]);
    callback(closure_2[30]).call(lib.id, callback, true);
  }
  guardPrivateCallForChannel(id, function onConfirm() {
    return _onConfirm3(...arguments);
  });
};
export const handleRedesignJoinCall = function handleRedesignJoinCall(id) {
  let flag = arg1;
  const arg1 = id;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  async function _onConfirm4() {
    if (callback) {
      const obj = callback(closure_2[26]);
    }
    lib(closure_2[27]).dismissKeyboard();
    const obj2 = lib(closure_2[27]);
    const voiceChannel = callback(closure_2[23]).selectVoiceChannel(lib.id, callback);
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
    LiveActivity(dependencyMap[32]).openStageChannel(channel);
    const obj = LiveActivity(dependencyMap[32]);
  } else {
    openGuildVoiceModal(channel);
  }
};

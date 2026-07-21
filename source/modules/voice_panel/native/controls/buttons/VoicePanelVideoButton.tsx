// Module ID: 15739
// Function ID: 120263
// Name: VideoButtonRive
// Dependencies: []
// Exports: default

// Module 15739 (VideoButtonRive)
function VideoButtonRive(arg0) {
  let color;
  let isVideoEnabled;
  ({ isVideoEnabled, color } = arg0);
  let obj = { style: { areRequestOptionsEqual: 24, SMS_CODE_LENGTH: 24, getMaxListeners: null } };
  obj = { dataBinding: { fill: color, on: isVideoEnabled } };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj.defaultViewModelInstance = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp5(tmp6[19]).VideoIcon;
  } else {
    VideoSlashIcon = tmp5(tmp6[20]).VideoSlashIcon;
  }
  obj.fallback = <VideoSlashIcon color={color} />;
  obj.children = jsx(arg1(dependencyMap[18]).CameraRive, obj);
  return <View {...obj} />;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const channelId = React.useContext(importDefault(dependencyMap[8])).channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[9]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const importDefault = voicePanelButtonStyles;
  const items = [closure_7, closure_9, closure_6];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const channel = store.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = channelId(stateFromStores[11]);
        isPrivateResult = obj2.canStreamInChannel(channel, closure_7, closure_9, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  const dependencyMap = stateFromStores;
  const obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => videoEnabled.isVideoEnabled());
  const React = stateFromStores1;
  const items2 = [channelId, stateFromStores1, stateFromStores];
  const callback = React.useCallback(() => {
    function animateToggleVideo() {
      if (null != channel) {
        channel(closure_2[14]).handleToggleVideo(channel);
        const obj = channel(closure_2[14]);
      }
    }
    const voicePanelButtonStyles = animateToggleVideo;
    if (stateFromStores) {
      const channel = store.getChannel(channelId);
      const channelId = channel;
      if (null != channel) {
        if (!stateFromStores1) {
          if (reactingToThermalState.isReactingToThermalState()) {
            const result = channelId(stateFromStores[15]).openIgnoreThermalStateAlert(() => {
              animateToggleVideo();
            });
            const obj2 = channelId(stateFromStores[15]);
          }
        }
        animateToggleVideo();
      }
    } else {
      channelId(stateFromStores[12]).openAlert(channelId(stateFromStores[13]).VOICE_PANEL_NO_VIDEO_PERMS_KEY, callback(voicePanelButtonStyles(stateFromStores[13]), {}));
      const obj = channelId(stateFromStores[12]);
    }
  }, items2);
  obj = { onPress: callback, props };
  const obj3 = arg1(dependencyMap[10]);
  const tmp5 = jsx;
  const intl = arg1(dependencyMap[17]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[17]).t;
  if (stateFromStores1) {
    let stringResult = string(t.EnX2Jl);
  } else {
    stringResult = string(t.v8K+8W);
  }
  obj.accessibilityLabel = stringResult;
  obj.style = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  const items3 = [voicePanelButtonStyles.iconFill.color, voicePanelButtonStyles.iconFillSelected.color, stateFromStores1];
  obj.children = React.useMemo(() => {
    const obj = { isVideoEnabled: stateFromStores1 };
    if (stateFromStores1) {
      let color = tmp3.iconFillSelected.color;
    } else {
      color = tmp3.iconFill.color;
    }
    obj.color = color;
    return closure_10(closure_11, obj);
  }, items3);
  return tmp5(importDefault(dependencyMap[16]), obj);
};

// Module ID: 15873
// Function ID: 122644
// Name: VideoButtonRive
// Dependencies: [31, 27, 10539, 1348, 1838, 4177, 3758, 33, 10014, 15861, 566, 6967, 4472, 15874, 8836, 10556, 15862, 1212, 3842, 10159, 11969, 2]
// Exports: default

// Module 15873 (VideoButtonRive)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function VideoButtonRive(arg0) {
  let color;
  let isVideoEnabled;
  ({ isVideoEnabled, color } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" } };
  obj = { dataBinding: { fill: color, on: isVideoEnabled } };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj.defaultViewModelInstance = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp5(10159).VideoIcon;
  } else {
    VideoSlashIcon = tmp5(11969).VideoSlashIcon;
  }
  obj.fallback = <VideoSlashIcon color={color} />;
  obj.children = jsx(require(3842) /* ManaContext */.CameraRive, { dataBinding: { fill: color, on: isVideoEnabled } });
  return <View dataBinding={{ fill: color, on: isVideoEnabled }} />;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const channelId = stateFromStores1.useContext(voicePanelButtonStyles(stateFromStores[8])).channelId;
  let obj = channelId(stateFromStores[9]);
  voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [_createForOfIteratorHelperLoose, closure_9, closure_6];
  stateFromStores = channelId(stateFromStores[10]).useStateFromStores(items, () => {
    const channel = outer1_6.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = channelId(stateFromStores[11]);
        isPrivateResult = obj2.canStreamInChannel(channel, outer1_7, outer1_9, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj2 = channelId(stateFromStores[10]);
  const items1 = [closure_8];
  stateFromStores1 = channelId(stateFromStores[10]).useStateFromStores(items1, () => outer1_8.isVideoEnabled());
  const items2 = [channelId, stateFromStores1, stateFromStores];
  const callback = stateFromStores1.useCallback(() => {
    function animateToggleVideo() {
      if (null != channel) {
        channelId(stateFromStores[14]).handleToggleVideo(channel);
        const obj = channelId(stateFromStores[14]);
      }
    }
    if (stateFromStores) {
      channel = outer1_6.getChannel(channel);
      if (null != channel) {
        if (!stateFromStores1) {
          if (outer1_5.isReactingToThermalState()) {
            const result = channelId(stateFromStores[15]).openIgnoreThermalStateAlert(() => {
              animateToggleVideo();
            });
            const obj2 = channelId(stateFromStores[15]);
          }
        }
        animateToggleVideo();
      }
    } else {
      channelId(stateFromStores[12]).openAlert(channelId(stateFromStores[13]).VOICE_PANEL_NO_VIDEO_PERMS_KEY, outer1_10(voicePanelButtonStyles(stateFromStores[13]), {}));
      let obj = channelId(stateFromStores[12]);
    }
  }, items2);
  obj = { onPress: callback, props };
  const obj3 = channelId(stateFromStores[10]);
  const tmp5 = jsx;
  const intl = channelId(stateFromStores[17]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores[17]).t;
  if (stateFromStores1) {
    let stringResult = string(t.EnX2Jl);
  } else {
    stringResult = string(t["v8K+8W"]);
  }
  obj.accessibilityLabel = stringResult;
  obj.style = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  const items3 = [voicePanelButtonStyles.iconFill.color, voicePanelButtonStyles.iconFillSelected.color, stateFromStores1];
  obj.children = stateFromStores1.useMemo(() => {
    const obj = { isVideoEnabled: stateFromStores1 };
    if (stateFromStores1) {
      let color = tmp3.iconFillSelected.color;
    } else {
      color = tmp3.iconFill.color;
    }
    obj.color = color;
    return outer1_10(outer1_11, obj);
  }, items3);
  return tmp5(voicePanelButtonStyles(stateFromStores[16]), obj);
};

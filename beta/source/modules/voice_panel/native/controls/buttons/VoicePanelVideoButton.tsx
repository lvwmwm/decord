// Module ID: 19759
// Function ID: 19760
// Name: VoicePanelVideoButton
// Dependencies: [19, 17, 21, 11394, 19748, 19622, 19749, 1113, 14858, 5301, 11204, 15169, 2]
// Exports: default

// Module 19759 (VoicePanelVideoButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CameraRive2 from "CameraRive" /* 5301 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function VideoButtonRive(arg0) {
  let color;
  let isVideoEnabled;
  ({ isVideoEnabled, color } = arg0);
  let str = "CamOff";
  const CameraRive = CameraRive2.CameraRive;
  if (isVideoEnabled) {
    str = "CamOn";
  }
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp3(11204).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(15169).VideoSlashIcon;
  }
  return <tmp2 style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</tmp2>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let onPress;
  let props;
  let stringResult;
  let videoBlocked;
  let videoSupported;
  let wrapperSpecs;
  let isVideoEnabled;
  let color;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(color(11394)).channelId;
  const obj2 = isVideoEnabled(19748);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp5 = color(19622)(channelId, "VoicePanelVideoButton");
  isVideoEnabled = tmp5.isVideoEnabled;
  ({ videoSupported, videoBlocked, onPress } = tmp5);
  const obj = react;
  const tmp = color;
  if (videoSupported) {
    let color2;
    if (isVideoEnabled) {
      color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
    color = color2;
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
  }
  const items = [color, isVideoEnabled];
  let memo = obj.useMemo(() => <VideoButtonRive isVideoEnabled={isVideoEnabled} color={color} />, items);
  let tmp9 = !videoBlocked;
  tmp(19749);
  if (!videoBlocked) {
    tmp9 = !videoSupported;
  }
  const intl = tmp3(1113).intl;
  const string = intl.string;
  const t = tmp3(1113).t;
  if (isVideoEnabled) {
    stringResult = string(t.EnX2Jl);
  } else {
    stringResult = string(t["v8K+8W"]);
  }
  if (videoBlocked) {
    const obj3 = { color: voicePanelButtonStyles.iconFill.color };
    memo = tmp7(tmp3(14858).VideoDenyIcon, obj3);
  }
  return <tmpResult onPress={onPress} disabled={tmp9} props={props} accessibilityLabel={stringResult} style={isVideoEnabled ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg}>{memo}</tmpResult>;
};

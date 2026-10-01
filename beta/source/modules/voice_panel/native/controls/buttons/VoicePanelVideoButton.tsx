// Module ID: 17020
// Function ID: 17021
// Name: VoicePanelVideoButton
// Dependencies: [19, 17, 8844, 2045, 2067, 1993, 4469, 4861, 21, 11754, 17008, 504, 7139, 12837, 5205, 12839, 1115, 17021, 9097, 8863, 17009, 12857, 4622, 9569, 12620, 2]
// Exports: default

// Module 17020 (VoicePanelVideoButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import CameraRive2 from "CameraRive" /* 4622 */;
import Constants from "Constants" /* 4861 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 7139 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 8863 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 12839 */;
import VoicePanelNoVideoPermissionsAlert from "VoicePanelNoVideoPermissionsAlert" /* 17021 */;
import react from "react" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
const VoicePanelNoVideoPermissionsAlertDefault = VoicePanelNoVideoPermissionsAlert;

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
    let VideoSlashIcon = tmp3(9569).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(12620).VideoSlashIcon;
  }
  return <tmp2 style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</tmp2>;
}
const View = react_native.View;
const Features = Constants.Features;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let props;
  let stringResult;
  let tmp13;
  let wrapperSpecs;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let color;
  let obj = stateFromStores2;
  let tmp2 = stateFromStores1;
  ({ props, wrapperSpecs } = arg0);
  let tmp = stateFromStores;
  const channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[9])).channelId;
  let tmp3 = channelId;
  let obj2 = channelId(stateFromStores1[10]);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  let obj3 = channelId(stateFromStores1[11]);
  const items = [GuildStore, PermissionStore, ChannelStore];
  stateFromStores = obj3.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = StreamPermissionUtils;
        isPrivateResult = obj2.canStreamInChannel(channel, GuildStore, PermissionStore, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  const items1 = [MediaEngineStore];
  const obj4 = channelId(stateFromStores1[11]);
  stateFromStores1 = obj4.useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
  const items2 = [MediaEngineStore];
  const obj5 = channelId(stateFromStores1[11]);
  stateFromStores2 = obj5.useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
  const VideoGuardExperiment = channelId(stateFromStores1[13]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelVideoButton" }).videoEnabled;
  let closure_4 = tmp8;
  const items3 = [channelId, stateFromStores1, stateFromStores, stateFromStores2, tmp8];
  const callback = stateFromStores2.useCallback(() => {
    const tmp = closure_4;
    if (tmp) {
      const openAlert2 = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      VoicePanelVideoGuardErrorAlertDefault;
      const intl = intl2.intl;
      openAlert2(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, <tmp23 title={intl.string(intl2.t["8jSzSe"])} />);
    } else {
      const tmp2 = stateFromStores2;
      if (tmp2) {
        const tmp3 = stateFromStores;
        if (tmp3) {
          const channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            const tmp25 = stateFromStores1;
            if (!tmp25) {
              if (ChannelCallLifecycleStore.isReactingToThermalState()) {
                let obj = openIgnoreThermalStateAlert;
                const result = obj.openIgnoreThermalStateAlert(() => {
                  if (null != channel) {
                    const obj = channelId(stateFromStores1[18]);
                    obj.handleToggleVideo(tmp);
                  }
                });
              }
            }
            if (null != channel) {
              const obj3 = CallsUtils;
              obj3.handleToggleVideo(channel);
            }
          }
        } else {
          const openAlert = useAlertStore.openAlert;
          useAlertStore;
          openAlert(VoicePanelNoVideoPermissionsAlert.VOICE_PANEL_NO_VIDEO_PERMS_KEY, jsx(VoicePanelNoVideoPermissionsAlertDefault, {}));
        }
      }
    }
  }, items3);
  if (stateFromStores2) {
    let color2;
    if (stateFromStores1) {
      color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
    color = color2;
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
  }
  const items4 = [color, stateFromStores1];
  let memo = obj.useMemo(() => <VideoButtonRive isVideoEnabled={stateFromStores1} color={color} />, items4);
  const element = { onPress: callback, disabled: tmp13, props, accessibilityLabel: stringResult, style: stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg, children: memo };
  tmp13 = !tmp8;
  const tmpResult = tmp(tmp2[20]);
  if (videoEnabled) {
    tmp13 = !stateFromStores2;
  }
  let intl = tmp3(tmp2[16]).intl;
  const string = intl.string;
  const t = tmp3(tmp2[16]).t;
  if (stateFromStores1) {
    stringResult = string(t.EnX2Jl);
  } else {
    stringResult = string(t["v8K+8W"]);
  }
  if (!videoEnabled) {
    const obj6 = { color: voicePanelButtonStyles.iconFill.color };
    memo = tmp11(tmp3(tmp2[21]).VideoDenyIcon, obj6);
  }
  return jsx(tmpResult, element);
};
